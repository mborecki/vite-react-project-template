// vitest.setup.js
import { beforeAll, afterEach, afterAll } from 'vitest'
import { mswServer } from '../src/.test-utils/msw'
import { cleanup } from '@testing-library/react'

beforeAll(() => mswServer.listen())
afterEach(() => {
    cleanup();
    mswServer.resetHandlers();
})
afterAll(() => mswServer.close())
