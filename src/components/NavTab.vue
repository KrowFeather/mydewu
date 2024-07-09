<template>
    <div class="wrapper-tab">
        <div class="tab-item" v-for="(item, i) in category" :key="item" @click="changeToCorrespCategory(i)">
            {{ item }}
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.wrapper-tab{
    width: 100%;
}
</style>