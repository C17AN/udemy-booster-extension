<template>
  <div class="hover-menu-container">
    <ul class="hover-menu-items">
      <li class="hover-menu-item" v-if="lectureList.indexOf(id) !== -1">
        <img src="/assets/icons/checked.svg" width="20" height="20" />
        <p>저장됨</p>
      </li>
      <li
        class="hover-menu-item"
        @click="addLectureToStorage"
        v-if="lectureList.indexOf(id) === -1"
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
      if (this.lectureList.indexOf(this.id) === -1) {
        this.lectureList = [...this.lectureList, this.id];
        localStorage.setItem("lectureList", JSON.stringify(this.lectureList));
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
