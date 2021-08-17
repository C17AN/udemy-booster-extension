<template>
  <div class="dashboard-container">
    <div class="container-top">
      <h1>전체 강의 진행률</h1>
      <ProgressBar />
    </div>
    <div class="container-bottom">
      <h1>추가 정보</h1>
      <ul>
        <ProgressInfo />
        <ProgressInfo />
      </ul>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import ProgressInfo from "./ProgressInfo.vue";
export default {
  components: {
    ProgressBar,
    ProgressInfo,
  },
};
</script>

<style scoped lang="scss">
.dashboard-container {
  flex: 1;
}
h1 {
  font-size: 1.16rem;
  font-weight: 500;
}
.container-top {
  margin-bottom: 20px;
}
.container-bottom {
  h1 {
    margin-bottom: 14px;
  }
}
</style>
