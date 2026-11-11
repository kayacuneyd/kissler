import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

const options = {};
let clientPromise;

// Only connect when a request actually needs database access.
// Importing this module during a Vercel build must not start a DNS lookup.
function getClient() {
  if (!clientPromise) {
    const uri = env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not configured');

    if (process.env.NODE_ENV === 'development') {
      if (!global._mongoClientPromise) {
        global._mongoClientPromise = new MongoClient(uri, options).connect();
      }
      clientPromise = global._mongoClientPromise;
    } else {
      clientPromise = new MongoClient(uri, options).connect();
    }
  }
  return clientPromise;
}

export { clientPromise as client };

export const db = async () => {
  const connection = await getClient();
  return connection.db('cafe_kissler');
};
