<template>
  <header class="pick-header">
    <div class="warning" v-if="show">
      <h3>Are you sure?</h3>
      <p>Going back to Homepage</p>
      <p>You'll lose all data from current brew</p>
      <div>
        <button @click="leavePage">Leave</button>
        <button @click="stayOnPage">Stay</button>
      </div>
    </div>
    <button @click="goBack">
      <svg class="back">
        <use xlink:href="#arrowBack" />
      </svg>
    </button>
    <h3>
      {{ title }}
    </h3>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  title: String,
  to: String,
});

const router = useRouter();
const current = window.location.toString().split("/")[3];
const show = ref(false);
const leave = ref(false);

const goBack = () => {
  if (current == "finish-brew" && !leave.value) {
    show.value = true;
    return;
  }
  router.push({
    name: props.to,
  });
};

const leavePage = () => {
  leave.value = true;
  goBack();
};

const stayOnPage = () => {
  leave.value = false;
  show.value = false;
};
</script>

<style>
.pick-header .warning {
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 200px;
  background: var(--accent-color);
  padding: 1rem;
  border-radius: 10px;
  color: var(--main-text-color);
  text-align: center;
}

.pick-header .warning > * {
  padding: 2px 0;
}

.pick-header .warning div {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}

.pick-header {
  text-align: center;
  display: grid;
  grid-auto-columns: 25px 1fr 25px;
  grid-template-areas: "button title .";
  align-items: center;
  gap: 1rem;
}

.pick-header button {
  border: none;
  background: none;
  grid-area: button;
}

.pick-header .back {
  max-width: 100%;
  color: var(--main-text-color);
  transform: translateY(2px);
}

.pick-header h3 {
  grid-area: title;
}
</style>