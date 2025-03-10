<script setup>
import { ref } from 'vue'
import projectsData from '@/assets/data/projects.json';
const projects = ref(projectsData);
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/projects/${imageName}`, import.meta.url).href
}
</script>

<template>
    <h1>My Projects</h1>
    <div class="project-grid">
        <div v-for = "project in projects" :key = "project.name" class="project-card">
            <b>{{ project.name }}</b>
            <img :src="getImageUrl(project.images[0])" alt="Project Image" class="project-image"/>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        margin: 40px auto 20px auto;
        font-size: xx-large;
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }

    .project-grid {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin: 20px auto;
        max-width: 1000px;
    }

    .project-card {
        padding: 20px;
        margin: 0 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        gap: 20px;
        margin: 20px auto;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-image {
        max-width: 100%;
        max-height: 300px;
        height: auto;
        border-radius: 5px;
        margin: auto;
    }

    b {
        font-weight: 500;
        font-size: large;
    }
</style>
