<template>
  <div class="container">
    <Header />
    <Login msg="Hello" />
    <!-- <Counter /> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
// import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Header,
    Login,
    // Counter,
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

<style scoped>
.container {
  width: 400px;
  height: 450px;
}
</style>
