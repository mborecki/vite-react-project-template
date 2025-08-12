import type { APIError, APIResponse } from "@shared";

export function buildErrorResponse(error: APIError): APIResponse<never> {
    return {
        success: false,
        error: {
            ...error,
            message: error.message
        }
    }
}
