<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const baseUrl = import.meta.env.BASE_URL;
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<template>
  <header>
    <RouterLink to="/" @click="closeMobileMenu">
      <div class="flex-row nametag">
        <img alt="Joel McCandless Logo" class="logo" src="@/assets/logo.png" height="40px"/>
        <h1>Joel McCandless</h1>
      </div>
    </RouterLink>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/groups">Groups</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
    </nav>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-button" @click="toggleMobileMenu" aria-label="Toggle menu">
      <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Mobile Navigation Dropdown -->
    <nav class="mobile-nav" :class="{ 'mobile-nav-open': mobileMenuOpen }">
      <RouterLink to="/" @click="closeMobileMenu">Home</RouterLink>
      <RouterLink to="/experience" @click="closeMobileMenu">Experience</RouterLink>
      <RouterLink to="/projects" @click="closeMobileMenu">Projects</RouterLink>
      <RouterLink to="/groups" @click="closeMobileMenu">Groups</RouterLink>
      <RouterLink to="/blog" @click="closeMobileMenu">Blog</RouterLink>
    </nav>
  </header>

  <div class="content">
    <RouterView />
  </div>

  <footer class="flex-row">
    <div class="flex-row icons">
      <a href="mailto:mail@joelmccandless.com" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/joel-mccandless-a09275273/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
      </a>
      <a href="https://github.com/jmccand" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
      </a>
      <a :href="`${baseUrl}Joel_McCandless.pdf`" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
          <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z"/>
          <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103"/>
        </svg>
      </a>
      <a href="tel:781-267-2701">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-telephone-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg>
      </a>
    </div>
  <p>
    <b>
      &copy; 2025 Joel McCandless.
    </b>
  </p>
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
  border-bottom: 2px solid var(--gray-200);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: var(--color-heading);
}

.logo {
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* Desktop Navigation */
.desktop-nav {
  font-size: 1.1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.desktop-nav a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.desktop-nav a:hover {
  background-color: var(--gray-100);
  color: var(--primary);
}

.desktop-nav a.router-link-exact-active {
  background-color: var(--primary);
  color: white;
}

/* Mobile Menu Button */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  color: var(--color-heading);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-menu-button:hover {
  background-color: var(--gray-100);
  color: var(--primary);
}

/* Mobile Navigation Dropdown */
.mobile-nav {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background: white;
  border-bottom: 2px solid var(--gray-200);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-nav.mobile-nav-open {
  max-height: 400px;
}

.mobile-nav a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--gray-200);
  transition: all 0.3s ease;
}

.mobile-nav a:last-child {
  border-bottom: none;
}

.mobile-nav a:hover {
  background-color: var(--gray-100);
  color: var(--primary);
}

.mobile-nav a.router-link-exact-active {
  background-color: var(--primary);
  color: white;
}

/* Mobile Styles */
@media (max-width: 768px) {
  header {
    padding: 1rem;
  }

  h1 {
    font-size: 1.2rem;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }

  .mobile-nav {
    display: flex;
  }

  footer {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 1rem;
  }

  .icons {
    order: 1;
  }

  footer p {
    order: 2;
    text-align: center;
  }
}

.content {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
}

footer {
  padding: 1.5rem 2rem;
  justify-content: space-between;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-top: 3px solid var(--secondary);
  margin-top: 2rem;
}

footer p {
  margin: 0;
  color: white;
}

.icons {
  gap: 1.5rem;
}

.icons a {
  transition: transform 0.3s ease;
  padding: 0.5rem;
  display: inline-flex;
  border-radius: 8px;
}

.icons a:hover {
  transform: translateY(-3px);
  background-color: rgba(255, 255, 255, 0.1);
}

b {
  font-weight: 500;
  font-size: 1rem;
}

.nametag {
  color: var(--color-heading);
  transition: all 0.3s ease;
}

.nametag:hover {
  color: var(--primary);
}
</style>
