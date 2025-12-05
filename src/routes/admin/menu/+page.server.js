import { getAllMenuItems, deleteMenuItem } from '$lib/db/menuRepository';

export const load = async () => {
  const menuItems = await getAllMenuItems();
  return {
    menuItems: JSON.parse(JSON.stringify(menuItems))
  };
};

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    await deleteMenuItem(id);
    return { success: true };
  }
};