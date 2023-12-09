<template>
  <!-- Nav tabs -->
  <div class="nav-table pt-5 d-block d-flex align-items-center">
    <!-- <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          All
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Coffee
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="messages-tab"
          data-bs-toggle="tab"
          data-bs-target="#messages"
          type="button"
          role="tab"
          aria-controls="messages"
          aria-selected="false"
        >
          Tea
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="settings-tab"
          data-bs-toggle="tab"
          data-bs-target="#settings"
          type="button"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          Cocoa
        </button>
      </li>
    </ul> -->

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="all-tab"
          data-bs-toggle="tab"
          data-bs-target="#all-tab-pane"
          type="button"
          role="tab"
          aria-controls="all-tab-pane"
          aria-selected="true"
        >
          All
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="coffee-tab"
          data-bs-toggle="tab"
          data-bs-target="#coffee-tab-pane"
          type="button"
          role="tab"
          aria-controls="coffee-tab-pane"
          aria-selected="false"
        >
          Coffee
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tea-tab"
          data-bs-toggle="tab"
          data-bs-target="#tea-tab-pane"
          type="button"
          role="tab"
          aria-controls="tea-tab-pane"
          aria-selected="false"
        >
          Tea
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="cocoa-tab"
          data-bs-toggle="tab"
          data-bs-target="#cocoa-tab-pane"
          type="button"
          role="tab"
          aria-controls="cocoa-tab-pane"
          aria-selected="false"
        >
          Cocoa
        </button>
      </li>
    </ul>

    <div class="create-vertical-link d-flex align-items-center">
      <a href="#" class="">
        <font-awesome-icon icon="fa-solid fa-plus" />
        <span> Create Vertical </span>
      </a>
    </div>
  </div>
</template>
