<template>
    <div class="wrapper">
        <header>
            <div class="header-left">
                <div class="user-sprite">
                    <img :src="usersprite" alt="" style="width: 2.5em;height: 2.5em; border-radius: 10em;">
                </div>
                <div class="user-name">
                    <h4>{{ username }}</h4>
                    <p>6小时前</p>
                </div>
            </div>
            <div class="header-right">
                <el-button class="btn" size="small">
                    + 关注
                </el-button>
            </div>
        </header>
        <div class="main-content">
            <div class="main-pic"></div>
        </div>
        <div class="mid-toolbar"></div>
        <div class="description">
            <div class="title">
                <h4>
                    {{ title }}
                </h4>
            </div>
            <div class="topic">
                {{ topic }}
            </div>
        </div>
        <div class="relativeGoods"></div>
        <div class="my-panel">
            <div class="my-sprite"></div>
            <div class="my-comment-area"></div>
            <div class="my-comment-icon"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['usersprite', 'username', 'time', 'title', 'topic'])
</script>

<style scoped>
p,
h4 {
    margin: 0;
}

.wrapper {
    width: 100%;
    box-sizing: border-box;
    background-color: white
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 1em 0;
}

.header-left {
    display: flex;
}

.btn {
    background-color: #01c2c1;
    color: white;
    width: 100%;
}

.user-sprite{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5em;
}

.user-name{
    font-size: 0.9em;
}

.header-right{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-right: 1em;
}
</style>