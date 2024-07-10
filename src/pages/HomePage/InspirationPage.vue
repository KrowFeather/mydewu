<template>
    <div class="wrapper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiperpic" :key="item">
                    <img :src="item.url" alt="nopic" style="width: 100%;height: 100%">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <TopicItem v-for="(item,i) in topicitems" :key="i" :title="item.title" :info="item.info" :subtitle="item.subtitle" :pics="item.pics" />
    </div>
</template>

<script lang="ts" setup>
import { useAccountStore } from '@/store/account';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import TopicItem from '@/components/HomePage/TopicItem.vue';
import { onMounted, ref } from 'vue';
let topicitems = [
    {
        title:'跑这一夏',
        info:'流量奖金装备',
        subtitle:'记录夏日跑步生活，赢流量奖金装备！',
        pics:[
            "https://t.tutu.to/img/mXnrq",
            "https://t.tutu.to/img/mXf26",
            "https://t.tutu.to/img/mXMBr"
        ]
    },
    {
        title:'我离不开这个App',
        info:'瓜分百万流量',
        subtitle:'分享舍不得删的APP，瓜分百万流量',
        pics:[
            "https://t.tutu.to/img/mX2ln",
            "https://t.tutu.to/img/mX6od",
            "https://t.tutu.to/img/mXFiH"
        ]
    },
    {
        title:'夏天不能没有这双鞋',
        info:'送你去巴黎',
        subtitle:'带话题发布内容，有机会去巴黎！',
        pics:[
            "https://t.tutu.to/img/mXOa7",
            "https://t.tutu.to/img/mXS2w",
            "https://t.tutu.to/img/mXVro"
        ]
    },
]
onMounted(async() => {
    await getSwiper()
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
})
let swiperpic = ref()
let accountStore = useAccountStore()
const getSwiper = async () => {
    await axios.get(accountStore.host + '/getSwiper').then((resp) => {
        swiperpic.value = resp.data
        console.log(swiperpic.value)
    })
}
// const getTopic = async()=>{
//     await axios.get(accountStore.host+ '/getTopic').then((resp)=>{

//     })
// }
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 10em;
    overflow: hidden
}
</style>
