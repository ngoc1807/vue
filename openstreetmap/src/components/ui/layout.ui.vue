<template>
  <section
    className="relative min-h-[100vh] max-w-[100%]  w-screen min-w-[768px] flex flex-nowrap  "
  >
    <div className="relative ">
      <!-- <Sidebar sidebar={sidebar} openSidebar={() => setSidebar(true)} /> -->
      <SidebarUi :sidebar="toggle" @onOpenSidebar="onOpenToggle" />
    </div>
    <div className="flex-grow overflow-hidden">
      <HeaderUi @onSidebar="onToggle" />
      <div className="p-5 bg-[#f7f8f9] min-h-[calc(100vh-60px)]">
        <div
          className="bg-white shadow-md w-full  min-h-[calc(100vh-60px-40px)] rounded-md"
        >
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderUi from "@/components/ui/header.ui.vue";
import { ref } from "vue";
import SidebarUi from "./sidebar.ui.vue";

const toggle = ref<boolean>(true);

const onToggle = () => {
  toggle.value = !toggle.value;
};
const onOpenToggle = () => {
  toggle.value = true;
};
</script>
