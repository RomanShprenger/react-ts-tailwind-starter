import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Label, Button, Password, Message } from '../../common';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import { useLoginMutation } from "../../../store/services/auth";

type Inputs = {
  email: string,
  password: string,
};

export const LoginForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState<String[] | any>([]);
  const [formData, setFormData] = useState<Inputs>({
    email: "",
    password: ""
  })
  const navigate = useNavigate();

  const [login, { data, isSuccess, isLoading, isError, error }] = useLoginMutation();

  const { handleSubmit, control, formState: { isDirty, isValid } } = useForm<Inputs>({
    defaultValues: {
     email: "",
     password: "",
   }
  });

  useEffect(() => {
    if (isSuccess && data) {
      navigate(ROUTES.DASHBOARD);
    }

    if (isError) {
      const errList = Object.values((error as any).data);
      setFormErrors(errList.flat(1));
    }
  }, [isLoading, isSuccess, isError, navigate, error, data, formData]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFormData(data);
    await login(data);
  }

  return <div className="">
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label label="Email" valueClassName="mb-8">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input
            type="email"
            autoFocus
            {...field}
          />}
        />
      </Label>

      <Label label="Password" valueClassName="mb-12">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Password
            {...field}
          />}
        />
      </Label>

      {
        formErrors.map((err: string) => <Message type="error" text={err} key={err} className="mb-6" />)
      }

      <Button type="submit" data-cy="login-btn" variant={Button.variant.PRIMARY} className="w-full mb-6" disabled={!isDirty || !isValid}>Log In</Button>
      <Button variant={Button.variant.TERTIARY} className="w-full" onClick={() => navigate(ROUTES.AUTH_RECOVERY)} data-cy="forgot-password-btn">Forgot password</Button>
    </form>
  </div>
};
