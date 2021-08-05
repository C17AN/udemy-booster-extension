<template>
  <div>{{ count }}</div>
  <button @click="increase">+</button>
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
  },
};
</script>

<style></style>
