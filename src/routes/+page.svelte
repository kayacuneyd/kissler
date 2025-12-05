<script>
  import { onMount } from 'svelte';
</script>

<svelte:head>
  <title>Café Kissler - Traditionelle Bäckerei & Café in Friedberg</title>
  <meta name="description" content="Willkommen im Café Kissler in Friedberg. Genießen Sie handgemachte Backwaren, frischen Kaffee und unsere berühmten Torten in gemütlicher Atmosphäre." />
  <meta name="keywords" content="Café Kissler, Bäckerei Friedberg, Café Friedberg, Frühstück, Torten, Handwerk, Kaiserschmarrn" />
  <meta property="og:title" content="Café Kissler - Traditionelle Bäckerei & Café in Friedberg" />
  <meta property="og:description" content="Willkommen im Café Kissler in Friedberg. Genießen Sie handgemachte Backwaren, frischen Kaffee und unsere berühmten Torten." />
  <meta property="og:image" content="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <meta property="og:type" content="website" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Bakery",
      "name": "Café Kissler",
      "image": "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kaiserstrasse 22-24",
        "addressLocality": "Friedberg",
        "postalCode": "61169",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.3345,
        "longitude": 8.7560
      },
      "url": "https://cafe-kissler.de",
      "telephone": "+4960315140",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "07:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "17:00"
        }
      ],
      "priceRange": "€€",
      "servesCuisine": "German, Bakery, Cafe"
    }
  </script>
</svelte:head>

<div class="hero min-h-[85vh]" style="background-image: url(https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);">
  <div class="hero-overlay bg-black bg-opacity-50"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-2xl">
      <h1 class="mb-8 text-6xl md:text-7xl font-bold text-white drop-shadow-xl leading-tight">Tradition trifft Gemütlichkeit</h1>
      <p class="mb-10 text-xl md:text-2xl font-light text-gray-100 tracking-wide">Im Herzen von Friedberg – Ihre Bäckerei und Ihr Café seit Generationen.</p>
      <div class="flex gap-6 justify-center">
        <a href="/menu" class="btn btn-primary btn-lg px-10 shadow-xl hover:scale-105 transition-transform border-none text-white">Zum Café-Menü</a>
        <a href="/contact" class="btn btn-outline btn-secondary btn-lg px-10 text-white hover:bg-secondary hover:border-secondary hover:text-white transition-all">Kontakt</a>
      </div>
    </div>
  </div>
</div>

<section class="py-24 px-6 bg-base-100">
  <div class="container mx-auto">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Warum Café Kissler?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      
      <!-- Backstube -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 overflow-hidden group">
        <figure class="h-64 overflow-hidden">
          <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Frisches Brot" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </figure>
        <div class="card-body items-center text-center p-8">
          <h2 class="card-title text-primary text-2xl mb-2">BACKSTUBE</h2>
          <h3 class="font-bold text-xl mb-4">Frisch gebacken</h3>
          <p class="text-lg opacity-80">Täglich ofenwarme Brote und Brötchen aus eigener Backstube – mit Ruhezeit und echter Handarbeit.</p>
        </div>
      </div>

      <!-- Café -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 overflow-hidden group">
        <figure class="h-64 overflow-hidden">
          <img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kaffee Ambiente" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </figure>
        <div class="card-body items-center text-center p-8">
          <h2 class="card-title text-primary text-2xl mb-2">CAFÉ</h2>
          <h3 class="font-bold text-xl mb-4">Gemütliches Ambiente</h3>
          <p class="text-lg opacity-80">Ein liebevoll gestalteter Gastraum, schneller Service und hausgemachte Klassiker lassen Sie abschalten.</p>
        </div>
      </div>

      <!-- Patisserie -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 overflow-hidden group">
        <figure class="h-64 overflow-hidden">
          <img src="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Torte" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </figure>
        <div class="card-body items-center text-center p-8">
          <h2 class="card-title text-primary text-2xl mb-2">PATISSERIE</h2>
          <h3 class="font-bold text-xl mb-4">Individuelle Torten</h3>
          <p class="text-lg opacity-80">Hochzeit, Jubiläum oder Firmenfeier – wir gestalten Torten, die optisch und geschmacklich überzeugen.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="py-24 px-6 bg-base-200">
  <div class="container mx-auto flex flex-col md:flex-row items-center gap-16">
    <div class="flex-1">
      <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kaiserschmarrn" class="rounded-2xl shadow-2xl w-full max-w-lg mx-auto rotate-2 hover:rotate-0 transition-transform duration-500" />
    </div>
    <div class="flex-1 text-center md:text-left">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-primary">Unsere Spezialität: Kaiserschmarrn</h2>
      <p class="text-xl mb-8 leading-relaxed opacity-90">
        Unser berühmter Kaiserschmarrn – fluffig, goldbraun und serviert mit hausgemachtem Zwetschgenröster. Ein Klassiker, den unsere Gäste immer wieder loben!
      </p>
      <a href="/menu" class="btn btn-primary btn-lg px-10 text-white shadow-lg">Zur Café-Karte</a>
    </div>
  </div>
</section>