<script setup>
import { ref } from 'vue';
const props = defineProps({
    groupLine: {
        type: Object,
        required: true
    }
});
const groupLine = props.groupLine;

const imageIndex = ref(0);

const getImageUrl = (imageName) => {
  return new URL(`../assets/images/groups/${imageName}`, import.meta.url).href
}
</script>

<template>
    <div class="group-tag">
        <div class="content">
            <div class="title">
                <b>{{ groupLine.name }}</b>
            </div>
            <div class="image-arrows">
                <div class="group-arrow-container">
                    <svg v-if="imageIndex > 0" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256" @click="imageIndex--"><path fill="#aaa" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"></path></svg>
                </div>
                <div class="image-caption">
                    <img :src="getImageUrl(groupLine.images[imageIndex][0])" alt="Group Image" class="group-image"/>
                    <div class="caption">
                        {{ groupLine.images[imageIndex][1] }}
                    </div>
                </div>
                <div class="group-arrow-container">
                    <svg v-if="imageIndex < groupLine.images.length - 1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256" @click="imageIndex++"><path fill="#aaa" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></path></svg>
                </div>
            </div>
            <div class="body">
                {{ groupLine.details }}
            </div>
            <div class="links">
                <a v-for="link in groupLine.more" :href="link[1]" :key="link[0]" target="_blank">{{ link[0] }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.group-tag {
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

.group-tag:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-color: var(--secondary);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
}

.title {
  padding: 0;
}

.title b {
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-heading);
}

.image-arrows {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--gray-50);
  border-radius: 12px;
  padding: 1rem;
  min-height: 350px;
}

.image-caption {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.group-image {
  max-width: 100%;
  max-height: 300px;
  width: auto;
  height: auto;
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  object-fit: contain;
}

.caption {
  font-size: 0.9rem;
  text-align: center;
  color: var(--color-text-light);
  font-style: italic;
  padding: 0 1rem;
}

.body {
  color: var(--color-text);
  line-height: 1.7;
}

.links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.links a {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.links a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.group-arrow-container {
  display: flex;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.group-arrow-container:hover svg {
  transform: scale(1.2);
}

.group-arrow-container svg {
  transition: all 0.3s ease;
}

.group-arrow-container svg path {
  fill: var(--primary);
}

@keyframes fade {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
