import { axiosClient } from "../client";
import { NetworkAPI } from "../api";
import { type GetPostResponse } from "@shared"
import { AppError } from "@/error/error";

export function getPost(id: string) {
    return axiosClient
        .get<GetPostResponse>(NetworkAPI.getPost(id))
        .then(response => {
            return response.data
        })
        .then(response => {
            console.log(response)
            if (response.success) {
                return response.data
            } else {
                throw AppError.fromAPIError(response.error);
            }
        })
        .catch((e) => {
            throw new AppError(e.message)
        })
}
