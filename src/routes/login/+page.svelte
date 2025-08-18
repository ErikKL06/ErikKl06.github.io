<script>
  let email = '';
  let password = '';
  function handleLogin() {
    // Placeholder for login logic
    alert(`Logging in as ${email}`);
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
