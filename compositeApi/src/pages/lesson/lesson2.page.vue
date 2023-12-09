<template>
  <h1>{{ header }}</h1>
  <form
    v-on:submit.prevent="
      items.push({
        id: items.length + 1,
        label: newItem,
      })
    "
  >
    hello wwok

    <!-- v-model.lazy  : unfocus will trigger -->
    <input
      type="text"
      v-model.trim="newItem"
      placeholder="Add an item"
      class="border-2"
      v-on:keyup.enter="
        items.push({
          id: items.length + 1,
          label: newItem,
        })
      "
    />
    Priority :
    <label for="low">
      <input
        type="radio"
        name="priority"
        id="low"
        value="low"
        v-model="newItemPriority"
      />
      Low
    </label>
    <label for="high">
      <input
        type="radio"
        name="priority"
        id="high"
        value="high"
        v-model="newItemPriority"
      />
      High
    </label>
    <br />

    <br />
    <!-- select  -->
    <select name="" id="" v-model="newItemHighPriority">
      <option value="low">Low</option>
      <option value="high">Hight</option>
    </select>
    {{ newItemPriority }}

    <br />
    <!-- checkbox -->
    <label for="checkbox">
      <input
        type="checkbox"
        name=""
        id="checkbox"
        v-model="newItemHighPriority"
      />

      isHighPriority
    </label>

    {{ newItemHighPriority }}

    <!-- list checkbox array -->
    <br />
    <label for="checkboxArray">
      <input
        type="checkbox"
        name=""
        id="checkboxArray"
        value="chocolate"
        v-model="newItemArray"
      />

      chocolate
    </label>

    <label for="checkboxArray1">
      <input
        type="checkbox"
        name=""
        id="checkboxArray1"
        value="cake"
        v-model="newItemArray"
      />
      cake
    </label>

    <label for="checkboxArray2">
      <input
        type="checkbox"
        name=""
        id="checkboxArray2"
        value="icescream"
        v-model="newItemArray"
      />
      ice scream
    </label>
    <br />
    "{{ newItemArray }}"

    <!--  -->

    <button class="text-white">save item</button>
    <!--  -->
    <ul>
      <li v-for="({ id, label }, index) in items" :key="id">
        {{ index }} :
        {{ label }}
      </li>
    </ul>
  </form>
</template>
<script setup lang="ts">
import { ref } from "vue";

const header = ref("Shop list");
const items = ref([
  { id: 1, label: "10 party hats" },
  { id: 2, label: "2 board games" },
  { id: 3, label: "10 cup" },
  { id: 4, label: "20 cup" },
]);

// const items = ref(

//   {
//   "item-1": { id: 1, label: "10 party hats" },
//   "item-2": { id: 2, label: "2 board games" },

//   "item-3": { id: 3, label: "10 cup" },
//   "item-4": { id: 4, label: "20 cup" },
// }

// );
const newItem = ref("");
const newItemPriority = ref("low");
const newItemHighPriority = ref(false);
const newItemArray = ref([]);
</script>
