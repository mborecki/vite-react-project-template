import { test, describe, expect, beforeEach } from "vitest";
import { mswServer } from '@/.test-utils/msw';
import { http, HttpResponse } from "msw";
import { NetworkAPI } from "../api";
import { postTodolistItem } from "./post-todolist-item";

describe('postTodolistItem()', () => {
    beforeEach(() => {

        mswServer.use(
            http.post<never, { value: string }>(`http://localhost${NetworkAPI.postTodolistItem()}`, async ({ request }) => {
                const body = await request.json();
                if (body.value) {
                    return new HttpResponse(null, { status: 200 });
                }

                return new HttpResponse(null, { status: 400 });
            })
        )
    });

    test('should resolve after sending POST /todolist with value', async () => {

        const result = postTodolistItem('new item');

        await expect(result).resolves.toBeDefined();
    });

    test('should throw after sending POST /todolist with empty value', async () => {

        const result = postTodolistItem('');

        await expect(result).rejects.toBeDefined();
    });
});
