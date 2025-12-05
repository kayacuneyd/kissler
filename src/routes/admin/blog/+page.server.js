import { getAllPosts, deletePost } from '$lib/db/postRepository';

export const load = async () => {
  const posts = await getAllPosts();
  return {
    posts: JSON.parse(JSON.stringify(posts))
  };
};

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    await deletePost(id);
  }
};
