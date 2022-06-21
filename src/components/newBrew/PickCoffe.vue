<template>
  <PickHeader :title="'Pick your coffee'" />
  <section>
    <div v-for="coffee in coffees" :key="coffee.title">
      <SingleCoffee :coffee="coffee" @picked="picked" />
    </div>
  </section>
</template>

<script setup>
import PickHeader from "./PickHeader.vue";
import SingleCoffee from "./SingleCoffee.vue";
// const props = defineProps({
//   coffees: Array,
// });

const coffees = [
  {
    title: "KIENI ESPRESSO",
    description:
      "En frugtbombe af en espresso med aroma af brombær, solbær, stikkelbær og fyldig, olieret afslutning.",
    process: "Washed",
    roastProfile: "Medium",
    varieties: ["Castilo", "Caturra"],
    country: "Guatemala",
  },
  {
    title: "KIENI",
    description:
      "Saftig syrlighed med intens sødme. Fyldig og læskende med kompleks aroma af solbær, stikkelbær og brombær",
    process: "Washed",
    roastProfile: "Medium",
    varieties: ["Castilo", "Caturra"],
    country: "Guatemala",
  },
];

const emit = defineEmits(["coffee"]);

const picked = (coffee) => {
  emit("coffee", coffee);
};
</script>