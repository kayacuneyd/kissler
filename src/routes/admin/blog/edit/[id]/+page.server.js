import { getPostById, updatePost } from '$lib/db/postRepository';
import { uploadImage } from '$lib/services/cloudinary';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const post = await getPostById(params.id);
  if (!post) throw redirect(302, '/admin/blog');
  return {
    post: JSON.parse(JSON.stringify(post))
  };
};

export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const title = data.get('title');
    const content = data.get('content');
    const excerpt = data.get('excerpt');
    const published = data.get('published') === 'on';
    
    // Handle Image Upload
    const imageFile = data.get('imageFile');
    let image = data.get('imageUrl');

    if (imageFile && imageFile.size > 0) {
      try {
        image = await uploadImage(imageFile);
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    }

    const updateData = {
      title,
      content,
      excerpt,
      image,
      published
    };

    await updatePost(params.id, updateData);
    throw redirect(303, '/admin/blog');
  }
};
