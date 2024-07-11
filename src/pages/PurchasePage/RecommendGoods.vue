<template>
    <div class="wrapper">
        <div class="upper">
            <CategoryList :data="data" />
            <div class="banner">
                <img src="../../assets/icons/recG/banner.png" alt="" style="width: 100%;">
            </div>
            <div class="ad">
                <div class="ad-l">
                    <img src="https://img.picui.cn/free/2024/07/11/668f43c1d48f1.png" alt="" style="width: 4em;">
                    <p style="margin: 0; color: #666;font-size: 0.7em;">15元包邮</p>
                </div>
                <div class="ad-r">
                    <div class="r-item" v-for="(item,i) in adlist" :key="i">
                        <div class="ad-icon">
                            <img :src="item.icon" alt="" style="width: 90%;">
                        </div>
                        <h4>￥{{ item.price }}</h4>
                    </div>
                </div>
            </div>
        </div>
        <GoodItem v-for="(item, i) in allInfo" :key="i" :desc="item.name" :price="item.price" :stat="item.soldout"
            :pic="item.picurl" :info="item.desc" :id="item.id" />
    </div>
    <div class="block" style="height: 0.01em;"></div>
</template>

<script lang="ts" setup>
import GoodItem from '@/components/PurchasePage/GoodItem.vue';
import CategoryList from '@/components/PurchasePage/CategoryList.vue';
import axios from 'axios'
import { useAccountStore } from '../../store/account';
import { onMounted, ref } from 'vue';
const accountStore = useAccountStore()
let allInfo: any = ref()
let adlist = [
    {icon:'https://img.picui.cn/free/2024/07/11/668f45fe2ae99.png',price:'16'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f45fe3e03b.png',price:'19'}, 
    {icon:'https://img.picui.cn/free/2024/07/11/668f45fe2aecd.png',price:'15'},
    {icon:'https://img.picui.cn/free/2024/07/11/668f45fe3c2d3.png',price:'218'},
]
let data = [
    { icon: 'https://img.picui.cn/free/2024/07/11/668eedf12cf55.png', title: '限时补贴' },
    { icon: 'https://img.picui.cn/free/2024/07/11/668eedf1399a7.png', title: '免费领好礼' },
    { icon: 'https://img.picui.cn/free/2024/07/11/668eedf146551.png', title: '万人同购' },
    { icon: 'https://img.picui.cn/free/2024/07/11/668eedf12510a.png', title: '每月鞋上新' },
    { icon: 'https://img.picui.cn/free/2024/07/11/668eedf1457d8.png', title: '二次元球鞋' },
]
const getAllInfo = async () => {
    await axios.get(accountStore.host + '/getRandomRecommend').then((resp) => {
        allInfo.value = resp.data
        console.log(resp.data)
    })
}
onMounted(() => {
    getAllInfo()
})
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4em;
}

.banner {
    width: 100%;
    box-sizing: border-box;
    padding: 0 1em;
    background-color: white;
}
.ad{
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1em;
    background-color: white
}

.ad-l{
    background-color: #fbfbfd;
    border: 1px solid #edecee;
}

.ad-r{
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #fbfbfd;
    border: 1px solid #edecee;
}

.r-item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}

.r-item h4{
    margin: 0;
    font-size: 0.8em
}

.ad-l{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.ad-icon{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>