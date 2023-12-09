<template>
  <div class="ProductTable">
    <HeaderComponent />
    <!--  -->
    <NavTableComponent />
    <!--  -->
    <FilterComponent />
    <!--  -->

    <!--  -->

    <TableComponent
      key="1"
      accordionID="accordionExampleAll"
      accordionBody="headingOne"
      collapse="collapseOne"
    />
    <br />
    <br />
    <TableComponent
      key="2"
      accordionID="accordionExampleAll1"
      accordionBody="headingOne1"
      collapse="collapseOne1"
    />
    <br />
    <br />
    <TableComponent
      key="3"
      accordionID="accordionExampleAll2"
      accordionBody="headingOne2"
      collapse="collapseOne2"
    />
    <br />
    <br />
  </div>
</template>

<script setup lang="ts">
import "./products-table.scss";
import HeaderComponent from "./components/header.component.vue";
import NavTableComponent from "./components/nav-table.component.vue";
import FilterComponent from "./components/filter.component.vue";
import TableComponent from "./components/table.component.vue";
</script>

<style lang="scss"></style>
