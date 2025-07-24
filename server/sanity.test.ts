import {describe, test, expect, beforeAll, afterAll} from 'vitest'
import { Db, MongoClient, ObjectId } from 'mongodb';
import Mongoose, { model, Schema } from 'mongoose';

describe("Sanity test", () => {
    test('should pass', () => {
        expect(true).toBeTruthy();
    })

    test('should pass 2', () => {
        expect(false).toBeFalsy();
    })
})

describe('Sanity DB test check', () => {
    let connection: MongoClient;
    let db: Db;

    beforeAll(async () => {
        //@ts-expect-error
        const url: string = globalThis.__MONGO_URI__
        connection = await MongoClient.connect(url, {});
        db = await connection.db();
    });

    afterAll(async () => {
        await connection.close();
    });

    test('should insert a doc into collection', async () => {
        const users = db.collection('testUsers');

        const newId = new ObjectId()
        const mockUser = { _id: newId, name: 'John' };
        await users.insertOne(mockUser);

        const insertedUser = await users.findOne({ _id: newId });
        expect(insertedUser).toEqual(mockUser);
    });
});

interface TestDoc {
    title: string;
}


const TextDocSchema = new Schema<TestDoc>({
    title: String
});

const TestDocModel = model<TestDoc>('TestDoc', TextDocSchema);



describe('Sanity Mongoose test check', () => {
    let connection: Mongoose.Mongoose;

    beforeAll(async () => {
        //@ts-expect-error
        const url: string = globalThis.__MONGO_URI__
        connection = await Mongoose.connect(url);
    });

    afterAll(async () => {
        await connection.disconnect();
    });

    test('should can use mongoose models', async () => {
        await TestDocModel.create({ title: 'test-doc' });

        const insertedPerson = await TestDocModel.findOne({}).exec();
        expect(insertedPerson?.title).toBe('test-doc');
    });
});
