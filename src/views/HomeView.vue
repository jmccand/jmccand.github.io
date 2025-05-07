<script setup>
import homepageData from '@/assets/data/homepage.json';
import projectsData from '@/assets/data/projects.json';
import researchData from '@/assets/data/research.json';
import { ref } from 'vue';

const featuredTitles = homepageData.featured;
var features = [];
projectsData.forEach((project) => {
  console.log(project);
  if (featuredTitles.includes(project.name)) {
    features.push(["projects", project.name, project.versions[0].images[0], project.details]);
  }
});
researchData.forEach((research) => {
  if (featuredTitles.includes(research.name)) {
    features.push(["research", research.name, research.images[0], research.details])
  }
});
const featureIndex = ref(0);

const getImageUrl = (feature) => {
  return new URL(`../assets/images/${feature[0]}/${feature[2]}`, import.meta.url).href
}

</script>

<template>
  <main>
    <div class="flex-row id-card">
      <div class="portrait">
        <img src="@/assets/images/park.jpeg" alt="Portrait" />
      </div>
      <div>
        <h1>About Me</h1>
        <p>
          <b>
            CS Masters and CS/Computer Engineering Bachelors at Rensselaer Polytechnic Institute
          </b>
        </p>
        <p>
          Hi, I am a CS Masters student studying the computation behind intelligent behavior, including methods of Machine Learning, Computer Vision, and Control Systems.
          I enjoy taking a multidisciplinary approach to solve complex problems, pursuing ambitious goals to address modern needs.
        </p>
        <p>
          Explore my website to learn more about my projects, research, and interests!
        </p>
      </div>
    </div>
    <div class="flex-row down-arrow">
      <div class="bounce-fade">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 256 256"><path fill="#aaa" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"/></svg>
      </div>
    </div>
    <div class="flex-row mission-featured">
      <div class="mission">
        <h1>Mission Statement</h1>
        I will maintain a boundless curiosity for learning by embracing the excitement found in exploration. I will acquire both a breadth and depth of skills and unite fields in novel ways. I will maintain a standard for myself which builds self-esteem and pride in my accomplishments. I will give off gratitude for life and form friendships with those around me in an effort to grow together.
      </div>
      <div class="featured">
        <div>
          <svg v-if="featureIndex > 0" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256" @click="featureIndex--"><path fill="#aaa" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"></path></svg>
        </div>
        <div class="featured-content">
          <div>
            <img :src="getImageUrl(features[featureIndex])" alt="Feature Image" class="feature-image" />
          </div>
          <p class="feature-description">
            {{ features[featureIndex][3] }}
          </p>
        </div>
        <div>
          <svg v-if="featureIndex < features.length - 1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256" @click="featureIndex++"><path fill="#aaa" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></path></svg>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .portrait {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .portrait img {
    width: 100%;
    border-radius: 50%;
  }
  .id-card {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    gap: 20px;
    margin: 10% auto 5% auto;
    max-width: 1000px;
  }

  b {
    font-weight: 500;
    font-size: large;
  }

  p {
    font-size: medium;
    margin-bottom: 10px;
  }

  .down-arrow {
    justify-content: center;
    margin: 20px auto 40px auto;
  }

  .mission-featured {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    gap: 0;
  }

  .mission {
    padding: 20px;
    margin: 0;
    padding-right: 30px;
    border-right: 1px solid black;
  }

  .featured {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin: 0;
    max-width: 500px;
  }

  .featured-content {
    display: flex;
    flex-direction: column;
  }

  @keyframes bounce-fade {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(20px);
    opacity: 1;
  }
}

.bounce-fade {
  animation: bounce-fade 2s infinite ease-in-out;
}

.feature-image {
  max-height: 200px;
  margin: auto;
}

.feature-description {
  max-height: 5rem;
  overflow: hidden;
}
</style>
