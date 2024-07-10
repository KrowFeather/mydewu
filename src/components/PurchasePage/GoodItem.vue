<template>
    <div class="wrapper-item" @click="changeToDetail(id)">
        <div class="item-top">
            <img :src="pic" alt="nopic" style="height: 100%; width: 100%;">
        </div>
        <div class="item-bottom">
            <div class="info" style="height: 2em;">{{  info }}</div>
            <div class="item-desc">
                {{ desc }}
            </div>
            <div class="item-bottom-bottom">
                <div class="item-price"><span style="font-size: 0.85em;">￥</span>{{ price }}</div>
                <div class="item-statistics" style="color: #666;">{{ stat }}人付款</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['pic','desc','price','stat','info','id'])
import { useRouter } from 'vue-router';
let router = useRouter()
const changeToDetail = (id:number)=>{
    router.push({
        name:'merchandise',
        query:{
            id:id
        }
    })
}
</script>

<style scoped>
.wrapper-item{
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-basis: 2;
    justify-content: center;
    background-color: white;
    padding: 0;
}
.item-desc{
    font-size: 0.85em;
    box-sizing: border-box;
    overflow-x: hidden;
    white-space: nowrap;
}
.item-bottom{
    padding: 0 1em;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
}
.item-bottom-bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75em;
    margin-top: 0.3em;
}
.item-price{
    font-size: 1.2em;
}
.item-top{
    height: 10em; 
}
.info{
    font-size: 0.5em;
    color: #666;
    margin-bottom: 0.3em;
}
</style>