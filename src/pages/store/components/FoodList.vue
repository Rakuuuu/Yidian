<template>
  <div>
    <van-tree-select
        v-model:main-active-index="activeIndex"
        :items="items"
        v-if="index===0"
        height="100%"
        @click-nav="handleActive"
    >
      <template #content >
        <div
            v-for="(item, index) in subItem"
            :key="index"
            class="item_bg"
        >
          <FoodItem
              :item="item"
              :show-add="true"
              :handleAdd="handleAdd"
              :onChange="onChange"
          />
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import FoodItem from "@/components/FoodItem";
export default {
  name: "FoodList",
  components: {FoodItem},
  props:['index', 'foodData'],
  setup(props) {
    let data = reactive({
      activeIndex: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }],
      subItem:[]
    })

    const handleActive = (e) => {
      data.activeIndex = e
      init()
      console.log(data.subItem)
    }

    const handleAdd = (id) => {
      data.subItem.forEach((v)=>{
        console.log(v.title, v.num)
      })
      data.subItem.forEach((v)=>{
        if (v.id === id) {
          v.add = false
          v.num += 1
        }
      })
      data.subItem.forEach((v)=>{
        console.log(v.title, v.num)
      })

    }

    const onChange = (value, detail) => {
      data.subItem.forEach((v)=>{
        console.log(v.title,v.num)
      })
      data.subItem.forEach((v)=>{
        if(v.id === detail.name) {
          v.num = value
        }
      })
      data.subItem.forEach((v)=>{
        console.log(v.title, v.num)
      })
    }

    const init = () =>{
      data.subItem.forEach((v)=>{
        console.log(v.title, v.num)
      })
      data.items = props.foodData?.items?.map((v,i) => {
        if (i === data.activeIndex)
          data.subItem = v.children
        return {text: v.text}
      })
      data.subItem.forEach((v)=>{
        console.log(v.title, v.num)
      })
    }
    init()

    return {
      ...toRefs(data),
      handleActive,
      handleAdd,
      onChange
    };
  }
}
</script>

<style scoped>

</style>
