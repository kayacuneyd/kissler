import { getAllMenuItems, updateMenuItem } from '$lib/db/menuRepository';
import { fetchPexelsImage } from '$lib/services/imageService';

export const load = async () => {
  const menuItems = await getAllMenuItems();
  
  // Check for missing images and fetch them
  const updates = menuItems.map(async (item) => {
    if (!item.image) {
      // Use name + category for better context, e.g. "Pizza Margherita Food"
      const query = `${item.name} ${item.category} food drink`; 
      const imageUrl = await fetchPexelsImage(query);
      
      if (imageUrl) {
        item.image = imageUrl; // Update local object for immediate display
        await updateMenuItem(item._id.toString(), { image: imageUrl });
      }
    }
    return item;
  });

  await Promise.all(updates);
  
  // Group by category
  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Serialize ObjectId and other non-POJO types
  return {
    groupedMenu: JSON.parse(JSON.stringify(groupedMenu))
  };
};