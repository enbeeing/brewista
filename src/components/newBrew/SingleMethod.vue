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
      <MethodSymbolRow class="brew-method" :method="method.method" />
    </div>
  </article>
</template>

<script setup>
import MethodSymbolRow from "../MethodSymbolRow.vue";

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
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.5rem;
}

.method-content h3 {
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: 600;
}
</style>