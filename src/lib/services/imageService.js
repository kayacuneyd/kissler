import { env } from '$env/dynamic/private';

const PEXELS_API_URL = 'https://api.pexels.com/v1/search';

export const fetchPexelsImage = async (query) => {
  const apiKey = env.PEXELS_API_KEY;
  if (!apiKey || apiKey.includes('placeholder')) {
    console.warn('PEXELS_API_KEY is missing or invalid.');
    return null;
  }

  try {
    const res = await fetch(`${PEXELS_API_URL}?query=${encodeURIComponent(query)}&per_page=1`, {
      headers: {
        Authorization: apiKey
      }
    });

    if (!res.ok) {
      console.error(`Pexels API error: ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.medium; // Use medium size
    }
  } catch (error) {
    console.error('Error fetching image from Pexels:', error);
  }
  return null;
};