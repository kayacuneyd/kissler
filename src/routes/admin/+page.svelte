<script>
  import { page } from '$app/stores';
</script>

<div class="hero min-h-[50vh] bg-base-200 rounded-box">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Admin Dashboard</h1>
      <p class="py-6">Welcome back! Manage your menu, view orders, or update settings.</p>
      <div class="flex gap-4 justify-center">
        <a href="/admin/menu" class="btn btn-primary">Manage Menu</a>
        <a href="/" target="_blank" class="btn btn-outline">View Live Site</a>
      </div>
    </div>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-title">Total Menu Items</div>
      <div class="stat-value">Check</div>
      <div class="stat-desc">In all categories</div>
    </div>
  </div>
  
  <div class="stat bg-primary text-primary-content rounded-box">
    <div class="stat-title text-primary-content">Quick Action</div>
    <div class="stat-actions">
      <a href="/admin/menu/add" class="btn btn-sm btn-success">Add Item</a>
    </div>
  </div>
</div>