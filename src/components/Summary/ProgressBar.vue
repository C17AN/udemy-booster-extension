<template>
  <div class="progress-container">
    <!-- <div class="progress"></div> -->
    <ve-progress
      :progress="50"
      line="round"
      size="160"
      :thickness="15"
      empty-thickness="8%"
      fontSize="24px"
      dot="18 white"
    />
  </div>
</template>

<script>
import { VeProgress } from "vue-ellipse-progress";
export default {
  components: {
    VeProgress,
  },
};
</script>

<style scoped>
.progress-container {
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  font-size: 14px;
  text-align: center;
  margin: 12px 0 16px 0;
}
.progress {
  width: 80%;
  height: 24px;
  background-color: var(--skyblue-300);
  transition: all 0.2s ease;
  cursor: pointer;
}

.progress:hover {
  background-color: var(--skyblue-100);
  transition: all 0.2s ease;
}
</style>
