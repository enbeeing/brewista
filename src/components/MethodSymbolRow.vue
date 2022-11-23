<template>
  <div class="brew-method-symbols">
    <p>
      <svg class="method-icon">
        <use xlink:href="#bean" />
      </svg>
      {{ method.gram }}
    </p>
    <p>
      <svg class="method-icon">
        <use xlink:href="#water" />
      </svg>
      {{ method.water }}
    </p>
    <p>
      <svg class="method-icon">
        <use xlink:href="#grind" />
      </svg>
      {{ method.grind }}
    </p>
    <p>
      <svg class="method-icon">
        <use xlink:href="#time" />
      </svg>
      {{ method.time }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  method: Object,
});
</script>

<style>
.brew-method-symbols {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
}

.brew-method-symbols > p {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 1.4rem 0.2rem 0.2rem 0.2rem; */
  font-size: 0.7rem;
  color: var(--light-text-color);
}

.method-icon {
  height: 0.75rem;
  width: 1rem;
  margin-right: 0.2rem;
}
</style>