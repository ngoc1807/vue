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

        <!--  -->

        <ol-vector-layer>
          <ol-source-vector>
            <!-- line  -->
            <ol-feature>
              <ol-geom-multi-line-string
                :coordinates="multiLine"
              ></ol-geom-multi-line-string>
              <ol-style>
                <ol-style-stroke color="red" :width="2"></ol-style-stroke>
              </ol-style>
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>

        <!--  -->

        <ol-vector-layer>
          <ol-interaction-clusterselect
            @select="featureSelected"
            :pointRadius="20"
          >
            <ol-source-vector>
              <ol-feature
                v-for="(item, idx) in data"
                :key="idx"
                :v-if="data?.length > 0"
              >
                <ol-geom-point
                  :coordinates="[+item[0], +item[1]]"
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
      <div v-for="(item, idx) in data" :key="idx">{{ idx }} : {{ item }}</div>

      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref, watch } from "vue";
const url_osrm_nearest = import.meta.env.VITE_URL_OSRM_NEAREST;
const url_osrm_route = import.meta.env.VITE_URL_OSRM_ROUTE;
const icon_url = import.meta.env.VITE_URL_ICON_MAP;

const data = ref<Array<Array<number>>>([]);
const multiLine = ref<number[][][]>([]);
const dataTemp = [
  {
    id: 1,
    coordinate: [105.779883, 21.04003],
  },
  {
    id: 2,
    coordinate: [105.795079, 21.000637],
  },
  {
    id: 3,
    coordinate: [105.826711, 20.974415],
  },
  {
    id: 4,
    coordinate: [106.026711, 21.074415],
  },
];

// const rata;

const center = ref([105.8610351, 20.9998646]);
const projection = ref("EPSG:4326");
const format = inject("ol-format");

const polyline = new format.Polyline();

const zoom = ref(10);
const rotation = ref(0);
const extent = inject("ol-extent");
const view = ref<any>(null);
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

// fetch router

const fetchData = async () => {
  try {
    const points: Array<Array<number>> = [];
    let listCoords: any[] = [];

    //
    if (dataTemp?.length > 0) {
      for (let index = 0; index <= dataTemp.length - 1; index++) {
        await getNearest(dataTemp[index].coordinate)?.then((coord_street) => {
          points.push(coord_street as number[]);
        });
      }
    }
    //
    if (points?.length > 0) {
      for (let index = 0; index < points.length; index++) {
        if (points.length > 1 && index > 0) {
          const point1 = points[index - 1];
          const point2 = points[index];

          const res = await fetchRoute(point1, point2);
          // @ts-ignore
          const flatCoordinates = polyline.readGeometry(res).flatCoordinates;

          let listArray: any[] = [];

          for (let index = 0; index < flatCoordinates.length; index++) {
            const newArray = [
              flatCoordinates[index],
              flatCoordinates[index + 1],
            ];
            listArray = listArray.concat([newArray]);
            index++;
          }

          listCoords = [...listCoords, listArray];
        }
      }
    }

    multiLine.value = listCoords;
    data.value = points;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});

//

/**
 * Get coordinate possible in map nearest base on the passed argument
 * @param {*} _coord: Array<number> // coordinate
 * @return  Array<number>
 */

const getNearest = (_coord: Array<number>) => {
  // const coord4326 = to4326(_coord);
  const coord4326 = _coord;

  if (!coord4326) return;

  return new Promise(function (resolve, reject) {
    //make sure the coord is on street
    fetch(url_osrm_nearest + coord4326.join())
      .then(function (response) {
        // Convert to JSON
        return response.json();
      })
      .then(function (json) {
        if (json.code === "Ok") resolve(json.waypoints[0].location);
        else reject();
      });
  });
};

/**
 * Get
 * @param {*} point1 : number[]
 * @param {*} point2 : number[]
 * @return  Array<number>
 */
const fetchRoute = (point1: number[], point2: number[]) => {
  if (!point1 || !point2) return;
  return fetch(url_osrm_route + point1.join() + ";" + point2.join())
    .then((r) => {
      return r.json();
    })
    .then((json) => {
      return json.routes[0].geometry;
    });
};
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
