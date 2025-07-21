import { describe, expect, test } from "vitest";
import { renderHook, waitFor } from '@testing-library/react'
import { usePost } from "./use-post";
import { mswServer } from "@/.test-utils/msw";
import { NetworkAPI } from "@/network/api";
import { http, HttpResponse } from "msw";
import type { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe('usePost', () => {
    test('should fetch and return post object', async () => {
        mswServer.use(
            http.get('http://localhost' + NetworkAPI.getPost(), ({ request, params }) => {
                console.log(request.method, request.url)
                return HttpResponse.json({
                    id: params.id
                });
            })
        )

        const queryClient = new QueryClient()
        const wrapper = ({ children }: PropsWithChildren) => (
            <QueryClientProvider client={queryClient} > {children} </QueryClientProvider>
        )
        const { result } = renderHook(() => usePost('abc'), { wrapper });

        await waitFor(() => {
            expect(result.current.post).toMatchObject({ id: 'abc' });
        }, { timeout: 1000 })
    })
})
