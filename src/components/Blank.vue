<template>
  <div class="blank_content">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="@/assets/empty-cart.svg"></use>
    </svg>
    空空如也
  </div>
</template>

<script>
export default {
  name:'blank-space'
};
</script>

<style lang='less' scoped>
.blank_content {
  flex: 1;
  font-size: 16px;
  overflow-y: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  height: 100%;
  .icon {
    margin-bottom: 10px;
  }
}
</style>
