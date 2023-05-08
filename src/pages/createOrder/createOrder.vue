<template>
  <div class="create-order">
    <my-header title="生成订单"/>
    <van-contact-card
        type="edit"
        :tel="currentContact.userTel"
        :name="currentContact.username"
        @click="onEdit"
    />
    <div class="order-content">
      <div v-for="(item, index ) in store.state.cart.cartList" :key="index">
        <van-card
          :num="item.num"
          :price="item.price"
          :title="item.title"
          :thumb="item.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span class="price-value">￥{{totalPrice}}</span>
      </div>
      <div class="submit">
        <van-button color="#fcae21" size="large" @click="handleCreateOrder">下单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import {computed, onMounted, reactive, toRefs} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import { showDialog } from "vant";
export default {
  name: "createOrder",
  components: {MyHeader},
  setup(){
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    let data = reactive({
      currentContact:{
        username:'',
        userTel:''
      }
    })

    //用户信息初始化
    const initUser =  () => {
      store.state.user.userAddress.forEach((v)=>{
        if(v.isDefault) {
          data.currentContact.userTel = v.tel
          data.currentContact.username = v.name
        }
      })
    }

    //编辑地址信息
    const onEdit = () => {
      router.push('/address')
    }

    //生成订单
    const handleCreateOrder = () =>{
      let result = route.query.result
      showDialog({
        message:'订单创建成功'
      }).then(()=>{
        let newCartList = store.state.cart.cartList.filter((v) => {
          return !result.includes(v.id + '')
        })
        store.commit('cart/changeCart', newCartList)
        store.commit('order/changeUpdatedOrderList')
      })
      router.push('/order')
    }

    onMounted(() => {
      initUser()
    })

    const totalPrice = computed(()=>{
      return store.state.order.orderList.reduce((preV, curV) => {
        return preV + curV?.price * curV?.num
      }, 0.0)
    })

    return{
      ...toRefs(data),
      onEdit,
      handleCreateOrder,
      store,
      totalPrice
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-contact-card{
  padding: 20px 16px;
}

/deep/.van-contact-card:before{
  background: #eee;
}

/deep/.van-contact-card__title{
  padding: 0 8px;
  div{
    padding: 4px 0;
  }
}

/deep/.van-card{
  padding: 16px;
}

/deep/.van-button{
  border-radius: 30px;
}

.create-order{
  height: 100%;
  display: flex;
  flex-direction: column;
  .order-content{
    flex-grow: 1;
    overflow-y: auto;
    background: #eee;
  }
  .pay-wrap{
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-top: 1px solid rgba(0,0,0,.05);
    .price{
      padding: 0 0 16px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      .price-value{
        font-size: 20px;
        color: #ff3f3f;
      }
    }
  }
}
</style>
