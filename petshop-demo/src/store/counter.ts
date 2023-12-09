import { defineStore } from "pinia";

type Props = {
  count: number;
  name: string;
  isAdmin: boolean;
};

export const useCounterStore = defineStore("main", {
  state: (): Props => ({ count: 0, name: "Admin", isAdmin: true }),
  getters: {
    double: (state: Props) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// ** revers
// ref()s become state properties
// computed()s become getters
// function()s become actions
