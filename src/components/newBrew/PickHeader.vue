<template>
  <header>
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