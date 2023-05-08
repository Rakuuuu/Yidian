<template>
  <div class="cart">
    <my-header title="购物车" :isCart="true"/>
    <div class="content">
      <CartDetails v-if="isShow" @onDelete="handleCartChange"/>
      <blank-space v-else/>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from "@/components/Footer";
import MyHeader from "@/components/Header";
import CartDetails from "@/pages/cart/components/CartDetails";
import BlankSpace from "@/components/Blank";
import {ref} from "vue";
import {useStore} from "vuex";
export default {
  name: "MyCart",
  components: {
    BlankSpace,
    CartDetails,
    MyHeader,
    MyFooter
  },
  setup(){
    const store = useStore()

    let isShow = ref(false)

    const init = () => {
      isShow.value = store.state.cart.cartList.length !== 0
    }

    const handleCartChange = (isFresh) => {//监听CartDetail组件完成编辑时，判断购物车是否为空
      if (isFresh) {
        init()
        store.commit('header/endEdit')
        console.log('已初始化购物车')
      }
    }

    init()

    return{
      isShow,
      handleCartChange
    }
  }
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
      background: #eee;
    }
  }
</style>
