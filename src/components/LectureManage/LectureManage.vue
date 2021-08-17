<template>
  <div class="lecture-manage-container">
    <h1>수강중인 강의 목록</h1>
    <LectureList />
  </div>
</template>

<script>
import LectureList from "./LectureList.vue";

export default {
  components: {
    LectureList,
  },
};
</script>

<style scoped lang="scss">
.lecture-manage-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
