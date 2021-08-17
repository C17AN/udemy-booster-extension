<template>
  <div class="chapter-container" @click="toggleCollapsed">
    <h2>{{ title }}</h2>
    <img src="/assets/icons/chevron-down.svg" width="18" v-if="collapsed === false" />
    <img src="/assets/icons/chevron-up.svg" width="18" v-show="collapsed === true" />
  </div>
  <ul>
    <CourseLecture
      v-for="SubLecture in SubLectureList"
      :key="SubLecture.id"
      v-show="collapsed"
      :title="SubLecture.title"
    />
  </ul>
</template>

<script>
import CourseLecture from "./CourseLecture.vue";
export default {
  components: {
    CourseLecture,
  },
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
  background-color: var(--skyblue-50);
  justify-content: space-between;
  border: 1px solid #cdcdcd;
  border-radius: 8px 8px 0 0;
  padding: 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 8px;
  &:hover {
    transition: 0.2s ease-in-out;
    background-color: var(--skyblue-100);
  }

  h2 {
    overflow: hidden;
    max-width: 220px;
    font-weight: bold;
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
