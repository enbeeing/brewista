<template>
  <div class="new-brew guide">
    <header>
      <router-link :to="{ name: 'Home' }">Back to Home</router-link>
    </header>
    <p>
      Coffee choice:
      {{ coffee.title }}
    </p>
    <p>
      Method choice:
      {{ method.title }}
    </p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  coffee: String,
  method: String,
});

const coffee = JSON.parse(props.coffee);
const method = JSON.parse(props.method);

const guide = [
  {
    id: 1,
    title: "Planing out your coffee",
    description:
      "To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee",
  },
  {
    id: 2,
    title: "Measure and grind beans",
    description:
      "Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.",
  },
  {
    id: 3,
    title: "filter",
    description:
      "Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.",
  },
  {
    id: 4,
    title: "Planning out your coffee",
    description:
      "To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee",
  },
  {
    id: 5,
    title: "Enjoy",
    description:
      "To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee",
  },
];
</script>

<style>
.guide a {
  text-decoration: none;
  color: var(--main-text-color);
}
</style>