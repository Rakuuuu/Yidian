<template>
  <div class="store-detail">
    <my-header :title="title"/>
    <div class="store-content">
      <div class="img"/>
      <div class="food-classify">
        <div class="name">
          {{title}}
          <img :src="img" class="store-img" alt=""/>
        </div>
        <div class="classify">
          <van-tabs>
            <van-tab
                v-for="(item, index) in storeData"
                :key="index"
                :title="item.name"

            >
              <FoodList :index="index" :foodData="item.data"/>
            </van-tab>
          </van-tabs>
        </div>
      </div>

      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.getters['cart/getCartList'].length" @click="handleToCart"/>
        <van-action-bar-button type="warning" text="加入购物车"  @click="handleAddToCart(false)"/>
        <van-action-bar-button type="danger" text="立即购买" @click="handleBuy"/>
      </van-action-bar>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import {reactive, toRefs} from "vue";
import FoodList from "@/pages/store/components/FoodList";
import store from "@/store";
import router from "@/router";
import {showFailToast, showSuccessToast} from "vant";
export default {
  name: "store-info",
  components: {FoodList, MyHeader},
  setup(){
    let data = reactive({
      title:'店铺名称',
      img:'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      storeData: [
        {
          name: "点菜",
          data: {
            content: "点菜",
            items: [
              {
                text: "热销套餐",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "招牌酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 0,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "藤椒酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 1,
                    add: true,
                  },
                ],
              },
              {
                text: "澳洲肥牛",
                children: [
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                    title: "酸汤肥牛",
                    num: 0,
                    price: 25.0,
                    id: 3,
                    add: true,
                  },
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                    title: "香辣肥牛",
                    num: 0,
                    price: 25.0,
                    id: 4,
                    add: true,
                  },
                ],
              },
              {
                text: "超级折扣",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "无骨酸菜鱼+肥牛双拼",
                    num: 0,
                    price: 25.0,
                    id: 5,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "香辣水煮鱼+肥牛双拼",
                    num: 0,
                    price: 25.0,
                    id: 6,
                    add: true,
                  },
                ],
              },
            ],
          },
        },
        { name: "评价", data: { content: "评价" } },
        { name: "商家", data: { content: "商家" } },
      ],
    })

    //加入购物车
    const handleAddToCart = (buy) => {
      let newList = []
      data.storeData[0].data.items.forEach((v)=>{
        v.children.forEach((item)=>{
          if (item.num) {
            newList.push(item)
            item.add = true
            item.num = 0
            console.log(newList)
          }
        })
      })
      if (newList.length === 0) {
        showFailToast('选中商品为空')
        return
      } else {
        if(!buy)
          showSuccessToast('加入购物车成功')
      }
      store.commit('cart/addToCart', newList)
      console.log('cartList',store.getters['cart/getCartList'])
    }

    // 立即购买
    const handleBuy = () =>{
      handleAddToCart(true)
    }

    const handleToCart = () => {
      router.push('/cart')
    }

    return{
      ...toRefs(data),
      store,
      handleAddToCart,
      handleBuy,
      handleToCart
    }
  }
}
</script>

<style lang='less' scoped>
/deep/.van-tabs{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
/deep/.van-tabs__line{
  background: #fcae21;
  border: 1px solid #fcae21;
}

/deep/.van-tab--active{
  color: #fcae21;
}

/deep/.van-tree-select{
  margin-top: 24px;
}

/deep/.van-sidebar-item--select:before{
  background: #fcae21;
  border-radius: 4px;
}

/deep/.van-tabs__content{
  display: flex !important;
  flex-grow: 1 !important;
}
/deep/.van-tab__panel{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

/deep/.van-tab__panel>div{
  flex-grow: 1;
}

/deep/.van-action-bar{
  height: 60px !important;
  width: 100% !important;
  max-width: 800px !important;
  margin: 0 auto !important;
}

.store-detail {
  height: 100%;
  display: flex;
  flex-flow: column;
  .store-content {
    flex: 1;
    flex-shrink: 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    .img {
      background: url("../../assets/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .food-classify {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .classify {
        margin-top: 10px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
