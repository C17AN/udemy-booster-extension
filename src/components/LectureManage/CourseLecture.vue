<template>
  <li class="course-lecture-container">
    <div :class="collapsed ? 'collapsed' : ''">
      <span class="course-lecture-title">{{ title }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
.course-lecture-container {
  font-size: 14px;
  border: 1px solid #cdcdcd;
  border-bottom: transparent;
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: 1px solid #cdcdcd;
  }
}
.course-lecture-title {
  display: inline-block;
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.collapsed {
  height: 0;
  transition: height 2s;
}
</style>
