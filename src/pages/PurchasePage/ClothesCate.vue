<template>
    <div class="wrapper">
        <GoodItem v-for="(item,i) in allInfo" :key="i" :desc="item.name" :price="item.price" :stat="item.soldout" :pic="item.picurl" :info="item.desc" />
    </div>
    <div class="block" style="height: 0.01em;"></div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { useAccountStore } from '../../store/account';
import { onMounted,ref } from 'vue';
import GoodItem from '@/components/PurchasePage/GoodItem.vue';
const accountStore = useAccountStore()
let allInfo:any = ref()
const getAllInfo = async()=>{
    await axios.get(accountStore.host+'/getAllClothes').then((resp)=>{
        allInfo.value = resp.data
        console.log(resp.data)
    })
}
onMounted(()=>{
    getAllInfo()
})
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4em;
}
</style>