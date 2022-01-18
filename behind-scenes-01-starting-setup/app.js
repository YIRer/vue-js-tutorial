const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    debugger;
    console.log("beforeCreate");
  },
  created() {
    debugger;
    console.log("created");
  },
  beforeMount() {
    debugger;
    console.log("beforeMount");
  },
  mounted() {
    debugger;
    console.log("mounted");
  },
  beforeUpdate() {
    debugger;
    console.log("beforeUpdate");
  },
  updated() {
    debugger;
    console.log("updated");
  },
  beforeUnmount() {
    debugger;
    console.log("beforeUnmount");
  },
  unmounted() {
    debugger;
    console.log("unmounted");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);
