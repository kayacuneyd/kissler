<script>
  export let data;
  const { posts } = data;
</script>

<div class="flex justify-between items-center mb-6">
  <h1 class="text-3xl font-bold text-primary">Blog Management</h1>
  <a href="/admin/blog/add" class="btn btn-primary text-white">+ New Post</a>
</div>

<div class="overflow-x-auto bg-base-100 rounded-box shadow">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Status</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each posts as post}
        <tr>
          <td>
            {#if post.image}
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img src={post.image} alt={post.title} />
                </div>
              </div>
            {:else}
              <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span>No Img</span>
                </div>
              </div>
            {/if}
          </td>
          <td class="font-bold">{post.title}</td>
          <td>
            {#if post.published}
              <div class="badge badge-success gap-2">Published</div>
            {:else}
              <div class="badge badge-ghost gap-2">Draft</div>
            {/if}
          </td>
          <td>{new Date(post.createdAt).toLocaleDateString()}</td>
          <td class="flex gap-2">
            <a href="/admin/blog/edit/{post._id}" class="btn btn-sm btn-ghost">Edit</a>
            <form action="?/delete" method="POST" on:submit|preventDefault={(e) => confirm('Are you sure?') && e.target.submit()}>
              <input type="hidden" name="id" value={post._id} />
              <button class="btn btn-sm btn-ghost text-error">Delete</button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
