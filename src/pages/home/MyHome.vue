<template>
  <div class="home">
    <div class="content">
      <header class="header">
        <h3 class="title">外卖</h3>
        <div class="location">
          <van-icon name="location" class="icon-location"/>
          <p class="address">这是我的地址</p>
          <van-icon name="arrow" class="icon-arrow"/>
        </div>
      </header>
      <!--  主要内容  -->
      <div class="main">
        <div class="main-bg">
          <div class="search">
            <input/>
            <div class="search-text">搜索</div>
          </div>
          <div class="classify">
            <div
                class="classify-big"
                v-for="(item, index) in big_classify"
                :key="index"
            >
              <svg class="icon" aria-hidden="true">
                <use :xlink:href='`#${item.icon}`'></use>
              </svg>
              <p>{{item.name}}</p>
            </div>
            <div
                class="classify-small"
                v-for="(item, index) in small_classify"
                :key="index"
            >
              <svg class="icon" aria-hidden="true">
                <use :xlink:href='`#${item.icon}`'></use>
              </svg>
              <p>{{item.name}}</p>
            </div>
          </div>
          <van-tabs class="van-tabs">
            <van-tab
                v-for="(item,index) in centent_nav_list"
                :key="index"
                :title="item.tab"
            >
              <store-list :store-list="item.data"/>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <my-footer/>
  </div>

</template>

<script>
import MyFooter from "@/components/Footer";
import {reactive, toRefs} from "vue";
import StoreList from "@/components/Stores";

export default {
  name: "MyHome",
  components:{
    StoreList,
    MyFooter
  },
  setup() {
    let data = reactive({
      big_classify: [
        { name: "美食", icon: "icon-apple-and-pear" },
        { name: "甜点饮品", icon: "icon-tianpin" },
        { name: "超市便利", icon: "icon-chaoshi" },
        { name: "生鲜果蔬", icon: "icon-shuiguo" },
        { name: "滴团买药", icon: "icon-yaopin" },
      ],
      small_classify: [
        { name: "午餐", icon: "icon-iconfonttubiaozhizuo-1" },
        { name: "买酒", icon: "icon-iconfonttubiaozhizuo-" },
        { name: "新鲜水果", icon: "icon-iconfonttubiaozhizuo-9" },
        { name: "汉堡披萨", icon: "icon-iconfonttubiaozhizuo-6" },
        { name: "休闲饮品", icon: "icon-iconfonttubiaozhizuo-8" },
        { name: "夜宵", icon: "icon-iconfonttubiaozhizuo-3" },
        { name: "吐司", icon: "icon-iconfonttubiaozhizuo-5" },
        { name: "跑腿", icon: "icon-paotuiAPP" },
        { name: "美人佳丽", icon: "icon-iconfonttubiaozhizuo-2" },
        { name: "全部分类", icon: "icon-fenlei" },
      ],
      centent_nav_list: [
        {
          tab: "天天神券",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
              title: "隆江猪脚饭",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "减配送费",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "点评高分",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "会员满减",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
      ],
    });
    return {
      ...toRefs(data),
    };
  },
}
</script>

<style scoped lang="less">
/deep/.van-tabs__wrap{
  border-radius: 10px;
}

/deep/.van-tabs__line{
  background: #fcae21;
  border: 1px solid #fcae21;
}

/deep/.van-tab--active{
  color: #fcae21;
}
.home{
  height: 100%;
  display: flex;
  flex-direction: column;

  .content{
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(#fcae21, #fff 90%);
      padding: 20px 16px 40px 16px;

        .title{
          font-weight: 600;
          font-size: 20px;
        }

      .location{
        display: flex;
        font-size: 16px;
        color: #444444;
        .icon-location{
          margin-right: 5px;
        }
        .address{
          margin-right: 5px;
        }
      }
    }

    .main{
      margin-top: -20px;
      flex-grow: 1;
      .main-bg{
        background: linear-gradient(#fff,#f5f5f5 30%);
        padding: 10px 16px 0 16px;
        border-radius: 30px 30px 0 0;
        height: 100%;
        .search{
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          input{
            box-sizing: border-box;
            width: 100%;
            border-radius: 30px;
            font-size: 16px;
            padding: 10px 75px 10px 15px;
            border:2px solid #ffb547;
            line-height: 100%;
          }
          .search-text{
            position: absolute;
            top: 50%;
            right: 0;
            height: 100%;
            transform: translate(0,-50%);
            background: #fcae21;
            font-size: 16px;
            display: flex;
            align-items: center;
            text-align: center;
            padding: 0 15px;
            border-radius: 30px;
            font-weight: 600;
          }
        }
        .classify{
          display: flex;
          align-content: center;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 20px 0;

          .classify-big{
            display: flex;
            font-size: 12px;
            flex-shrink: 0;
            width: 20%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .icon{
              width: 50px;
              height: 50px;
            }
            p{
              padding: 10px 0;
            }
          }

          .classify-small{
            padding-top: 20px;
            display: flex;
            font-size: 12px;
            flex-shrink: 0;
            width: 20%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .icon{
              width: 32px;
              height: 32px;
            }
            p{
              padding: 5px 0;
            }
          }
        }

        .van-tabs{
        }
      }
    }
  }
}

</style>
