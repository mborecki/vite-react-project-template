import { describe, expect, test } from "vitest";
import express from 'express';
import { APIRouter } from "./router.js";
import request from 'supertest';


describe('APIRouter', () => {
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
})
