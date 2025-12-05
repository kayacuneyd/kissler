import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

const resend = new Resend(env.RESEND_API_KEY);

export const POST = async ({ request }) => {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return json({ message: 'Missing fields' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use verified domain in prod
      to: ['delivered@resend.dev'], // Change to cafe owner email
      subject: `New Contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
    });

    return json({ success: true, data });
  } catch (error) {
    console.error(error);
    return json({ message: 'Failed to send email' }, { status: 500 });
  }
};