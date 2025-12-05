<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  export let data;
  const { posts } = data;
</script>

<svelte:head>
  <title>Blog - Café Kissler Friedberg</title>
  <meta name="description" content="Neuigkeiten, Geschichten und Rezepte aus unserer Backstube. Bleiben Sie auf dem Laufenden über das Café Kissler." />
  <meta property="og:title" content="Blog - Café Kissler Friedberg" />
  <meta property="og:description" content="Neuigkeiten, Geschichten und Rezepte aus unserer Backstube." />
  <meta property="og:image" content="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
</svelte:head>

<PageHeader 
  title="Unser Blog"  
  subtitle="Neuigkeiten & Geschichten aus der Backstube"
  bgImage="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
/>

<div class="container mx-auto p-6">
  {#if posts.length === 0}
    <div class="text-center py-12">
      <p class="text-xl text-gray-500">Noch keine Beiträge vorhanden. Schauen Sie bald wieder vorbei!</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each posts as post}
        <a href="/blog/{post.slug}" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 overflow-hidden group h-full">
          {#if post.image}
            <figure class="h-56 w-full overflow-hidden">
              <img src={post.image} alt={post.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </figure>
          {/if}
          <div class="card-body p-8">
            <div class="text-sm text-gray-500 mb-2">{new Date(post.createdAt).toLocaleDateString('de-DE')}</div>
            <h2 class="card-title text-2xl mb-3 text-primary group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p class="text-base opacity-80 line-clamp-3 mb-4">{post.excerpt || ''}</p>
            <div class="card-actions justify-end mt-auto">
              <span class="btn btn-link btn-sm px-0 text-secondary no-underline hover:text-primary">Weiterlesen →</span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  {/if}
</div>
