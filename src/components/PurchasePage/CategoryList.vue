<template>
    <div class="wrapper-cl">
        <div class="cl-item" v-for="(item,i) in data" :key=i>
            <div class="icon">
                <img :src="item.icon" alt="" style="width: 100%; height: 3em;">
            </div>
            <div class="title">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['data'])
</script>

<style scoped>
.wrapper-cl{
    margin:1em 1em;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
}
.cl-item{
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.title{
    font-size: 0.5em;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>