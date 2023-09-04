import React, { useState, useEffect } from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import { ROUTES } from "../../../constants";
import { useRecoveryConfirmMutation } from "../../../store/services/auth";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Password, Label, Button, Message } from '../../common';
import { toastSuccess } from "../../../utils/toasts";

type Inputs = {
  new_password: string
};

interface ActivationRequest {
  uid?: string,
  token?: string,
  new_password: string
}

export const ConfirmPassForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState<String[] | any>([]);
  const navigate = useNavigate();
  let { uid, token } = useParams();

  const { handleSubmit, control, formState: { isDirty, isValid } } = useForm<Inputs>({
    defaultValues: {
      new_password: ""
   }
  });

  const [recoveryConfirm, { isSuccess, isLoading, isError, error }] = useRecoveryConfirmMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data: ActivationRequest) => await recoveryConfirm({ uid, token, ...data });

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.AUTH_LOGIN);
      toastSuccess("Password updated");
    }

    if (isError) {
      const errList = Object.values((error as any).data);
      setFormErrors(errList.flat(1));
    }
  }, [isSuccess, isLoading, isError, navigate, error]);

  return <div className="w-full">
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label label="New password" valueClassName="mb-12">
        <Controller
          name="new_password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Password
            autoFocus
            {...field}
          />}
        />
      </Label>

      {
        formErrors.map((err: string) => <Message type="error" text={err} key={err} className="mb-6" />)
      }

      <Button type="submit" variant={Button.variant.PRIMARY} className="w-full mb-6" disabled={!isDirty || !isValid}>Update password</Button>
    </form>
  </div>
};
