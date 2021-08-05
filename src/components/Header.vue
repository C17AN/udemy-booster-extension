<template>
  <header>
    <div class="header-content">
      <font-awesome-icon icon="cog" />
      <div class="setting"></div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  background-color: var(--skyblue-200);
  height: 45px;
}
.header-content {
  margin-left: auto;

  svg {
    margin-right: 1rem;
    cursor: pointer;
  }
}
</style>
