<template>
  <!-- <div class="text-red-700">loading...</div> -->
  <!-- <carousel :items-to-show="3" :autoplay="3000">
    <slide v-for="slide in data" :key="slide">
      <div class="w-full">
        <img
          :src="slide.i.imageUrl || `https://picsum.photos/600/600`"
          alt=""
          class="w-full h-[600px] object-cover"
        />
      </div>
    </slide>
  </carousel> -->
  <!-- hello -->

  <!-- <div v-if="!isLoading">
    <LoadingUi type="component" />
  </div> -->

  <div class="home">
    <pre>{{ result }}</pre>
  </div>
</template>
<!-- <script lang="ts" setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { onMounted, ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { baseApi } from "@/service/config";
import LoadingUi from "@/components/ui/loading.ui.vue";
const data = ref<any[]>();

const fetchImage = async () => {
  try {
    // const res = await baseApi
    //   .get<any, any>(
    //     "https://online-movie-database.p.rapidapi.com/auto-complete",
    //     { q: "game" },
    //     {
    //       headers: {
    //         "X-RapidAPI-Key":
    //           "add6e79d3fmshc30db6e837f0060p18bf40jsn68acd0393a32",
    //         "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     data.value = res.data.d;
    //   });
    const response = await fetch("https://api.publicapis.org/entries");
    data.value = await response.json();
  } catch (error) {
    console.log(error, "err");
  }
};

// console.log(data.value);

const isLoading = ref<boolean>(false);

onMounted(() => {
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      isLoading.value = true;
    }
  };
  fetchImage();
});
</script> -->

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  async setup() {
    const result = ref();

    const response = await fetch("https://api.publicapis.org/entries");
    result.value = await response.json();

    return { result };
  },
});
</script>
