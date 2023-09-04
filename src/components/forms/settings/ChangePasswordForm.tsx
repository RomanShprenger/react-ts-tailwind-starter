import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Password, Label, Button, Message } from '../../common';

type Props = {
    submit: (data: Inputs) => void
    formErrors: String[] | any
};

type Inputs = {
    current_password: string,
    new_password: string
};

export const ChangePasswordForm: React.FC<Props> = (props) => {
    const { submit, formErrors } = props;
    const { handleSubmit, control, formState: { isDirty, isValid } } = useForm<Inputs>({
        defaultValues: {
            current_password: "",
            new_password: ""
        }
    });
   
    const onSubmit: SubmitHandler<Inputs> = (data) => submit(data);

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label label="Current password" valueClassName="mb-12">
                <Controller
                    name="current_password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Password
                        {...field}
                        autoFocus
                    />}
                />
            </Label>

            <Label label="New password" valueClassName="mb-12">
                <Controller
                    name="new_password"
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

            <Button type="submit" variant={Button.variant.PRIMARY} className="w-full" disabled={!isDirty || !isValid}>Change password</Button>
        </form>
    </>
};
