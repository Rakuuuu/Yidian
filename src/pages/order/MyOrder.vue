<template>
  <div class="order">
    <my-header title="订单"/>
    <div class="order-content">
      <van-tabs v-model:active="active">
        <van-tab :title="item" v-for="(item,index) in navItem" :key="index">
          <div
              v-if="active === 0"
          >
            <van-card
                :num="item.num"
                :price="item.price"
                desc="描述信息"
                :title="item.title"
                :thumb="item.pic"
                v-for="(item, index) in store.state.order.updatedOrderList"
                :key="index"
            />
          </div>

          <blank-space v-else/>
        </van-tab>
      </van-tabs>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import {reactive, toRefs} from "vue";
import MyFooter from "@/components/Footer";
import {useStore} from "vuex";
import BlankSpace from "@/components/Blank";
export default {
  name: "MyOrder",
  components: {BlankSpace, MyFooter, MyHeader},
  setup(){

    const store = useStore()

    let data = reactive({
      active: 0,
      navItem: ['全部','交易完成','待付款','已发货','未发货']
    })

    return{
      ...toRefs(data),
      store
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-tabs{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}
/deep/.van-tabs__line{
  background: #fcae21;
  border: 1px solid #fcae21;
}

/deep/.van-tab--active{
  color: #fcae21;
}

/deep/.van-tabs__content{
  overflow-y: auto;
}

/deep/.van-card{
  padding: 16px;
}

.order{
  height: 100%;
  display: flex;
  flex-direction: column;
  .order-content{
    flex-grow: 1;
    background: #eee;
    overflow-y: auto;
  }
}
</style>
