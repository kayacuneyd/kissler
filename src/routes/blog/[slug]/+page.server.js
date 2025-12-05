import { getPostBySlug } from '$lib/db/postRepository';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  if (!post) throw error(404, 'Beitrag nicht gefunden');
  return {
    post: JSON.parse(JSON.stringify(post))
  };
};
