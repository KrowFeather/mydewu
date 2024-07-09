<template>
    <div class="wrapper">
        <header>
            <SearchComp></SearchComp>
            <NavTab></NavTab>
        </header>
    </div>
</template>

<script lang="ts" setup>
import SearchComp from '@/components/SearchComp.vue';
import NavTab from '@/components/NavTab.vue'
</script>

<style scoped>
header{
    height: 100%;
    width: 100%;
    margin-top: 1em;
}
</style>