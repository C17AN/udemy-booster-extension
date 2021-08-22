<template>
  <li class="course-lecture-container">
    <div class="course-lecture-content">
      <span class="course-lecture-title">{{ index + 1 }}. {{ title }}</span>
      <input
        type="checkbox"
        @change="checkLectureComplete(classId, lectureId)"
        :checked="isComplete"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    classId: Number,
    lectureId: Number,
    title: String,
    index: Number,
    checkLectureComplete: Function,
  },
  data() {
    return {
      isComplete:
        JSON.parse(localStorage.getItem(this.classId)).isComplete.indexOf(this.lectureId) === -1
          ? false
          : true,
    };
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
  padding: 0 8px;
  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: 1px solid #cdcdcd;
  }

  .course-lecture-content {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    /* input[type="checkbox"] {
      opacity: 0.5;
    }
    input[type="checkbox"]:hover {
      display: hidden;
    }
    input[type="checkbox"]:after {
      content: " ";
      opacity: 1;

      position: absolute;
      bottom: 1px;
      right: 1px;
      width: 16px;
      height: 16px;
      border-radius: 15px;
      background-color: red;
    } */
  }
}
.course-lecture-title {
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.collapsed {
  height: 0;
  transition: height 2s;
}
</style>
