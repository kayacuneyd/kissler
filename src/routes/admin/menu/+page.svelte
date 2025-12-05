<script>
  import { enhance } from '$app/forms';
  export let data;
  $: ({ menuItems } = data);
</script>

<div class="flex justify-between items-center mb-6">
  <h1 class="text-3xl font-bold">Menu Management</h1>
  <a href="/admin/menu/add" class="btn btn-primary">Add New Item</a>
</div>

<div class="overflow-x-auto bg-base-100 rounded-box shadow">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Category</th>
        <th>Image</th>
        <th>Name</th>
        <th>Prices</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each menuItems as item}
        <tr>
          <td>{item.category}</td>
          <td>
            {#if item.image}
              <div class="avatar">
                <div class="w-12 rounded">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            {:else}
              <span class="text-xs opacity-50">No Img</span>
            {/if}
          </td>
          <td>
            <div class="font-bold">{item.name}</div>
            <div class="text-sm opacity-50">{item.description || ''}</div>
          </td>
          <td>
            {#each item.prices as price}
              <div class="text-xs">{price.amount}: {price.price}€</div>
            {/each}
          </td>
          <td class="flex gap-2">
            <a href="/admin/menu/edit/{item._id}" class="btn btn-sm btn-ghost">Edit</a>
            <form action="?/delete" method="POST" use:enhance>
              <input type="hidden" name="id" value={item._id} />
              <button class="btn btn-sm btn-error btn-outline" on:click={() => confirm('Are you sure?') || event.preventDefault()}>Delete</button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>