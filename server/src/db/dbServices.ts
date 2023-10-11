import { client } from '../db/client';
import { ObjectId } from 'mongodb';
import type { Example } from '../types/Example';

// Example database / collection data
const EXAMPLE_DATABASE = 'example';
const EXAMPLE_COLLECTION_NAME = 'messages';

/** Get all messages service */
export const getAllMessages = async (): Promise<Example[]> => {
  let messages = [];

  try {
    await client.connect();
    const database = client.db(EXAMPLE_DATABASE);
    const collection = database.collection(EXAMPLE_COLLECTION_NAME);
    const cursor = collection.find();
    const result = await cursor.toArray();

    messages = result.map((message) => ({
      id: (message._id as ObjectId).toHexString(),
      msg: message.msg,
    }));
  } finally {
    await client.close();
  }

  return messages;
};
