<template>
  <div class="home">
    <header>
      <h1>It's a Great <span class="hightlight-text">Day for Coffee</span></h1>
      <div>
        <button>
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
              transform="translate(-4 -3.5)"
            />
          </svg>
        </button>
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
      title: "Cold Infusion",
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
      title: "Cold Infusion",
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
  font-size: 1.8rem;
}

.hightlight-text {
  font-weight: bold;
}

.home header button {
  outline: none;
  border: none;
  border-radius: 50%;
  background: var(--main-text-color);
  height: 60px;
  width: 60px;
}

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