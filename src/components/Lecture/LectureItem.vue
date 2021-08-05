<template>
  <li class="container">
    <div>
      <p class="lecture-name">{{ name }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  padding: 8px;
  margin: 12px 0;
}
.lecture-name {
  font-size: 15px;
}
</style>
