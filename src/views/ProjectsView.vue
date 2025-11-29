<script setup>
import { ref, computed } from 'vue'
import projectsData from '@/assets/data/projects.json';
import Project from '@/components/Project.vue';

const projects = ref(projectsData);
const selectedCategory = ref('all');

const categories = computed(() => {
  const cats = new Set(['all']);
  projects.value.forEach(project => {
    if (project.category) cats.add(project.category);
  });
  return Array.from(cats);
});

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projects.value;
  return projects.value.filter(p => p.category === selectedCategory.value);
});
</script>

<template>
  <main class="projects-page">
    <div class="header">
      <h1>My Projects</h1>
      <p class="subtitle">A collection of personal projects and research work</p>
    </div>

    <div class="filters" v-if="categories.length > 1">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="filter-btn"
        :class="{ active: selectedCategory === cat }"
      >
        {{ cat === 'all' ? 'All Projects' : cat }}
      </button>
    </div>

    <div class="project-grid">
      <Project v-for="projectLine in filteredProjects" :key="projectLine.name" :projectLine="projectLine"/>
    </div>
  </main>
</template>

<style scoped>
.projects-page {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--color-text-light);
  font-size: 1.1rem;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.625rem 1.25rem;
  border: 2px solid var(--color-border);
  background: white;
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border-color: var(--primary);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.project-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
