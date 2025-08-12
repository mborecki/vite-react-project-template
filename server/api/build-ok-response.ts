import type { APIResponse } from "@shared";

export function buildOKResponse<T = {}>(data?: T): APIResponse<T> {
    return {
        success: true,
        data
    }
}
