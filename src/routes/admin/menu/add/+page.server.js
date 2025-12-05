import { addMenuItem, getCategories } from '$lib/db/menuRepository';
import { uploadImage } from '$lib/services/cloudinary';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
  const categories = await getCategories();
  return { categories };
};

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const category = data.get('category');
    const newCategory = data.get('newCategory');
    const name = data.get('name');
    const description = data.get('description');
    const ingredients = data.get('ingredients');
    
    // Handle Image Upload
    const imageFile = data.get('imageFile');
    const imageUrlInput = data.get('imageUrl');
    let image = imageUrlInput;

    if (imageFile && imageFile.size > 0) {
      try {
        const uploadedUrl = await uploadImage(imageFile);
        if (uploadedUrl) image = uploadedUrl;
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    }
    
    // Parse prices
    const amounts = data.getAll('amount');
    const prices = data.getAll('price');
    const priceArray = amounts.map((amount, i) => ({
      amount,
      price: parseFloat(prices[i])
    })).filter(p => p.amount && !isNaN(p.price));

    const menuItem = {
      category: newCategory || category,
      name,
      description,
      ingredients,
      image,
      prices: priceArray,
      restaurant: 'Kissler', // Default
      year: new Date().getFullYear().toString()
    };

    await addMenuItem(menuItem);
    throw redirect(303, '/admin');
  }
};