export type APIResponse<T> = {
    success: true,
    data?: T,
} | {
    success: false,
    error: APIError
}

export type APIError = {
    message: string,
    code: number,
    type: APIErrorType
}

export const APIErrorType = {
    unknown: 'unknown'
} as const;
export type APIErrorType = typeof APIErrorType[keyof typeof APIErrorType];
