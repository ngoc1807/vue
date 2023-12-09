<template>
  <div>
    <div class="products">
      <h1>products</h1>
    </div>

    <button @click="triggerRouterError">Trigger Router Error</button>
    <button @click="addDynamicRoute">Add Dynamic Router</button>
    <button @click="removeDynamicRoute">Remove Dynamic Router</button>

    <router-link to="/dynamic"> Visit Dynamic Router</router-link>

    <h2 class="py-3">All destinations</h2>
    <div class="destinations flex flex-wrap mt-4">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'ProductDetails.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <div class="mr-4">
          <h2 class="py-3">{{ destination.name }}</h2>
          <img
            :src="`/images/${destination.image}`"
            :alt="destination.name"
            class="w-[200px] h-[150px] rounded-lg"
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import sourceData from "@/data/data.json";
import { useRouter } from "vue-router";
import { isNavigationFailure, NavigationFailureType } from "vue-router";
const destinations = sourceData.destinations;
console.log("products");

const router = useRouter();

async function triggerRouterError() {
  const navigationFailure = await router.push("/");
  if (
    isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)
  ) {
    // things went wrong
    // a new navigation took place the current navigation could finish

    console.log(navigationFailure.to);
    console.log(navigationFailure.from);
  } else {
    // all is well
  }
}
function addDynamicRoute() {
  router.addRoute({
    name: "dynamic",
    path: "/dynamic",
    component: () => import("@/pages/client/login.page.vue"),
  });
}

function removeDynamicRoute() {
  router.removeRoute("dynamic");
}
</script>
