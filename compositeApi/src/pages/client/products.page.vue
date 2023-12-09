<template>
  <div>
    <div class="products">
      <h1>products</h1>
    </div>
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

const destinations = sourceData.destinations;
console.log("products");
</script>
