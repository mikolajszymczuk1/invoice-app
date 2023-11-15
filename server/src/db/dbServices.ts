import { client } from '../db/client';
import { ObjectId } from 'mongodb';
import type { Example } from '../types/Example';
import Invoice from '../models/Invoice';
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

/**
 * Get single invoice with specific id from database
 * @param {string} invoiceId invoice id
 * @returns Single invoice
 */
export const getSingleInvoice = async (invoiceId: string): Promise<Invoice> => {
  let invoice: Invoice;

  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const collection = database.collection(COLLECTION_NAME);
    const cursor = collection.find({ invoiceId });
    const result = await cursor.toArray();
    invoice = InvoiceMapper.mapObjectToInvoice(result[0]);
  } finally {
    await client.close();
  }

  return invoice;
};

/**
 * Change invoice status
 * @param {string} invoiceId invoice id
 * @param {string} newStatus new status to set
 * @returns {Invoice} updated invoice object
 */
export const changeInvoiceStatus = async (invoiceId: string, newStatus: string): Promise<Invoice> => {
  let invoice: Invoice;

  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const collection = database.collection(COLLECTION_NAME);
    collection.updateOne({ invoiceId }, { $set: { status: newStatus } });
    const cursor = collection.find({ invoiceId });
    const result = await cursor.toArray();
    invoice = InvoiceMapper.mapObjectToInvoice(result[0]);
  } finally {
    await client.close();
  }

  return invoice;
};
