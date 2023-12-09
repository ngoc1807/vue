<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from "./routers/navigation.vue";
</script>

<template>
  <div class="App container-fluid">
    <Navigation />
    <div class="body">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="scss">
a {
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}
</style>
