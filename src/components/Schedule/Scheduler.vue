<template>
  <Calendar is-expanded />
  <div class="schedule-btn-container">
    <button class="set-goal-btn">수강 목표 설정하기</button>
  </div>
</template>

<script>
import { Calendar } from "v-calendar";
export default {
  components: {
    Calendar,
  },
};
</script>

<style scoped lang="scss">
.schedule-btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
  .set-goal-btn {
    padding: 8px 12px;
    outline: none;
    background-color: var(--skyblue-300);
    color: white;
    border: 1px solid #cdcdcd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      transition: all 0.2s ease;
      background-color: var(--skyblue-500);
    }
  }
}
</style>
