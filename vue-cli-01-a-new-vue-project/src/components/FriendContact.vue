<template>
  <li>
    <h2>{{ friendName }}{{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggelFavorite">Toggle Favorite</button>
    <button @click="toggleDetail">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="$emit('delete-friend', id)">Delete Friend</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  emits: ["toggel-favorite", "delete-friend"],
  //유효성 확인 코드
  // emits: {
  //   "toggel-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing!");
  //       return false;
  //     }
  //   },
  // },
  // props: ["id", "friendName", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    friendName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: true,
      validator: function (value) {
        return typeof value === "boolean";
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetail() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggelFavorite() {
      this.$emit("toggel-favorite", this.id);
    },
  },
};
</script>
