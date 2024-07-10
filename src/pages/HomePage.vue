<template>
    <div class="wrapper">
        <header>
            <SearchComp class="search"></SearchComp>
            <NavTab :link="link" :category="tabname"></NavTab>
        </header>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>  
</template>

<script lang="ts" setup>
import SearchComp from '@/components/SearchComp.vue';
import NavTab from '@/components/NavTab.vue'
let tabname = ['关注','灵感','推荐','视频','直播','潮鞋','穿搭','汽车','手表']
let link = [
    '',
    'inspiration',
    'recommend',
    '',
    '',
    '',
    '',
    '',
    ''
]
</script>

<style scoped>
header{
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    background-color: white;
    z-index: 1000;
}

.search {
    box-sizing: border-box;
    margin-top: 1em;
}

.main-content{
    margin-top: 6em;
}
</style>