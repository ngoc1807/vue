<template>
  <div>
    <router-view :key="route.path"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import NavigationRoutes from "./router/navigation.routes.vue";

const route = useRoute();
</script>

<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
  /* transition: opacity 1s ease; */
}
.slide-enter-from,
.slide-leave-to {
  /* opacity: 0; */
  transform: translateX(-30%);
}
</style>
