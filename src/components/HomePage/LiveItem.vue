<template>
    <div class="wrapper">
        <div class="cover">
            <img :src="cover" alt="">
        </div>
        <div class="bottom">
            <div class="u-name">
                {{ name }}
            </div>
            <div class="desc">
                {{ desc }}
            </div>
            <div class="op">
                {{ op }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['name','cover','desc','op'])
</script>

<style scoped>
.wrapper{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 0.5em;
}
</style>