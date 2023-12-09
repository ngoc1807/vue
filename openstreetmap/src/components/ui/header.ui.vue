<template>
  <div
    className="h-[60px] relative w-full bg-white flex justify-between items-center border-b border-b-neutral-200  shadow-sm"
  >
    <button
      class="hover:opacity-70 flex justify-center items-center bg-primary-400 ml-5 text-white bg-primary-400 font-medium rounded-md text-sm focus:outline-none outline:none min-h-[24px] w-auto h-auto"
      @click="onClickToggle"
    >
      <div
        class="text-neutral-100 font-semibold text-[16px] leading-[20px] p-2 w-[35px]"
      >
        <Bars3BottomLeftIcon className="w-[24px] h-[24px] text-white" />
      </div>
    </button>

    <div className="avatar-container pr-5">
      <Menu as="div" class="relative inline-block">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-md bg-opacity-20 pt-2"
          >
            <div class="relative">
              <img
                class="w-10 h-10 rounded-full"
                src="https://picsum.photos/100/100"
                alt=""
              />
              <span
                class="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"
              ></span>
            </div>
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-primary-400 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <ShieldExclamationIcon
                    :active="active"
                    :class="
                      active
                        ? 'mr-2 text-primary-100 h-[24px] w-[24px]'
                        : 'mr-2 text-primary-400 h-[24px] w-[24px]'
                    "
                    aria-hidden="true"
                  />
                  Edit
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-primary-400 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <ShieldExclamationIcon
                    :active="active"
                    :class="
                      active
                        ? 'mr-2 text-primary-100 h-[24px] w-[24px]'
                        : 'mr-2 text-primary-400 h-[24px] w-[24px]'
                    "
                    aria-hidden="true"
                  />
                  Duplicate
                </button>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-primary-400 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <ShieldExclamationIcon
                    :active="active"
                    :class="
                      active
                        ? 'mr-2 text-primary-100 h-[24px] w-[24px]'
                        : 'mr-2 text-primary-400 h-[24px] w-[24px]'
                    "
                    aria-hidden="true"
                  />
                  Archive
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-primary-400 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <ShieldExclamationIcon
                    :active="active"
                    :class="
                      active
                        ? 'mr-2 text-primary-100 h-[24px] w-[24px]'
                        : 'mr-2 text-primary-400 h-[24px] w-[24px]'
                    "
                    aria-hidden="true"
                  />
                  Move
                </button>
              </MenuItem>
            </div>

            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-primary-400 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <ShieldExclamationIcon
                    :active="active"
                    :class="
                      active
                        ? 'mr-2 text-primary-100 h-[24px] w-[24px]'
                        : 'mr-2 text-primary-400 h-[24px] w-[24px]'
                    "
                    aria-hidden="true"
                  />
                  Delete
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars3BottomLeftIcon } from "@heroicons/vue/24/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ShieldExclamationIcon } from "@heroicons/vue/24/solid";

const emit = defineEmits<{
  (e: "onSidebar"): void;
}>();

const onClickToggle = () => {
  emit("onSidebar");
};
</script>
