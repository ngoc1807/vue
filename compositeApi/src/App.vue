<template>
  <NavigationRoutes />
  <div class="px-2 sm:px-4 py-2">
    <div class="container mx-auto md:max-w-7xl">
      <router-view :key="route.path"></router-view>

      <!-- <transition name="slide" mode="out-in">
        <router-view :key="route.path"></router-view>
      </transition> -->

      <!-- use transition in vue 3 -->

      <!-- <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view> -->
    </div>
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
