<script setup>
import { getImage } from '@/utils/imageRegistry';
import experiencesData from '@/assets/data/experiences.json';
import { computed } from 'vue';

// Process experiences with imported images from registry
const experiences = computed(() => {
  return experiencesData.map(exp => ({
    ...exp,
    logo: getImage(exp.logo)
  }));
});
</script>

<template>
  <main class="experience-page">
    <div class="header">
      <h1>Professional Experience</h1>
      <p class="subtitle">Building innovative solutions through technology and research</p>
    </div>

    <div class="timeline">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="experience-card"
        :class="{ 'current': exp.current }"
      >
        <div class="card-header">
          <div class="logo-container">
            <img :src="exp.logo" :alt="exp.company" loading="lazy" />
          </div>
          <div class="header-info">
            <h2>{{ exp.position }}</h2>
            <h3>{{ exp.company }}</h3>
            <p v-if="exp.team" class="team">{{ exp.team }}</p>
            <p v-if="exp.department" class="team">{{ exp.department }}</p>
            <span class="period" :class="{ 'current-badge': exp.current }">
              {{ exp.current ? 'Current Position' : exp.period }}
            </span>
          </div>
        </div>
        <div class="card-body">
          <p class="description">{{ exp.description }}</p>
          <div class="skills">
            <span v-for="(skill, idx) in exp.skills" :key="idx" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.experience-page {
  padding: 2rem 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--color-text-light);
  font-size: 1.1rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2px;
}

.experience-card {
  position: relative;
  margin-bottom: 2.5rem;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.experience-card::before {
  content: '';
  position: absolute;
  left: -2.5rem;
  top: 2rem;
  width: 12px;
  height: 12px;
  background: var(--gray-300);
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--gray-300);
}

.experience-card.current::before {
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent), 0 0 0 6px rgba(245, 158, 11, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 3px var(--accent), 0 0 0 6px rgba(245, 158, 11, 0.2);
  }
  50% {
    box-shadow: 0 0 0 3px var(--accent), 0 0 0 10px rgba(245, 158, 11, 0.1);
  }
}

.experience-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-color: var(--primary);
}

.experience-card.current {
  border-color: var(--accent);
  background: linear-gradient(135deg, #ffffff 0%, #fffbf5 100%);
}

.card-header {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: start;
}

.logo-container {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 12px;
  padding: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.header-info {
  flex: 1;
}

.header-info h2 {
  color: var(--color-heading);
  font-size: 1.5rem;
  margin: 0 0 0.25rem 0;
}

.header-info h3 {
  color: var(--primary);
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
}

.team {
  color: var(--color-text-light);
  font-size: 0.95rem;
  margin: 0.25rem 0;
  line-height: 1.4;
}

.period {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: var(--gray-100);
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 6px;
}

.current-badge {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}

.card-body {
  margin-left: calc(80px + 1.5rem);
}

.description {
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.4rem 0.875rem;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1rem;
  }

  .timeline::before {
    left: 0.25rem;
  }

  .experience-card {
    padding: 1.5rem;
  }

  .experience-card::before {
    left: -1.25rem;
    width: 10px;
    height: 10px;
    box-shadow: 0 0 0 2px var(--gray-300);
  }

  .experience-card.current::before {
    box-shadow: 0 0 0 2px var(--accent), 0 0 0 4px rgba(245, 158, 11, 0.2);
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 0 2px var(--accent), 0 0 0 4px rgba(245, 158, 11, 0.2);
    }
    50% {
      box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px rgba(245, 158, 11, 0.1);
    }
  }

  .card-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .card-body {
    margin-left: 0;
  }

  .logo-container {
    width: 60px;
    height: 60px;
  }
}
</style>
