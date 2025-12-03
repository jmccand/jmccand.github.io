<script setup>
const props = defineProps({
    researchLine: {
        type: Object,
        required: true
    }
});
const researchLine = props.researchLine;

const getImageUrl = (imageName) => {
  return new URL(`../assets/images/research/${imageName}`, import.meta.url).href
}
</script>

<template>
    <div class="research-tag">
        <div class="content">
            <div class="title">
                <b>{{ researchLine.name }}</b>
                <div class="source">
                    {{ researchLine.source }}
                </div>
            </div>
            <img :src="getImageUrl(researchLine.images[0])" alt="research Image" class="research-image" loading="lazy"/>
            <div class="links">
                <a v-for="link in researchLine.more" :href="link[1]" :key="link[0]" target="_blank">{{ link[0] }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .research-tag {
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
        gap: 20px;
        width: 100%;
        flex-grow: 1;
    }

    .title {
        padding-bottom: 10px;
        border-bottom: 1px solid black;
    }

    .source {
        font-style: italic;
    }

    .research-image {
        max-width: 100%;
        max-height: 300px;
        height: auto;
        border-radius: 5px;
        margin: auto;
    }

    b {
        font-weight: 500;
        font-size: x-large;
    }

    .links {
        display: flex;
        gap: 20px;
        margin-top: 20px;
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
        max-width: 60px;
        max-height: 60px;
        height: auto;
        border-radius: 5px;
    }

    .earlier-link {
        color: black;
        gap: 0;
        font-size: small;
    }
</style>
