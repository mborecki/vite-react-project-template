import { json, Router, type Request, type Response } from "express";
import { addPost } from "../selectors/add-post.js";
import { type APIError, type APIResponse } from "@shared";

export const APIRouter = Router();

APIRouter.use(json());

APIRouter.get('/', async (_req: Request, res: Response) => {
    res.send('Hello World!');
})

APIRouter.post('/post', async (_req: Request, res: Response) => {
    console.log('/post');
    await addPost(`Post: ${Math.random()}`);

    res.send(buildOKResponse());
})

function buildOKResponse<T = {}>(data?: T): APIResponse<T> {
    return {
        success: true,
        data
    }
}

function _buildErrorResponse(error: APIError): APIResponse<never> {
    return {
        success: false,
        error: {
            ...error,
            message: error.message
        }
    }
}
