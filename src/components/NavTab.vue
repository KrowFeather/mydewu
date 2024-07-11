<template>
    <div class="next-tabs">
        <div class="tab-item" v-for="(item, i) in category" :key="item" @click="changeToCorrespCategory(link[i],i)" :class = "isactive == i ? 'addclass' : '' ">
            <p>
                {{ item }}
            </p>
            <div class="dblock"></div>
            <div class="tab-bottom" v-if="show[i]==true"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
defineProps(['category','link'])
let show:boolean[] = []
let router = useRouter()
let isactive = ref(-1)
const changeToCorrespCategory = (link: string,index:number) => {
    isactive.value = index
    router.push({
        name: link
    })
}
</script>

<style scoped>
.next-tabs {
    overflow-x: auto;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
    background-color: white;
    box-sizing: border-box;
    height: 3em;
}
.addclass{
    font-weight: bold;
    p {
        font-size: 1.2em;
    }
    .dblock{
        background-color: #1098ad;
        height: 0.2em;
        width: 60%;
    }
}
.next-tabs::-webkit-scrollbar {
    display: none;
}

.next-tabs .tab-item {
    width: 3.8em;
    font-size: 3.7vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.tab-bottom{
    height: 0.2em;
    background-color: #1098ad;
    width: 40%;
}
</style>