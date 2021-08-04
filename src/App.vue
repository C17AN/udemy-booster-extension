<template>
  <div>
    <Login msg="Hello" />
    <div>안녕!</div>
    <div>현재 카운트 : {{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login,
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style></style>
