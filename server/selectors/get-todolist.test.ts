import { afterEach, describe, expect, test } from "vitest";
import { resetDB } from "../.test-utils/reset-db.js";
import { TodoListItemModel } from "../mongo/models/post.model.js";
import { getTodolist } from "./get-todolist.js";

describe('getTodolist()', () => {
    afterEach(async () => {
        await resetDB();
    });

    test("should return list from database", async () => {
        const i1 = new TodoListItemModel({value: 'foo 1'});
        const i2 = new TodoListItemModel({value: 'foo 2'});
        const i3 = new TodoListItemModel({value: 'foo 3'});

        await i1.save();
        await i2.save();
        await i3.save();

        const result = await getTodolist();

        expect(result.length).toBe(3);
    })
});
