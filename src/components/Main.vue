<template>
  <div class="container">
    <ul class="menu">
      <li @click="toMyPage">마이페이지</li>
      <li @click="toLectureManage">강의 관리</li>
    </ul>
    <div v-if="currentPage === 'myPage'">
      <Dashboard />
    </div>
    <div v-else>
      <LectureManage />
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import LectureManage from "./Lecture/LectureManage.vue";

export default {
  components: {
    Dashboard,
    LectureManage,
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
    toLectureManage() {
      this.$store.commit("toLectureManage");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 0 20px 24px 20px;
}

.menu {
  display: flex;
  margin: 20px 0 24px 0;
  li {
    font-size: 14px;
    margin: 0 8px;
    cursor: pointer;
    transition: 0.15s ease all;
  }
  li:hover {
    transition: 0.15s ease all;
    color: var(--skyblue-300);
  }
}
</style>
