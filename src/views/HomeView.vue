<template>
  <div class="home">
    <header>
      <h1>It's a Great <span class="hightlight-text">Day for Coffee</span></h1>
      <div>
        <router-link :to="{ name: 'Coffee' }" role="button" class="button">
          <span class="sr-only">add episode</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              class="a"
              d="M16.008,6V16.008m0,0V26.015m0-10.008H26.015m-10.008,0H6"
              transform="translate(-4.1 -4.1)"
            />
          </svg>
        </router-link>
      </div>
    </header>
    <main>
      <p>Previous Brews</p>
      <BrewList :brews="brews" />
    </main>
  </div>
  <Navbar />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import BrewList from "../components/BrewList.vue";
import getCoffees from "../composables/getCoffees";
import getMethods from "../composables/getMethods";
import getBrews from "../composables/getBrews";

// get all or get one cat at a time?
const { brews, error, load: loadBrews } = getBrews();

loadBrews();
</script>

<style>
.home > header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

h1 {
  font-weight: lighter;
  font-size: 1.6rem;
}

.hightlight-text {
  font-weight: bold;
}

.home header .button {
  border-radius: 50%;
  background: var(--main-text-color);
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button > svg,
button > svg {
  color: var(--main-bg-color);
  height: 30px;
}

main > p {
  font-size: 0.95rem;
  color: var(--medium-text-color);
  font-weight: bold;
}
</style>