<template>
  <article class="brew">
    <header>
      <img :src="`./images/${brew.img.src}`" :alt="brew.img.alt" />
      <div class="fave" @click="toggleFave">
        <svg
          v-if="brew.isFave"
          class="isFave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            class="a"
            d="M3.314,5.318a4.5,4.5,0,0,1,6.363,0L11,6.636l1.319-1.317a4.5,4.5,0,0,1,6.363,0c1.757,1.757,1.224,4.673,0,6.364-4.489,6.2-6.727,7.682-7.682,7.682s-3.555-1.247-7.682-7.683c-1.271-1.982-1.757-4.606,0-6.363Z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            class="a"
            d="M3.314,5.318a4.5,4.5,0,0,1,6.363,0L11,6.636l1.319-1.317a4.5,4.5,0,0,1,6.363,0c1.757,1.757,1.224,4.673,0,6.364-4.489,6.2-6.727,7.682-7.682,7.682s-3.555-1.247-7.682-7.683c-1.271-1.982-1.757-4.606,0-6.363Z"
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
          <p>{{ brew.coffee.title }} from Coffee Collective</p>
        </div>
      </div>

      <MethodSymbolRow :method="brew.method.method" />
    </div>
  </article>
</template>

<script setup>
import MethodSymbolRow from "./MethodSymbolRow.vue";
import updateBrew from "../composables/updateBrew";
import { ref } from "vue";

const props = defineProps({
  brew: Object,
});

if (!props.brew.img.src) {
  props.brew.img.src = "img.svg";
}

const toggleFave = () => {
  props.brew.isFave = !props.brew.isFave;
  updateBrew(props.brew);
};
</script>

<style>
.brew {
  border-radius: 25px;
  overflow: hidden;
  background: var(--brew-bg-color);
}

/* header */
.brew header {
  position: relative;
}

.brew img {
  max-height: 175px;
  object-fit: cover;
}

/* fave */
.brew .fave {
  position: absolute;
  top: 15px;
  left: 15px;
  height: 30px;
  width: 30px;
  fill: var(--brew-bg-color);
}

.fave path {
  fill: var(--light-text-color);
}

.fave .isFave path {
  fill: var(--like-color);
}

/* brew descriptions/content */
.brew-coffee {
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  margin-bottom: 1rem;
}

/* .brew-description, */
.brew-description > * {
  margin: 5px 0;
}

.brew h3 {
  text-transform: uppercase;
  font-size: 1rem;
}

.brew-description > p {
  color: var(--medium-text-color);
  font-size: 0.7rem;
}
</style>