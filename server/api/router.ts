import { json, Router, type Request, type Response } from "express";
import { addPost } from "../selectors/add-post.js";

export const APIRouter = Router();

APIRouter.use(json());

APIRouter.get('/', async (_req: Request, res: Response) => {
    res.send('Hello World!');
})

APIRouter.post('/post', async (_req: Request, res: Response) => {
    console.log('/post');
    await addPost(`Post: ${Math.random()}`);

    res.sendStatus(200);
})
