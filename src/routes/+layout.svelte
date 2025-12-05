<script>
  import "../app.css";
</script>

<div class="navbar bg-base-100 shadow-md py-2 px-6">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost h-auto p-0 hover:bg-transparent">
      <img src="/logo.png" alt="Cafe Kissler" class="h-16 md:h-20 w-auto object-contain mix-blend-multiply" />
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 gap-2">
      <li><a href="/about" class="font-semibold text-lg tracking-wide hover:text-primary transition-colors">Über uns</a></li>
      <li><a href="/menu" class="font-semibold text-lg tracking-wide hover:text-primary transition-colors">Menü</a></li>
      <li><a href="/blog" class="font-semibold text-lg tracking-wide hover:text-primary transition-colors">Blog</a></li>
      <li><a href="/contact" class="font-semibold text-lg tracking-wide hover:text-primary transition-colors">Kontakt</a></li>
    </ul>
  </div>
</div>

<main class="min-h-[80vh]">
  <slot />
</main>

<footer class="footer p-16 bg-neutral text-neutral-content mt-20 text-lg">
  <nav>
    <header class="footer-title text-white opacity-100 text-xl mb-4">Öffnungszeiten</header> 
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