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
import LectureItem from "./LectureItem.vue";
const data = {
  lectures: [
    {
      id: "1",
      name: "Vue.js",
    },
    {
      id: "2",
      name: "React.js",
    },
    {
      id: "3",
      name: "Typescript",
    },
    {
      id: "4",
      name: "Vue.js",
    },
    {
      id: "5",
      name: "React.js",
    },
    {
      id: "6",
      name: "Typescript",
    },
    {
      id: "7",
      name: "Vue.js",
    },
    {
      id: "8",
      name: "React.js",
    },
    {
      id: "9",
      name: "Typescript",
    },
  ],
};

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
    localStorage.setItem("lectureList", JSON.stringify(data));
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
