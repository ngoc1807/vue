<template>
  <div class="max-w-[1280px] mx-auto bg-slate-300 flex">
    <router-link :to="{ name: 'Lesson1' }" key="Lesson1" class="mx-2">
      Lesson1
    </router-link>
    <router-link :to="{ name: 'Lesson2' }" class="mx-2" key="Lesson2">
      Lesson2
    </router-link>
    <router-link :to="{ name: 'Emit1' }" class="mx-2" key="Lesson2">
      Emit1
    </router-link>
  </div>
</template>
