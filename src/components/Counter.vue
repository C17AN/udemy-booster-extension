<template>
  <div>{{ count }}</div>
  <button @click="asyncIncrease">+</button>
  <input @input="change" />
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increase() {
      this.$store.commit("increase");
    },
    change(e) {
      this.$store.commit("change", e.target.value);
    },
    asyncIncrease() {
      this.$store.dispatch("increaseAction");
    },
  },
};
</script>

<style></style>
