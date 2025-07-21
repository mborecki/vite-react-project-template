import {describe, test, expect} from 'vitest'

describe("Sanity test", () => {
    test('should pass', () => {
        expect(true).toBeTruthy();
    })

    test('should pass 2', () => {
        expect(false).toBeFalsy();
    })
})
