<template>
    <div class="wrapper">
        <BlogItem v-for="(item,i) in blogs" :key="i" :desc="item.content" :sprite="item.upic" :name="item.uname" :likes="item.likes" :pic="item.pic" />
        <div class="blocker" style="height: 3em;width: 100%;"></div>
    </div>

</template>

<script lang="ts" setup>
import BlogItem from '@/components/HomePage/BlogItem.vue';
import { useAccountStore } from '@/store/account';
import axios from 'axios';
import { onMounted, ref } from 'vue';
let accountStore = useAccountStore()
let blogs = ref()
onMounted(()=>{
    getRandomBlogRecommend()
})
const getRandomBlogRecommend = async()=>{
    await axios.get(accountStore.host+'/getRandomBlogRecommend').then((resp)=>{
        blogs.value=resp.data
        console.log(blogs.value)
    })
}
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
}
</style>