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
import GoodItem from '@/components/PurchasePage/GoodItem.vue';
import axios from 'axios'
import CategoryList from '@/components/PurchasePage/CategoryList.vue';
import { useAccountStore } from '../../store/account';
import { onMounted,ref } from 'vue';
const accountStore = useAccountStore()
let data = [
    {icon:'https://img.picui.cn/free/2024/07/11/668ef26dd32f0.png',title:'新鞋速递'},
    {icon:'https://img.picui.cn/free/2024/07/11/668ef26de2986.png',title:'国潮好货'},
    {icon:'https://img.picui.cn/free/2024/07/11/668ef26de243c.png',title:'时尚专区'},
    {icon:'https://img.picui.cn/free/2024/07/11/668ef26de48bf.png',title:'户外功能鞋'},
    {icon:'https://img.picui.cn/free/2024/07/11/668ef26e04073.png',title:'生活休闲鞋'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f41045ca09.png',title:'德尔惠'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f41045dc2e.png',title:'双星'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f4104677f1.png',title:'安踏'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f410465f0e.png',title:'李宁'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f41046783d.png',title:'准者'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f419018ad4.png',title:'HelloSlippers'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f4190221ea.png',title:'乔丹'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f419029f73.png',title:'特步'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f41902674c.png',title:'匹克'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f419011569.png',title:'更多分类'},
]
let allInfo:any = ref()
const getAllInfo = async()=>{
    await axios.get(accountStore.host+'/getAllShoes').then((resp)=>{
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