import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

const JWT_SECRET = env.JWT_SECRET || 'default-secret-change-me';

export const load = ({ cookies, url }) => {
  if (url.pathname === '/admin/login') return;

  const token = cookies.get('session');
  if (!token) {
    throw redirect(302, '/admin/login');
  }

  try {
    jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw redirect(302, '/admin/login');
  }
};