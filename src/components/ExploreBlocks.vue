<template>
    <div class="wrapper-content">
        <div class="content">
            <div class="content-left">
                <h4 style="font-size: 1em;">{{ title }}</h4>
                <p style="font-size: 0.8em; color:#666;">{{ text }}</p>
            </div>
            <div class="icon-slot">
                <slot></slot>
            </div>
            <div class="rarr">
                <img src="../assets/icons/right-arrow.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['title','text'])
</script>

<style scoped>
.wrapper-content{
    margin: 0 1em;
}
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 2px;
    border-bottom: 1px solid #eee;
    height: 4.8em;
}
</style>