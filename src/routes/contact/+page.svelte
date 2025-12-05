<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let loading = false;
  let success = false;
  let error = null;
  let mapContainer;

  onMount(async () => {
    if (browser) {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      const map = L.map(mapContainer).setView([50.3345, 8.7560], 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Fix for default marker icon in webpack/vite
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      L.marker([50.3345, 8.7560]).addTo(map)
        .bindPopup('<b>Café Kissler</b><br>Kaiserstrasse 22-24<br>61169 Friedberg')
        .openPopup();
    }
  });

  async function handleSubmit(e) {
    loading = true;
    error = null;
    success = false;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/contact/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        success = true;
        e.target.reset();
      } else {
        const result = await res.json();
        error = result.message || 'Failed to send message';
      }
    } catch (err) {
      error = 'An error occurred. Please try again.';
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Kontakt - Café Kissler Friedberg</title>
  <meta name="description" content="Kontaktieren Sie uns! Hier finden Sie unsere Adresse, Telefonnummer, Öffnungszeiten und ein Kontaktformular für Ihre Anfragen." />
  <meta property="og:title" content="Kontakt - Café Kissler Friedberg" />
  <meta property="og:description" content="Kontaktieren Sie uns! Hier finden Sie unsere Adresse, Telefonnummer, Öffnungszeiten und ein Kontaktformular." />
  <meta property="og:image" content="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
</svelte:head>

<PageHeader 
  title="Kontakt"  
  subtitle="Wir freuen uns auf Sie"
  bgImage="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
/>

<div class="container mx-auto p-4">
<div class="max-w-4xl mx-auto">

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Adresse & Kontakt</h2>
        <p>
          <strong>Café Kissler</strong><br>
          Kaiserstrasse 22-24<br>
          61169 Friedberg
        </p>
        <p class="mt-4">
          <strong>Telefon:</strong> +49 6031 5140<br>
          <strong>Email:</strong> info@cafe-kissler.de
        </p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Öffnungszeiten</h2>
        <div class="grid grid-cols-2 gap-2">
          <span class="font-bold">Mo-Fr:</span>
          <span>07:00 - 18:00</span>
          <span class="font-bold">Sa:</span>
          <span>07:00 - 17:00</span>
          <span class="font-bold">So:</span>
          <span>10:00 - 17:00</span>
        </div>
      </div>
    </div>
  </div>
  
  {#if success}
    <div class="alert alert-success mb-6">
      <span>Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.</span>
    </div>
  {/if}

  {#if error}
    <div class="alert alert-error mb-6">
      <span>{error}</span>
    </div>
  {/if}

  <form on:submit|preventDefault={handleSubmit} class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title mb-4">Schreiben Sie uns</h2>
      <div class="form-control">
        <label class="label" for="name">
          <span class="label-text">Name</span>
        </label>
        <input type="text" name="name" id="name" required class="input input-bordered" />
      </div>
      
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Email</span>
        </label>
        <input type="email" name="email" id="email" required class="input input-bordered" />
      </div>
      
      <div class="form-control">
        <label class="label" for="message">
          <span class="label-text">Nachricht</span>
        </label>
        <textarea name="message" id="message" required class="textarea textarea-bordered h-32"></textarea>
      </div>
      
      <div class="form-control mt-6">
        <button class="btn btn-primary" disabled={loading}>
          {#if loading}Senden...{:else}Nachricht Senden{/if}
        </button>
      </div>
    </div>
  </form>
</div>

<div class="mt-12 card bg-base-100 shadow-xl overflow-hidden">
  <div class="h-[400px] w-full z-0" bind:this={mapContainer}></div>
</div>

</div>