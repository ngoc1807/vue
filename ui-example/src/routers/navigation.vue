<template>
  <div class="Header">
    <ul class="d-flex menu">
      <li v-for="route in routes">
        <router-link :to="{ name: route.name }" class="link px-2">
          {{ route?.name ? route?.name : "Home" }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { routes } from "./config";
</script>

<style lang="scss">
.Header {
  ul.menu {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .link {
  }
}
</style>
