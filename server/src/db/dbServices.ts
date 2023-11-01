import { client } from '../db/client';
import { ObjectId } from 'mongodb';
import type { Example } from '../types/Example';
import Invoice from '../models/Invoice';
import Item from '../models/Item';
import InvoiceMapper from '../mappers/InvoiceMapper';

// Example database / collection data
const EXAMPLE_DATABASE = 'example';
const EXAMPLE_COLLECTION_NAME = 'messages';

// Invoice database / collection data
const DATABASE_NAME = 'invoicedb';
const COLLECTION_NAME = 'invoices';

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


/** Get all invoices service */
export const getAllInvoices = async (): Promise<Invoice[]> => {
  let invoices: Invoice[] = [];

  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const collection = database.collection(COLLECTION_NAME);
    const cursor = collection.find();
    const result = await cursor.toArray();
    invoices = InvoiceMapper.mapArrayOfObjectsToInvoices(result);
  } finally {
    await client.close();
  }

  return invoices;
};
