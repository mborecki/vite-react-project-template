import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

import { expect, fn } from 'storybook/test';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        children: 'Zapisz'
    },
    play: async ({args, canvas, userEvent}) => {
        const button = canvas.getByRole('button');

        await userEvent.click(button);

        await expect(args.onClick).toHaveBeenCalled();
    }
}
