<template>
  <div>
    <h1>Protected</h1>
    <p>Hello : {{ username }}</p>

    <router-link :to="{ name: 'invoices' }">
      <button class="mr-3">Invoices</button>
    </router-link>

    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const store = localStorage.getItem("isLogin") || "";
const isLogin = store ? JSON.parse(store) : "";
console.log("isLogin", isLogin);

const username = isLogin?.username || "";
const router = useRouter();
const logout = () => {
  localStorage.clear();
  // router.push({ name: "Products" });

  // add #logout when we went to /products page like product#logout
  // router.push({ name: "Products", hash: "#logout" });

  // add ?logout when we went to /products page like product?logout
  router.push({ name: "Products", query: { logout: null } });

  // add ?logout when we went to /products page like product?logout
  // router.replace({ name: "Products", query: { logout: null } });
};
</script>
