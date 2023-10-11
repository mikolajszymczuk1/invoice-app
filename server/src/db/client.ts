import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://root:${process.env.DATABASE_PASSWORD}@invoiceappcluster.tiyxoag.mongodb.net/?retryWrites=true&w=majority`;

/** MongoDB client to do operations on database */
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

/** Test ping to check connection */
export const testConnection = async (): Promise<void> => {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    await client.close();
  }
};
