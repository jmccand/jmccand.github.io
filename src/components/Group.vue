<script setup>
import { defineProps, ref } from 'vue';
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
        justify-content: center;
        width: 100%;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        max-width: 1000px;
        transition: transform 0.2s, box-shadow 0.2s;
        background-color: white;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        width: 100%;
        flex-grow: 1;
    }

    .title {
        padding-top: 5px;
    }

    .image-arrows {
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        padding: 0 10px;
        height: 400px;
    }

    .image-caption {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-self: center;
        gap: 5px;
    }

    .group-image {
        max-width: 100%;
        max-height: 300px;
        border-radius: 5px;
        margin: auto;
        box-sizing: border-box;
    }

    .caption {
        font-size: 0.8rem;
        text-align: center;
    }

    b {
        font-weight: 500;
        font-size: x-large;
    }

    .links {
        display: flex;
        gap: 20px;
    }

    .group-arrow-container {
        display: flex;
        width: 50px;
        height: 50px;
        animation: fade 2s infinite ease-in-out;
    }
</style>
