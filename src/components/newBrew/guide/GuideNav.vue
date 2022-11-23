<template>
  <nav class="guide-nav">
    <div class="back-arrow arrow" @click="prevStep">
      <svg class="back">
        <use xlink:href="#arrowBack" />
      </svg>
    </div>
    <div class="dots">
      <svg
        v-for="i in guideSteps"
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        :class="{ current: current == i }"
      >
        <g class="a">
          <circle class="b" cx="4" cy="4" r="4" />
          <circle class="c" cx="4" cy="4" r="3.5" />
        </g>
      </svg>
    </div>
    <div class="forward-arrow arrow" @click="nextStep">
      <svg class="forward">
        <use xlink:href="#arrowForward" />
      </svg>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const current = window.location.toString().split("/")[4];
const guideSteps = 4;

const prevStep = () => {
  router.go(-1);
};

const nextStep = () => {
  if (current < guideSteps) {
    router.push({
      name: `Guide${parseInt(current) + 1}`,
    });
  } else {
    router.push({ name: `Home` });
  }
};
</script>

<style>
.guide-nav {
  background: var(--accent-color);
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 2.2rem;
  left: 2rem;
  right: 2rem;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.arrow svg {
  height: 22px;
  width: 50px;
  transform: translateY(2px);
  padding: 1rem;
}

.guide-nav .a,
.guide-nav .c {
  fill: none;
}
.guide-nav .a {
  stroke: #000;
}
.guide-nav .b {
  stroke: none;
}

.current .a,
.current .c {
  fill: black;
}
</style>