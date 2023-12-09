import { defineStore } from "pinia";
export const useCounterStore = defineStore("main", {
    state: () => ({ count: 0, name: "Admin", isAdmin: true }),
    getters: {
        double: (state) => state.count * 2,
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
//# sourceMappingURL=counter.js.map