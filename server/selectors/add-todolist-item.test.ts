import { afterEach, describe, expect, test } from "vitest";
import { resetDB } from "../.test-utils/reset-db.js";
import { TodoListItemModel } from "../mongo/models/post.model.js";
import { addTodolistItem } from "./add-todolist-item.js";

describe('addTodolistItem()', () => {
    afterEach(async () => {
        await resetDB();
    });

    test("should add item to database", async () => {
        await addTodolistItem('foo');

        expect(TodoListItemModel.countDocuments().exec()).resolves.toBe(1);
    })
});
