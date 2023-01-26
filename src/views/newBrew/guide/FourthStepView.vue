<template>
  <div class="new-brew guide">
    <header>
      <img
        :src="require(`../../../assets/images/guide/${imgSrc}`)"
        alt="Filtering or pouring coffee"
      />
    </header>
    <div class="content">
      <h2>4</h2>
      <h3>Enjoy</h3>
      <pre>
Let your coffee cool down for 5 minutes for the most flavor. 

If it gets to cold you can heat it back up in a microwave.
        </pre
      >
    </div>
    <GuideNav />
  </div>
</template>

<script setup>
import GuideNav from "../../../components/newBrew/guide/GuideNav.vue";

const isMobile = window.innerWidth < 400;
const imgSrc = isMobile ? "4.png" : "4-large.png";
</script>