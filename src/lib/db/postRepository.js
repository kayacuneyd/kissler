import { db } from './mongo';
import { ObjectId } from 'mongodb';

const COLLECTION = 'posts';

export const getAllPosts = async () => {
  const database = await db();
  return await database.collection(COLLECTION).find({}).sort({ createdAt: -1 }).toArray();
};

export const getPublishedPosts = async () => {
  const database = await db();
  return await database.collection(COLLECTION).find({ published: true }).sort({ createdAt: -1 }).toArray();
};

export const getPostBySlug = async (slug) => {
  const database = await db();
  return await database.collection(COLLECTION).findOne({ slug });
};

export const getPostById = async (id) => {
  const database = await db();
  return await database.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
};

export const addPost = async (post) => {
  const database = await db();
  return await database.collection(COLLECTION).insertOne({
    ...post,
    createdAt: new Date(),
    updatedAt: new Date()
  });
};

export const updatePost = async (id, post) => {
  const database = await db();
  const _id = new ObjectId(id);
  const { _id: _, ...updateData } = post;
  return await database.collection(COLLECTION).updateOne({ _id }, { 
    $set: {
      ...updateData,
      updatedAt: new Date()
    } 
  });
};

export const deletePost = async (id) => {
  const database = await db();
  return await database.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
};
