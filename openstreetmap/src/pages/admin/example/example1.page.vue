<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 800px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer
      :updateWhileAnimating="true"
      :updateWhileInteracting="true"
      title="STAR"
      preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/star.png"
    >
      <ol-source-vector ref="vectorsource">
        <ol-animation-shake :duration="2000" :repeat="5">
          <ol-feature
            v-for="index in 20"
            :key="index"
            :properties="{ id: index }"
          >
            <ol-geom-point
              :coordinates="[
                getRandomInRange(24, 45, 3),
                getRandomInRange(35, 41, 3),
              ]"
            ></ol-geom-point>

            <ol-style>
              <ol-style-icon :src="starIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
          </ol-feature>
        </ol-animation-shake>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-mouseposition-control />
    <ol-fullscreen-control />
    <ol-overviewmap-control>
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-overviewmap-control>

    <ol-scaleline-control />
    <ol-rotate-control />
    <ol-zoom-control />
    <ol-zoomslider-control />
    <ol-zoomtoextent-control
      :extent="[23.906, 42.812, 46.934, 34.597]"
      tipLabel="Fit to Turkey"
    />

    <ol-context-menu :items="contextMenuItems" />
  </ol-map>
</template>

<script>
import { ref, inject, onMounted } from "vue";

import markerIcon from "@/assets/marker.png";
import starIcon from "@/assets/star.png";
export default {
  setup() {
    const center = ref([34, 39.13]);
    const projection = ref("EPSG:4326");
    const zoom = ref(6);
    const rotation = ref(0);

    const format = inject("ol-format");

    const geoJson = new format.GeoJSON();

    const selectConditions = inject("ol-selectconditions");

    const selectCondition = selectConditions.pointerMove;

    const selectedCityName = ref("");
    const selectedCityPosition = ref([]);

    const extent = inject("ol-extent");

    const Feature = inject("ol-feature");
    const Geom = inject("ol-geom");

    const contextMenuItems = ref([]);
    const vectorsource = ref(null);
    const view = ref(null);

    const drawEnable = ref(false);
    const drawType = ref("Point");

    const changeDrawType = (active, draw) => {
      drawEnable.value = active;
      drawType.value = draw;
    };

    contextMenuItems.value = [
      {
        text: "Center map here",
        classname: "some-style-class", // add some CSS rules
        callback: (val) => {
          view.value.setCenter(val.coordinate);
        }, // `center` is your callback function
      },
      {
        text: "Add a Marker",
        classname: "some-style-class", // you can add this icon with a CSS class
        // instead of `icon` property (see next line)
        icon: markerIcon, // this can be relative or absolute
        callback: (val) => {
          console.log(val);
          let feature = new Feature({
            geometry: new Geom.Point(val.coordinate),
          });
          vectorsource.value.source.addFeature(feature);
        },
      },
      "-", // this is a separator
    ];

    const featureSelected = (event) => {
      if (event.selected.length == 1) {
        selectedCityPosition.value = extent.getCenter(
          event.selected[0].getGeometry().extent_
        );
        selectedCityName.value = event.selected[0].values_.name;
      } else {
        selectedCityName.value = "";
      }
    };

    const overrideStyleFunction = (feature, style) => {
      let clusteredFeatures = feature.get("features");
      let size = clusteredFeatures.length;

      let color = size > 20 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
      var radius = Math.max(8, Math.min(size, 20));
      let dash = (2 * Math.PI * radius) / 6;
      let calculatedDash = [0, dash, dash, dash, dash, dash, dash];

      style.getImage().getStroke().setLineDash(dash);
      style
        .getImage()
        .getStroke()
        .setColor("rgba(" + color + ",0.5)");
      style.getImage().getStroke().setLineDash(calculatedDash);
      style
        .getImage()
        .getFill()
        .setColor("rgba(" + color + ",1)");

      style.getImage().setRadius(radius);

      style.getText().setText(size.toString());
    };

    const selectInteactionFilter = (feature) => {
      return feature.values_.name != undefined;
    };

    const getRandomInRange = (from, to, fixed) => {
      return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    };

    const drawstart = (event) => {
      console.log(event);
    };

    const drawend = (event) => {
      console.log(event);
    };

    const modifystart = (event) => {
      console.log(event);
    };

    const modifyend = (event) => {
      console.log(event);
    };

    const videoStopped = (event) => {
      console.log(event);
    };

    const swipeControl = ref(null);
    const jawgLayer = ref(null);
    const osmLayer = ref(null);
    const layerList = ref([]);
    const path = ref([
      [25.6064453125, 44.73302734375001],
      [27.759765625, 44.75500000000001],
      [28.287109375, 43.32677734375001],
      [30.55029296875, 46.40294921875001],
      [31.69287109375, 43.04113281250001],
    ]);
    const animationPath = ref(null);

    onMounted(() => {
      layerList.value.push(jawgLayer.value.tileLayer);
      layerList.value.push(osmLayer.value.tileLayer);
      console.log(layerList.value);
      console.log(animationPath.value);
    });

    const zones = [
      {
        title: "Turkey",
        extent: [17.952, 46.241, 52.449, 31.222],
      },
      {
        title: "Cyprus",
        extent: [31.2836, 36.1623, 35.5957, 34.1823],
      },
      {
        title: "Brazil",
        extent: [-120.32, 22.76, 17.67, -47.52],
      },
    ];

    const webglPointsStyle = {
      symbol: {
        symbolType: "circle",
        size: [
          "interpolate",
          ["linear"],
          ["get", "population"],
          40000,
          8,
          2000000,
          28,
        ],
        color: "#ffed02",
        rotateWithView: false,
        offset: [0, 0],
        opacity: [
          "interpolate",
          ["linear"],
          ["get", "population"],
          40000,
          0.6,
          2000000,
          0.92,
        ],
      },
    };

    return {
      center,
      projection,
      zoom,
      rotation,
      geoJson,
      featureSelected,
      selectCondition,
      selectedCityName,
      selectedCityPosition,
      markerIcon,
      overrideStyleFunction,
      getRandomInRange,
      contextMenuItems,
      vectorsource,
      view,
      selectInteactionFilter,
      drawstart,
      drawend,
      modifystart,
      modifyend,
      videoStopped,
      drawEnable,
      drawType,
      layerList,
      jawgLayer,
      swipeControl,
      osmLayer,
      starIcon,
      changeDrawType,
      path,
      animationPath,
      zones,
      webglPointsStyle,
    };
  },
};
</script>
