<template>
  <div class="new-brew guide">
    <header>
      <img
        src="../../../assets/images/guide/3.png"
        alt="Water pouring into a coffee filter"
      />
    </header>
    <div class="content">
      <h2>3</h2>
      <h3>Filter</h3>
      <pre>
Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. 

Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.
      </pre>
    </div>
    <GuideNav :coffee="coffee" :method="method" />
  </div>
</template>

<script setup>
import GuideNav from "../../../components/newBrew/guide/GuideNav.vue";

const props = defineProps({
  coffee: String,
  method: String,
});
</script>