<template>
    <div class="wrapper">
        <div class="explore-title">
            <img src="../assets/icons/explogo.svg" alt="">
        </div>
        <ExploreBlocks title="消息中心" text="优惠券有效期已不足408h，可用于免费鉴别Nike，Adidas">
        </ExploreBlocks>
        <br>
        <ExploreBlocks title="鉴别服务" btext="专业鉴别" text="&nbsp;帮你辨真假 购物有保障">
            <img src="../assets/icons/explore/expl1.png" alt="" style="height: 2.5em;">
        </ExploreBlocks>
        <br>
        <ExploreBlocks title="玩一玩" btext="签到兑礼" text="&nbsp;超多大奖 超好玩">
            <img src="../assets/icons/explore/expl2.png" alt="" style="height: 2.5em;">
        </ExploreBlocks>
        <br>
        <ExploreBlocks title="买卖闲置" btext="逐件查验" text="&nbsp;苹果手机低至7188元">
            <img src="../assets/icons/explore/expl5.png" alt="" style="height: 2.5em;">
        </ExploreBlocks>
        <ExploreBlocks title="焕然洗护" btext="鞋包换新" text="&nbsp;球鞋清洗单件29.9起">
            <img src="../assets/icons/explore/expl3.png" alt="" style="height: 2.5em;">
        </ExploreBlocks>
        <ExploreBlocks title="借钱·备用金" btext="最高20万" text="&nbsp;得物官方 安全便捷">
            <img src="../assets/icons/explore/expl4.png" alt="" style="height: 2.5em;">
        </ExploreBlocks>
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