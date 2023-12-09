<template>
  <!-- <h1 class="py-4">
    {{ dataDetail?.name || "Empty" }}
  </h1> -->

  <!-- <div class="product-details flex flex-wrap pt-3">
    <img
      :src="`/images/${dataDetail?.image}`"
      :alt="`${dataDetail?.name}`"
      class="w-[400px] mr-5 rounded-lg"
    />
    <p class="flex-1">{{ dataDetail?.description }}</p>
  </div> -->
  <div>
    <h1 class="py-4">
      {{ dataFetched?.name || "Empty" }}
    </h1>
    <GoBackUi />
    <div class="product-details flex flex-wrap pt-3">
      <img
        :src="`/images/${dataFetched.image}`"
        :alt="`${dataFetched.name}`"
        class="w-[400px] mr-5 rounded-lg"
      />
      <p class="flex-1">{{ dataFetched?.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import sourceData from "@/data/data.json";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import GoBackUi from "../../components/ui/goback.ui.vue";

const route = useRoute();
const productID = computed(() => {
  return parseInt(`${route.params.id}`);
});

// console.log("productID", productID.value);

const dataDetail = computed(() => {
  return sourceData.destinations.find(
    (product) => product.id === productID.value
  );
});

type DataProps = {
  image?: string;
  name?: string;
  id?: number;
  description?: string;
  experiences?: [];
  slug?: string;
};

const dataFetched = ref<DataProps>({
  image: "",
  name: "",
});

const props = defineProps({
  id: { type: Number, require: true },
});

// console.log(props.id, "id");

onMounted(() => {
  fetchData();
});
const fetchData = async () => {
  const res = await fetch(
    `https://travel-dummy-api.netlify.app/${route.params.slug}`
  ).then((res) => res.json());
  dataFetched.value = res;
};

// case 1: use useRouter
// watch(
//   () => productID.value,
//   () => {
//     // console.log(productID.value);
//     productID.value && fetchData();
//   }
// );
//  case 2 use prop pass from router
watch(
  () => props.id,
  () => {
    // console.log(productID.value);
    props.id && fetchData();
  }
);
</script>
