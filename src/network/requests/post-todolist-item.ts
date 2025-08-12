import { NetworkAPI } from "../api";
import { axiosClient } from "../client";

export async function postTodolistItem(value: string): Promise<never> {
    return axiosClient
        .post(NetworkAPI.postTodolistItem(), {value})
}
