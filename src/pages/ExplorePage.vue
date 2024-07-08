<template>
    <div class="wrapper">
        <div class="explore-title">
            <img src="../assets/icons/explogo.svg" alt="">
        </div>
        <ExploreBlocks title="消息中心" text="优惠券有效期已不足408h，可用于免费鉴别Nike，Adidas54352345435345"></ExploreBlocks>
        <br>
        <ExploreBlocks title="鉴别服务" btext="专业鉴别"></ExploreBlocks>
        <br>
        <ExploreBlocks title="玩一玩" btext="签到兑礼"></ExploreBlocks>
        <br>
        <ExploreBlocks title="买卖闲置" btext="逐件查验"></ExploreBlocks>
        <ExploreBlocks title="焕然洗护" btext="鞋包换新"></ExploreBlocks>
        <ExploreBlocks title="借钱·备用金" btext="最高20万"></ExploreBlocks>
    </div>
</template>

<script lang="ts" setup>
import ExploreBlocks from '../components/ExploreBlocks.vue';
</script>
<style scoped>
.explore-title img{
    scale: 0.6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5em;
}
</style>