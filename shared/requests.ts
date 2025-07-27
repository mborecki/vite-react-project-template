import { type APIResponse } from "./api.js";

export type GetPostResponse = APIResponse<APIPost>;
export type APIPost = {
    name: string
}
