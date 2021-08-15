<template>
  <div v-if="lectureList.length > 0">
    <ul class="container">
      <LectureItem
        v-for="lecture in lectureList"
        :key="lecture.id"
        :title="lecture.title"
        :image="lecture.image"
        :progress="lecture.progress"
        :id="lecture.id"
        :openModal="openModal"
        :setSelectedLectureId="setSelectedLectureId"
      />
    </ul>
  </div>
  <div v-else>
    <p>이런, 아직 강의 목록이 비어있네요!</p>
  </div>
  <Modal :closeModal="closeModal" v-if="isOpened">
    <LectureCourse :id="selectedLectureId" />
  </Modal>
</template>

<script>
import LectureItem from "../LectureManage/LectureItem.vue";
import Modal from "../UI/Modal.vue";
import LectureCourse from "./LectureCourse.vue";

export default {
  components: {
    LectureItem,
    LectureCourse,
    Modal,
  },

  data() {
    return {
      isOpened: false,
      selectedLectureId: null,
    };
  },
  methods: {
    closeModal() {
      this.isOpened = false;
    },
    openModal() {
      this.isOpened = true;
    },
    setSelectedLectureId(id) {
      this.selectedLectureId = id;
      console.log(this.selectedLectureId);
    },
  },
  computed: {
    lectureList() {
      return localStorage.getItem("lectureList") === null ||
        localStorage.getItem("lectureList") === ""
        ? []
        : JSON.parse(localStorage.getItem("lectureList"));
    },
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
