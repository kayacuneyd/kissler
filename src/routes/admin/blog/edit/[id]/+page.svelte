<script>
  export let data;
  const { post } = data;
</script>

<div class="max-w-4xl mx-auto">
  <h1 class="text-3xl font-bold mb-6 text-primary">Edit Blog Post</h1>

  <form method="POST" enctype="multipart/form-data" class="card bg-base-100 shadow-xl">
    <div class="card-body">
      
      <div class="form-control">
        <label class="label" for="title">Title</label>
        <input type="text" name="title" value={post.title} required class="input input-bordered text-lg font-bold" />
      </div>

      <div class="form-control">
        <label class="label" for="imageFile">Update Image</label>
        {#if post.image}
          <div class="mb-2">
            <img src={post.image} alt="Current" class="h-32 object-cover rounded" />
          </div>
        {/if}
        <input type="file" name="imageFile" accept="image/*" class="file-input file-input-bordered w-full" />
        <div class="divider text-xs my-2">OR USE URL</div>
        <input type="text" name="imageUrl" value={post.image || ''} placeholder="https://..." class="input input-bordered" />
      </div>

      <div class="form-control">
        <label class="label" for="excerpt">Excerpt (Short Summary)</label>
        <textarea name="excerpt" class="textarea textarea-bordered h-24" value={post.excerpt || ''}></textarea>
      </div>

      <div class="form-control">
        <label class="label" for="content">Content (HTML Supported)</label>
        <textarea name="content" required class="textarea textarea-bordered h-96 font-mono text-sm" value={post.content || ''}></textarea>
        <label class="label">
          <span class="label-text-alt">You can use basic HTML tags like &lt;p&gt;, &lt;h2&gt;, &lt;strong&gt;, &lt;ul&gt;, etc.</span>
        </label>
      </div>

      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-4">
          <span class="label-text font-bold">Published?</span> 
          <input type="checkbox" name="published" class="checkbox checkbox-primary" checked={post.published} />
        </label>
      </div>

      <div class="card-actions justify-end mt-6">
        <a href="/admin/blog" class="btn btn-ghost">Cancel</a>
        <button class="btn btn-primary text-white">Update Post</button>
      </div>
    </div>
  </form>
</div>
