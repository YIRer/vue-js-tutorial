const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "id#1",
          name: "test1",
          phone: "010-0000-0001",
          email: "test@yanolja.com",
        },
        {
          id: "id#2",
          name: "test2",
          phone: "010-0000-0002",
          email: "test2@yanolja.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li :key="friend.id">
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetail">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "id#2",
        name: "test2",
        phone: "010-0000-0002",
        email: "test2@yanolja.com",
      },
    };
  },

  methods: {
    toggleDetail() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
