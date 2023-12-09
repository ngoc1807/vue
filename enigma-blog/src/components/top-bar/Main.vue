<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed relative z-[51] -mx-3 mt-12 h-[70px] border-b border-white/[0.08] px-3 sm:-mx-8 sm:px-8 md:fixed md:inset-x-0 md:top-0 md:-mx-0 md:mt-0 md:h-[65px] md:border-b-0 md:bg-gradient-to-b md:from-slate-100 md:to-transparent md:px-10 md:pt-10 dark:md:from-darkmode-700"
  >
    <div class="flex h-full items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="logo -intro-x block hidden md:flex xl:w-[180px]">
        <img
          alt="Enigma Tailwind HTML Admin Template"
          class="logo__image w-6"
          src="@/assets/images/logo.svg"
        />
        <span class="logo__text ml-3 text-lg text-white"> Enigma </span>
      </a>
      <!-- END: Logo -->
      <!-- BEGIN: Breadcrumb -->
      <nav aria-label="breadcrumb" class="-intro-x mr-auto h-[45px]">
        <ol class="breadcrumb breadcrumb-light">
          <li class="breadcrumb-item"><a href="#">Application</a></li>
          <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
      </nav>
      <!-- END: Breadcrumb -->
      <!-- BEGIN: Search -->
      <div class="intro-x relative mr-3 sm:mr-6">
        <div class="search hidden sm:block">
          <input
            type="text"
            class="search__input form-control border-transparent"
            placeholder="Search..."
            @focus="showSearchDropdown"
            @blur="hideSearchDropdown"
          />
          <SearchIcon class="search__icon dark:text-slate-500" />
        </div>
        <a class="notification notification--light sm:hidden" href="">
          <SearchIcon class="notification__icon dark:text-slate-500" />
        </a>
        <div class="search-result" :class="{ show: searchDropdown }">
          <div class="search-result__content">
            <div class="search-result__content__title">Pages</div>
            <div class="mb-5">
              <a href="" class="flex items-center">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success dark:bg-success/10"
                >
                  <InboxIcon class="h-4 w-4" />
                </div>
                <div class="ml-3">Mail Settings</div>
              </a>
              <a href="" class="mt-2 flex items-center">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-pending/10 text-pending"
                >
                  <UsersIcon class="h-4 w-4" />
                </div>
                <div class="ml-3">Users & Permissions</div>
              </a>
              <a href="" class="mt-2 flex items-center">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary/80 dark:bg-primary/20"
                >
                  <CreditCardIcon class="h-4 w-4" />
                </div>
                <div class="ml-3">Transactions Report</div>
              </a>
            </div>
            <div class="search-result__content__title">Users</div>
            <div class="mb-5">
              <a
                v-for="(faker, fakerKey) in $_.take($f(), 4)"
                :key="fakerKey"
                href
                class="mt-2 flex items-center"
              >
                <div class="image-fit h-8 w-8">
                  <img
                    alt="Enigma Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="faker.photos[0]"
                  />
                </div>
                <div class="ml-3">{{ faker.users[0].name }}</div>
                <div
                  class="ml-auto w-48 truncate text-right text-xs text-slate-500"
                >
                  {{ faker.users[0].email }}
                </div>
              </a>
            </div>
            <div class="search-result__content__title">Products</div>
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="mt-2 flex items-center"
            >
              <div class="image-fit h-8 w-8">
                <img
                  alt="Enigma Tailwind HTML Admin Template"
                  class="rounded-full"
                  :src="faker.images[0]"
                />
              </div>
              <div class="ml-3">{{ faker.products[0].name }}</div>
              <div
                class="ml-auto w-48 truncate text-right text-xs text-slate-500"
              >
                {{ faker.products[0].category }}
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- END: Search -->
      <!-- BEGIN: Notifications -->
      <Dropdown class="intro-x mr-4 sm:mr-6">
        <DropdownToggle
          tag="div"
          role="button"
          class="notification notification--bullet cursor-pointer"
        >
          <BellIcon class="notification__icon dark:text-slate-500" />
        </DropdownToggle>
        <DropdownMenu class="notification-content pt-2">
          <DropdownContent tag="div" class="notification-content__box">
            <div class="notification-content__title">Notifications</div>
            <div
              v-for="(faker, fakerKey) in $_.take($f(), 5)"
              :key="fakerKey"
              class="relative flex cursor-pointer items-center"
              :class="{ 'mt-5': fakerKey }"
            >
              <div class="image-fit mr-1 h-12 w-12 flex-none">
                <img
                  alt="Enigma Tailwind HTML Admin Template"
                  class="rounded-full"
                  :src="faker.photos[0]"
                />
                <div
                  class="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-success"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="javascript:;" class="mr-5 truncate font-medium">{{
                    faker.users[0].name
                  }}</a>
                  <div class="ml-auto whitespace-nowrap text-xs text-slate-400">
                    {{ faker.times[0] }}
                  </div>
                </div>
                <div class="mt-0.5 w-full truncate text-slate-500">
                  {{ faker.news[0].shortContent }}
                </div>
              </div>
            </div>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
      <!-- END: Notifications -->
      <!-- BEGIN: Account Menu -->
      <Dropdown class="intro-x h-8 w-8">
        <DropdownToggle
          tag="div"
          role="button"
          class="image-fit zoom-in h-8 w-8 scale-110 overflow-hidden rounded-full shadow-lg"
        >
          <img
            alt="Enigma Tailwind HTML Admin Template"
            :src="$f()[9].photos[0]"
          />
        </DropdownToggle>
        <DropdownMenu class="w-56">
          <DropdownContent
            class="bg-primary/80 text-white before:absolute before:inset-0 before:z-[-1] before:block before:rounded-md before:bg-black"
          >
            <DropdownHeader tag="div" class="!font-normal">
              <div class="font-medium">
                {{ $f()[0].users[0].name }}
              </div>
              <div class="mt-0.5 text-xs text-white/60 dark:text-slate-500">
                {{ $f()[0].jobs[0] }}
              </div>
            </DropdownHeader>
            <DropdownDivider class="border-white/[0.08]" />
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <UserIcon class="mr-2 h-4 w-4" /> Profile</DropdownItem
            >
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <EditIcon class="mr-2 h-4 w-4" /> Add Account</DropdownItem
            >
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <LockIcon class="mr-2 h-4 w-4" /> Reset Password</DropdownItem
            >
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <HelpCircleIcon class="mr-2 h-4 w-4" /> Help</DropdownItem
            >
            <DropdownDivider class="border-white/[0.08]" />
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <ToggleRightIcon class="mr-2 h-4 w-4" /> Logout</DropdownItem
            >
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
      <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script setup>
import { ref } from "vue";

const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};
</script>
