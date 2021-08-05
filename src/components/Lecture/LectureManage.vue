<template>
  <div class="container">
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
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
