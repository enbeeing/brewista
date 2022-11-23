<template>
  <header class="pick-header">
    <button @click="router.go(-1)">
      <svg class="back">
        <use xlink:href="#arrowBack" />
      </svg>
    </button>
    <h3>
      {{ title }}
    </h3>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  title: String,
});

const router = useRouter();
</script>

<style>
.pick-header {
  text-align: center;
  display: grid;
  grid-auto-columns: 25px 1fr 25px;
  grid-template-areas: "button title .";
  align-items: center;
  gap: 1rem;
}

.pick-header button {
  border: none;
  background: none;
  grid-area: button;
}

.pick-header .back {
  max-width: 100%;
  color: var(--main-text-color);
  transform: translateY(2px);
}

.pick-header h3 {
  grid-area: title;
}
</style>