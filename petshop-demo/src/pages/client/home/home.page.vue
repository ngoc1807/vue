<template>
  <div>
    <div v-if="isLoading">
      <LoadingUi type="component" />
    </div>

    <div v-else class="home max-w-full overflow-hidden">
      <BannerFirstPageVue :data="dataBanner" />

      <BannerTwoPage :data="dataBanner" />
    </div>

    <!-- <pre>
        {{ state.dataBanner }}
      </pre> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, toRefs } from "vue";
import LoadingUi from "@/components/ui/loading.ui.vue";
import BannerFirstPageVue from "./components/banner-first.page.vue";
import { getAPI } from "@/service/api-service";
import BannerTwoPage from "./components/banner-two.page.vue";

const dataBanner = ref([]);
const isLoading = ref<boolean>(true);

const fetchData = async () => {
  try {
    isLoading.value = true;

    const response = await getAPI(
      "https://imdb8.p.rapidapi.com/auto-complete",
      { q: "game of thr" }
    );
    // @ts-ignore
    dataBanner.value = response?.data?.d;
    console.log("dataBanner.value", dataBanner.value);

    // state.dataBanner = response?.data?.d;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
