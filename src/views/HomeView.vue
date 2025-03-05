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
    margin: 60px auto;
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
</style>
