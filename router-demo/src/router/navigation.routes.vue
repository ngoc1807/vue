<template>
  <!-- :to="`/products-test/${data.id}/${data.slug}`" -->

  <div class="w-full px-3 bg-white flex">
    <AppLink
      :to="{ name: 'protected' }"
      class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 mx-4"
    >
      Dashboard
    </AppLink>
    <AppLink
      to="/products"
      class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 mx-4"
    >
      Home
    </AppLink>

    <AppLink
      v-for="data in dataList"
      :key="data.id"
      :to="{
        name: 'ProductDetails.show',
        params: { id: data.id, slug: data.slug },
      }"
      class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 mx-4"
    >
      {{ data.name }}
    </AppLink>

    <AppLink to="https://google.com"> Google </AppLink>
  </div>
</template>
<script setup lang="ts">
import DataSource from "@/data/data.json";
import AppLink from "@/components/ui/AppLink.vue";
const dataList = DataSource.destinations;
</script>
