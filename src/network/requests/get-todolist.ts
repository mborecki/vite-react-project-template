import type { GetTodolistResponse } from "@shared";
import { NetworkAPI } from "../api";
import { axiosClient } from "../client";
import { AppError } from "@/error/error";

export function getTodolist(): Promise<string[]>  {
    return axiosClient.get<GetTodolistResponse>(NetworkAPI.getTodolist())
        .then(response => {
            return response.data
        })
        .then(response => {
            if (response.success) {
                return response.data ?? []
            } else {
                throw AppError.fromAPIError(response.error);
            }
        });
}
