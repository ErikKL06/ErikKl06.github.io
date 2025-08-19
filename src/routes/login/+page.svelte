<script>
  import { supabase } from "$lib/supabaseClient";
    import { redirect } from "@sveltejs/kit";
  let email = '';
  let password = '';
  async function handleLogin() {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert(`Logging in as ${email}`);
      redirect('/'); // Use the redirect function from SvelteKit
    }
  }
</script>

<main>
  <h1>Login</h1>
  <form on:submit|preventDefault={handleLogin}>
    <label>Email:
      <input type="email" bind:value={email} required />
    </label>
    <br />
    <label>Password:
      <input type="password" bind:value={password} required />
    </label>
    <br />
    <button type="submit">Login</button>
  </form>
  <p>Don't have an account? <a href="/register">Register here</a>.</p>
</main>
