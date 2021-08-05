<template>
  <div class="dashboard-container">
    <h1>전체 강의 진행률</h1>
    <ProgressBar />
    <h3>강의 목록</h3>
  </div>
</template>

<script>
import ProgressBar from "./Lecture/ProgressBar.vue";
export default {
  components: {
    ProgressBar,
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
