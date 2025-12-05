import { getUser, verifyPassword } from '$lib/db/auth';
import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

const JWT_SECRET = env.JWT_SECRET || 'default-secret-change-me';

export const POST = async ({ request, cookies }) => {
  const { username, password } = await request.json();
  const user = await getUser(username);

  if (!user || !(await verifyPassword(password, user.password))) {
    return json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  
  cookies.set('session', token, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 // 1 hour
  });

  return json({ success: true });
};