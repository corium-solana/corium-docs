<script setup>
// A live launchpad star, rendered by the site itself (corium.so/embed/star:
// the hottest coin on the curve, else the latest supernova) and framed here,
// so no renderer code lives in this repo. In dev, the launchpad's local
// devnet server (yarn dev:devnet in soldust/launch).
const src = import.meta.env.DEV ? 'http://localhost:5179/embed/star.html' : 'https://corium.so/embed/star';
</script>

<template>
  <div class="hero-star">
    <iframe
      class="hero-star-frame"
      :src="src"
      title="A live Corium star"
      loading="lazy"
      scrolling="no"
      referrerpolicy="no-referrer"
    />
  </div>
</template>

<style scoped>
.hero-star {
  display: flex;
  justify-content: center;
  width: 100%;
}

.hero-star-frame {
  display: block;
  width: min(460px, 76vw, 100%);
  aspect-ratio: 1;
  border: 0;
  background: #000;
  /* Fade the sky into the page so there is no box around the star. The
     caption sits at the bottom of the frame, so the fade stops short of it. */
  -webkit-mask-image: radial-gradient(circle at 50% 46%, #000 60%, transparent 84%);
  mask-image: radial-gradient(circle at 50% 46%, #000 60%, transparent 84%);
}
</style>
