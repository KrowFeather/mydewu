<template>
    <div class="wrapper">
        <div class="upper">
            <div class="cluster">
                
            </div>
            <div class="banner">
                <img src="../../assets/icons/recG/banner.png" alt="" style="width: 100%;">
            </div>
            <div class="ad">
                <div class="ad-l">

                </div>
                <div class="ad-r">
                    <div class="r-item"></div>
                    <div class="r-item"></div>
                    <div class="r-item"></div>
                    <div class="r-item"></div>
                </div>
            </div>
        </div>
        <GoodItem v-for="(item,i) in allInfo" :key="i" :desc="item.name" :price="item.price" :stat="item.soldout" :pic="item.picurl" :info="item.desc" />
    </div>
    <div class="block" style="height: 0.01em;"></div>
</template>

<script lang="ts" setup>
import GoodItem from '../../components/GoodItem.vue'
import axios from 'axios'
import { useAccountStore } from '../../store/account';
import { onMounted,ref } from 'vue';
const accountStore = useAccountStore()
let allInfo:any = ref()
const getAllInfo = async()=>{
    await axios.get(accountStore.host+'/getRandomRecommend').then((resp)=>{
        allInfo.value = resp.data
        console.log(resp.data)
    })
}
onMounted(()=>{
    getAllInfo()
})
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4em;
}
.banner{
    width: 100%;
    box-sizing: border-box;
    padding: 0 1em;
    background-color: white;
}
</style>