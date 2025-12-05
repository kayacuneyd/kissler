import { getPublishedPosts } from '$lib/db/postRepository';

export const load = async () => {
  const posts = await getPublishedPosts();
  return {
    posts: JSON.parse(JSON.stringify(posts))
  };
};
