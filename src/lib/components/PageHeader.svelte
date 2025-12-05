<script>
  export let title;
  export let subtitle = '';
  export let bgImage;
</script>

<div class="hero min-h-[30vh] md:h-[50vh] mb-8 md:mb-12" style="background-image: url({bgImage});">
  <div class="hero-overlay bg-black bg-opacity-50"></div>
  <div class="hero-content text-center text-neutral-content w-full">
    <div class="max-w-3xl w-full px-4">
      <h1 class="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl tracking-wide uppercase border-b-4 border-primary pb-4 inline-block break-words hyphens-auto max-w-full">
        {title}
      </h1>
      {#if subtitle}
        <p class="mb-5 text-lg md:text-2xl text-gray-100 font-light tracking-wider uppercase">{subtitle}</p>
      {/if}
    </div>
  </div>
</div>