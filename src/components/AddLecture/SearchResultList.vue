<template>
  <ul class="container">
    <SearchResultItem
      :data="item"
      v-for="item in searchResult"
      :key="item.id"
      :selectedItem="selectedItem"
      :setSelectedItem="setSelectedItem"
    />
  </ul>
</template>

<script>
import SearchResultItem from "./SearchResultItem.vue";
export default {
  data() {
    return { selectedItem: null };
  },
  components: {
    SearchResultItem,
  },
  props: {
    searchResult: Array,
  },
  methods: {
    setSelectedItem(index) {
      this.selectedItem = index;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  border: 1px solid #cdcdcd;
  width: 100%;
  height: 270px;
  margin-top: 16px;
  border-radius: 4px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
