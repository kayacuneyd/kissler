<script>
  import "../app.css";
</script>

<nav class="navbar bg-base-100 shadow-md py-2 px-4 md:px-6 sticky top-0 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/about">Über uns</a></li>
        <li><a href="/menu">Menü</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Kontakt</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost h-auto p-0 hover:bg-transparent">
      <img src="/logo.png" alt="Cafe Kissler" class="h-12 md:h-20 w-auto object-contain mix-blend-multiply" />
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 gap-6">
      <li><a href="/about" class="font-semibold text-lg tracking-wide hover:text-primary transition-colors">Über uns</a></li>
      <li><a href="/menu" class="font-semibold text-lg tracking-wide hover:text-primary transition-colors">Menü</a></li>
      <li><a href="/blog" class="font-semibold text-lg tracking-wide hover:text-primary transition-colors">Blog</a></li>
      <li><a href="/contact" class="font-semibold text-lg tracking-wide hover:text-primary transition-colors">Kontakt</a></li>
    </ul>
  </div>
  <div class="navbar-end w-auto">
    <!-- Optional CTA or empty for spacing -->
  </div>
</nav>

<main class="min-h-[80vh]">
  <slot />
</main>

<footer class="footer p-6 md:p-16 bg-neutral text-neutral-content mt-10 md:mt-20 text-base md:text-lg">
  <nav>
    <header class="footer-title text-white opacity-100 text-lg md:text-xl mb-4">Öffnungszeiten</header> 
    <p class="font-bold mb-2">Bäckerei:</p>
    <p class="mb-1">Mo-Fr: 07:00 - 18:00</p>
    <p class="mb-1">Sa: 07:00 - 17:00</p>
    <p>So: 10:00 - 17:00</p>
  </nav> 
  <nav>
    <header class="footer-title text-white opacity-100 text-xl mb-4">Kontakt</header> 
    <p class="mb-1">Kaiserstrasse 22-24</p>
    <p class="mb-1">61169 Friedberg</p>
    <p class="mb-1">Tel: +49 6031 5140</p>
    <p>Email: info@cafe-kissler.de</p>
  </nav> 
  <nav>
    <header class="footer-title text-white opacity-100 text-xl mb-4">Rechtliches</header> 
    <a href="/impressum" class="link link-hover mb-1">Impressum</a>
    <a href="/datenschutz" class="link link-hover mb-1">Datenschutz</a>
    <a href="/admin" class="link link-hover">Admin Login</a>
  </nav>
</footer>
<footer class="footer px-10 py-6 border-t bg-neutral text-neutral-content border-base-content/10 flex flex-col md:flex-row justify-between items-center">
  <aside class="items-center grid-flow-col">
    <p class="opacity-70">Copyright © 2025 - Alle Rechte vorbehalten von Café Kissler</p>
  </aside>
  <div class="opacity-70 text-sm text-center md:text-right mt-4 md:mt-0">
    <p>Developed by <a href="https://kayacuneyt.com" target="_blank" rel="noopener noreferrer" class="link link-hover font-bold text-white">Cüneyt Kaya</a> - Built in Kornwestheim</p>
  </div>
</footer>