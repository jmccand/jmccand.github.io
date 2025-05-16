<script setup>
import homepageData from '@/assets/data/homepage.json';
import projectsData from '@/assets/data/projects.json';
import researchData from '@/assets/data/research.json';
import QuotesGraph from '@/components/QuotesGraph.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const featuredTitles = homepageData.featured;
var features = [];
researchData.forEach((research) => {
  if (featuredTitles.includes(research.name)) {
    features.push(["research", research.name, research.images[0]])
  }
});
projectsData.forEach((project) => {
  if (featuredTitles.includes(project.name)) {
    features.push(["projects", project.name, project.versions[0].images[0]]);
  }
});
const featureIndex = ref(0);

const getImageUrl = (feature) => {
  return new URL(`../assets/images/${feature[0]}/${feature[2]}`, import.meta.url).href
}

const scrollToMission = () => {
  document.getElementById('mission').scrollIntoView({ behavior: 'smooth' });
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
    <div class="flex-row down-arrow" @click="scrollToMission">
      <div class="bounce-fade">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 256 256"><path fill="#aaa" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"/></svg>
      </div>
    </div>
    <div class="flex-row mission-featured" id="mission">
      <div class="mission">
        <h1>Mission Statement</h1>
        <div class="mission-statement">
          <svg class="begin-quote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2z" clip-rule="evenodd"/></svg>
          <div class="mission-body">I will maintain a boundless curiosity for learning by embracing the excitement found in exploration. I will acquire both a breadth and depth of skills and unite fields in novel ways. I will maintain a standard for myself which builds self-esteem and pride in my accomplishments. I will give off gratitude for life and form friendships with those around me in an effort to grow together.</div>
          <svg class="end-quote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2z" clip-rule="evenodd"/></svg>
        </div>
      </div>
      <div class="featured">
        <div class="feature-arrow-container">
          <svg v-if="featureIndex > 0" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256" @click="featureIndex--"><path fill="#aaa" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"></path></svg>
        </div>
        <div class="featured-content">
          <h2>Featured</h2>
          <div class="featured-image-container">
            <img :src="getImageUrl(features[featureIndex])" alt="Feature Image" class="feature-image" />
          </div>
          <div class="feature-text">
            <p class="feature-name">{{ features[featureIndex][1] }}</p>
            <RouterLink :to="`/${features[featureIndex][0]}`">Continue to {{ features[featureIndex][0] }} ></RouterLink>
          </div>
        </div>
        <div class="feature-arrow-container">
          <svg v-if="featureIndex < features.length - 1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256" @click="featureIndex++"><path fill="#aaa" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></path></svg>
        </div>
      </div>
    </div>
    <div class="quotes">
      <h1>Quotes Wall</h1>
      <p>
          "I love finding the bits of catchy wisdom contained in quotes." - Joel McCandless
      </p>
      <QuotesGraph />
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

  .mission-statement {
    border-radius: 10px;
    background-color: #eee;
    padding: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }

  .begin-quote {
    transform: rotate(180deg);
  }

  .mission-body {
    width: 90%;
    align-self: center;
  }

  .end-quote {
    align-self: flex-end;
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
    gap: 20px;
    align-items: center;
  }

  .featured-image-container {
    display: flex;
    height: 200px;
    width: 300px;
  }

  @keyframes fade {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }

  .feature-arrow-container {
    display: flex;
    width: 50px;
    height: 50px;
    animation: fade 2s infinite ease-in-out;
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

.feature-text {
  text-align: center;
}

.feature-name {
  padding: 0;
  margin: 0;
}

.feature-image {
  max-height: 100%;
  max-width: 100%;
  margin: auto;
}

.quotes {
  padding: 20px;
  margin: 0;
  margin-top: 40px;
}
</style>
