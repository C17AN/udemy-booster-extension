<template>
  <li class="search-item-container" @mouseover="handleHoverMenu" @mouseleave="hover = false">
    <HoverMenu v-if="hover" :id="selectedItem" :title="title" :image="image" :url="url" />
    <img :src="image" />
    <div class="search-item-content">
      <a class="item-title" :href="url" target="_blank" noreferer noopener>{{ title }}</a>
      <p class="item-price">{{ price }}</p>
    </div>
  </li>
</template>

<script>
import HoverMenu from "./HoverMenu.vue";
export default {
  components: {
    HoverMenu,
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    // 성능이슈 있을거같은데
    handleHoverMenu() {
      this.hover = true;
      this.setSelectedItem(this.id);
    },
  },
  props: {
    data: Object,
    selectedItem: Number || null,
    setSelectedItem: Function,
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
    id() {
      return this.data.id;
    },
  },
};
</script>

<style scoped lang="scss">
.search-item-container {
  display: flex;
  position: relative;
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
