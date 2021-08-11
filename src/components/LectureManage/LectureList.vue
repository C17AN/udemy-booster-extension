<template>
  <div v-if="lectureList.length > 0">
    <ul class="container">
      <LectureItem v-for="lecture in lectureList" :key="lecture.id" :name="lecture.name" />
    </ul>
  </div>
  <div v-else>
    <p>이런, 아직 강의 목록이 비어있네요!</p>
  </div>
</template>

<script>
import LectureItem from "../LectureManage/LectureItem.vue";

export default {
  components: {
    LectureItem,
  },
  data() {
    return {
      lectureList: [],
    };
  },
  created() {
    // this.lectureList = JSON.parse(localStorage.getItem("lectureList")).lectures;
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-height: 300px;
  overflow-y: scroll;
  margin-top: 8px;
}
</style>
