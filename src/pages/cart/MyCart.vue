<template>
  <div class="cart">
    <div class="content">
      购物车
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from "@/components/Footer";
export default {
  name: "MyCart",
  components: {MyFooter}
}
</script>

<style scoped lang="less">
  .cart{
    height: 100%;
    display: flex;
    flex-direction: column;
    .content{
      flex-grow: 1;
      overflow-y: auto;
    }
  }
</style>
