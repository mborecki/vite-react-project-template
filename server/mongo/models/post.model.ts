import mongoose, { Schema, model, type HydratedDocument } from "mongoose"

interface Post {
    name: string
}

export type PostDoc = HydratedDocument<Post>

export const PostSchema = new Schema<Post>({
    name: String
})

if (mongoose.models.Page) {
    mongoose.deleteModel('Page')
}

export const PostModel = model<Post>('Post', PostSchema);
