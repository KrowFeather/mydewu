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
                    <img src="../assets/icons/euerror.png" alt="" v-if="accountStore.isLogined==0" style="width: 100%;height: 100%; border-radius: 10em; background-color: #666;">
                    <img :src="userinfo.sprite" alt="" style="width: 100%;height: 100%; border-radius: 10em; background-color: #666;" v-if="accountStore.isLogined==1">
                </div>
            </div>
            <div class="header-mid-right">
                <div class="username" style="font-size: 1.1em; margin-bottom: 0.3em">
                    <span v-if="accountStore.isLogined == 0" @click="changeToLoginPage">登录/注册</span>
                    <span v-else>
                        {{ userinfo.name }}
                    </span>
                </div>
                <div class="user-sig" style="font-size: 0.9em; color: #666;">
                    <span v-if="accountStore.isLogined == 0">注册最高享<span style="color: orangered;">￥520</span>新人礼</span>
                    <span v-else>
                        {{ userinfo.sig }}
                    </span>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <LowerBar v-if="accountStore.isLogined == 0" />
            <LowerBar v-else>
                <template v-slot:s1>
                    {{ userinfo.likes }}
                </template>
                <template v-slot:s2>
                    {{ userinfo.fans }}
                </template>
                <template v-slot:s3>
                    {{ userinfo.subscribe }}
                </template>
                <template v-slot:s4>
                    <!-- {{ userinfo.dongtai }} -->
                </template>
            </LowerBar>
        </div>
        <div class="creator-center">
            <div class="cc-left">
                <img src="../assets/icons/user/czzx.png" alt="" style="width: 3.5em; background-clip: border-box;">
            </div>
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
                <img src="https://img.picui.cn/free/2024/07/11/668ed10512917.png" alt="" style="height:1.8em;">
                <div class="separator">&nbsp;</div>
                <span>
                    为你省钱又省心
                </span>
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
        <div class="bookings">
            <div class="bookings-top">
                <h5>订单</h5>
                <div class="bookingscnt">
                    <p style="width: 1em;">0</p>
                    <div class="rarr">
                        <img src="../assets/icons/right-arrow.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="bookings-bottom">
                <div class="booking-item" v-for="(item, i) in bookingitem" :key="i">
                    <img :src="item.ico" alt="nopic">
                    <p>{{ item.name }}</p>
                </div>
            </div>
        </div>
        <!-- <WalletComp></WalletComp> -->
        <div class="request"></div>
        <div class="lowestb"></div>
    </div>
    <FootBar />
</template>

<script lang="ts" setup>
import { useAccountStore } from '@/store/account'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import FootBar from '@/components/FootBar.vue'
import LowerBar from '@/components/userpage/LowerBar.vue'
import axios from 'axios'
// import WalletComp from '../components/userpage/WalletComp.vue'
import TraceComp from '../components/userpage/TraceComp.vue'
import ico1 from '../assets/icons/user/daifukuan.svg'
import ico2 from '../assets/icons/user/daifahuo.svg'
import ico3 from '../assets/icons/user/daishouhuo.svg'
import ico4 from '../assets/icons/user/qiugou.svg'
import ico5 from '../assets/icons/user/tuikuan.svg'
import ico6 from '../assets/icons/user/comment.svg'
const accountStore = useAccountStore()
let router = useRouter()
let bookingitem = [
    {
        name: '待付款',
        ico: ico1
    },
    {
        name: '待发货',
        ico: ico2
    },
    {
        name: '待收货',
        ico: ico3
    },
    {
        name: '评价',
        ico: ico6
    },
    {
        name: '退款/售后',
        ico: ico5
    },
    {
        name: '求购',
        ico: ico4
    },
]
let userinfo = ref({} as any)
onMounted(() => {
    if (accountStore.isLogined == 1) {
        getUserInfo()
    }
})
const getUserInfo = async () => {
    await axios.get(accountStore.host + '/getUserInfo/' + accountStore.userid).then((resp) => {
        userinfo.value = resp.data
        userinfo.value = userinfo.value[0]
        console.log(userinfo.value)
    })
}
const changeToLoginPage = () => {
    router.push({
        name: 'login'
    })
}
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
    width: 4em;
    height: 4em;
    /* border-radius: 10em; */
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
    background-color: #fef7f1;
    margin: 1em;
    margin-top: 1em;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ad-l {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start
}

.ad-l span {
    font-size: 0.9em;
    color: #333;
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

.bookings-top {
    display: flex;
    justify-content: space-between;
    margin-left: 1em;
}

.bookings-bottom {
    overflow-x: scroll;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
}

.bookings-bottom::-webkit-scrollbar {
    display: none
}

.booking-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 4em;
    margin-bottom: 1em;
}

.booking-item p {
    margin: 0;
    margin-top: 0.5em;
    font-size: 0.8em;
}

.bookings {
    margin: 1em 1em;
    background-color: white;
    border-radius: 3px;
    width: 90%;
}

.bookingscnt {
    display: flex;
    justify-content: center;
    align-items: center;
}

.separator {
    width: 0.1em;
    height: 1em;
    background-color: #cabeba;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.3em;
}
</style>