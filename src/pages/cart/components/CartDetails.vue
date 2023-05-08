<template>
  <div class="cart-detail">
    <!--CartDetails-->
    <div class="cart-content">
      <van-checkbox-group
          v-model="result"
          @change="handleSelectChange"
      >
        <div
            v-for="(item, index) in cartList"
            :key="index"
            class="detail-item"
        >
          <van-checkbox
              checked-color="#fcae21"
              :name="item.id"
          />
          <FoodItem
              :item="item"
              class="food-info"
              :onChange="onChange"
          />
        </div>
      </van-checkbox-group>
    </div>
    <van-submit-bar
        :price="totalPrice * 100"
        :button-text="!store.state.header.isEdit?'提交订单':'删除'"
        @submit="!store.state.header.isEdit?onSubmit():onDelete()"
        :button-color="!store.state.header.isEdit?'#fcae21':'#fc5421'">
      <van-checkbox
          checked-color="#fcae21"
          v-model="checked"
          @click="selectAll"
      >全选
      </van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import {computed, reactive, toRefs} from "vue";
import FoodItem from "@/components/FoodItem";
import {showFailToast} from "vant";
import router from "@/router";
import {useStore} from "vuex";

export default {
  name: "CartDetails",
  components: {FoodItem},
  setup(props , context){

    const store = useStore()

    let data = reactive({
      result: [],
      cartList: store.state.cart.cartList,
      checked: true
    })

    const handleSelectChange = () => {
      if(data.result.length < store.state.cart.cartList.length)
        data.checked = false
      else
        data.checked = true
    }

    // 单项checkbox选中时的change事件
    const onChange = (value, detail) => {
      let newList = store.state.cart.cartList.map((item) => {
        if(item.id === detail.name) {
          item.num = value
        }
        return item
      })

      store.commit('cart/changeCart', newList)
    }

    const selectAll = () => {
      if (!data.checked) {
        data.result = []
      }
      else if(data.checked){
        init()
      }
    }

    const onSubmit = () => {
      if (data.result.length === 0)
        showFailToast('未选中任何商品')
      else {
        store.commit('order/changeOrderList', generateOrderList())
        router.push({
          path:'/createorder',
          query:{
            result: data.result
          }
        })
      }
    }

    const onDelete = () => {
      store.commit('cart/deleteItems', data.result)
      data.cartList = store.state.cart.cartList
      console.log('已删除')
      context.emit('onDelete', true)
    }

    const totalPrice = computed(()=>{
      return store.state.cart.cartList.reduce((preV, curV) => {
        return preV + (data.result.indexOf(curV.id) !== -1 ? curV.price * curV.num : 0)
      }, 0.0)
    })

    const init = () =>{
      //init时默认全选
      data.result = store.state.cart.cartList.map((v)=>v.id)
    }
    init()

    const generateOrderList = () => {
      console.log(store.state.cart.cartList.filter((v) => data.result.includes(v.id)))
      return store.state.cart.cartList.filter((v) => data.result.includes(v.id))
    }

    return{
      ...toRefs(data),
      handleSelectChange,
      onChange,
      selectAll,
      totalPrice,
      onSubmit,
      onDelete,
      store
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-checkbox{
  margin-right: 6px;
}
/deep/.van-submit-bar{
  position: absolute !important;
  bottom: 0;
}
.cart-detail{
  box-sizing: border-box;
  padding: 16px 0;
  height: 100%;
  flex-grow: 1;
  position: relative;
  .cart-content{
    border-radius: 10px;
    margin: 0 16px;
    background: #fff;
    overflow: hidden;

    .detail-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 16px;
      .food-info{
        flex-grow: 1;
      }
      .content-item{
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>
