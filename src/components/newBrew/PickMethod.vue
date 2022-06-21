<template>
  <PickHeader :title="'Combine with method'" />
  <section>
    <div v-for="method in methods" :key="method.title">
      <SingleMethod :method="method" @picked="picked" />
    </div>
  </section>
</template>

<script setup>
import PickHeader from "./PickHeader.vue";
import SingleMethod from "./SingleMethod.vue";

const methods = [
  {
    title: "French Press",
    svg: "#french",
    method: {
      gram: "33g",
      water: "500ml",
      grind: "Coarse",
      time: "4min",
    },
  },
  {
    title: "Cold Infusion",
    svg: "#infusion",
    method: {
      gram: "40g",
      water: "200ml",
      grind: "Coarse",
      time: "2 timer",
    },
  },
  {
    title: "Chemex",
    svg: "#chemex",
    method: {
      gram: "16g",
      water: "230ml",
      grind: "Fine",
      time: "3min",
    },
  },
  {
    title: "Kalita Wave",
    svg: "#kalita",
    method: {
      gram: "16g",
      water: "230ml",
      grind: "Fine",
      time: "3min",
    },
  },
];

const emit = defineEmits(["method"]);

const picked = (method) => {
  emit("method", method);
};
</script>

<style>
</style>