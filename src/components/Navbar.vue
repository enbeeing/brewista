<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Faves' }">Faves</router-link>
    </nav>
  </div>
</template>

<script setup>
</script>

<style>
.navbar nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.navbar a {
  text-decoration: none;
  color: var(--light-text-color);
  padding: 2rem;
}

.navbar .router-link-active {
  color: var(--main-text-color);
}
</style>