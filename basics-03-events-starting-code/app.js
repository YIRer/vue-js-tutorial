const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      five: 5,
      ten: 10,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    decreaseCounter(num) {
      this.counter = this.counter - num;
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm() {
      console.log("submit!");
    },
    setConfirmName() {
      this.confirmName = this.name;
    },
  },
});

app.mount("#events");
