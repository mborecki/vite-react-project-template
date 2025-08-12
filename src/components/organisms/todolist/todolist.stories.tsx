import type { Meta, StoryObj } from "@storybook/react-vite";
import { TodoList } from "./todolist";
import { NetworkAPI } from "@/network/api";
import { http, HttpResponse } from "msw";
import { action } from 'storybook/actions';

const onRequest = action('request');

const meta = {
    title: 'Organisms/TodoList',
    component: TodoList,
    parameters: {
        msw: {
            handlers: [
                http.post(`http://localhost${NetworkAPI.getTodolist()}`, async ({request}) => {
                    onRequest(request.method, request.url, JSON.stringify(await request.json()));
                    return new HttpResponse(null, {status: 200})
                })
            ]
        }
    }
} satisfies Meta<typeof TodoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    parameters: {
        msw: {
            handlers: [
                ...meta.parameters.msw.handlers,
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
