<template>
    <div class="footer">
        <div class="menu-item" @click="changeToHomePage">
            <img :src="homeicon" alt="" v-if="other.h1==0" style="width: 3em;">
            <img :src="homeiconslash" alt="" v-else style="width: 3em;">
            得物
        </div>
        <div class="menu-item" @click="changeToPurchasePage">
            <img :src="purchaseicon" alt="" v-if="other.h2==0" style="width: 3em;">
            <img :src="purchaseiconslash" alt="" v-else style="width: 3em;">
            购买
        </div>
        <div class="menu-item" @click="changeToExplorePage">
            <img :src="exploreicon" alt="" v-if="other.h3==0" style="width: 3em;">
            <img :src="exploreiconslash" alt="" v-else style="width: 3em;">
            探索
        </div>
        <div class="menu-item" @click="changeToUserPage">
            <img :src="usericon" alt="" v-if="other.h4==0" style="width: 3em;">
            <img :src="usericonslash" alt="" v-else style="width: 3em;">
            我
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAccountStore } from '@/store/account';
import { useRouter } from 'vue-router';
let router = useRouter()
let accountStore = useAccountStore()
let other = useOtherStore()
import homeicon from '@/assets/icons/footer/homeicon.png' 
import homeiconslash from '@/assets/icons/footer/homeicon-slash.png' 
import usericon from '@/assets/icons/footer/usericon.png'
import usericonslash from '@/assets/icons/footer/usericon-slash.png'
import exploreicon from '@/assets/icons/footer/exploreicon.png'
import exploreiconslash from '@/assets/icons/footer/exploreicon-slash.png'
import purchaseicon from '@/assets/icons/footer/purchaseicon.png'
import purchaseiconslash from '@/assets/icons/footer/purchaseicon-slash.png'
import { useOtherStore } from '@/store/others';
const changeToHomePage = () => {
    other.h1=1
    other.h2=other.h3=other.h4=0
    if(accountStore.isLogined==0){
        router.push({
            name:'login'
        })
    }else{
        router.push({
            name: 'home'
        })
    }
}
const changeToPurchasePage = () => {
    other.h2=1
    other.h1=other.h3=other.h4=0
    router.push({
        name: 'purchase'
    })
}
const changeToExplorePage = () => {
    other.h3=1
    other.h1=other.h2=other.h4=0
    router.push({
        name: 'explore'
    })
}
const changeToUserPage = () => {
    other.h4=1
    other.h1=other.h2=other.h3=0
    router.push({
        name: 'user'
    })
}
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3.5em;
    width: 100%;
    border-top: 1px solid #51515151;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    z-index: 1000;
}

.footer .menu-item {
    font-size: 0.8em;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>