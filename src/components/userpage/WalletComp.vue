<template>
    <div class="wrapper">
        <div class="wrapper-top">
            <h5>订单</h5>
            <div class="top-right">
                <p style="width: 1em;">心意礼品卡</p>
                <div class="rarr">
                    <img src="../../assets/icons/right-arrow.svg" alt="">
                </div>
            </div>
        </div>
        <div class="bookings-bottom">
            <div class="booking-item" v-for="(item, i) in bookingitem" :key="i">
                <img :src="item.ico" alt="nopic">
                <p>{{ item.name }}</p>
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

.want {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}

.have {
    border-bottom: 1px solid #ccc;
}

.footstep {
    border-right: 1px solid #ccc;
}

.left {
    width: 4em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rarr {
    width: 1em;
}
</style>