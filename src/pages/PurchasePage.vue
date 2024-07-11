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
                    <SearchComp class="search" type=2></SearchComp>
                </div>
                <NavTab :link="link" :category="tabname" style="height: 2em;"></NavTab>
            </div>
        </header>
        <div class="main-content" id="mainc">
            <router-view></router-view>
        </div>
    </div>
    <FootBar/>
</template>

<script lang="ts" setup>
import SearchComp from '../components/SearchComp.vue'
import FootBar from '@/components/FootBar.vue';
import NavTab from '@/components/NavTab.vue';
let tabname = ['推荐', '鞋类', '潮服', '数码', '艺术', '手表', '包袋', '配饰']
let link = [
    'recommendgoods',
    'shoecate',
    'clothescate',
    '',
    '',
    '',
    '',
    '',
    ''
]
document.onscroll = function () {
    let s1 = document.documentElement.scrollTop;
    let s2 = document.body.scrollTop;
    let scroll = s1 == 0 ? s2 : s1;
    let width = document.documentElement.clientWidth;
    let bottom: any = document.getElementById('bottom');
    let mainc:any = document.getElementById('mainc')
    if (scroll > width * 0.12) {
        bottom.style.position = 'fixed';
        bottom.style.top = '0';
        bottom.style.left = '0';
        mainc.style.marginTop='4em';
    } else {
        bottom.style.position = 'static';
        mainc.style.marginTop='0';
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