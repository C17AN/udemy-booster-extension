<template>
  <div class="modal-black-bg" @click.self="closeModal">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpened: Boolean,
    closeModal: Function,
  },
};
</script>

<style scoped lang="scss">
.modal-black-bg {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  height: 500px;
  width: 400px;
}
.container {
  background-color: white;
  overflow-y: scroll;
  margin: 20px;
  padding: 24px;
  height: 80%;
  width: 80%;
  border-radius: 20px;
  opacity: 0;
  transform: translateX(-600px);
  animation: 0.3s 0s ease-in-out fadeIn forwards;
}
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
