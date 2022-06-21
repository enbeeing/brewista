<template>
  <header>
    <button>
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
import { router } from "vue";

const props = defineProps({
  title: String,
});
</script>

<style>
.new-brew > header {
  position: relative;
  text-align: center;
}

.new-brew button {
  border: none;
  background: none;
  position: absolute;
  left: 0;
  width: 50px;
}

.new-brew .back {
  max-width: 100%;
  color: var(--main-text-color);
  /* center diff later */
  transform: translateY(-4px);
}
</style>