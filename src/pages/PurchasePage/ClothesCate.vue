<template>
    <div class="wrapper">
        <div class="upper">
            <CategoryList :data="data" />
        </div>
        <GoodItem v-for="(item,i) in allInfo" :key="i" :desc="item.name" :price="item.price" :stat="item.soldout" :pic="item.picurl" :info="item.desc" />
    </div>
    <div class="block" style="height: 0.01em;"></div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { useAccountStore } from '../../store/account';
import { onMounted,ref } from 'vue';
import GoodItem from '@/components/PurchasePage/GoodItem.vue';
import CategoryList from '@/components/PurchasePage/CategoryList.vue';
const accountStore = useAccountStore()
let data = [
    {icon:'https://img.picui.cn/free/2024/07/11/668f501cc8fc0.png',title:'每日上新'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f501cdf166.png',title:'人气榜单'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f501ce1e81.png',title:'潮流圈内'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f501cda405.png',title:'T恤'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f501cde189.png',title:'风衣'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f507251db5.png',title:'休闲裤'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f507236968.png',title:'防晒服'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f507236759.png',title:'夹克'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f50721ebdc.png',title:'衬衫套装'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f50724cd76.png',title:'西装'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f50c382ecb.png',title:'约翰皇'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f50c385095.png',title:'周同学'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f50c395d63.png',title:'GSUE'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f50c3977bd.png',title:'木村三社'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f419011569.png',title:'更多分类'},
]
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

.upper{
    background-color: white;
}
</style>