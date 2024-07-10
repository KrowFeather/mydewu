<template>
    <div class="lowerbar">
        <div class="stat-item">
            <h4>
                <slot name="s1">0</slot>
            </h4>
            <p>获赞与收藏</p>
        </div>
        <div class="stat-item">
            <h4>
                <slot name="s2">0</slot>
            </h4>
            <p>粉丝</p>
        </div>
        <div class="stat-item">
            <h4>
                <slot name="s3">0</slot>
            </h4>
            <p>关注</p>
        </div>
        <div class="stat-item">
            <h4>
                <slot name="s4">0</slot>
            </h4>
            <p>动态</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.lowerbar {
    display: flex;
    height: 2em;
    justify-content: space-around;
}

.stat-item {
    width: 25%;
}

.stat-item h4 {
    margin-top: 0;
    margin-bottom: 0;
}

.stat-item p {
    margin: 0;
    font-size: 0.7em;
    color: #666;
}

.lowerbar .stat-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>