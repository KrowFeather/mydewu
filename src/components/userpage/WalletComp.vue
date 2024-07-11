<template>
    <div class="wrapper">
        <div class="wrapper-top">
            <h5>钱包</h5>
            <div class="top-right">
                <p style="width: 100%; color: #666; font-size: 0.8em ;height:100%">心意礼品卡</p>
                <i class="iconfont icon-forward" style="height:100%"></i>
            </div>
        </div>
        <div class="bottom">
            <div class="wallet-item">
                <h4>
                    {{ yhq }}
                </h4>
                <p>优惠券</p>
            </div>
            <div class="wallet-item">
                <h4>
                    {{ jq }}
                </h4>
                <p>借钱</p>
            </div>
            <div class="wallet-item">
                <h4>
                    {{ fq }}
                </h4>
                <p>可分12期</p>
            </div>
            <div class="wallet-item">
                <h4>
                    {{ jt }}
                </h4>
                <p>津贴</p>
            </div>
            <div class="wallet-item">
                <h4>
                    {{ lpk }}
                </h4>
                <p>礼品卡</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['yhq','jq','fq','jt','lpk'])
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* height: 6em; */
    box-sizing: border-box;
    padding: 0 1em;
    border-radius: 3px;
}

.wrapper-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.top-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom{
    background-color: white;
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    padding-bottom: 1em;
}

.wallet-item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.wallet-item p{
    font-size: 0.8em;
    color: #666;
}

.wrapper-top{
    background-color: white;
    box-sizing: border-box;
    padding: 0 1em
}
h4{
    font-size: 0.9em;
}
</style>