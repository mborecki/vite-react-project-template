import { FieldError, Form, Input, Label, TextField } from "react-aria-components";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../atoms/button/button";
import { useCallback } from "react";
import css from './name-form.module.scss';

interface FormData {
    name: string
}

interface Props {
    onSubmit(data: FormData): void
}

export function NameForm({ onSubmit }: Props) {

    const { handleSubmit, control } = useForm<FormData>({
        defaultValues: {
            name: ''
        }
    });

    const _onSubmit = useCallback((data: FormData) => {
        onSubmit(data);
    }, [onSubmit])

    return <Form onSubmit={handleSubmit(_onSubmit)} className={css.form}>
        <Controller
            control={control}
            name="name"
            render={({
                field: { name, value, onChange, onBlur, ref },
                fieldState: { invalid, error }
            }) => {
                return <TextField
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    isRequired
                    validationBehavior="aria"
                    isInvalid={invalid}
                >
                    <Label>Name</Label>
                    <Input ref={ref} />
                    <FieldError>{error?.message}</FieldError>
                </TextField>
            }}
        />
        <Button type="submit">Wyślij</Button>
    </Form>
}
