<script setup>
import QuotesGraph from '@/components/QuotesGraph.vue';
import homepageData from '@/assets/data/homepage.json';
import { getImage } from '@/utils/imageRegistry';
import { ref, computed } from 'vue';

const currentPhotoIndex = ref(0);

// Load data from JSON
const intro = homepageData.intro;
const quotesIntro = homepageData.quotes_intro;

// Process gallery photos with imported images from registry
const galleryPhotos = computed(() => {
  return homepageData.gallery.map(photo => ({
    ...photo,
    src: getImage(photo.image)
  }));
});

const portraitUrl = getImage(intro.portrait);

const nextPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % galleryPhotos.value.length;
};

const prevPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value - 1 + galleryPhotos.value.length) % galleryPhotos.value.length;
};

</script>

<template>
  <main>
    <!-- Intro Section -->
    <section class="intro">
      <div class="intro-content">
        <div class="portrait">
          <img :src="portraitUrl" :alt="intro.name" />
        </div>
        <div class="intro-text">
          <h1>{{ intro.name }}</h1>
          <p class="subtitle">{{ intro.subtitle }}</p>
          <p>{{ intro.about }}</p>
          <div class="mission-statement">
            <svg class="begin-quote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2z" clip-rule="evenodd"/></svg>
            <div class="mission-body">{{ intro.mission }}</div>
            <svg class="end-quote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2z" clip-rule="evenodd"/></svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery Section -->
    <section class="photo-gallery">
      <h2>Overview</h2>
      <p class="section-subtitle">A visual journey through my projects, research, and passions</p>

      <div class="gallery-showcase">
        <button @click="prevPhoto" class="nav-button nav-left" aria-label="Previous photo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/>
          </svg>
        </button>

        <div class="showcase-content">
          <div class="showcase-image">
            <img :src="galleryPhotos[currentPhotoIndex].src" :alt="galleryPhotos[currentPhotoIndex].title" loading="lazy" />
          </div>
          <div class="showcase-details">
            <span class="showcase-category">{{ galleryPhotos[currentPhotoIndex].category }}</span>
            <h3 class="showcase-title">{{ galleryPhotos[currentPhotoIndex].title }}</h3>
            <p class="showcase-description">{{ galleryPhotos[currentPhotoIndex].description }}</p>
          </div>
        </div>

        <button @click="nextPhoto" class="nav-button nav-right" aria-label="Next photo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"/>
          </svg>
        </button>
      </div>

      <div class="gallery-indicators">
        <button
          v-for="(photo, index) in galleryPhotos"
          :key="index"
          @click="currentPhotoIndex = index"
          class="indicator-dot"
          :class="{ active: currentPhotoIndex === index }"
          :aria-label="`Go to ${photo.title}`"
        ></button>
      </div>
    </section>

    <!-- Quote Wall Section -->
    <section class="quotes">
      <h2>Quotes Wall</h2>
      <p class="section-subtitle">
        "{{ quotesIntro }}" - Joel McCandless
      </p>
      <QuotesGraph />
    </section>
  </main>
</template>

<style scoped>
main {
  padding: 2rem 1rem;
}

/* Intro Section */
.intro {
  margin-bottom: 4rem;
}

.intro-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
}

.portrait {
  position: sticky;
  top: 120px;
}

.portrait img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.portrait img:hover {
  transform: scale(1.02);
}

.intro-text h1 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--secondary);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.intro-text p {
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.mission-statement {
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);
  border-left: 4px solid var(--accent);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.begin-quote {
  transform: rotate(180deg);
  color: var(--accent);
}

.mission-body {
  width: 95%;
  align-self: center;
  color: var(--color-text);
  font-style: italic;
  line-height: 1.8;
  padding: 0.5rem 0;
}

.end-quote {
  align-self: flex-end;
  color: var(--accent);
}

/* Photo Gallery Section */
.photo-gallery {
  margin: 6rem 0;
}

.photo-gallery h2 {
  text-align: center;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  color: var(--color-text-light);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.gallery-showcase {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
}

.nav-button {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--gray-300);
  background: white;
  color: var(--primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-button:hover {
  border-color: var(--primary);
  background: var(--primary);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.showcase-content {
  flex: 1;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--gray-200);
}

.showcase-image {
  flex: 0 0 450px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.showcase-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.showcase-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.showcase-category {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 20px;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
}

.showcase-title {
  color: var(--color-heading);
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
}

.showcase-description {
  color: var(--color-text);
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0;
}

.gallery-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--gray-400);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.indicator-dot:hover {
  border-color: var(--primary);
  transform: scale(1.2);
}

.indicator-dot.active {
  background: var(--primary);
  border-color: var(--primary);
  width: 32px;
  border-radius: 6px;
}

/* Quotes Section */
.quotes {
  margin: 6rem 0 2rem;
}

.quotes h2 {
  text-align: center;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.quotes .section-subtitle {
  margin-bottom: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .portrait {
    position: static;
    max-width: 250px;
    margin: 0 auto;
  }

  .gallery-showcase {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-button {
    width: 48px;
    height: 48px;
  }

  .nav-left, .nav-right {
    display: none;
  }

  .showcase-content {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .showcase-image {
    flex: none;
    width: 100%;
    height: 250px;
  }

  .showcase-title {
    font-size: 1.5rem;
  }

  .showcase-description {
    font-size: 1rem;
  }
}
</style>
