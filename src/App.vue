<template>
  <Header />
  <Login msg="Hello" />
  <div>안녕!</div>
</template>

<script>
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login,
    Header,
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
