<template>
    <div class="wrapper">
        <div class="pic">
            <img :src="pic" alt="nopic" class="pic">
        </div>
        <div class="bottom">
            <div class="bottom-text">
                {{ desc }}
            </div>
            <div class="bottom-bottom">
                <div class="blog-host">
                    <div class="sprite">
                        <img :src="sprite" alt="nopic" class="sprite-img">
                    </div>
                    <div class="u-name" style="font-size: 0.6em; color: #666;">
                        {{ name }}
                    </div>
                </div>
                <div class="blog-stat">
                    <img src="../../assets/icons/home/blog-like.svg" alt="">
                    <span style="font-size: 0.6em; color: #666;">{{ likes }}</span>
                </div>
            </div>
        </div>
        <div class="block" style="height: 0.01em;"></div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['likes', 'sprite', 'name', 'desc', 'pic'])
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0.2em;
}

.bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    align-items: center;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    margin-bottom: 0.5em;
}

.bottom-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5em;
    width: 100%;
}

.blog-host {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom-text {
    width: 100%;
    font-size: 0.9em;
}

.blog-stat {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sprite-img {
    border-radius: 10em;
    height: 1.5em;
    margin-right: 0.4em;
}

.pic {
    height: 100%;
    width: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
</style>