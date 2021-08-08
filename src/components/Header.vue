<template>
  <Modal v-if="isOpened" :closeModal="closeModal">
    <Settings />
  </Modal>
  <header>
    <div class="header-content">
      <font-awesome-icon icon="cog" @click="openModal" />
      <div class="setting"></div>
    </div>
  </header>
</template>

<script>
import Modal from "./UI/Modal.vue";
import Settings from "./Settings.vue";
export default {
  data() {
    return {
      isOpened: false,
    };
  },
  components: {
    Modal,
    Settings,
  },
  methods: {
    closeModal() {
      this.isOpened = false;
    },
    openModal() {
      this.isOpened = true;
    },
  },
  // methods: {
  //   openSettingMenu() {
  //     this.$store.commit("openSettingMenu");
  //   },
  // },
  // computed: {
  //   settingMenuOpened() {
  //     return this.$store.state.settingMenuOpened;
  //   },
  // },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  background-color: var(--skyblue-200);
  height: 45px;
}
.header-content {
  margin-left: auto;

  svg {
    margin-right: 1rem;
    cursor: pointer;
  }
}
</style>
