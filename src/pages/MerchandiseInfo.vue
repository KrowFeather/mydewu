<template>
    <div class="wrapper">
        <div class="cosmos">
            
        </div>
        <div class="info-pane">
            <div class="info-header"></div>
            <div class="info-desc"></div>
            <div class="infobottom"></div>
        </div>
        <div class="info-adv">

        </div>
        <div class="info-ubuy">

        </div>
        <div class="kaixiang">

        </div>
        <div class="discuss">

        </div>
        <div class="label">

        </div>
        <div class="recommend">

        </div>
        <div class="comment"></div>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAccountStore } from '@/store/account';
let route = useRoute()
let id = route.query.id
let accountStore = useAccountStore()
onMounted(async()=>{
    console.log(route.query)
    await getInfo()
})
let minfo = ref()
const getInfo = async()=>{
    await axios.get(accountStore.host+'/getMerchandiseInfo/'+id).then((resp)=>{
        minfo.value=resp.data
    })
}
</script>

<style scoped>

</style>