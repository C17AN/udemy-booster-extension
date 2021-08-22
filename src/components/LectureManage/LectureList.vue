<template>
  <div v-if="lectureList.length > 0">
    <ul class="lectureList-container">
      <LectureItem
        v-for="lecture in lectureList"
        :key="lecture.id"
        :title="lecture.title"
        :image="lecture.image"
        :id="lecture.id"
        :openModal="openModal"
        :setSelectedLectureId="setSelectedLectureId"
      />
    </ul>
  </div>
  <div class="lectureList-empty" v-else>
    <p>이런, 아직 강의 목록이 비어있네요!</p>
  </div>
  <Modal :closeModal="closeModal" v-if="isOpened">
    <CourseContainer :id="selectedLectureId" />
  </Modal>
</template>

<script>
import LectureItem from "../LectureManage/LectureItem.vue";
import Modal from "../UI/Modal.vue";
import CourseContainer from "../LectureCurriculum/CourseContainer.vue";

export default {
  components: {
    LectureItem,
    CourseContainer,
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
.lectureList-container {
  max-height: 300px;
  overflow-y: scroll;
  margin-top: 8px;
}
.lectureList-empty {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
