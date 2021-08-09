<template> <div class="hover-menu-container"></div></template>

<script>
export default {};
</script>

<style>
.hover-menu-container {
  opacity: 0;
  top: 0px;
  left: 0px;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(250, 250, 250, 0.7);
  animation: 0.22s ease-in-out fadeIn forwards;
  cursor: pointer;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
