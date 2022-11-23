<template>
  <div class="new-brew">
    <PickHeader :title="'Combine with method'" />
    <section>
      <div v-for="method in methods" :key="method.title">
        <SingleMethod :method="method" @picked="picked" />
      </div>
    </section>
  </div>
</template>

<script setup>
import PickHeader from "../../components/newBrew/PickHeader.vue";
import SingleMethod from "../../components/newBrew/SingleMethod.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  coffee: String,
});

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

const router = useRouter();

const emit = defineEmits(["method"]);

// add to data instead of sending further, it's not used anyway
// but what to do about picture? default how can someone add it, and when?
// TODO: evt. make another view after step guide, where image can be added?
const picked = (method) => {
  router.push({
    name: "Guide1",
    // params: { coffee: props.coffee, method: JSON.stringify(method) },
  });
};
</script>

<style>
</style>