<template>
  <div class="footer">
    <router-link to="/home" active-class="active" class="footer-item">
      <van-icon name="wap-home-o" size="24"/>
      <p>主页</p>
    </router-link>
    <router-link to="/cart" active-class="active" class="footer-item">
      <van-icon name="cart-o" size="24"/>
      <p>购物车</p>
    </router-link>
    <router-link to="/order"  active-class="active" class="footer-item">
      <van-icon name="apps-o" size="24"/>
      <p>订单</p>
    </router-link>
    <router-link to="/me" active-class="active" class="footer-item">
      <van-icon name="user-circle-o" size="24"/>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'my-footer'
}
</script>

<style scoped lang="less">
  .footer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:10px 0;
    //box-shadow: 0px 2px 4px rgba(0,0,0,.5);
    border-top: 1px solid #eee;
    .footer-item{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;

      p{
        padding-top: 5px;
      }
    }
  }

  .active{
    color: #ff9047;
  }
</style>
