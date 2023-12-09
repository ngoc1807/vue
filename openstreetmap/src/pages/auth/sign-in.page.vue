<template>
  <div class="w-screen min-h-screen flex justify-center items-center">
    <div class="w-full sm:max-w-[500px] md:w-full min-h-[300px]">
      <div class="text-[32px] text-center mb-[64px] font-roboto">
        ECO VALUE PACK
      </div>
      <div class="px-3">
        <form v-on:submit.prevent="router.push('/dashboard')">
          <div>
            <div
              class="text-neutral-500 font-medium text-[18px] leading-[20px] mb-[4px]"
            >
              LoginID
            </div>
            <div
              class="relative w-full min-h-[48px] flex flex-nowrap bg-neutral-200 items-center rounded-[5px]"
            >
              <div class="ml-[16px] absolute z-[1] left-0">
                <UserCircleIcon class="h-[24px] w-[24px] text-primary-400" />
              </div>
              <input
                class="absolute left-0 px-[48px] bg-transparent flex-grow w-full min-h-[48px] text-[16px] font-normal outline-none"
                name="username"
                placeholder="Enter Login ID"
                value="bechtelar.myra@example.org"
              />
            </div>
            <p
              id="standard_error_help "
              class="mt-1 mb-2 min-h-[16px] text-xs text-red-500"
            >
              <span class="font-medium">{error.message}</span>
            </p>
          </div>
          <div>
            <div
              class="text-neutral-500 font-medium text-[18px] leading-[20px] mb-[4px]"
            >
              Password
            </div>
            <div
              class="relative w-full min-h-[48px] flex flex-nowrap bg-neutral-200 items-center rounded-[5px]"
            >
              <div class="ml-[16px] absolute z-[1] left-0">
                <ShieldExclamationIcon
                  class="h-[24px] w-[24px] text-primary-400"
                />
              </div>
              <input
                class="absolute left-0 px-[48px] bg-transparent flex-grow w-full min-h-[48px] text-[16px] outline-none"
                name="password"
                :type="showPassword ? 'password' : 'text'"
                placeholder="Enter Password"
              />
              <div
                class="absolute z-[1] right-0 mr-[16px] transition-all"
                @click="onShowPass"
              >
                <EyeIcon
                  v-if="showPassword === true"
                  class="h-[24px] w-[24px] text-primary-400 cursor-pointer"
                />

                <EyeSlashIcon
                  v-else
                  class="h-[24px] w-[24px] text-primary-400 cursor-pointer"
                />
              </div>
            </div>
            <p
              id="standard_error_help "
              class="mt-1 mb-2 min-h-[16px] text-xs text-red-500"
            >
              <span class="font-medium">{error.message}</span>
            </p>
          </div>
          <div class="mt-[24px]">
            <button
              type="submit"
              class="hover:opacity-70 w-full flex justify-center items-center bg-primary-400 min-h-[48px] rounded-[4px]"
            >
              <div
                class="px-3 text-neutral-100 font-semibold text-[16px] leading-[20px]"
              >
                Login
              </div>
            </button>
          </div>
          <div class="flex flex-wrap justify-center pt-[24px]">
            <router-link
              to="/forgot-password"
              class="text-primary-400 hover:opacity-60"
            >
              Forgot Password
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  UserCircleIcon,
  ShieldExclamationIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const showPassword = ref<boolean>(false);

const onShowPass = () => {
  showPassword.value = !showPassword.value;
};
</script>
