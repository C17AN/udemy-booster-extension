<template>
  <div class="chapter-container">
    <span>{{ title }}</span>
    <img src="/assets/icons/chevron-down.svg" width="24" @click="toggleCollapsed" />
  </div>
  <ul>
    <li v-for="SubLecture in SubLectureList" :key="SubLecture.id" v-show="collapsed">
      <span>{{ SubLecture.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  props: {
    title: String,
    SubLectureList: Array,
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped lang="scss">
.chapter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  padding: 5px 8px;
}
</style>
