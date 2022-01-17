const app = Vue.createApp({
  data() {
    return { goals: [], enterdGoal: "" };
  },
  methods: {
    addGoals() {
      if (this.enterdGoal === "") {
        return;
      }
      this.goals.push(this.enterdGoal);
      this.enterdGoal = "";
    },
    removeGoal(idx) {
      console.log(idx);
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
