import { addPost } from '$lib/db/postRepository';
import { uploadImage } from '$lib/services/cloudinary';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const content = data.get('content');
    const excerpt = data.get('excerpt');
    const published = data.get('published') === 'on';
    
    // Generate slug
    let slug = title.toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    // Handle Image Upload
    const imageFile = data.get('imageFile');
    const imageUrlInput = data.get('imageUrl');
    let image = imageUrlInput;

    if (imageFile && imageFile.size > 0) {
      try {
        const uploadedUrl = await uploadImage(imageFile);
        if (uploadedUrl) image = uploadedUrl;
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    }

    const post = {
      title,
      slug,
      content,
      excerpt,
      image,
      published
    };

    await addPost(post);
    throw redirect(303, '/admin/blog');
  }
};
