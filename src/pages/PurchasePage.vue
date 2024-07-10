<template>
    <div class="wrapper-purchase">
        <header>
            <div class="header-top">
                <div class="header-top-left">
                    <div class="icon">
                        <img src="../assets/icons/dewulogo.svg" alt="">
                    </div>
                    <h4 class="rec-text">造谣得物售假的人被法院判了 &gt;</h4>
                </div>
                <div class="header-top-right">
                    <div class="signature">
                        <img src="../assets/icons/signature.svg" alt="">
                        <h4>
                            签到
                        </h4>
                    </div>
                </div>
            </div>
            <div class="header-bottom" id="bottom">
                <div class="header-mid">
                    <SearchComp />
                </div>
                <div class="next-tabs">
                    <div class="tab-item" v-for="(item, i) in category" :key="item" @click="changeToCorrespCategory(i)">
                        {{ item }}</div>
                </div>
            </div>
        </header>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SearchComp from '../components/SearchComp.vue'
import { useRouter } from 'vue-router';
let router = useRouter()
let category = ['推荐', '鞋类', '潮服', '数码', '艺术', '手表', '包袋', '配饰']
// document.onscroll = function () {
//     let s1 = document.documentElement.scrollTop;
//     let s2 = document.body.scrollTop;
//     let scroll = s1 == 0 ? s2 : s1;
//     let width = document.documentElement.clientWidth;
//     let bottom: any = document.getElementById('bottom');
//     if (scroll > width * 0.12) {
//         bottom.style.position = 'fixed';
//         bottom.style.top = '0';
//         bottom.style.left = '0';
//     } else {
//         bottom.style.position = 'static';
//     }
// }
const changeToCorrespCategory = (ind: number) => {
    switch (ind) {
        case 0:
            router.push({
                name:'recommendgoods'
            })
            break
        case 1:
            router.push({
                name:'shoecate'
            })
            break
        case 2:
            router.push({
                name:'clothescate'
            })
            break
        case 4:
            break
        default:
            break
    }
}
</script>

<style scoped>
header {
    width: 100%;
    background-color: white;
    z-index: 10;
}

.header-top {
    display: flex;
    justify-content: space-between;
    height: 3em;
    background-color: white;
    margin: 0 1em;
}

.next-tabs {
    display: flex;
    overflow-x: auto;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
    background-color: white;
    height: 1.8em;
    padding-bottom: 0.5em;
    box-sizing: border-box;
    border-bottom: 1px solid #1098ad;
}

.next-tabs::-webkit-scrollbar {
    display: none;
}

.next-tabs .tab-item {
    width: 4em;
    font-size: 3.7vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header-top-left {
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-top-left .icon {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.3em;
}

.header-mid {
    margin-top: 0.3em;
    margin-bottom: 1em;
    background-color: white;
}

.header-top-right {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.header-top-right h4 {
    font-size: 2.5vw;
    margin-top: -0.1em;
    color: #1098ad;
    height: 20%;
}

.header-top-right .signature {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.signature img {
    height: 80%;
    margin-top: 1em;
}

.main-content {
    height: 100vh;
}

.header-bottom {
    width: 100%;
    border-bottom: 1px solid #DDD;
    background-color: white;
    z-index: 10;
}
</style>