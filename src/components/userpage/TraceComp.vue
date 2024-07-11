<template>
    <div class="wrapper">
        <div class="want">
            <div class="left">
                <img src="../../assets/icons/like.svg" alt="">
            </div>
            <div class="right">
                <div style="width: 100%;">
                    <h4 style="margin: 0;">
                        想要
                    </h4>
                </div>
                <div style="width: 2em; text-align: center; font-size:0.8em; color: #666;">
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
                    <h4 style="margin: 0;">
                        我有
                    </h4>
                </div>
                <div style="width: 2em; text-align: center;font-size:0.8em; color: #666;">
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
                    <h4 style="margin: 0;">
                        足迹
                    </h4>
                </div>
                <div style="width: 2em; text-align: center; font-size:0.8em;  color: #666;">
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
                    <h4 style="margin: 0;">
                        订阅
                    </h4>
                </div>
                <div style="width: 2em; text-align: center; font-size:0.8em; color: #666;" >
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
h4{
    font-size: 0.9em;
}
</style>