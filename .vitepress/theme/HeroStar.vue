<script setup>
// The live star is rendered by the game itself (corium.so/embed/star) and
// framed here, so no renderer code lives in this repo.
const src = import.meta.env.DEV ? 'http://localhost:5174/embed/star.html' : 'https://www.corium.so/embed/star';
</script>

<template>
  <div class="hero-star">
    <iframe
      class="hero-star-frame"
      :src="src"
      title="The current Corium star, live"
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
