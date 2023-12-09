<template>
  <Carousel>
    <Slide v-for="(slide, idx) in temp" :key="idx">
      <div
        :key="idx"
        class="carousel__item min-h-[600px] w-full flex flex-col justify-center items-center inline-block bg-center relative bg-no-repeat bg-cover before:bg-gradient-to-t before:from-[#000000cc] before:to-[#00000018] before:content-[''] before:absolute before:inset-0"
        :style="'background:url(' + slide?.i?.imageUrl + ')'"
      >
        <!--  -->
        <!-- <div class="">
          <img src="" alt="" />
        </div> -->
        <!--  -->
        <div
          class="flex text-[45px] leading-[1.1] whitespace-normal text-white font-bold z-[1]"
        >
          American Made
        </div>
        <div class="flex justify-center align-center py-4 z-[1] text-white">
          <span class="px-3 text-white text-[16px] font-medium">2017 </span> |
          <span class="px-3 text-white text-[16px] font-medium">comedy</span> |
          <span class="px-3 text-white text-[16px] font-medium">
            1 hr 55 mins
          </span>
        </div>
        <!--  -->
        <div class="flex z-[1]">
          <button
            class="bg-[#24BAEF] text-white px-[24px] pt-[16px] py-[11px] outline-none mr-4 rounded-md"
          >
            WATCH NOW
          </button>

          <button
            class="bg-transparent text-white px-[24px] pt-[16px] pb-[11px] outline-none border-[1px] border-white rounded-md"
          >
            + PLAYLIST
          </button>
        </div>
        <!--  -->
      </div>
    </Slide>

    <!-- <template #addons>
      <Navigation />
      <Pagination />
    </template> -->
  </Carousel>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";

type Props = {
  data: any[];
};

const temp = ref<any[]>([]);

const props = defineProps<Props>();

// console.log(props);
// const { data } = props;
// const data = toRefs(props.data);
// console.log("data", data);
onMounted(() => {
  temp.value = props.data;
  temp.value.forEach((item) => {
    if (!item.i)
      item.i = {
        imageUrl: "",
      };
    console.log(item.i);
  });
  console.log("props banner", props.data);
});
// watch(
//   () => props.data,
//   (newValue, oldValue) => {
//     console.log("newValue", newValue);
//   },
//   { deep: true }
// );
</script>
<style>
.carousel__prev,
.carousel__next {
  background-color: "red";
  box-sizing: content-box;
  border: 5px solid white;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
