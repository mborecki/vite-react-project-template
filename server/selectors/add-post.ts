import { PostModel } from "../mongo/models/post.model.js";

export async function addPost(name: string) {
    await PostModel.create({name});
}
