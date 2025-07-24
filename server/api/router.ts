import { json, Router, type Request, type Response } from "express";

export const APIRouter = Router();

APIRouter.use(json());

APIRouter.get('/', async (_req: Request, res: Response) => {
    res.send('Hello World!');
})
