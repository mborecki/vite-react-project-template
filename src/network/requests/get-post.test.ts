import { describe, expect, test } from "vitest";
import { http, HttpResponse } from "msw";
import { NetworkAPI } from "../api";
import { getPost } from "./get-post";
import { mswServer } from '@/.test-utils/msw';

describe('getPost()', () => {
    test(`should return server response (${NetworkAPI.getPost()})`, async () => {
        mswServer.use(
            http.get('http://localhost' + NetworkAPI.getPost(), ({ request, params }) => {
                console.log(request.method, request.url)
                return HttpResponse.json({
                    id: params.id
                });
            })
        )

        const response = await getPost('abc');

        expect(response).toMatchObject({ id: 'abc' });
    })
})
