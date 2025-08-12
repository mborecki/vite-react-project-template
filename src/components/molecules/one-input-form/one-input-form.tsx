import { FieldError, Form, Input, TextField } from "react-aria-components";
import { Button } from "../../atoms/button/button";
import { Controller, useForm } from "react-hook-form";
import { useCallback } from "react";
import css from "./one-input-form.module.scss";

interface Props {
    onSubmit(value: string): void
}

interface FormData {
    value: string
}

export function OneInputForm({ onSubmit }: Props) {

    const { handleSubmit, control } = useForm<FormData>({
        defaultValues: {
            value: ''
        }
    });

    const _onSubmit = useCallback((data: FormData) => {
        if (data.value) {
            onSubmit(data.value);
        }
    }, [onSubmit])

    return <Form onSubmit={handleSubmit(_onSubmit)} className={css.container}>
        <Controller
            control={control}
            name="value"
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
                    aria-label="Nowy element"
                >
                    <Input ref={ref} />
                    <FieldError>{error?.message}</FieldError>
                </TextField>
            }}
        />
        <Button type="submit">Dodaj</Button>
    </Form>
}
