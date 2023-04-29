<template>
  <div class="item" @click="toStore">
    <img :src="item.pic" alt=""/>
    <div class="right">
      <p class="title">{{item.title}}</p>
      <p class="sales">月售{{item.sales}}</p>
      <p class="price">起送￥{{item.price}}</p>
      <div class="tags">
        <div
            v-for="(i, index) in item.label"
            :key="index"
            class="tag"
        >
          {{i}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router/dist/vue-router";

export default {
  name: "my-store-item",
  props:['item'],
  setup(){

    const router = useRouter()

    const toStore = () =>{
      router.push('/store')
    }

    return{
      toStore
    }
  }
}
</script>

<style scoped lang="less">
  .item{
    display: flex;
    padding: 12px;
    background: #fff;
    border-radius: 10px;
    margin-top: 12px;
    img{
      border-radius: 10px;
      height: 128px;
      width: 128px;
    }

    .right{
      padding: 5px 0;
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;

      .title{
        font-size: 20px;
        font-weight: 600;
      }

      .sales{
        font-size: 12px;
        color: #606060;
        font-weight: 600;
      }

      .price{
        font-size: 12px;
        color: #606060;
        font-weight: 600;
      }

      .tags{
        display: flex;
        font-size: 12px;
        .tag{
          padding: 5px;
          margin-right: 5px;
          border-radius: 5px;
          background: #f8e9a0;
          color: #ef9516;
        }
      }
    }
  }
</style>
