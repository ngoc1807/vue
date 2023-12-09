<template>
  <h1 class="text-red mx-3">{{ smg === "hello" ? "yes" : "no" }}</h1>

  <h1 class="text-red mx-3">{{ smg.toLocaleUpperCase() }}</h1>

  <input type="text" v-model="smg" class="border-2" />
  <br />
  <input type="text" v-model="smg" />
</template>
<script setup lang="ts">
import { ref } from "vue";

const smg = ref("hello");
</script>
