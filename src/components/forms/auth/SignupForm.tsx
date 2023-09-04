import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Label, Button, Password, Message, Checkbox } from '../../common';
import { useSignupMutation } from '../../../store/services/auth';
import { ROUTES } from '../../../constants';
import { useNavigate } from "react-router-dom";

type Inputs = {
  first_name: string,
  last_name: string,
  email: string
  password: string,
  marketing_notifications: boolean
};

export const SignupForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState<String[] | any>([]);
  const { handleSubmit, control, formState: { isDirty, isValid } } = useForm<Inputs>({
    defaultValues: {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    marketing_notifications: false
   }
  });

  const navigate = useNavigate();
  const [signup, { isSuccess, isLoading, isError, error }] = useSignupMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.DASHBOARD);
    }

    if (isError) {
      const errList = Object.values((error as any).data);
      setFormErrors(errList.flat(1));
    }
  }, [isLoading, isSuccess, isError, navigate, error]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => await signup(data);

  return <div className="">
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label label="First name" valueClassName="mb-8">
        <Controller
          name="first_name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input
            type="text"
            autoFocus
            {...field}
          />}
        />
      </Label>

      <Label label="Last name" valueClassName="mb-8">
        <Controller
          name="last_name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input
            type="text"
            {...field}
          />}
        />
      </Label>

      <Label label="Email" valueClassName="mb-8">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input
            type="email"
            {...field}
          />}
        />
      </Label>

      <Label label="Create password" valueClassName="mb-12">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Password
            {...field}
          />}
        />
      </Label>

      <div className="mb-12">
        <Controller
          name="marketing_notifications"
          control={control}
          render={({ field, field: { value } }) => <Checkbox {...field} checked={value}>
            Keep me in the loop with only the juiciest product updates
          </Checkbox>}
        />
      </div>

      {
        formErrors.map((err: string) => <Message type="error" text={err} key={err} className="mb-6" />)
      }
      
      <Button type="submit" variant={Button.variant.PRIMARY} className="w-full" disabled={!isDirty || !isValid} data-cy="sign-up-btn">Sign Up</Button>
    </form>
  </div>
};
