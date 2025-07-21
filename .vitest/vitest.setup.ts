// vitest.setup.js
import { beforeAll, afterEach, afterAll } from 'vitest'
import { mswServer } from '../src/.test-utils/msw'

beforeAll(() => mswServer.listen())
afterEach(() => mswServer.resetHandlers())
afterAll(() => mswServer.close())
