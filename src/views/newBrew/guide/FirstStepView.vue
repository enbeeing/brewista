<template>
  <div class="new-brew guide">
    <header>
      <img src="../../../assets/images/guide/1.png" alt="" />
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

const props = defineProps({
  // coffee: String,
  // method: String,
});

// const coffee = JSON.parse(props.coffee);
// const method = JSON.parse(props.method);
</script>