import { beforeEach, describe, expect, test, vi } from "vitest";
import express from 'express';
import { APIRouter } from "./router.js";
import request from 'supertest';

import { getTodolist } from "../selectors/get-todolist.js";
import { addTodolistItem } from "../selectors/add-todolist-item.js";

vi.mock("../selectors/get-todolist.js", () => {
    return {
        getTodolist: vi.fn()
    }
})

vi.mock("../selectors/add-todolist-item.js", () => {
    return {
        addTodolistItem: vi.fn()
    }
})


describe('APIRouter', () => {

    beforeEach(() => {
        vi.mocked(getTodolist).mockClear();
    })

    const app = express();
    app.use(APIRouter);

    describe('GET /', () => {
        test('should return 200', async () => {
            const response = await request(app)
                .get('/')
                .expect(200);

            expect(response.text).toBe('Hello World!')
        })
    })


    describe('GET /todolist', () => {

        const data = ['foo 1', 'foo 2'];

        vi.mocked(getTodolist).mockReturnValue(Promise.resolve(data))

        test('should return 200', async () => {
            await request(app)
                .get('/todolist')
                .expect(200)
        })
    })

    describe('POST /todolist', () => {

        test('should call selector addTodolistItem', async () => {
            await request(app)
                .post('/todolist')
                .send({ value: 'foo' })
                .expect(200)

            expect(addTodolistItem).toBeCalledWith('foo');
        })
    })
})
