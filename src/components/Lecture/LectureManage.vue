<template>
  <div class="container">
    <AddLecture />
    <LectureList />
  </div>
</template>

<script>
import LectureList from "./LectureList.vue";
import AddLecture from "./AddLecture.vue";

export default {
  components: {
    LectureList,
    AddLecture,
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
