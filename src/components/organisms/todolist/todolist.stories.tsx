import type { Meta, StoryObj } from "@storybook/react-vite";
import { TodoList } from "./todolist";
import { NetworkAPI } from "@/network/api";
import { http, HttpResponse } from "msw";
import { data } from "react-router";

const meta = {
    title: 'Organisms/TodoList',
    component: TodoList,
} satisfies Meta<typeof TodoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(`http://localhost${NetworkAPI.getTodolist()}`, () => {
                    return HttpResponse.json({
                        success: true,
                        data: [
                            'foo 1', 'foo 2'
                        ]
                    });
                })
            ]
        }
    }
}
