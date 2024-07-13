<template>
    <div class="wrapper">
        <div class="top">
            <div class="user-sprite">
                <img :src="sprite" alt="" style="width: 80%;height: 80%; border-radius: 10em;">
            </div>
            <div class="close">
                <i class="iconfont icon-close" style="color: #666;"></i>
            </div>
            <div class="u-name">{{ name }}</div>
        </div>
        <div class="bottom">
            <el-button class="btn" size="small">
                + 关注
            </el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['sprite', 'name', 'desc'])
</script>

<style scoped>
.wrapper {
    border: 1px solid #666;
    border-radius: 3px;
    height: 12em;
    width: 42%;
}

.top {
    height: 80%;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.close {
    position: absolute;
    top: 0;
    right: 2px;
}

.bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 2em;
}

.btn {
    background-color: #01c2c1;
    color: white;
    width: 80%;
}

.user-sprite{
    height: 70%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>