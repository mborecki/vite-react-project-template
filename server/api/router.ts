import { json, Router, type Request, type Response } from "express";
import { buildOKResponse } from "./build-ok-response.js";
import { getTodolist } from "../selectors/get-todolist.js";
import { addTodolistItem } from "../selectors/add-todolist-item.js";

export const APIRouter = Router();

APIRouter.use(json());

APIRouter.get('/', async (_req: Request, res: Response) => {
    res.send('Hello World!');
})

APIRouter.get('/todolist', async (_req: Request, res: Response) => {
    const data = await getTodolist();
    res.send(buildOKResponse(data));
})

APIRouter.post('/todolist', async (req: Request, res: Response) => {
    const {value} = req.body;

    await addTodolistItem(value);

    res.send(buildOKResponse());
})




