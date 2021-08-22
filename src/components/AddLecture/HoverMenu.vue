<template>
  <div class="hover-menu-container">
    <ul class="hover-menu-items">
      <li class="hover-menu-item" v-if="lectureList.some((lecture) => lecture.id === id) === true">
        <img src="/assets/icons/checked.svg" width="20" height="20" />
        <p>저장됨</p>
      </li>
      <li
        class="hover-menu-item"
        @click="addLectureToStorage"
        v-if="lectureList.some((lecture) => lecture.id === id) === false"
      >
        <img src="/assets/icons/add.svg" width="20" height="20" />
        <p>강의 추가</p>
      </li>
      <li class="hover-menu-item">
        <img src="/assets/icons/info.svg" width="20" height="20" />
        <p>강의 정보</p>
      </li>
    </ul>
  </div></template
>

<script>
export default {
  props: {
    id: Number,
    title: String,
    image: String,
    url: String,
  },
  data() {
    return {
      lectureList:
        localStorage.getItem("lectureList") === null || localStorage.getItem("lectureList") === ""
          ? []
          : JSON.parse(localStorage.getItem("lectureList")),
    };
  },
  methods: {
    addLectureToStorage() {
      if (this.lectureList.some((lecture) => lecture.id === this.id) === false) {
        this.lectureList = [
          ...this.lectureList,
          { id: this.id, title: this.title, image: this.image, progress: 0 },
        ];
        // 로컬스토리지에 내가 수강중인 강의를 추가함
        localStorage.setItem("lectureList", JSON.stringify(this.lectureList));
        // 해당 강의의 커리큘럼 리스트를 초기화함
        localStorage.setItem(this.id, JSON.stringify({ progress: 0, isComplete: [] }));
      }
      console.log(JSON.parse(localStorage.getItem("lectureList")));
    },
  },
};
</script>

<style lang="scss" scoped>
.hover-menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  top: 0px;
  left: 0px;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(250, 250, 250, 0.92);
  animation: 0.22s ease-in-out fadeIn forwards;
  cursor: pointer;
}

.hover-menu-items {
  display: flex;
  justify-content: space-between;
  width: 35%;
  li {
    p {
      font-size: 12px;
      margin-top: 7px;
    }
  }
}

.hover-menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
