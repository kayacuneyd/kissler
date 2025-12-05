import { getMenuItemById, updateMenuItem, getCategories } from '$lib/db/menuRepository';
import { uploadImage } from '$lib/services/cloudinary';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const item = await getMenuItemById(params.id);
  const categories = await getCategories();
  
  if (!item) throw redirect(302, '/admin');

  return {
    item: JSON.parse(JSON.stringify(item)),
    categories
  };
};

export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const category = data.get('category');
    const newCategory = data.get('newCategory');
    const name = data.get('name');
    const description = data.get('description');
    const ingredients = data.get('ingredients');
    
    // Handle image upload
    const imageFile = data.get('imageFile');
    let image = data.get('imageUrl');

    if (imageFile && imageFile.size > 0) {
      try {
        image = await uploadImage(imageFile);
      } catch (error) {
        console.error('Image upload failed:', error);
        // Optionally handle error, e.g., return fail(500, { error: 'Upload failed' })
      }
    }
    
    const amounts = data.getAll('amount');
    const prices = data.getAll('price');
    const priceArray = amounts.map((amount, i) => ({
      amount,
      price: parseFloat(prices[i])
    })).filter(p => p.amount && !isNaN(p.price));

    const updateData = {
      category: newCategory || category,
      name,
      description,
      ingredients,
      image,
      prices: priceArray
    };

    await updateMenuItem(params.id, updateData);
    throw redirect(303, '/admin');
  }
};