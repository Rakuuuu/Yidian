<template>
  <div class="content-item">
    <div class="left">
      <img :src="item.pic"/>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <van-stepper
            :default-value="item.num"
            v-if="!(showAdd&&item.add)"
            :min="1"
            :name="item.id"
            @change="onChange"
        />
      </div>
    </div>
    <div class="right">

      <div class="price">￥{{item.price}}</div>
      <van-icon
          name="add-o"
          @click="handleAdd(item.id)"
          v-if="showAdd&&item.add"
      />

    </div>
  </div>
</template>

<script>
export default {
  name: "FoodItem",
  props:['item','showAdd', 'handleAdd', 'onChange']
}
</script>

<style lang='less' scoped>
.content-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding-right: 8px;
    .price {
      font-size: 16px;
      font-weight: 600;
    }
    .van-icon {
      color: red;
      font-size: 20px;
    }
  }
  .left {
    display: flex;
    align-items: center;
    flex: 1;
    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;
      .title {
        font-size: 16px;
      }

    }
  }
}
</style>
