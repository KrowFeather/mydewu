<template>
    <div class="wrapper">
        <div class="item-top">
            <img :src="pic" alt="nopic">
        </div>
        <div class="item-bottom">
            <div class="item-desc">
                {{ desc }}
            </div>
            <div class="item-bottom-bottom">
                <div class="item-price">{{ price }}</div>
                <div class="item-statistics" style="color: #666;">{{ stat }}人付款</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['pic','desc','price','stat'])
</script>

<style scoped>
.wrapper{
    display: flex;
    width: 50%;
    flex-basis: 2;
    flex-direction: column;
    justify-content: space-between;
    height: 10em;
}
.item-desc{
    font-size: 0.85em;
    box-sizing: border-box;
}
.item-bottom{
    padding: 0 1em;
}
.item-bottom-bottom{
    display: flex;
    justify-content: space-between;
    font-size: 0.75em;
}
</style>