import { db } from './mongo';
import bcrypt from 'bcryptjs';

const USERS_COLLECTION = 'users';

export const getUser = async (username) => {
  const database = await db();
  return await database.collection(USERS_COLLECTION).findOne({ username });
};

export const createUser = async (username, password) => {
  const database = await db();
  const hashedPassword = await bcrypt.hash(password, 10);
  return await database.collection(USERS_COLLECTION).insertOne({ username, password: hashedPassword });
};

export const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};