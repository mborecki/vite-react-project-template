import type { Meta, StoryObj } from "@storybook/react-vite";
import { OneInputForm } from "./one-input-form";
import { expect } from 'storybook/test';

const meta = {
    title: 'Molecules/OneInputForm',
    component: OneInputForm,
} satisfies Meta<typeof OneInputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    play({canvas}) {
        const input = canvas.getByRole('textbox', {name: 'Nowy element'})

        expect(input).toBeDefined();
    }
}
