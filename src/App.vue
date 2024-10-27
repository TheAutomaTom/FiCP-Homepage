<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const env = import.meta.env.VITE_ENV;
console.log(`Connecting to API at: ${apiUrl}`);


</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="friends in {code} places" />

  <p>{{apiUrl}}</p>
  <p><em>running in </em> {{env}} <em>environment</em></p>
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
