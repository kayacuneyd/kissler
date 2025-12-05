import { db } from './mongo';
import { ObjectId } from 'mongodb';

const COLLECTION = 'menu';

export const getAllMenuItems = async () => {
  const database = await db();
  // Sort by category and name for better display
  return await database.collection(COLLECTION).find({}).sort({ category: 1, name: 1 }).toArray();
};

export const getMenuByCategory = async (category) => {
  const database = await db();
  return await database.collection(COLLECTION).find({ category }).toArray();
};

export const addMenuItem = async (data) => {
  const database = await db();
  return await database.collection(COLLECTION).insertOne(data);
};

export const updateMenuItem = async (id, data) => {
  const database = await db();
  const _id = new ObjectId(id);
  const { _id: _, ...updateData } = data;
  return await database.collection(COLLECTION).updateOne({ _id }, { $set: updateData });
};

export const deleteMenuItem = async (id) => {
  const database = await db();
  return await database.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
};

export const getCategories = async () => {
  const database = await db();
  return await database.collection(COLLECTION).distinct('category');
};

export const getMenuItemById = async (id) => {
  const database = await db();
  return await database.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
};