import { PostModel } from "../mongo/models/post.model.js";
import { connectToMongo } from '../mongo/connect-to-mongo.js';


export async function addPost(name: string) {
    await connectToMongo();
    await PostModel.create({ name });
}
