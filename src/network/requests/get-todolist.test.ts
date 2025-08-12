import { mswServer } from "@/.test-utils/msw";
import { http, HttpResponse } from "msw";
import { describe, expect, test } from "vitest";
import { NetworkAPI } from "../api";
import { getTodolist } from "./get-todolist";

describe('getTodolist()', () => {
    test('should return list from GET /todolist', async () => {

        const data = [
            'foo 1',
            'f00 2'
        ]

        mswServer.use(
            http.get(`http://localhost${NetworkAPI.getTodolist()}`, () => {
                return HttpResponse.json({
                    success: true,
                    data
                });
            })
        );

        const result = getTodolist();

        await expect(result).resolves.toMatchObject(data)
    })
})
