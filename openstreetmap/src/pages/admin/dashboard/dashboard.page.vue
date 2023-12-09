<template>
  <div class="w-full h-full py-3">
    <div class="text-[32px] text-center mb-[24px] mt-3">Confirm Location</div>
    <!-- map -->
    <div class="relative w-full">
      <ol-map
        :loadTilesWhileAnimating="true"
        :loadTilesWhileInteracting="true"
        class="w-[100%] min-w-full max-w-full bg-neutral-300 h-[500px]"
      >
        <ol-view
          ref="view"
          :center="center"
          :rotation="rotation"
          :zoom="zoom"
          :projection="projection"
        />
        <ol-tile-layer>
          <ol-source-osm />
        </ol-tile-layer>

        <!-- control -->
        <ol-zoom-control />
        <ol-attribution-control />
        <ol-fullscreen-control />

        <ol-vector-layer>
          <ol-interaction-clusterselect
            @select="featureSelected"
            :pointRadius="20"
          >
            <ol-source-vector>
              <ol-feature v-for="index in data" :key="index.id">
                <ol-geom-point
                  :coordinates="[+index.longitude, +index.latitude]"
                ></ol-geom-point>
                <ol-style>
                  <ol-style-stroke color="yellow" :width="10"></ol-style-stroke>
                  <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
                  <ol-style-icon :src="icon_url" :scale="1"></ol-style-icon>
                </ol-style>
              </ol-feature>
            </ol-source-vector>

            <!-- icon when selected -->
            <ol-style>
              <ol-style-stroke color="yellow" :width="10"></ol-style-stroke>
              <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
              <ol-style-icon :src="icon_url" :scale="1"></ol-style-icon>
            </ol-style>
          </ol-interaction-clusterselect>
        </ol-vector-layer>
        <!--  -->

        <!--  -->
        <ol-overlay
          :position="selectedCityPosition"
          v-if="selectedCityName != ''"
        >
          <template v-slot="slotProps">
            <div class="overlay-content">
              Hello world!<br />
              Position: {{ slotProps.position }}
            </div>
          </template>
        </ol-overlay>
      </ol-map>
    </div>
    <!-- content -->
    <div>
      {{ env }}
      <br />
      {{ timer }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { DemoMapsData, DataMap } from "@/data/data-map";

import { inject, onMounted, onUnmounted, ref } from "vue";
const icon_url =
  "//cdn.rawgit.com/openlayers/ol3/master/examples/data/icon.png";

const data = ref<DataMap[]>(
  DemoMapsData.sort(() => Math.random() - 0.5).slice(0, 4)
);

const center = ref([105.8610351, 20.9998646]);
const projection = ref("EPSG:4326");
const zoom = ref(10);
const rotation = ref(0);
const extent = inject("ol-extent");

const view = ref<any>(null);
const env = import.meta.env.VITE_API_URL_BASE;
const selectedCityPosition = ref<any>([]);
const selectedCityName = ref("");

const featureSelected = (event: any) => {
  if (event.selected.length == 1) {
    selectedCityPosition.value = extent.getCenter(
      event.selected[0].getGeometry().extent_
    );

    selectedCityName.value = event.selected[0].values_.name;
  } else {
    selectedCityName.value = "";
  }
};

const timer = ref(10);
const interval = setInterval(() => {
  if (timer.value === 0) {
    data.value = DemoMapsData.sort(() => Math.random() - 0.5).slice(0, 4);

    timer.value = 10;
  } else {
    timer.value--;
  }
}, 1000);

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style>
.overlay-content {
  background: #efefef;
  box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
  padding: 10px 20px;
  font-size: 16px;
}
.ol-layer canvas {
  width: 100% !important;
}
</style>
