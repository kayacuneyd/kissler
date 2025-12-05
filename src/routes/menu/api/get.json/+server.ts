import { getAllMenuItems } from '$lib/db/menuRepository';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const menuItems = await getAllMenuItems();
  return json(menuItems);
};