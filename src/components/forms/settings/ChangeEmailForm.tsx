import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Password, Label, Button, Message } from '../../common';

type Props = {
    submit: (data: Inputs) => void
    formErrors: String[] | any
};

type Inputs = {
    new_email: string,
    current_password: string
};

export const ChangeEmailForm: React.FC<Props> = (props) => {
    const { submit, formErrors } = props;
    const { handleSubmit, control, formState: { isDirty, isValid } } = useForm<Inputs>({
        defaultValues: {
            new_email: "",
            current_password: ""
        }
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => submit(data);

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label label="New Email" valueClassName="mb-12">
                <Controller
                    name="new_email"
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

            <Label label="Current password" valueClassName="mb-12">
                <Controller
                    name="current_password"
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

            <Button type="submit" variant={Button.variant.PRIMARY} className="w-full" disabled={!isDirty || !isValid}>Change email</Button>
        </form>
    </>
};
