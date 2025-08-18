<script>
  let email = '';
  let password = '';
  let confirmPassword = '';
  function handleRegister() {
    // Placeholder for register logic
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Registering ${email}`);
  }
</script>

<main>
  <h1>Register</h1>
  <form on:submit|preventDefault={handleRegister}>
    <label>Email:
      <input type="email" bind:value={email} required />
    </label>
    <br />
    <label>Password:
      <input type="password" bind:value={password} required />
    </label>
    <br />
    <label>Confirm Password:
      <input type="password" bind:value={confirmPassword} required />
    </label>
    <br />
    <button type="submit">Register</button>
  </form>
  <p>Already have an account? <a href="/login">Login here</a>.</p>
</main>
