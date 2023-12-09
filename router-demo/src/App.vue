<template>
  <NavigationRoutes />
  <div class="px-2 sm:px-4 py-2">
    <div class="container mx-auto md:max-w-7xl flex">
      <!-- <router-view :key="route.path"></router-view> -->

      <!-- <transition name="slide" mode="out-in">
        <router-view :key="route.path"></router-view>
      </transition> -->

      <!-- use transition in vue 3 -->

      <router-view
        v-slot="{ Component }"
        class="view left-sidebar"
        name="LeftSidebar"
      >
        <transition name="moveUp">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>

      <router-view v-slot="{ Component }">
        <transition name="moveUp">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
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
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-30%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
