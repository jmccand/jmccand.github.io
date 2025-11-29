<script setup>
import { ref } from 'vue'
import groupsData from '@/assets/data/groups.json';
import Group from '@/components/Group.vue';
const groups = ref(groupsData);
</script>

<template>
  <main class="groups-page">
    <div class="header">
      <h1>My Groups</h1>
      <p class="subtitle">Teams, clubs, and communities I'm proud to be part of</p>
    </div>

    <div class="groups-grid">
      <Group v-for="groupLine in groups" :key="groupLine.name" :groupLine="groupLine"/>
    </div>
  </main>
</template>

<style scoped>
.groups-page {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--color-text-light);
  font-size: 1.1rem;
}

.groups-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .groups-grid {
    grid-template-columns: 1fr;
  }
}
</style>
