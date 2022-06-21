<template>
  <article class="coffee">
    <header>
      <img src="../assets/images/header-coffeecollective.jpg" alt="" />
    </header>
    <div class="content-wrapper">
      <div class="description">
        <h3>
          {{ coffee.title }}
        </h3>
        <p>
          {{ coffee.description }}
        </p>
      </div>
      <div class="details">
        <div>
          <h4>Process</h4>
          <p>
            {{ coffee.process }}
          </p>
        </div>
        <div>
          <h4>Roast Profile</h4>
          <p>
            {{ coffee.roastProfile }}
          </p>
        </div>
        <div>
          <h4>Varieties</h4>
          <span v-for="variety in coffee.varieties" :key="variety"
            >{{ variety }},
          </span>
        </div>
        <div>
          <h4>Country</h4>
          <p>
            {{ coffee.country }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  coffee: Array,
});

// set dark theme on every other here
</script>

<style>
.coffee {
  background: var(--light-secondary-color);
  border-radius: 25px;
  overflow: hidden;
  margin: 2rem 0;
}

.description p {
  margin: 1rem 0 1.5rem 0;
  color: var(--light-medium-text-color);
}

.details {
  display: grid;
  grid-template:
    "a b" 1fr
    "c d" 1fr;
  gap: 1rem;
}

.details h4 {
  color: var(--light-medium-text-color);
  text-transform: uppercase;
  margin: 0.2rem 0;
}

.details h4,
.coffee p,
.coffee span {
  font-size: 0.85rem;
  line-height: 1.2rem;
}
</style>