<template>
  <div class="sidebar bg-[ffff]">
    <aside
      class="origin-left transition-all ease-in-out duration-500 min-h-[100vh] max-h-[100vh] overflow-hidden border-r border-r-neutral-200"
      aria-label="Sidebar"
      :class="styleAside"
    >
      <div
        class="py-4 bg-[#fff] rounded h-full transition-all ease-in-out duration-500"
      >
        <a
          href=""
          class="flex items-center transition-all ease-in-out duration-500 pl-2 mb-5"
          ><img
            src="http://picsum.photos/200/200"
            class="h-10 w-10 mr-2.5"
            alt="Logo"
          /><span
            class="self-center text-xl font-semibold whitespace-nowrap"
            :class="hideStyle"
            >Ecommit</span
          ></a
        >
        <div
          class="scrollbar max-h-[100vh] overflow-x-hidden"
          :class="styleMenu"
        >
          <ul class="space-y-1">
            <!-- handleDataSidebar -->

            <li v-for="data in listData" className="group" :key="data.link">
              <div class="space-y-1" v-if="data?.children">
                <!--  -->
                <div
                  v-if="!sidebar"
                  class="left-[calc(100%+10px)] w-max absolute z-10 h-[40px] flex items-center px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible transition-opacity duration-300 tooltip group-hover:visible group-hover:opacity-100 before:content-[''] before:absolute before:bg-gray-900 before:left-[-12px] before:top-[14px] before:border-y-[6px] before:border-l-[0px] before:border-r-[12px] before:border-t-[#f7f8f9] before:border-r-gray-900 before:border-b-[#f7f8f9] before:border-l-[#f7f8f9]"
                >
                  {{ data.label }}
                </div>

                <Disclosure
                  as="div"
                  v-slot="{ open }"
                  class="transition-all min-w-max"
                >
                  <DisclosureButton
                    class="transition-all origin-left flex items-center py-2 w-full outline-none text-left text-[15px] font-medium text-gray-500 hover:bg-gray-200 focus:outline-none hover:text-neutral-500"
                    :class="styleLinkAccordionItem"
                    :onclick="onClickToggle"
                  >
                    <Component
                      :is="data.icon"
                      class="w-[24px] h-[24px] flex-shrink-0 text-primary-400 transition duration-75"
                      :class="styleIconTrue"
                    />

                    <div
                      class="mx-2 flex-[1] overflow-hidden"
                      :class="sidebar === true ? 'block' : 'hidden '"
                    >
                      {{ data.label }}
                    </div>
                    <ChevronDownIcon
                      class="h-4 w-4 text-neutral-500 transition-all"
                      :class="styleArrowDown(open)"
                    />
                  </DisclosureButton>
                  <DisclosurePanel
                    v-if="sidebar === true"
                    class="mb-2 text-sm text-gray-500 transition-all"
                  >
                    <ul className="space-y-1">
                      <li v-for="child in data?.children" :key="child?.link">
                        <!-- <router-link :to="{ name: child?.link }"> -->

                        <router-link
                          :to="{ name: child.name }"
                          v-slot="{ isExactActive }"
                        >
                          <div
                            :class="
                              isExactActive
                                ? onStyleLinkItem(true)
                                : onStyleLinkItem(false)
                            "
                          >
                            <span
                              class="flex-1 mx-2 whitespace-nowrap text-[14px] font-medium"
                              :class="hideStyle"
                            >
                              {{ child?.label }}
                            </span>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>

              <div v-else class="space-y-1">
                <div
                  v-if="!sidebar"
                  class="left-[calc(100%+10px)] w-max absolute invisible z-10 h-[40px] flex items-center px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip group-hover:visible group-hover:opacity-100 before:content-[''] before:absolute before:bg-gray-900 before:left-[-12px] before:top-[14px] before:border-y-[6px] before:border-l-[0px] before:border-r-[12px] before:border-t-[#f7f8f9] before:border-r-gray-900 before:border-b-[#f7f8f9] before:border-l-[#f7f8f9]"
                >
                  {{ data.label }}
                </div>

                <router-link
                  :to="{ name: data.name }"
                  v-slot="{ isExactActive }"
                >
                  <div
                    :class="
                      isExactActive
                        ? onStyleLinkItem(true)
                        : onStyleLinkItem(false)
                    "
                  >
                    <Component
                      :is="data.icon"
                      class="w-[24px] h-[24px] flex-shrink-0 text-primary-400 transition duration-75"
                      :class="styleIconTrue"
                    />

                    <span
                      class="flex-1 mx-2 whitespace-nowrap text-[15px] font-medium"
                      :class="hideStyle"
                    >
                      {{ data.label }}
                    </span>
                  </div>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  ShieldExclamationIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/solid";

import { toRefs, shallowRef, computed } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = defineProps({
  sidebar: Boolean,
});
const { sidebar } = toRefs(props);
// watch(sidebar, () => {
//   console.log(props.sidebar, "assd");
// });

const styleAside = computed(() =>
  props.sidebar === true ? "w-64 " : "w-14  "
);

const styleLinkItem = computed(() =>
  props.sidebar === true ? "p-2" : "py-2 px-1 justify-center "
);

const onStyleLinkItem = (active: boolean) => {
  return active
    ? styleLinkItem.value +
        " " +
        "flex items-center origin-left text-base font-normal text-neutral-500 bg-gray-200  transition-all ease-in-out duration-500"
    : styleLinkItem.value +
        " " +
        "flex items-center origin-left text-base font-normal text-gray-500   hover:bg-gray-200  transition-all ease-in-out duration-500 ";
};

const styleLinkAccordionItem = computed(() =>
  props.sidebar === true ? "p-2  justify-between " : "py-2 px-1 justify-center "
);
const hideStyle = computed(() =>
  props.sidebar === true ? "block" : "hidden "
);

const styleMenu = computed(() =>
  props.sidebar === true ? "overflow-y-auto" : "overflow-y-hidden"
);

const styleIconTrue = computed(() =>
  props.sidebar === true ? "" : "scale-[1.3]"
);

const styleArrowDown = (open: boolean) => {
  const style = open ? "rotate-180 transform transition-all" : "";
  return hideStyle.value + " " + style;
};

const emit = defineEmits<{
  (e: "onOpenSidebar"): void;
}>();

const onClickToggle = () => {
  emit("onOpenSidebar");
};

const listData = shallowRef([
  {
    label: "Dashboard",
    link: "dashboard",
    name: "Dashboard",
    icon: ShieldExclamationIcon,
  },

  {
    label: "Movement history",
    link: "movement-history",
    name: "MovementHistory",
    icon: ShieldExclamationIcon,
  },

  {
    label: "Directions Management",
    link: "directions-management",
    name: "DirectionsManagement",
    icon: ShieldExclamationIcon,
  },

  {
    label: "Landmark Management",
    link: "landmark-management",
    name: "LandmarkManagement",
    icon: ShieldExclamationIcon,
  },

  {
    label: "Example",
    link: "example",
    icon: ShieldExclamationIcon,
    name: "Example",
    children: [
      {
        label: "Example first",
        name: "Example1",
        link: "example-first",
      },
      {
        label: "Example second",
        name: "Example2",
        link: "example-second",
      },
    ],
  },
]);
</script>
