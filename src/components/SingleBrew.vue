<template>
  <article class="brew">
    <header>
      <img src="../assets/images/ColdBrew.jpg" :alt="brew.img.alt" />

      <div v-if="brew.isFave" class="fave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
        >
          <circle cx="17" cy="17" r="17" />
          <path
            class="a"
            fill="white"
            d="M3.285,5.285a4.386,4.386,0,0,1,6.2,0l1.285,1.284,1.285-1.284a4.385,4.385,0,0,1,6.2,0c1.713,1.713,1.193,4.554,0,6.2-4.375,6.046-6.557,7.487-7.487,7.487s-3.464-1.216-7.487-7.488c-1.239-1.932-1.712-4.489,0-6.2Z"
            transform="translate(6.236 6.172)"
          />
        </svg>
      </div>
    </header>
    <div class="content-wrapper">
      <div class="brew-coffee">
        <svg class="brew-method-icon">
          <use :xlink:href="brew.method.svg" />
        </svg>
        <div class="brew-description">
          <h3>
            {{ brew.method.title }}
          </h3>
          <p>{{ brew.coffee.title }} from Coffee Colective</p>
        </div>
      </div>
      <div class="brew-method">
        <p>
          <svg class="method-icon">
            <use xlink:href="#bean" />
          </svg>
          {{ brew.method.method.gram }}
        </p>
        <p>
          <svg class="method-icon">
            <use xlink:href="#water" />
          </svg>
          {{ brew.method.method.water }}
        </p>
        <p>
          <svg class="method-icon">
            <use xlink:href="#grind" />
          </svg>
          {{ brew.method.method.grind }}
        </p>
        <p>
          <svg class="method-icon">
            <use xlink:href="#time" />
          </svg>
          {{ brew.method.method.time }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  brew: Object,
});
</script>

<style>
.brew {
  border-radius: 25px;
  overflow: hidden;
  background: var(--brew-bg-color);
  margin: 1rem 0 2rem 0;
}

/* header */
.brew header {
  position: relative;
}

.brew img {
  /* width: 100%; */
  object-fit: cover;
  max-height: 175px;
}

/* fave */
.brew .fave {
  position: absolute;
  top: 15px;
  left: 15px;
}

/* brew descriptions/content */
.brew-coffee,
.method {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.brew-description > * {
  margin: 0.25rem 0;
}

.brew-description > p {
  color: var(--medium-text-color);
  font-size: 0.9rem;
}

.brew h3 {
  text-transform: uppercase;
}
</style>