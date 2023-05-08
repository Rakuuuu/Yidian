<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="goBack"/>
    <div>{{title}}</div>
    <div class="operation" v-if="isCart">
      <div v-if='!store.state.header.isEdit' @click="handleStartDelete">编辑</div>
      <div v-else @click="handleEndDelete">完成</div>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import store from "@/store";
import {mapState} from "vuex";
import {showSuccessToast} from "vant";
export default {
  name: "my-header",
  props:{
    title: {
      type: String,
      default: '标题'
    },
    isCart: {
      type: Boolean,
      default: false
    }
  },
  setup(){
    store.commit('header/endEdit')//初始化为非编辑状态

    const router = useRouter()

    const goBack = () =>{
      router.back()
    }


    const handleStartDelete = () => {
      if(store.state.cart.cartList.length){
        console.log(555)
        store.commit('header/startEdit')
      } else {
        showSuccessToast('购物车为空')
      }
    }

    const handleEndDelete = () => {
        store.commit('header/endEdit')
    }

    return{
      goBack,
      store,
      handleEndDelete,
      handleStartDelete,
      ...mapState('header', ['isEdit'])
    }
  }
}
</script>

<style lang='less' scoped>
.header {
  width: 100%;
  background-color: #fff;
  height: 48px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  position: relative;
  flex-shrink: 0;
  .edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
  }
  .icon {
    position: absolute;
    left: 10px;
  }
  .operation{
    position: absolute;
    right: 16px;
    font-size: 14px;
  }
}
</style>
