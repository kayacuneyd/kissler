import path from 'path';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function createAdmin() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI not found');

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('cafe_kissler');
  
  const username = 'admin';
  const password = 'password123'; // Default password
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.collection('users').updateOne(
    { username },
    { $set: { username, password: hashedPassword } },
    { upsert: true }
  );

  console.log(`Admin user '${username}' created with password '${password}'`);
  await client.close();
}

createAdmin().catch(console.error);