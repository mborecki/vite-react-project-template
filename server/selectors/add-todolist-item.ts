import { connectToMongo } from "../mongo/connect-to-mongo.js";
import { TodoListItemModel } from "../mongo/models/post.model.js";

export async function addTodolistItem(value: string) {
    await connectToMongo();
    const newItem = new TodoListItemModel({value});
    await newItem.save();
}
