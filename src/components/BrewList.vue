<template>
  <section class="brew-list">
    <p>Previous Brews</p>
    <div v-for="brew in brews.slice().reverse()" :key="brew.id">
      <SingleBrew :brew="brew" />
    </div>
  </section>
</template>

<script setup>
import SingleBrew from "./SingleBrew.vue";

const props = defineProps({
  brews: Array,
});
</script>

<style>
.brew-list {
  margin: 2rem 0;
}

.brew-list > p {
  font-size: 0.95rem;
  color: var(--medium-text-color);
  font-weight: bold;
}
</style>