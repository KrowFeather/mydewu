<template>
    <div class="footer">
        <div class="menu-item" @click="changeToHomePage">
            <img src="../assets/icons/footer/homeicon.png" alt="" v-if="m1==0" style="width: 3em;">
            <img src="../assets/icons/footer/homeicon-slash.png" alt="" v-if="m1==1" style="width: 3em;">
            得物
        </div>
        <div class="menu-item" @click="changeToPurchasePage">
            <img src="../assets/icons/footer/purchaseicon.png" alt="" v-if="m2==0" style="width: 3em;">
            <img src="../assets/icons/footer/purchaseicon-slash.png" alt="" v-if="m2==1" style="width: 3em;">    
            购买
        </div>
        <div class="menu-item" @click="changeToExplorePage">
            <img src="../assets/icons/footer/purchaseicon.png" alt="" v-if="m3==0" style="width: 3em;">
            <img src="../assets/icons/footer/purchaseicon-slash.png" alt="" v-if="m3==1" style="width: 3em;">    
            探索
        </div>
        <div class="menu-item" @click="changeToUserPage">
            <img src="../assets/icons/footer/usericon.png" alt="" v-if="m4==0" style="width: 3em;">
            <img src="../assets/icons/footer/usericon-slash.png" alt="" v-if="m4==1" style="width: 3em;">    
            我
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
let router = useRouter()
let m1 = 1
let m2 = 0
let m3 = 0
let m4 = 0
const changeToHomePage = () => {
    m1 = 1
    m2 = m3 = m4 = 0;
    router.push({
        name: 'home'
    })
}
const changeToPurchasePage = () => {
    m2 = 1
    m1 = m3 = m4 = 0;
    router.push({
        name: 'purchase'
    })
}
const changeToExplorePage = () => {
    m3=1
    m1 = m2 = m4 = 0;
    router.push({
        name: 'explore'
    })
}
const changeToUserPage = () => {
    m4=1
    m1 = m2 = m3 = 0;
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