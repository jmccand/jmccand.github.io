<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});
const project = props.project;

const isExpanded = ref(false);

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/projects/${imageName}`, import.meta.url).href
}
</script>

<template>
    <div class="flex-row project-tag" @click="toggleExpand">
        <div>
            <b>{{ project.name }}</b>
            <div class="links">
                <a v-for="link in project.more" :href="link[1]" :key="link[0]" target="_blank">{{ link[0] }}</a>
            </div>
        </div>
        <img :src="getImageUrl(project.images[0])" alt="Project Image" class="project-image"/>
    </div>
</template>

<style scoped>
    .project-tag {
        padding: 20px;
        margin: 0 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        gap: 20px;
        margin: 20px auto;
        max-width: 1000px;
        align-items: top;
    }

    .project-image {
        max-width: 100%;
        max-height: 80px;
        height: auto;
        border-radius: 5px;
        margin: auto;
    }

    b {
        font-weight: 500;
        font-size: large;
    }

    .links {
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }
</style>
