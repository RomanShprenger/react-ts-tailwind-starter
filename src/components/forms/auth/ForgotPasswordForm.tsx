import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Label, Button, Message } from '../../common';
import { useRecoveryMutation } from "../../../store/services/auth";

type Inputs = {
  email: string
};

export const ForgotPasswordForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState<String[] | any>([]);

  const [recovery, { isSuccess, isLoading, isError, error }] = useRecoveryMutation();

  const { handleSubmit, control, formState: { isDirty, isValid } } = useForm<Inputs>({
    defaultValues: {
     email: ""
   }
  });

  useEffect(() => {
    if (isError) {
      const errList = Object.values((error as any).data);
      setFormErrors(errList.flat(1));
    }
  }, [isLoading, isError, error]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => await recovery(data);

  return <div className="">
    {
      isSuccess ? (
        <Message
          type="success"
          heading="We’ve sent you a recovery link"
          text="Please check your email"
          className="mb-6"
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label label="Email" valueClassName="mb-12">
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              }}
              render={({ field }) => <Input
                type="email"
                autoFocus
                {...field}
              />}
            />
          </Label>

          {
            formErrors.map((err: string) => <Message type="error" text={err} key={err} className="mb-6" />)
          }

          <Button type="submit" data-cy="send-recovery-link-btn" variant={Button.variant.PRIMARY} className="w-full mb-6" disabled={!isDirty || !isValid}>Send recovery link</Button>
        </form>
      )
    }
  </div>
};
