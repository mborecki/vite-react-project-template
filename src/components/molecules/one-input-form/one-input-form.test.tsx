import { describe, expect, test, vi } from "vitest";
import { OneInputForm } from "./one-input-form";
import { render, screen } from '@testing-library/react';
import { userEvent } from "@testing-library/user-event";

describe('<OneInputForm>', () => {
    test('should contain input', async () => {
        render(<OneInputForm onSubmit={() => { }} />);

        const input = screen.queryByRole('textbox', { name: 'Nowy element' });
        expect(input).not.toBeNull();
    })

    test('should contain button', async () => {
        render(<OneInputForm onSubmit={() => { }} />);

        const button = screen.queryByRole('button', { name: 'Dodaj' });
        expect(button).not.toBeNull();
    });

    describe('onSubmit', () => {
        test('should be called with input value',async  () => {
            const onSubmit = vi.fn();
            render(<OneInputForm onSubmit={onSubmit} />);

            const input = screen.getByRole('textbox', { name: 'Nowy element' });
            const button = screen.getByRole('button', { name: 'Dodaj' });

            const user = userEvent.setup();
            await user.type(input, "input value");
            await user.click(button);

            expect(onSubmit).toBeCalledWith('input value')

        })
        test('should not be called if input is empty',async  () => {
            const onSubmit = vi.fn();
            render(<OneInputForm onSubmit={onSubmit} />);

            const button = screen.getByRole('button', { name: 'Dodaj' });

            const user = userEvent.setup();
            await user.click(button);

            expect(onSubmit).not.toBeCalled();

        })
    });
})
