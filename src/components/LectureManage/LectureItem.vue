<template>
  <li class="container" @click="handleLectureItemClick">
    <img :src="image" />
    <div class="content">
      <p class="lecture-name">{{ title }}</p>
      <p class="lecture-progress">{{ progress }}%</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    image: String,
    title: String,
    openModal: Function,
    setSelectedLectureId: Function,
  },
  computed: {
    progress: function() {
      return JSON.parse(localStorage.getItem(this.id)).progress;
    },
  },
  methods: {
    handleLectureItemClick() {
      this.setSelectedLectureId(this.id);
      this.openModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  padding: 8px;
  margin: 12px 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  img {
    width: 64px;
    margin-right: 10px;
  }
  &:hover {
    border-color: var(--skyblue-400);
    transition: 0.2s ease-in-out;
  }
}

.content {
  width: inherit;
}

.lecture-name {
  font-size: 13px;
  width: 270px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.lecture-progress {
  font-size: 12px;
  margin-top: 5px;
  color: var(--gray-400);
  font-weight: 600;
}
</style>
