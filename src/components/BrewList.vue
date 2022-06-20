<template>
  <section class="brew-list">
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
