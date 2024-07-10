<template>
    <div class="footer">
        <div class="menu-item" @click="changeToHomePage">得物</div>
        <div class="menu-item" @click="changeToPurchasePage">购买</div>
        <div class="menu-item" @click="changeToExplorePage">探索</div>
        <div class="menu-item" @click="changeToUserPage">我</div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
let router = useRouter()
const changeToHomePage = () => {
    router.push({
        name: 'home'
    })
}
const changeToPurchasePage = () => {
    router.push({
        name: 'purchase'
    }
    )
}
const changeToExplorePage = () => {
    router.push({
        name: 'explore'
    })
}
const changeToUserPage = () => {
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
    text-align: center
}
</style>