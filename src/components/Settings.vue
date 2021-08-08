<template>
  <div class="container">
    <h1 class="settings-title">설정</h1>
    <ul>
      <li>언어</li>
      <li>버전 정보</li>
      <li></li>
    </ul>
    <button class="btn-reset">데이터 초기화</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.settings-title {
  font-size: 1.24rem;
  font-weight: 600;
}

.btn-reset {
  padding: 8px;
  background-color: var(--skyblue-300);
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease-in;

  &:hover {
    transition: background-color 0.15s ease-in;
    background-color: var(--skyblue-500);
  }
}
</style>
