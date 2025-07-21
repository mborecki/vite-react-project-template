import type { Meta, StoryObj } from "@storybook/react-vite";
import { NameForm } from "./name-form";
import { expect, fn } from 'storybook/test';

const meta = {
    title: 'Widgets/Name Form',
    component: NameForm,
    args: {
        onSubmit: fn()
    }
} satisfies Meta<typeof NameForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    play: async ({args, canvas, userEvent}) => {
        const input = canvas.getByLabelText('Name');

        expect(input).toBeDefined();

        const button = canvas.getByRole('button');

        expect(button).toBeDefined();

        await userEvent.type(input, 'FooBar');
        await userEvent.click(button);

        await expect(args.onSubmit).toHaveBeenCalledOnce();
        await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
            name: 'FooBar'
        }))
    }
}
