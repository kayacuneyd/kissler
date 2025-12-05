import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

const uri = env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  // Warning instead of error to allow build without env
  console.warn('Please add MONGODB_URI to .env');
} else {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export { clientPromise as client };

export const db = async () => {
  if (!clientPromise) throw new Error('Database not connected');
  const c = await clientPromise;
  return c.db('cafe_kissler');
};