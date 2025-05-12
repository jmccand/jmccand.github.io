<script setup>
import { ref } from 'vue'
import groupsData from '@/assets/data/groups.json';
import Group from '@/components/Group.vue';
const groups = ref(groupsData);
</script>

<template>
    <h1>My Groups</h1>
    <div class="groups-grid">
        <Group v-for="groupLine in groups" :key="groupLine.name" :groupLine="groupLine"/>
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

    .groups-grid {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
        margin: 20px auto;
        max-width: 1000px;
    }
</style>
