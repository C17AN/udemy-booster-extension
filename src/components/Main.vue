<template>
  <div class="container">
    <ul class="menu">
      <li @click="toMyPage" :class="{ selectedMenu: currentPage === 'myPage' }">요약</li>
      <li @click="toSearchLecture" :class="{ selectedMenu: currentPage === 'searchLecture' }">
        강의 추가
      </li>
      <li @click="toLectureManage" :class="{ selectedMenu: currentPage === 'lectureManage' }">
        강의 관리
      </li>
      <li @click="toScheduler" :class="{ selectedMenu: currentPage === 'scheduler' }">
        스케줄러
      </li>
    </ul>
    <div class="main-view">
      <div v-if="currentPage === 'myPage'">
        <Dashboard />
      </div>
      <div v-else-if="currentPage === 'searchLecture'">
        <SearchLecture />
      </div>
      <div v-else-if="currentPage === 'lectureManage'">
        <LectureManage />
      </div>
      <div v-else-if="currentPage === 'scheduler'">
        <Scheduler />
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "./Summary/Dashboard.vue";
import SearchLecture from "./Lecture/SearchLecture.vue";
import LectureManage from "./Lecture/LectureManage.vue";
import Scheduler from "./Scheduler.vue";

export default {
  components: {
    Dashboard,
    SearchLecture,
    LectureManage,
    Scheduler,
  },

  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
  },
  methods: {
    toMyPage() {
      this.$store.commit("toMyPage");
    },
    toSearchLecture() {
      this.$store.commit("toSearchLecture");
    },
    toLectureManage() {
      this.$store.commit("toLectureManage");
    },
    toScheduler() {
      this.$store.commit("toScheduler");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.menu {
  display: flex;
  height: 32px;
  margin: 20px 0 24px -8px;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid #cdcdcd;

  li {
    font-size: 14px;
    margin: 0 10px;
    cursor: pointer;
    transition: 0.15s ease all;
  }
  li:hover {
    transition: 0.15s ease all;
    color: var(--skyblue-300);
  }
  .selectedMenu {
    color: var(--skyblue-300);
    padding-bottom: 12px;
    border-bottom: 3px solid var(--skyblue-400);
  }
}

.main-view {
  padding: 0 20px 12px 20px;
}
</style>
