<template>
  <div class="home">
    <header>
      <h1>It's a Great <span class="hightlight-text">Day for Coffee</span></h1>
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              class="a"
              d="M16.008,6V16.008m0,0V26.015m0-10.008H26.015m-10.008,0H6"
              transform="translate(-4 -3.5)"
            />
          </svg>
        </button>
      </div>
    </header>
    <Navbar />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
h1 {
  font-weight: lighter;
}
.hightlight-text {
  font-weight: bold;
}

.home header button {
  outline: none;
  border: none;
  border-radius: 50%;
  background: var(--main-text-color);
  height: 60px;
  width: 60px;
}
button > svg {
  color: var(--main-bg-color);
  height: 30px;
}
</style>