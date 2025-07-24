import Mongoose, { type ConnectOptions } from "mongoose";
import { CONFIG } from "../config.js";

const mongoUrl = CONFIG.MONGO_URL
export async function connectToMongo(url = mongoUrl) {
    if (!url) {
        throw new Error('No MONGO_URL');
    }
    return await connectUrl(url, {});
}

export async function connectUrl(url: string, params: ConnectOptions) {

    if(Mongoose.connection.readyState == 0) {
        const mongooseClient = await Mongoose.connect(url, params);
        mongooseClient.set('strictQuery', true);

        return mongooseClient;

    } else {
        return Mongoose
    }

}
