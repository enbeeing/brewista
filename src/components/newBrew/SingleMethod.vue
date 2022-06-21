<template>
  <article class="method content-wrapper" @click="emit('picked', method)">
    <div>
      <svg class="method-svg">
        <use :xlink:href="method.svg" />
      </svg>
    </div>
    <div class="method-content">
      <h3>
        {{ method.title }}
      </h3>
      <div class="brew-method">
        <p>
          <svg class="method-icon">
            <use xlink:href="#bean" />
          </svg>
          {{ method.method.gram }}
        </p>
        <p>
          <svg class="method-icon">
            <use xlink:href="#water" />
          </svg>
          {{ method.method.water }}
        </p>
        <p>
          <svg class="method-icon">
            <use xlink:href="#grind" />
          </svg>
          {{ method.method.grind }}
        </p>
        <p>
          <svg class="method-icon">
            <use xlink:href="#time" />
          </svg>
          {{ method.method.time }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  method: Object,
});

const emit = defineEmits(["picked"]);
</script>

<style>
.method {
  background: var(--brew-bg-color);
  margin: 2rem 0;
  border-radius: 25px;
}

.method .method-svg {
  margin-right: 1rem;
}

.method-content {
  width: 100%;
}

.method .brew-method > p,
.method .brew-method > p:first-of-type {
  margin-top: 0.5rem;
  margin-left: 0;
}
</style>