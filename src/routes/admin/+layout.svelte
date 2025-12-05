<script>
  import { page } from '$app/stores';
</script>

<div class="container mx-auto p-4">
{#if $page.url.pathname !== '/admin/login'}
  <div class="navbar bg-neutral text-neutral-content rounded-box mb-6 shadow-lg">
    <div class="flex-1">
      <a href="/admin" class="btn btn-ghost text-xl">Admin Dashboard</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 gap-2">
        <li><a href="/admin" class="btn btn-ghost btn-sm">Menu</a></li>
        <li><a href="/admin/blog" class="btn btn-ghost btn-sm">Blog</a></li>
        <li><a href="/" target="_blank" class="btn btn-ghost btn-sm">View Live Site</a></li>
        <li>
          <form action="/admin/logout" method="POST">
             <button class="btn btn-ghost btn-sm text-error">Logout</button>
          </form>
        </li>
      </ul>
    </div>
  </div>
{/if}

<slot />
</div>