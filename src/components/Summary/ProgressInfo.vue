<template>
  <div class="container"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  border: 2px solid rgba(230, 230, 230, 0.9);
  border-radius: 8px;
  height: 40px;
  margin: 8px 0;
  transition: border 0.2s ease;
  cursor: pointer;
  &:hover {
    transition: border 0.2s ease;
    border-color: var(--skyblue-500);
  }
}
</style>
