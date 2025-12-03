<script setup>
import { ref, computed } from 'vue'
import projectsData from '@/assets/data/projects.json';
import Project from '@/components/Project.vue';

const projects = ref(projectsData);
const selectedCategory = ref('all');

const categories = computed(() => {
  const cats = new Set(['all', 'software', 'Open Source', 'Research']);
  return Array.from(cats);
});

// Helper function to parse date strings (handles "NOW", "M/YY", etc.)
const parseEndDate = (dateStr) => {
  if (!dateStr) return new Date(0); // Very old date if missing
  if (dateStr === 'NOW') return new Date(); // Current date

  // Parse M/YY or MM/YY format
  const parts = dateStr.split('/');
  if (parts.length === 2) {
    const month = parseInt(parts[0]);
    const year = 2000 + parseInt(parts[1]); // Convert YY to YYYY
    return new Date(year, month - 1); // Month is 0-indexed
  }

  return new Date(0); // Default to very old if can't parse
};

// Helper to get the most recent end date from a project's versions
const getMostRecentEndDate = (project) => {
  if (!project.versions || project.versions.length === 0) {
    return new Date(0);
  }

  const dates = project.versions.map(v => parseEndDate(v.end));
  return new Date(Math.max(...dates));
};

const filteredProjects = computed(() => {
  let filtered;

  if (selectedCategory.value === 'all') {
    filtered = projects.value;
  } else if (selectedCategory.value === 'software') {
    filtered = projects.value.filter(p => p.software === true);
  } else {
    filtered = projects.value.filter(p => p.category === selectedCategory.value);
  }

  // Sort by most recent end date (newest first)
  return filtered.slice().sort((a, b) => {
    const dateA = getMostRecentEndDate(a);
    const dateB = getMostRecentEndDate(b);
    return dateB - dateA; // Descending order (newest first)
  });
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
        {{ cat === 'all' ? 'All Projects' : cat === 'software' ? 'Software' : cat }}
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
