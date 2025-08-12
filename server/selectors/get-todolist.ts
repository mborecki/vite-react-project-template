import { connectToMongo } from "../mongo/connect-to-mongo.js";
import { TodoListItemModel } from "../mongo/models/post.model.js";

export async function getTodolist(): Promise<string[]> {
    await connectToMongo();
    const list = await TodoListItemModel.find({}).exec()
    return list.map(i => i.value);
}
