<template>
    <div class="wrapper">
        <GoodItem desc="潘家园" price="120" stat="37"></GoodItem>
        <GoodItem desc="潘家园" price="120" stat="37"></GoodItem>
        <GoodItem desc="潘家园" price="120" stat="37"></GoodItem>
        <GoodItem desc="潘家园" price="120" stat="37"></GoodItem>
        <GoodItem desc="潘家园" price="120" stat="37"></GoodItem>
        <GoodItem desc="潘家园" price="120" stat="37"></GoodItem>
        <GoodItem desc="潘家园" price="120" stat="37"></GoodItem>
    </div>
</template>

<script lang="ts" setup>
import GoodItem from '../../components/GoodItem.vue'
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-wrap: wrap;
}
</style>