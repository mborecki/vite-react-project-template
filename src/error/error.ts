import type { APIError } from "@shared";

export class AppError extends Error {

    static fromAPIError(error: APIError) {
        return new AppError(error.message, AppErrorType.api)
    }

    type: AppErrorType;
    code: number

    constructor(message: string, type: AppErrorType) {
        super(message);

        this.type = type;
        this.code = AppErrorCodes[type] ?? AppErrorCodes.unknown;
    }
}

export const AppErrorType = {
    unknown: 'unknown',
    api: 'api'
} as const;
export type AppErrorType = typeof AppErrorType[keyof typeof AppErrorType];

const AppErrorCodes: {[key in AppErrorType]: number} = {
    unknown: 1,
    api: 2000
}
