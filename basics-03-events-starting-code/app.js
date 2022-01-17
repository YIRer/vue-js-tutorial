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
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Max";
    },
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
    resetInput() {
      this.name = "";
      this.confirmName = "";
    },
  },
});

app.mount("#events");
