<template>
  <header class="top-0 sticky left-0">
    <nav
      class="bg-white border-gray-200 pt-2.5 dark:bg-gray-900 transition-all"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto md:max-w-7xl px-2 sm:px-4"
      >
        <router-link to="/" class="flex items-center">
          <img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        </router-link>
        <!-- search -->
        <div class="flex-grow-[2] mx-3 md:block hidden">
          <form class="md:max-w-[500px] mx-auto">
            <div class="relative">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block p-2 pl-10 pr-20 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-tr-full rounded-br-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <!--  change locale -->
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              {{ locale }}
              <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-6 py-2 text-sm',
                    ]"
                    @click="changeLocale('Vietnamese')"
                    >Vietnamese</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-6 py-2 text-sm',
                    ]"
                    @click="changeLocale('English')"
                    >English</a
                  >
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <!--  -->
        <div>
          <button
            @click="toggleMenu"
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 -z-10"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <!-- menu  -->

          <div
            class="transition-all fixed top-[62px] left-0 w-[280px] bg-white bottom-0 h-[100vh - 62px] md:invisible"
            :class="
              menuTablet
                ? 'block opacity-100  visible'
                : 'block opacity-0   invisible'
            "
          >
            <div class="text-teal-900">HELLO</div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-wrap justify-between items-center transition-all bg-main mt-2"
      >
        <!-- menu -->
        <div
          class="hidden w-full md:block transition-all mx-auto max-w-7xl px-2 sm:px-4"
        >
          <ul
            class="flex h-auto flex-col rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li v-for="route in routers" :key="route.slug">
              <router-link
                :to="`/${route.slug}`"
                class="block py-2 text-white rounded hover:bg-transparent"
                >{{ route.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
const routers = [
  {
    name: "Home",
    slug: "home",
  },
  {
    name: "Movies",
    slug: "movies",
  },
  {
    name: "Products",
    slug: "products",
  },
  {
    name: "Services",
    slug: "services",
  },
  {
    name: "Pricing",
    slug: "pricing",
  },
  {
    name: "Contact",
    slug: "Contact",
  },
];

const locale = ref<string>("Vietnamese");
const menuTablet = ref<boolean>(false);
const changeLocale = (val: string) => (locale.value = val);

const toggleMenu = () => (menuTablet.value = !menuTablet.value);

console.log(menuTablet.value);
</script>
<!-- <style lang="css">
.router-link-active,
.test-link-active-with-class {
  color: #535bf2;
  border-bottom: 1px solid rgb(240, 150, 150);
}
</style> -->
