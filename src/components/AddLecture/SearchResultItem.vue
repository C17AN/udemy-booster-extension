<template>
  <li class="search-item-container">
    <img :src="image" />
    <div class="search-item-content">
      <a class="item-title" :href="url" target="_blank" noreferer noopener>{{ title }}</a>
      <p class="item-price">{{ price }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    title() {
      return this.data.title;
    },
    image() {
      return this.data.image_125_H;
    },
    url() {
      return "https://udemy.com" + this.data.url;
    },
    price() {
      return this.data.price;
    },
  },
};
</script>

<style scoped lang="scss">
.search-item-container {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #cdcdcd;
  padding: 8px 4px 8px 8px;
  img {
    width: 64px;
    margin-right: 10px;
  }
}
.search-item-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  button {
    width: 80px;
    font-size: 9px;
    margin-left: auto;
    text-align: right;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    color: var(--gray-400);
  }
}
.item-title {
  font-size: 13px;
  width: inherit;
  padding-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-price {
  font-size: 11px;
  color: var(--gray-400);
  margin-top: 5px;
}
</style>
