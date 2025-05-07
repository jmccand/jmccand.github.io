<script setup>
import { ref } from 'vue'
import researchData from '@/assets/data/research.json';
import Research from '@/components/Research.vue';
const research = ref(researchData);
</script>

<template>
    <img class="rpi-image" src="@/assets/images/rpi-logo.png" alt="Research" />
    <div class="spacer"></div>
    <div class="blur">
        <h1>Research & School-Endorsed Projects</h1>
        <div class="research-grid">
            <Research v-for="researchLine in research" :key="researchLine.name" :researchLine="researchLine"/>
        </div>
    </div>
</template>

<style scoped>
    .rpi-image {
        position: sticky;
        top: 150px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        opacity: 0.5;
        z-index: -1;
    }

    .spacer {
        height: 50px;
    }

    .blur {
        background-color: rgba(255, 255, 255, 0.8);
        padding-top: 20px;
        box-shadow: 0 -5px 4px rgba(255, 255, 255, 0.8);
    }

    h1 {
        margin: 40px auto 20px auto;
        font-size: xx-large;
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }

    .research-grid {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
        margin: 20px auto;
        max-width: 1000px;
    }
</style>
