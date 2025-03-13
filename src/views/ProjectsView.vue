<script setup>
import { ref } from 'vue'
import projectsData from '@/assets/data/projects.json';
import Project from '@/components/Project.vue';
const projects = ref(projectsData);
</script>

<template>
    <h1>My Projects</h1>
    <div class="project-grid">
        <Project v-for="project in projects" :key="project.name" :project="project"/>
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
</style>
