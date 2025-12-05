<script>
  export let data;
  const { item, categories } = data;
  
  let prices = item.prices.length > 0 ? item.prices : [{ amount: '', price: '' }];

  function addPrice() {
    prices = [...prices, { amount: '', price: '' }];
  }

  function removePrice(index) {
    prices = prices.filter((_, i) => i !== index);
  }
</script>

<h1 class="text-2xl font-bold mb-6">Edit Menu Item</h1>

<form method="POST" enctype="multipart/form-data" class="max-w-lg space-y-4 bg-base-100 p-6 rounded-box shadow-lg">
  <div class="form-control">
    <label class="label" for="category">Category</label>
    <select name="category" class="select select-bordered" value={item.category}>
      {#each categories as cat}
        <option value={cat}>{cat}</option>
      {/each}
    </select>
    <div class="divider text-xs">OR CREATE NEW</div>
    <input type="text" name="newCategory" placeholder="New Category Name" class="input input-bordered" />
  </div>

  <div class="form-control">
    <label class="label" for="name">Name</label>
    <input type="text" name="name" value={item.name} required class="input input-bordered" />
  </div>

  <div class="form-control">
    <label class="label" for="imageFile">Update Image</label>
    {#if item.image}
      <div class="mb-2">
        <img src={item.image} alt="Current" class="h-20 w-20 object-cover rounded" />
      </div>
    {/if}
    <input type="file" name="imageFile" accept="image/*" class="file-input file-input-bordered w-full" />
    <div class="divider text-xs my-2">OR USE URL</div>
    <input type="text" name="imageUrl" value={item.image || ''} placeholder="https://..." class="input input-bordered" />
  </div>

  <div class="form-control">
    <label class="label" for="description">Description</label>
    <textarea name="description" class="textarea textarea-bordered" value={item.description || ''}></textarea>
  </div>

  <div class="form-control">
    <label class="label" for="ingredients">Ingredients / Allergens</label>
    <textarea name="ingredients" class="textarea textarea-bordered" placeholder="List ingredients or allergens here..." value={item.ingredients || ''}></textarea>
  </div>

  <div class="form-control">
    <label class="label">Prices</label>
    {#each prices as price, i}
      <div class="flex gap-2 mb-2">
        <input type="text" name="amount" placeholder="Amount" class="input input-bordered w-1/2" value={price.amount} required />
        <input type="number" step="0.01" name="price" placeholder="Price" class="input input-bordered w-1/3" value={price.price} required />
        {#if prices.length > 1}
          <button type="button" class="btn btn-square btn-outline btn-error" on:click={() => removePrice(i)}>X</button>
        {/if}
      </div>
    {/each}
    <button type="button" class="btn btn-sm btn-ghost w-fit" on:click={addPrice}>+ Add Price Option</button>
  </div>

  <div class="mt-6 flex gap-4">
    <button class="btn btn-primary flex-1">Update Item</button>
    <a href="/admin" class="btn btn-ghost flex-1">Cancel</a>
  </div>
</form>