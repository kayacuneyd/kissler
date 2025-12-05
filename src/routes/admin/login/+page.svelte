<script>
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let error = '';
  let loading = false;

  async function handleLogin() {
    loading = true;
    error = '';
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        goto('/admin');
      } else {
        const data = await res.json();
        error = data.message || 'Login failed';
      }
    } catch (err) {
      error = 'An error occurred';
    } finally {
      loading = false;
    }
  }
</script>

<div class="flex justify-center items-center min-h-[60vh]">
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title justify-center mb-4">Admin Login</h2>
      
      {#if error}
        <div class="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      {/if}

      <form on:submit|preventDefault={handleLogin}>
        <div class="form-control w-full max-w-xs">
          <label class="label" for="username">
            <span class="label-text">Username</span>
          </label>
          <input type="text" id="username" bind:value={username} class="input input-bordered w-full max-w-xs" required />
        </div>

        <div class="form-control w-full max-w-xs mt-4">
          <label class="label" for="password">
            <span class="label-text">Password</span>
          </label>
          <input type="password" id="password" bind:value={password} class="input input-bordered w-full max-w-xs" required />
        </div>

        <div class="card-actions justify-end mt-6">
          <button class="btn btn-primary w-full" disabled={loading}>
            {#if loading}Logging in...{:else}Login{/if}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>