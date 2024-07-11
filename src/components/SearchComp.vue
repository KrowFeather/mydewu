<template>
    <div class="search-body">
        <div class="left-icon">
            <i class="iconfont icon-search" style="color: #666;font-size: 0.8em;"></i>
        </div>
        <div class="innerblock">
            <div class="rec-text">
                真维斯长裤
            </div>
            <div class="qr-scan">
                <i class="iconfont icon-scan" style="color: #666;font-size: 0.9em;"></i>
            </div>
        </div>
        <div class="btn-search">
            <h3>
                搜索
            </h3>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.search-body {
    background-color: #eee;
    box-sizing: border-box;
    margin: 0 1em;
    border-radius: 2px;
    height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left-icon {
    width: 10vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.innerblock {
    width: 75vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right:0.5em;
}

.btn-search {
    text-align: center;
    border-left: 1px solid #aaa;
    width: 15vw;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 1vw;
}

.btn-search h3{
    font-size: 0.9em;
    width: 100%;
}

.qr-scan{
    display: flex;
    align-items: center;
    justify-self: center;
}

.rec-text{
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.8em;
    color: #515151;
}
</style>