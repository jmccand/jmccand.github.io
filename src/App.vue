<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex-row">
      <img alt="Joel McCandless Logo" class="logo" src="@/assets/logo.png" height="40px"/>
      <h1>Joel McCandless</h1>
    </div>
      <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <div class="content">
    <RouterView />
  </div>

  <footer class="flex-row">
    <div class="flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
      </svg>
    </div>
    <p>&copy; 2025 Joel McCandless.</p>
  </footer>

</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #ddd;
  max-height: 100px;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
}

nav {
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: text-decoration 0.2s;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: var(--logo-blue);
}

.content {
  margin-top: 100px;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
}

footer {
  padding: 1rem;
  justify-content: space-between;
  background: var(--logo-blue);
  border-top: 1px solid #ddd;
  margin-top: 1rem;
}

footer p {
  margin: 0;
  color: white;
}
</style>
