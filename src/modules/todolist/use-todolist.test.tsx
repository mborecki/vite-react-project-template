import type { PropsWithChildren } from "react";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTodolist } from "./use-todolist";
import { renderHook, waitFor } from "@testing-library/react";
import { getTodolist } from '@/network/requests/get-todolist';
import { postTodolistItem } from "@/network/requests/post-todolist-item";

vi.mock('@/network/requests/get-todolist', () => {
    return {
        getTodolist: vi.fn(() => {
            console.log('getTodolist')
            return [];
        })
    }
});

vi.mock('@/network/requests/post-todolist-item', () => {
    return {
        postTodolistItem: vi.fn(async () => {
            console.log('postTodolistItem')

        })
    }
});

describe.only('useTodolist', () => {
    beforeEach(() => {
        vi.mocked(getTodolist).mockClear();
        vi.mocked(postTodolistItem).mockClear();
    });
    test('should use getTodolist()', async () => {
        const queryClient = new QueryClient()
        const wrapper = ({ children }: PropsWithChildren) => (
            <QueryClientProvider client={queryClient} > {children} </QueryClientProvider>
        )
        renderHook(() => useTodolist(), { wrapper });

        await waitFor(() => {
            expect(getTodolist).toBeCalledTimes(1);
        }, { timeout: 1000 });
    })

    describe('addItem', () => {

        test('should use postTodolistItem', async () => {
            const queryClient = new QueryClient()
            const wrapper = ({ children }: PropsWithChildren) => (
                <QueryClientProvider client={queryClient} > {children} </QueryClientProvider>
            )
            const { result } = renderHook(() => useTodolist(), { wrapper });
            const { addItem } = result.current;

            await addItem('test item');

            await waitFor(() => {
                expect(postTodolistItem).toBeCalledWith('test item');
                expect(getTodolist).toBeCalledTimes(2);
            }, { timeout: 1000 });
        });
    })
})
