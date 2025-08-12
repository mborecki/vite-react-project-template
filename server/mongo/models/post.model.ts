import mongoose, { Schema, model, type HydratedDocument } from "mongoose"

interface TodoListItem {
    value: string
}

export type TodoListItemDoc = HydratedDocument<TodoListItem>

export const TodoListItemtSchema = new Schema<TodoListItem>({
    value: String
})

if (mongoose.models.Page) {
    mongoose.deleteModel('TodoListItem')
}

export const TodoListItemModel = model<TodoListItem>('TodoListItem', TodoListItemtSchema);
