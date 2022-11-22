<template>
  <div class="faves">
    <header>
      <h1>Favorites</h1>
    </header>
    <div class="error" v-if="errorBrews">
      {{ errorBrews }}
    </div>
    <BrewList v-else :brews="faveBrews" />
  </div>
  <Navbar />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import BrewList from "../components/BrewList.vue";
import getBrews from "../composables/getBrews";
import { onMounted, ref } from "vue";

const {
  brews: faveBrews,
  error: errorBrews,
  load: loadBrews,
} = getBrews("fave");

loadBrews();
</script>

<style>
</style>