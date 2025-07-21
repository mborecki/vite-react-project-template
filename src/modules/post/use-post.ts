import { getPost } from "@/network/requests/get-post";
import { useQuery } from "@tanstack/react-query";

export function usePost(id: string) {
    const { data, isFetching, isFetched } = useQuery({
        queryKey: ['post', id],
        queryFn: () => {
            return getPost(id);
        },
    })

    return {
        post: data,
        isFetching,
        isFetched
    }
}
