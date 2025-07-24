import mongoose from "mongoose";

export async function resetDB() {
    const collections = (await mongoose.connection.db!.listCollections().toArray()).map(x => x.name);

    for (var i = 0; i < collections.length; i++) {
        try {
            await mongoose.connection.dropCollection(collections[i]);
        } catch(e){}
    }
}
