<template>
  <div class="login">
    <form class="form" @submit.prevent="submitFormData">
      <h1>Login</h1>
      <label for="username">username</label>
      <br />

      <input
        v-model="username"
        name="usename"
        type="text"
        class="input text-black"
      />
      <br />
      <br />

      <label for="password">password</label>
      <br />
      <input
        v-model="password"
        name="password"
        type="text"
        class="input text-black"
      />
      <br />
      <br />

      <button type="submit" class="btn bg-red-400">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const username = ref("");
const password = ref("");

function submitFormData() {
  // console.log(username.value, " - ", password.value);

  localStorage.setItem(
    "isLogin",
    JSON.stringify({
      login: true,
      username: username.value,
    })
  );

  const redirectPath = route.query.redirect || "/protected";
  console.log(redirectPath, "redirectPath");
  // router.push({ name: "protected" });
  router.push(redirectPath as string);
}
</script>
