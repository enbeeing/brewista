<template>
  <div class="new-brew guide">
    <header>
      <img
        :src="require(`../../../assets/images/guide/${imgSrc}`)"
        alt="Coffee equipment"
      />
    </header>
    <div class="content">
      <h2>1</h2>
      <h3>Planning out your coffee</h3>
      <pre>
To make good coffee you need good ingredients, start with high quality beans with the flavour you want.

We recommend 60g/l 

The more you brew the coarser you need to grind the coffee
      </pre>
    </div>
    <GuideNav />
  </div>
</template>

<script setup>
import GuideNav from "../../../components/newBrew/guide/GuideNav.vue";

const isMobile = window.innerWidth < 400;
const imgSrc = isMobile ? "1.png" : "1-large.png";
</script>