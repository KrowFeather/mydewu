<template>
    <div class="wrapper">
        <header>
            <div class="header-left">
                <div class="user-sprite">
                    {{ usersprite }}
                </div>
                <div class="user-name">
                    <h4>{{ username }}</h4>
                    <p>6小时前</p>
                </div>
            </div>
            <div class="header-right">
                <el-button>
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
defineProps(['usersprite','username','time','title','topic'])
</script>

<style scoped>

</style>