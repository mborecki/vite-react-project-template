import { axiosClient } from "../client";
import { NetworkAPI } from "../api";

export function getPost(id: string) {
    return axiosClient
        .get(NetworkAPI.getPost(id))
        .then(response => {
            return response.data
        })
}
