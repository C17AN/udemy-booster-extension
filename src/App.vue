<template>
  <div class="container">
    <Header />
    <div v-if="verified">
      <Main />
    </div>
    <div v-else>
      <Login msg="Hello" />
    </div>
    <!-- <Counter /> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import Main from "./components/Main.vue";
// import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Header,
    Login,
    Main,
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
    verified() {
      return this.$store.state.verified;
    },
  },
};
</script>

<style scoped>
.container {
  width: 400px;
  height: 500px;
}
</style>
