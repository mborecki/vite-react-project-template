import type { Meta, StoryObj } from "@storybook/react-vite";
import { TodoList } from "./todolist";

const meta = {
    title: 'Organisms/TodoList',
    component: TodoList,
} satisfies Meta<typeof TodoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {}
