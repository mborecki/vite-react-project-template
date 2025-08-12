import { getTodolist } from "@/network/requests/get-todolist";
import { postTodolistItem } from "@/network/requests/post-todolist-item";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface UseTodolistReturn {
    items: string[];
    addItem(value: string): void;
    isLoadingItems: boolean,
    isSendingItem: boolean
}

export function useTodolist(): UseTodolistReturn {
    const queryClient = useQueryClient()

    const {data, isLoading} = useQuery({
        queryKey: ['todolist'],
        queryFn: getTodolist,
    })

    const {mutate, isPending} = useMutation({
        mutationKey: ['addTodolist'],
        mutationFn: postTodolistItem,
        onSuccess() {
            queryClient.invalidateQueries({queryKey: ['todolist']})
        }
    });

    return {
        items: data ?? [],
        isLoadingItems: isLoading,
        addItem: mutate,
        isSendingItem: isPending
    }
}
