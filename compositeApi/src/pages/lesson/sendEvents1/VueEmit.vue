<template>
  <div>
    <CustomTextInput @customChange="logChange" />
  </div>
</template>

<script setup lang="ts">
import CustomTextInput from "./CustomTextInput.vue";

const logChange = (event: any) => {
  console.log(event);
};
</script>
