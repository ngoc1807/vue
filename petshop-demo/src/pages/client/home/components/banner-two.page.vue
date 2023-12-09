<template>
  <div class="min-h-[800px] bg-[#131722]">
    <div class="relative container mx-auto py-[40px]">
      <div class="w-full flex h-auto">
        <div class="w-[300px] relative">
          <div
            class="pt-[30px] before:contents-[] before:absolute before:top-0 text-[10] before:left-0 before:w-1/6 before:h-[1px] before:bg-[#f7f6f62b] text-[40px] font-[700] text-[#ffff]"
          >
            Popular Movies
          </div>
          <div class="py-[25px] font-[500] text-[14px] text-[#949cb0]">
            Most watched movies by days
          </div>
          <div
            class="border-t-[1px] pt-5 border-solid border-t-[#f7f6f62b] text-[#949cb0]"
          >
            VIEW ALL >
          </div>
        </div>
        <div class="flex-1 flex ml-5">
          <div class="" v-for="(item, idx) in data" :key="'banner2' + idx">
            <div>
              <img src="" alt="" />
            </div>
            <div class="font-[500] text-[12px] text-[#949cb0]">2017,action</div>
            <div class="font-[500] text-[18px] text-[#ffffff]">
              deltea bravo
            </div>
          </div>
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

type Props = {
  data: any[];
};

const data = ref<any[]>([]);

const props = defineProps<Props>();

onMounted(() => {
  data.value = props.data.slice(0, 4).map((item, idx) => {
    if (!item.i) {
      item.i = {
        imageUrl: "",
      };
    }

    return {
      ...item,
    };
  });
  console.log("data", data.value);
  //   data.value.forEach((item) => {
  //     if (!item.i)
  //       item.i = {
  //         imageUrl: "",
  //       };
  //     console.log(item.i);
  //   });
});
console.log(data);
watch(
  () => props.data,
  (newValue, oldValue) => {
    console.log("newValue", newValue);
  },
  { deep: true }
);
</script>
