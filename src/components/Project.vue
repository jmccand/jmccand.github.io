<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps({
    projectLine: {
        type: Object,
        required: true
    }
});
const projectLine = props.projectLine;

const isExpanded = ref(false);

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};
const getImageUrl = (imageName) => {
  return new URL(`../assets/images/projects/${imageName}`, import.meta.url).href
}
</script>

<template>
    <div class="project-line-container" :class="{ expanded: isExpanded }" @click="toggleExpand">
        <div class="flex-row project-tag">
            <div class="text-content">
                <p>
                    <b>{{ projectLine.name }}</b>
                    <span v-if="projectLine.versions.length > 1" class='version'>{{ projectLine.versions.length > 1 ? `v${projectLine.versions.length}` : '' }}</span>
                </p>
                <p v-if="isExpanded">{{ projectLine.versions[0].details }}</p>
                <div class="links">
                    <a v-for="link in projectLine.versions[0].more" :href="link[1]" :key="link[0]" target="_blank">{{ link[0] }}</a>
                </div>
            </div>
            <img :src="getImageUrl(projectLine.versions[0].images[0])" alt="Project Image" class="project-image" :class="{ expanded: isExpanded }"/>
            <div v-if="isExpanded" @click.stop="toggleExpand()" class="x">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
        </div>
        <div v-for="(project, index) in projectLine.versions.slice(1)" class="flex-row earlier-version" v-show="isExpanded">
            <div class="text-content">
                <div class="flex-row earlier-content">
                    <span class='version'>{{ `v${projectLine.versions.length - index - 1}` }}</span>
                    <p>
                        {{ isExpanded ? project.details : '' }}
                        Links: <a v-for="link in project.more" :href="link[1]" :key="link[0]" target="_blank" class="earlier-link">{{ link[0] }}</a>
                    </p>
                </div>
            </div>
            <img :src="getImageUrl(project.images[0])" alt="Project Image" class="earlier-image" :class="{ expanded: isExpanded }"/>
        </div>
    </div>
</template>

<style scoped>
    .project-line-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin: 20px auto;
        gap: 20px;
        padding: 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        max-width: 1000px;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .project-line-container.expanded {
        grid-column: 1 / -1;
    }

    .project-line-container:hover {
        cursor: pointer;
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .project-line-container.expanded:hover {
        transform: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .project-tag {
        padding: 20px;
        margin: 0;
        align-items: start;
        width: 100%;
        flex-grow: 1;
    }

    .text-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        flex-grow: 1;
    }

    .project-image {
        max-width: 100%;
        max-height: 80px;
        height: auto;
        border-radius: 5px;
        margin: auto;
    }

    .project-image.expanded {
        max-height: 150px;
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

    .version {
        font-size: small;
        color: var(--logo-blue);
        font-weight: 500;
        border: 1px solid black;
        padding: 2px 5px;
        border-radius: 5px;
        margin-left: 10px;
    }

    .x {
        transition: scale 0.2s;
    }

    .x:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .earlier-version {
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        gap: 20px;
        border-top: 1px solid #ccc;
    }

    .earlier-content {
        gap: 20px;
        font-size: small;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .earlier-image {
        max-width: 100%;
        max-height: 40px;
        height: auto;
        border-radius: 5px;
    }

    .earlier-link {
        color: var(--color-text);
        gap: 0;
        font-size: small;
    }
</style>
