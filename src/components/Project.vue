<script setup>
import { ref } from 'vue';
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
  // Check if this is a research project
  const folder = projectLine.category === 'Research' ? 'research' : 'projects';
  return new URL(`../assets/images/${folder}/${imageName}`, import.meta.url).href
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
                <div class="links" :class="{ expanded: isExpanded }">
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
  width: 100%;
  padding: 0;
  background: white;
  border: 2px solid var(--color-border);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-line-container.expanded {
  grid-column: 1 / -1;
  border-color: var(--primary);
}

.project-line-container:hover {
  cursor: pointer;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-color: var(--primary-light);
}

.project-line-container.expanded:hover {
  transform: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.project-tag {
  padding: 1.5rem;
  margin: 0;
  align-items: start;
  width: 100%;
  gap: 1rem;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  flex-grow: 1;
}

.text-content p {
  color: var(--color-text);
  line-height: 1.7;
  margin: 0;
}

.project-image {
  max-width: 100%;
  max-height: 90px;
  height: auto;
  border-radius: 12px;
  margin: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-image.expanded {
  max-height: 180px;
}

b {
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--color-heading);
}

.links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.links.expanded {
  margin-top: 0;
}

.links a {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-dark) 100%);
  color: white;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.links a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(8, 145, 178, 0.3);
}

.version {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
  border: 2px solid var(--accent);
  background: var(--gray-50);
  padding: 0.25rem 0.625rem;
  border-radius: 6px;
  margin-left: 0.625rem;
  display: inline-block;
}

.x {
  transition: all 0.2s;
  color: var(--gray-600);
  padding: 0.5rem;
  border-radius: 8px;
}

.x:hover {
  cursor: pointer;
  transform: scale(1.1);
  color: var(--primary);
  background: var(--gray-100);
}

.earlier-version {
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  border-top: 2px solid var(--gray-200);
  background: var(--gray-50);
}

.earlier-content {
  gap: 1rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--color-text);
}

.earlier-content p {
  margin: 0;
}

.earlier-image {
  max-width: 70px;
  max-height: 70px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.earlier-link {
  color: var(--primary);
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  font-weight: 500;
}

.earlier-link:hover {
  background: var(--gray-100);
}
</style>
