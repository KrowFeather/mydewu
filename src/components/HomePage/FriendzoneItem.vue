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
        <div class="main-pic">
            <div class="upperbox">
                <div class="box-in-box">
                    <img :src="pics[0]" alt="" style="width: 65vw;height: 65vw; object-fit: cover;">
                </div>
                <div class="box-in-box">
                    <img :src="pics[1]" alt="" style="width: 32vw ;height: 32vw; object-fit: cover;">
                </div>
                <div class="box-in-box">
                    <img :src="pics[2]" alt="" style="width: 32vw ;height: 32vw; object-fit: cover;">
                </div>
            </div>
            <div class="bottom-box">
                <div class="box-in-box2">
                    <img :src="pics[3]" alt="" style="width: 32vw ;height: 32vw; object-fit: cover;">
                </div>
                <div class="box-in-box2">
                    <img :src="pics[4]" alt="" style="width: 32vw ;height: 32vw; object-fit: cover;">
                </div>
                <div class="box-in-box2">
                    <img :src="pics[5]" alt="" style="width: 32vw ;height: 32vw; object-fit: cover;">
                </div>
            </div>
        </div>
        <div class="mid-toolbar">
            <div class="tbar-l">
                <i class="iconfont icon-share" style="font-size: 1.4em;"></i>
                <p style="font-size: 0.6em; color: #666">分享</p>
            </div>
            <div class="tbar-r">
                <div class="tbar-r-item">
                    <i class="iconfont icon-like" style="font-size: 1.4em;"></i>
                    <p style="font-size: 0.6em; color: #666">赞</p>
                </div>
                <div class="tbar-r-item">
                    <i class="iconfont icon-star" style="font-size: 1.4em;"></i>
                    <p style="font-size: 0.6em; color: #666">收藏</p>
                </div>
                <div class="tbar-r-item">
                    <i class="iconfont icon-comment" style="font-size: 1.4em;"></i>
                    <p style="font-size: 0.6em; color: #666">评论</p>
                </div>
            </div>
        </div>
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
        <div class="relativeGoods">
            <div class="rg-panel">
                <div class="rg-panel-left">
                    <img :src="rgpic" alt="" style="width: 3em;">
                    <div class="rg-title">{{ rgtitle }}</div>
                </div>
                <div class="want">
                    <i class="iconfont icon-heart" style="font-size: 1.2em;color: #666;"></i>
                    <p style="font-size: 0.5em; color: #666">想要</p>
                </div>
            </div>
        </div>
        <div class="my-panel">
            <div class="panel-inner">
                <div class="my-sprite">
                    <img :src="mysprite" alt="" style="width: 2.5em; border-radius: 10em;">
                </div>
                <div class="my-comment-area">
                    <p>秒评超欢迎，友善要先行</p>
                </div>
                <div class="my-comment-icon">
                    <i class="iconfont icon-edit-write" style="color: #666;"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="blocker" style="height: 1em;"></div>
</template>

<script lang="ts" setup>
defineProps(['usersprite', 'username', 'time', 'title', 'topic', 'pics', 'rgpic', 'rgtitle', 'mysprite'])
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

.user-sprite {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5em;
}

.user-name {
    font-size: 0.9em;
}

.header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-right: 1em;
}

.main-content {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}

.upperbox {
    display: flex;
    flex-wrap: wrap;
    height: 66.6vw;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bottom-box {
    display: flex;
    align-content: center;
    align-items: center;
}

.box-in-box {
    width: fit-content;
    height: fit-content;
}

.box-in-box2 {
    height: 33.3vw;
    width: 33.3vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.description {
    box-sizing: border-box;
    padding: 0 1em;
}

.mid-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1em;
}

.tbar-l {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.tbar-r {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.tbar-r-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 0.3em;
}

.my-panel {
    width: 100%;
    height: 3.5em;
    box-sizing: border-box;
    padding: 0 1em;
}

.panel-inner {
    height: 70%;
    background-color: #eee;
    border-radius: 3em;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.my-comment-area{
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: #666;
    width: 100%;
    padding-left: 1em;
}

.my-sprite{
    display: flex;
    justify-content: center;
    align-items: center;
}

.my-comment-icon{
    width: 3em;
}

.rg-panel{
    width: 100%;
    padding: 0 1em;
    box-sizing: border-box;
    margin:1em 0;
    display: flex;
}
.rg-panel-left{
    display: flex;
    align-items: center;
    border: 1px solid #666;
    width: 50%;
    height: 100%;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
}

.rg-title{
    font-size: 0.4em;
    color: #444;
}

.want{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #666;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 0 0.2em;
    border-left: none;
}
</style>