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
        :id="i"
        @click="goTo"
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
  if (current > 1) {
    router.push({
      name: `Guide${parseInt(current) - 1}`,
    });
  } else {
    router.push({
      name: "Method",
    });
  }
};

const goTo = (e) => {
  if (e.target.id) {
    router.push({
      name: `Guide${e.target.id}`,
    });
  }
};

const nextStep = () => {
  if (current < guideSteps) {
    router.push({
      name: `Guide${parseInt(current) + 1}`,
    });
  } else {
    router.push({
      name: `AddBrew`,
    });
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
  width: 100%;
  margin-top: 2rem;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.arrow {
  padding: 0.7rem;
}

.arrow svg {
  height: 25px;
  width: 50px;
  transform: translateY(2px);
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