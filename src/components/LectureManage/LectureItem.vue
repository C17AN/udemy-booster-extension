<template>
  <li class="container">
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
    image: String,
    title: String,
    progress: Number,
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

  img {
    width: 64px;
    margin-right: 10px;
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
