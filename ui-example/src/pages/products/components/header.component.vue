<template>
  <div class="Header d-flex align-items-center">
    <!--  -->
    <div class="label">ProductType</div>
    <!--  -->
    <div class="switch-custom">
      <div class="box d-flex">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
          <span class="left d-flex align-items-center"> ProfilePrint </span>
          <span class="right d-flex align-items-center"> Custom </span>
        </label>
      </div>
    </div>
    <!-- search -->
    <div class="search d-flex align-items-center">
      <span class="icon" id="basic-addon1">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
    <!--  -->
    <button type="button" class="btnCreate btn btn-primary">
      <font-awesome-icon icon="fa-solid fa-plus" />
      <span>Create Product Type</span>
    </button>
  </div>
</template>
