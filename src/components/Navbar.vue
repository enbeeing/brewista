<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'Home' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <g transform="translate(-68 -13)">
            <g transform="translate(71 15)">
              <path
                class="a"
                d="M.327,7.361l7.8-7.1A1,1,0,0,1,9.452.241l8.2,7.12a1.01,1.01,0,0,1,.345.76v9.54a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V8.1A1,1,0,0,1,.327,7.361Z"
              />
            </g>
          </g>
        </svg>
      </router-link>
      <router-link :to="{ name: 'Faves' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            transform="scale(1.1)"
            class="a"
            d="M3.314,5.318a4.5,4.5,0,0,1,6.363,0L11,6.636l1.319-1.317a4.5,4.5,0,0,1,6.363,0c1.757,1.757,1.224,4.673,0,6.364-4.489,6.2-6.727,7.682-7.682,7.682s-3.555-1.247-7.682-7.683c-1.271-1.982-1.757-4.606,0-6.363Z"
          />
        </svg>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
</script>

<style>
.navbar nav {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
  background: var(--main-bg-color);
  box-shadow: 0 -3px 15px var(--shadow-color);
  max-height: 60px;
}

.navbar a {
  text-decoration: none;
  color: var(--main-text-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar a > svg {
  height: 1.2rem;
  margin-bottom: 10px;
}

.navbar .router-link-active svg {
  fill: var(--main-text-color);
}

.navbar .router-link-active::after {
  display: block;
  content: "";
  border: 1px solid var(--main-text-color);
  background: var(--main-text-color);
  width: 3px;
  height: 3px;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
}
</style>