import { axiosClient } from "../client";
import { NetworkAPI } from "../api";
import { type GetPostResponse } from "@shared"

export function getPost(id: string) {
    return axiosClient
        .get<GetPostResponse>(NetworkAPI.getPost(id))
        .then(response => {
            return response.data
        })
        .then(response => {
            if (response.success) {
                return response.data
            } else {
                throw new Error(response.error.message);
            }
        })
}
