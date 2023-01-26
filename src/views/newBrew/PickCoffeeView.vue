<template>
  <div class="new-brew">
    <PickHeader :title="'Pick your coffee'" to="Home" />
    <section class="list">
      <div v-for="coffee in coffees" :key="coffee.title">
        <SingleCoffee :coffee="coffee" @picked="picked" />
      </div>
    </section>
  </div>
</template>

<script setup>
import PickHeader from "../../components/newBrew/PickHeader.vue";
import SingleCoffee from "../../components/newBrew/SingleCoffee.vue";
import getCoffees from "../../composables/getCoffees";
import { useRouter } from "vue-router";

const { coffees, error, load } = getCoffees();

load();

const router = useRouter();

const picked = (coffee) => {
  localStorage.setItem("coffee", JSON.stringify(coffee));

  router.push({
    name: "Method",
  });
};
</script>