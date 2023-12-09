<template>
  <div>
    <p>custom text input</p>

    <!-- case 1 -->
    <!-- <input
      type="text"
      placeholder="Custom text input"
      id=""
      @change="$emit('customChange', $event.target.value)"
    /> -->

    <!-- case 2 -->
    <input
      type="text"
      placeholder="Custom text input"
      id=""
      @change="sendChange"
    />

    <button>test</button>
  </div>
</template>

<script setup lang="ts">
//       in case 2 above
// const emit = defineEmits(["customChange"]);

// const sendChange = (event: any) => {
//   emit("customChange", event.target.value);
//  };

// case 3
// const emit = defineEmits({
//   customChange(payload) {
//     // return `true` or `false` to indicate
//     // validation pass / fail
//     console.log("hello");
//     return payload;
//   },
// });
// const sendChange = (event: any) => {
//   emit("customChange", event.target.value);
// };

// case 4 typing

const emit = defineEmits<{
  (e: "change", id: number | string): void;
  (e: "update", value: string): void;
  (e: "customChange", event: any): void;
}>();

const sendChange = (event: any) => {
  // console.log(event.target.value);
  emit("customChange", event.target.value);
};
</script>

<!-- case3  in case 2 above
export default {
  emits: ["customChange"],
  setup(props, { emit }) {
    const sendChange = (event) => {
      emit("customChange", event.target.value);
    };
    return {
      sendChange,
    };
  },
}; -->
