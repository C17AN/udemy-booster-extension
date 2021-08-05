<template>
  <div class="container">
    <ul class="menu">
      <li>마이페이지</li>
      <li>강의 추가</li>
    </ul>
    <div>
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
export default {
  components: {
    Dashboard,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 0 20px 24px 20px;
}

.menu {
  display: flex;
  margin: 20px 0 24px 0;
  li {
    font-size: 14px;
    margin: 0 8px;
    cursor: pointer;
    transition: 0.15s ease all;
  }
  li:hover {
    transition: 0.15s ease all;
    color: var(--skyblue-300);
  }
}
</style>
