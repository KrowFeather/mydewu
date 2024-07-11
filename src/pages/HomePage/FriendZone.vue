<template>
    <div class="wrapper">
        <div class="friend-blog">
            <p class="friend-blog-no-text">
                还没有好友动态
            </p>
            <p class="friend-blog-no-text2">
                看看为你推荐的内容吧!
            </p>
        </div>
        <div class="maybe-like">
            <div class="mb-top">
                <div class="mb-top-text">你可能感兴趣的人</div>
                <div class="mb-top-all">
                    <span>全部</span>
                    <div class="rarr" style="display: flex;justify-content: center;align-items: center;">
                        <img src="../../assets/icons/right-arrow.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="mb-tabs">
                <FriendRecommendItem v-for="(item, i) in userInfo" :key="i" :name="item.name" :sprite="item.url" class="FRI"></FriendRecommendItem>
            </div>
        </div>
        <div class="friendzone">
            <FriendzoneItem v-for="(item,i) in FZIlist" :key="i" :username="item.username" :topic="item.topic" :title="item.title" :usersprite="item.usersprite"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FriendRecommendItem from '@/components/HomePage/FriendRecommendItem.vue';
import FriendzoneItem from '@/components/HomePage/FriendzoneItem.vue';
import { useAccountStore } from '@/store/account';
import axios from 'axios';
import { onMounted, ref } from 'vue';

let accountStore = useAccountStore()
let userInfo = ref()
let FZIlist = [
    {
        username:'COOGI_OFFICIAL箱包',
        title:'NYC',
        topic:'大学生最爱的棒球帽',
        usersprite:'https://img.picui.cn/free/2024/07/11/668f565010c89.png',
        pic:[
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ]
    }
]
onMounted(() => {
    getUserInfo()
})
const getUserInfo = async () => {
    await axios.get(accountStore.host + '/getRandomUsers').then((resp) => {
        userInfo.value = resp.data
        console.log(userInfo.value)
    })
}
</script>

<style scoped>
.friend-blog {
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.friend-blog-no-text {
    font-size: 0.9em;
    color: #515151;
    margin: 0;
}

.friend-blog-no-text2 {
    font-size: 0.7em;
    color: #333;
    margin: 0;
}

.maybe-like {
    height: 100%;
    width: 100%;
    display: flex;
    background-color: white;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0 1em;
}

.maybe-like .mb-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3em;
    color: #666;
    font-size: 0.9em;
}

.mb-top-all {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.mb-top-all span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mb-tabs{
    height: 100%;
    flex-wrap: nowrap;
    display: -webkit-box;   
    overflow: scroll;
}

.mb-tabs::-webkit-scrollbar{
    display: none;
}

.FRI{
    margin-right: 0.5em;
}
</style>