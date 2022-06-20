<template>
  <div class="faves">
    <header>
      <h1>Favorites</h1>
    </header>
    <BrewList :brews="faveBrews" />
  </div>
  <Navbar />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import BrewList from "../components/BrewList.vue";
import { ref } from "vue";

const brews = [
  {
    coffee: {
      title: "KIENI ESPRESSO",
      description:
        "En frugtbombe af en espresso med aroma af brombær, solbær, stikkelbær og fyldig, olieret afslutning.",
      process: "Washed",
      roastProfile: "Medium",
      varieties: ["Castilo", "Caturra"],
      country: "Guatemala",
    },
    method: {
      title: "Cold Infusion 1",
      method: {
        gram: "40g",
        water: "200ml",
        grind: "Coarse",
        time: "2 timer",
      },
    },
    img: {
      name: "ColdBrew.jpg",
      alt: "cold brew",
    },
    isFave: true,
    id: 1,
  },
  {
    coffee: {
      title: "KIENI",
      description:
        "En frugtbombe af en espresso med aroma af brombær, solbær, stikkelbær og fyldig, olieret afslutning.",
      process: "Washed",
      roastProfile: "Medium",
      varieties: ["Castilo", "Caturra"],
      country: "Guatemala",
    },
    method: {
      title: "Cold Infusion 2",
      method: {
        gram: "40g",
        water: "200ml",
        grind: "Coarse",
        time: "2 timer",
      },
    },
    img: {
      name: "ColdBrew.jpg",
      alt: "cold brew",
    },
    isFave: false,
    id: 2,
  },
];

const faveBrews = brews.filter((b) => {
  return b.isFave;
});
</script>

<style>
</style>