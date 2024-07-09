<template>
    <div class="wrapper">
        <div class="want">
            <div class="left">
                <img src="../../assets/icons/like.svg" alt="">
            </div>
            <div class="right">
                <div style="width: 100%;">
                    想要
                </div>
                <div style="width: 2em; text-align: center">
                    {{ wantcnt }}
                </div>
                <div class="rarr">
                    <img src="../../assets/icons/right-arrow.svg" alt="">
                </div>
            </div>
        </div>
        <div class="have">
            <div class="left">
                <img src="../../assets/icons/have.svg" alt="">
            </div>
            <div class="right">
                <div style="width: 100%;">
                    我有
                </div>
                <div style="width: 2em; text-align: center">
                    {{ havecnt }}
                </div>
                <div class="rarr">
                    <img src="../../assets/icons/right-arrow.svg" alt="">
                </div>
            </div>
        </div>
        <div class="footstep">
            <div class="left">
                <img src="../../assets/icons/footstep.svg" alt="">
            </div>
            <div class="right">
                <div style="width: 100%;">
                    足迹
                </div>
                <div style="width: 2em; text-align: center">
                    {{ fscnt }}
                </div>
                <div class="rarr">
                    <img src="../../assets/icons/right-arrow.svg" alt="">
                </div>
            </div>
        </div>
        <div class="subscribe">
            <div class="left">
                <img src="../../assets/icons/plus.svg" alt="">
            </div>
            <div class="right">
                <div style="width: 100%;">
                    订阅
                </div>
                <div style="width: 2em; text-align: center">
                    {{ subcnt }}
                </div>
                <div class="rarr">
                    <img src="../../assets/icons/right-arrow.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['wantcnt', 'havecnt', 'fscnt', 'subcnt'])
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 6em;
    box-sizing: border-box;
    padding: 0 1em;
    border-radius: 3px;
}

.want,
.have,
.footstep,
.subscribe {
    width: 49%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.want{    
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.have{
    border-bottom: 1px solid #ccc;
}
.footstep{
    border-right: 1px solid #ccc;
}

.left{
    width: 4em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.rarr{
    width: 1em;
}
</style>