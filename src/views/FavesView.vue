<template>
  <div class="faves">
    <header>
      <h1>Favorites</h1>
    </header>
    <BrewList v-if="faveBrews.length > 0" :brews="faveBrews" />
    <Spinner v-else />
  </div>
  <Navbar />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import BrewList from "../components/BrewList.vue";
import getBrews from "../composables/getBrews";

const {
  brews: faveBrews,
  error: errorBrews,
  load: loadBrews,
} = getBrews("fave");

loadBrews();
</script>

<style>
</style>