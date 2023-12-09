<template>
  <div class="w-full h-full py-3">
    <div class="text-[32px] text-center mb-[24px] mt-3">Confirm Location</div>
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

        <!-- hover  -->

        <!-- <ol-interaction-select
            @select="featureSelected"
            :condition="selectCondition"
          >
            <ol-style>
              <ol-style-stroke color="green" :width="10"></ol-style-stroke>
              <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
              <ol-style-circle :radius="10">
                <ol-style-fill color="blue"></ol-style-fill>
                <ol-style-stroke color="blue" :width="2"></ol-style-stroke>
              </ol-style-circle>
            </ol-style>
          </ol-interaction-select> -->

        <!-- <ol-context-menu :items="contextMenuItems" /> -->
        <ol-vector-layer>
          <ol-interaction-clusterselect
            @select="featureSelected"
            :pointRadius="20"
          >
            <ol-source-vector ref="vectorsource">
              <ol-feature v-for="index in DemoMapsData" :key="index.id">
                <ol-geom-point
                  :coordinates="[index.longitude, index.latitude]"
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
  </div>
</template>

<script setup lang="ts">
import { DemoMapsData } from "@/data/data-map";

import { inject, ref } from "vue";
const icon_url =
  "//cdn.rawgit.com/openlayers/ol3/master/examples/data/icon.png";
const center = ref([105.8610351, 20.9998646]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
const format = inject("ol-format");
const geoJson = new format.GeoJSON();
const extent = inject("ol-extent");
const vectorsource = ref<any>(null);
const Feature = inject("ol-feature");
const Geom = inject("ol-geom");
const selectConditions = inject("ol-selectconditions");
const selectCondition = selectConditions.pointerMove;
const contextMenuItems = ref<any>([]);
const view = ref<any>(null);

contextMenuItems.value = [
  {
    text: "Center map here",
    classname: "some-style-class", // add some CSS rules
    callback: (val: any) => {
      view.value.setCenter(val.coordinate);
    }, // `center` is your callback function
  },
  {
    text: "Add a Marker",
    classname: "some-style-class-maker", // you can add this icon with a CSS class
    // instead of `icon` property (see next line)
    icon: icon_url, // this can be relative or absolute
    callback: (val: any) => {
      console.log(val);
      let feature = new Feature({
        geometry: new Geom.Point(val.coordinate),
      });
      vectorsource.value.source.addFeature(feature);
    },
  },
  "-",
];

const selectedCityPosition = ref<any>([]);
const selectedCityName = ref("");

const featureSelected = (event: any) => {
  if (event.selected.length == 1) {
    console.log(event, "123");

    selectedCityPosition.value = extent.getCenter(
      event.selected[0].getGeometry().extent_
    );
    selectedCityName.value = event.selected[0].values_.name;
  } else {
    selectedCityName.value = "";
  }
};

// demo data
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
