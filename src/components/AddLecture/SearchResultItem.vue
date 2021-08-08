<template>
  <li class="search-item-container">
    <p class="item-title">{{ title }}</p>
    <button>강의 추가</button>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
.search-item-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #cdcdcd;
  padding: 8px;
}
.item-title {
  font-size: 14px;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
