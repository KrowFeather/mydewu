<template>
    <div class="next-tabs">
        <div class="tab-item" v-for="(item, i) in category" :key="item" @click="changeToCorrespCategory(link[i])">
            {{ item }}
            <div class="tab-bottom" v-if="show[i]==true"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
defineProps(['category','link'])
let show:boolean[] = []
let router = useRouter()
const changeToCorrespCategory = (link: string) => {
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
    height: 1.8em;
    padding-bottom: 0.5em;
    box-sizing: border-box;
    height: 3em;
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