<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  export let data;
  const { groupedMenu } = data;
</script>

<svelte:head>
  <title>Speisekarte - Café Kissler Friedberg</title>
  <meta name="description" content="Entdecken Sie unsere vielfältige Speisekarte: Von frischem Frühstück über herzhafte Snacks bis hin zu unseren hausgemachten Torten und Kuchen." />
  <meta property="og:title" content="Speisekarte - Café Kissler Friedberg" />
  <meta property="og:description" content="Entdecken Sie unsere vielfältige Speisekarte: Von frischem Frühstück über herzhafte Snacks bis hin zu unseren hausgemachten Torten." />
  <meta property="og:image" content="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Menu",
      "name": "Café Kissler Speisekarte",
      "description": "Frühstück, Snacks, Torten und Kaffeespezialitäten",
      "inLanguage": "de",
      "mainEntityOfPage": "https://cafe-kissler.de/menu"
    }
  </script>
</svelte:head>

<PageHeader 
  title="Unsere Speisekarte"  
  subtitle="Frisch & Hausgemacht"
  bgImage="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
/>

<div class="container mx-auto p-4">

  {#if Object.keys(groupedMenu).length === 0}
    <div class="text-center py-10">
      <p class="text-lg">Das Menü ist derzeit leer.</p>
    </div>
  {:else}
  {#each Object.entries(groupedMenu) as [category, items]}
    <div class="mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-primary pb-2 text-primary inline-block">{category}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each items as item}
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 overflow-hidden group">
            {#if item.image}
              <figure class="h-56 w-full overflow-hidden">
                <img src={item.image} alt={item.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </figure>
            {/if}
            <div class="card-body p-8">
              <h3 class="card-title justify-between text-2xl mb-2 text-accent">
                {item.name}
              </h3>
              {#if item.description}
                <p class="text-base opacity-80 mb-4 leading-relaxed">{item.description}</p>
              {/if}
              {#if item.ingredients}
                <div class="text-sm text-gray-500 mt-2 italic bg-base-200 p-3 rounded-lg">
                  <span class="font-semibold not-italic text-accent">Zutaten & Allergene:</span> {item.ingredients}
                </div>
              {/if}
              <div class="mt-6 space-y-2">
                {#each item.prices as price}
                  <div class="flex justify-between text-base items-center border-b border-base-200 pb-1 last:border-0">
                    <span class="badge badge-ghost badge-lg">{price.amount}</span>
                    <span class="font-bold text-lg text-primary">{price.price.toFixed(2)} €</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
{/if}
</div>