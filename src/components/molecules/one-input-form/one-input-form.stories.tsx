import type { Meta, StoryObj } from "@storybook/react-vite";
import { OneInputForm } from "./one-input-form";
import { fn } from 'storybook/test';

const meta = {
    title: 'Molecules/OneInputForm',
    component: OneInputForm,
    args: {
        onSubmit: fn()
    }
} satisfies Meta<typeof OneInputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
}
