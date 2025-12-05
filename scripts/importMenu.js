import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

/*
 * This script reads the provided `menu.json` file and imports its contents
 * into a MongoDB collection.  Each drink item becomes a separate document
 * containing the restaurant name, menu year, category name, product name,
 * optional description and an array of price objects.  Using individual
 * documents for items makes it easy to add, remove or update a single
 * drink in the admin panel.
 *
 * Usage:
 *   1. Copy `menu.json` and this script into your project directory.
 *   2. Install the official MongoDB driver: `npm install mongodb`.
 *   3. Define MONGO_URI in a .env file or export it in your shell.  It must
 *      contain a valid connection string for your Atlas cluster (e.g.
 *      mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority).
 *   4. Run the script with Node.js: `node importMenu.js`.
 */

async function importMenu() {
  // Load the menu file
  const raw = fs.readFileSync(path.resolve(__dirname, '../menu.json'), 'utf8');
  const data = JSON.parse(raw);

  if (!data.menu) {
    throw new Error('menu.json must contain a top‑level "menu" property');
  }

  const { restaurant, year, categories } = data.menu;

  // Flatten the categories into an array of documents
  const documents = [];
  for (const cat of categories) {
    const categoryName = cat.name;
    for (const item of cat.items) {
      documents.push({
        restaurant,
        year,
        category: categoryName,
        name: item.name,
        description: item.description || null,
        prices: item.prices || []
      });
    }
  }

  // Connect to MongoDB
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please set the MONGODB_URI environment variable');
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('cafe_kissler');
    const menuCollection = db.collection('menu');

    // Remove any existing menu entries to avoid duplicates
    await menuCollection.deleteMany({ restaurant, year });
    const result = await menuCollection.insertMany(documents);
    console.log(`Imported ${result.insertedCount} menu items into MongoDB.`);
  } finally {
    await client.close();
  }
}

importMenu().catch((err) => {
  console.error(err);
  process.exit(1);
});