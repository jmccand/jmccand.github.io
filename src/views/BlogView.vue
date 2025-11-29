<template>
  <div class="blog-container">
    <h1>Blog</h1>
    <div class="coming-soon">
      <div class="icon">✍️</div>
      <h2>Coming Soon</h2>
      <p>This space will feature articles, insights, and updates about my projects and experiences.</p>
    </div>
  </div>
</template>

<style scoped>
.blog-container {
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-heading);
}

.coming-soon {
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;
  padding: 3rem;
  background: var(--color-background-soft);
  border-radius: 16px;
  border: 2px dashed var(--color-border);
}

.icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.coming-soon h2 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.coming-soon p {
  color: var(--color-text-light);
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
