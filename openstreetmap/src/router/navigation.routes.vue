<template>
  <!-- :to="`/products-test/${data.id}/${data.slug}`" -->

  <div class="max-w-[1280px] mx-auto bg-white flex">
    <router-link
      v-for="data in dataList"
      :key="data.id"
      :to="{
        name: 'ProductDetails.show',
        params: { id: data.id, slug: data.slug },
      }"
      class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 mx-4"
    >
      {{ data.name }}
    </router-link>
  </div>
</template>
<script setup lang="ts">
import DataSource from "@/data/data.json";
const dataList = DataSource.destinations;
</script>
