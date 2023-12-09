<template>
  <HeaderUi />
  <!-- <NavigationRoutes /> -->
  <!-- <div class="px-2 sm:px-4 py-2">
    <div class="container mx-auto md:max-w-7xl"> -->
  <!-- <router-view :key="route.path"></router-view> -->

  <!-- <transition name="slide" mode="out-in">
        <router-view :key="route.path"></router-view>
      </transition> -->

  <!-- use transition in vue 3 -->

  <!-- <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view> -->

  <!--  -->

  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <!-- <Transition mode="out-in"> -->
      <!-- <KeepAlive> -->
      <Suspense>
        <!-- main content -->
        <template #default>
          <component :is="Component" :key="$route.path"> </component>
        </template>

        <!-- loading state -->
        <template #fallback>
          <!-- <LoadingUi /> -->
        </template>
      </Suspense>
      <!-- </KeepAlive> -->
      <!-- </Transition> -->
    </template>
  </router-view>
  <!-- </div>
  </div> -->
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import HeaderUi from "./components/ui/header.ui.vue";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

const isLoading = ref<boolean>(false);
console.log(isLoading.value);

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    isLoading.value = true;
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  isLoading.value = false;
});
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
