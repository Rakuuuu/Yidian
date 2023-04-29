<template>
  <div class="store-list">
    <my-store-item
        :item="item"
        v-for="(item, index) in storeList"
        :key="index"
    />
  </div>
</template>

<script>
import MyStoreItem from "@/components/StoreItem";
export default {
  name: "store-list",
  components: {MyStoreItem},
  props:['storeList']
}
</script>

<style scoped>

</style>
