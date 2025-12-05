<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  export let data;
  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} - Café Kissler Blog</title>
  <meta name="description" content={post.excerpt || post.title} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt || post.title} />
  <meta property="og:image" content={post.image || "https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
  <meta property="og:type" content="article" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "{post.title}",
      "image": "{post.image || 'https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg'}",
      "datePublished": "{new Date(post.createdAt).toISOString()}",
      "dateModified": "{new Date(post.updatedAt || post.createdAt).toISOString()}",
      "author": {
        "@type": "Organization",
        "name": "Café Kissler"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Café Kissler",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cafe-kissler.de/favicon.png"
        }
      },
      "description": "{post.excerpt || post.title}"
    }
  </script>
</svelte:head>

<PageHeader 
  title={post.title}  
  subtitle={new Date(post.createdAt).toLocaleDateString('de-DE')}
  bgImage={post.image || "https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
/>

<div class="container mx-auto p-6 max-w-4xl">
  <article class="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
    {@html post.content}
  </article>
  
  <div class="mt-12 pt-8 border-t border-base-200">
    <a href="/blog" class="btn btn-outline btn-secondary">← Zurück zum Blog</a>
  </div>
</div>
