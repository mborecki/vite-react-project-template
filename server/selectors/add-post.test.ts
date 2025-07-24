import { describe, expect, test } from "vitest";
import { addPost } from './add-post.js';
import { afterEach } from "node:test";
import { resetDB } from "../.test-utils/reset-db.js";
import { PostModel } from "../mongo/models/post.model.js";

describe('addPost', async () => {
    afterEach(() => {
        resetDB();
    })

    test('should add post', async () => {
        await addPost('Post name')

        const count = await PostModel.countDocuments({}).exec()

        expect(count).toBe(1);
    });
})
