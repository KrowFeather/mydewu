<template>
    <div class="wrapper">
        <div class="explore-title">探索</div>
        <ExploreBlocks title="消息中心" text="专业鉴别|"></ExploreBlocks>
        <ExploreBlocks title="消息中心"></ExploreBlocks>
        <ExploreBlocks title="消息中心"></ExploreBlocks>
        <ExploreBlocks title="消息中心"></ExploreBlocks>
        <ExploreBlocks title="消息中心"></ExploreBlocks>
        <ExploreBlocks title="消息中心"></ExploreBlocks>
    </div>
</template>

<script lang="ts" setup>
import ExploreBlocks from '../components/ExploreBlocks.vue';
</script>

<style scoped>
.explore-title{
    font-size:1.5em;
    margin:0 1em;
    height: 2em;
    display: flex;
    align-items: center;
}
</style>