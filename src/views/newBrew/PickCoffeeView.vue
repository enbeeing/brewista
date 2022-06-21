<template>
  <div class="new-brew">
    <PickHeader :title="'Pick your coffee'" />
    <section>
      <div v-for="coffee in coffees" :key="coffee.title">
        <SingleCoffee :coffee="coffee" @picked="picked" />
      </div>
    </section>
  </div>
</template>

<script setup>
import PickHeader from "../../components/newBrew/PickHeader.vue";
import SingleCoffee from "../../components/newBrew/SingleCoffee.vue";
import { useRouter } from "vue-router";

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

const router = useRouter();

const picked = (coffee) => {
  router.push({ name: "Method", params: { coffee: JSON.stringify(coffee) } });
};
</script>