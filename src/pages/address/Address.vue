<template>
  <div class="content-address">
    <my-header title="地址管理"/>
    <van-address-list
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
    />
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import {onMounted, reactive, toRefs} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
export default {
  name: "address-edit",
  components: {MyHeader},
  setup(){
    const store = useStore()
    const router = useRouter()
    let data = reactive({
      list: []
    })

    const onAdd = () => {
      router.push('/addressEdit')
    }


    const onEdit = (item, index) => {
      router.push({
        path:'/addressEdit',
        params: {
          item
        }
      })
    }

    const init = () => {
      data.list = store.state.user.userAddress.map((v)=>{
        return {
          id: v.id,
          name: v.name,
          tel: v.tel,
          address: `${v.province}${v.city}${v.county}${v.addressDetail}`,
          isDefault: !!v.isDefault
        }
      })
    }

    onMounted(() => {
      init()
    })

    return{
       ...toRefs(data),
      onEdit,
      onAdd
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-address-list{
  flex-shrink: 1;
}

/deep/.van-address-list__bottom{
}

.content-address{
  background: #eee;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
