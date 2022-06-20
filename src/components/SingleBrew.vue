<template>
  <article class="brew">
    <header>
      <img src="../assets/images/ColdBrew.jpg" :alt="brew.img.alt" />
    </header>
    <div class="brew-wrapper">
      <div class="brew-coffee">
        <svg class="infusion">
          <use xlink:href="#infusion" />
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

.brew img {
  width: 100%;
  object-fit: cover;
  max-height: 175px;
}

.brew-wrapper {
  padding: 1.5rem;
}

.infusion {
  /* height: 60px;
  width: 40px; */
  width: 39px;
  height: 66px;
  margin-right: 2rem;
}

.brew-coffee {
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

.brew-method {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brew-method > p {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.4rem 0.2rem 0.2rem 0.2rem;
  font-size: 0.75rem;
  color: var(--light-text-color);
}

.method-icon {
  height: 0.75rem;
  width: 1rem;
  margin-right: 0.2rem;
}
</style>