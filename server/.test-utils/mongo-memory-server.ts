import { afterAll, beforeAll } from "vitest";
import { setup, teardown } from "vitest-mongodb";
import { connectToMongo } from '../mongo/connect-to-mongo.js';

beforeAll(async () => {
  await setup();
  connectToMongo(globalThis.__MONGO_URI__!)
});

afterAll(async () => {
  await teardown();
});
