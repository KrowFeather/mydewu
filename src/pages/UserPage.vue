<template>
    <div class="wrapper">
        <div class="header-top">
            <div class="left-icon">
                <img src="../assets/icons/scan2.svg" alt="">
            </div>
            <div class="right-icon">
                <img src="../assets/icons/setting.svg" alt="">
            </div>
        </div>
        <div class="header-mid">
            <div class="header-mid-left">
                <div class="user-sprite">
                    <img src="" alt="">
                </div>
            </div>
            <div class="header-mid-right">
                <div class="username" style="font-size: 1.1em">
                    鸦羽
                </div>
                <div class="user-sig" style="font-size: 0.9em; color: #666;">
                    未设置签名
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="lowerbar">
                <div class="stat-item">
                    <h4>0</h4>
                    <p>获赞与收藏</p>
                </div>
                <div class="stat-item">
                    <h4>0</h4>
                    <p>粉丝</p>
                </div>
                <div class="stat-item">
                    <h4>0</h4>
                    <p>关注</p>
                </div>
                <div class="stat-item">
                    <h4>0</h4>
                    <p>动态</p>
                </div>
            </div>
        </div>
        <div class="creator-center">
            <div class="cc-left"></div>
            <div class="cc-right">
                <div class="cc-ritem">
                    <img src="../assets/icons/data.svg" alt="">
                    <p>数据</p>
                </div>
                <div class="cc-ritem">
                    <img src="../assets/icons/shouyi.svg" alt="">
                    <p>收益</p>
                </div>
                <div class="cc-ritem">
                    <img src="../assets/icons/activity.svg" alt="">
                    <p>活动</p>
                </div>
                <div class="cc-ritem">
                    <img src="../assets/icons/miandan.svg" alt="">
                    <p>免单</p>
                </div>
            </div>
        </div>
        <div class="ad">
            <div class="ad-l">
                心省Pro|为你省钱又省心
            </div>
            <div class="ad-r">
                <div class="ad-in">
                    <div class="ad-in-text">
                        立即领取
                    </div>
                </div>
            </div>
        </div>
        <TraceComp wantcnt=0 havecnt=0 fscnt=0 subcnt=0 />
        <div class="bookings"></div>
        <div class="wallet"></div>
        <div class="request"></div>
        <div class="lowestb"></div>
    </div>
</template>

<script lang="ts" setup>
import TraceComp from '../components/userpage/TraceComp.vue'
</script>

<style scoped>
.header-top {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1em 1em;
    padding-bottom: 0;
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    height: 3em;
    width: 100%;
}

.header-mid {
    margin-top: 2.5em;
    display: flex;
    width: 100%;
    height: 6em;
}

.user-sprite {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 4em;
    height: 4em;
    border-radius: 10em;
    margin: 0 1em;
}

.header-mid-right {
    display: flex;
    flex-direction: column;
    justify-content: center
}

.header-mid-left {
    display: flex;
    align-items: center;
}

.lowerbar {
    display: flex;
    height: 2em;
    justify-content: space-around;
}

.stat-item {
    width: 25%;
}

.stat-item h4 {
    margin-top: 0;
    margin-bottom: 0;
}

.stat-item p {
    margin: 0;
    font-size: 0.7em;
    color: #666;
}

.lowerbar .stat-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.creator-center {
    display: flex;
    height: 3.5em;
    background-color: white;
    margin: 0 1em;
    margin-top: 1em;
    border-radius: 2px;
}

.cc-left {
    width: 3.5em;
    height: 100%;
}

.cc-right {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}

.cc-ritem {
    display: flex;
    flex-direction: column;
    width: 25%;
    justify-content: center;
    align-items: center;
}

.cc-ritem p {
    margin: 0;
    font-size: 0.8em;
    color: #666;
}

.ad {
    height: 2.5em;
    background-color: #f3e9d8;
    margin: 1em;
    margin-top: 1em;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ad-l {
    width: 100%;
}

.ad-r {
    width: 5.5em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ad-in {
    text-align: center;
    font-size: 0.7em;
    background: linear-gradient(to right, #575455, #232123);
    color: white;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
    margin-right: 0.5em;
}

.ad-in-text {
    background: linear-gradient(to top, #e9d3c7, white);
    background-clip: text;
    color: transparent;
}
</style>