<template>
  <div class="new-brew guide">
    <header>
      <img
        :src="require(`../../../assets/images/guide/${imgSrc}`)"
        alt="Coffee beans and grounds"
      />
    </header>
    <div class="content">
      <h2>2</h2>
      <h3>Measure and grind beans</h3>
      <pre>
Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting.

Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.
      </pre>
    </div>
    <GuideNav />
  </div>
</template>

<script setup>
import GuideNav from "../../../components/newBrew/guide/GuideNav.vue";

const isMobile = window.innerWidth < 400;
const imgSrc = isMobile ? "2.png" : "2-large.png";
</script>