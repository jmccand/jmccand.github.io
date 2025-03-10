<script setup>
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
      `<div class="bounce-fade">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="flex-row">
      <div class="mission">
        <h1>Mission Statement</h1>
        I will maintain a boundless curiosity for learning by embracing the excitement found in exploration. I will acquire both a breadth and depth of skills and unite fields in novel ways. I will maintain a standard for myself which builds self-esteem and pride in my accomplishments. I will give off gratitude for life and form friendships with those around me in an effort to grow together.
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
    margin: 60px auto 0 auto;
    max-width: 1000px;
  }

  b {
    font-weight: 700;
    font-size: large;
  }

  p {
    font-size: medium;
    margin-bottom: 10px;
  }

  .down-arrow {
    justify-content: center;
    margin-top: 20px;
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
</style>
