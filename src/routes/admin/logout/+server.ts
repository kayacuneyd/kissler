import { redirect } from '@sveltejs/kit';

export const POST = ({ cookies }) => {
  cookies.delete('session', { path: '/' });
  throw redirect(303, '/admin/login');
};