<template>
  <div class="wrapper">
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.wrapper{
  height: 100vh;
  width: 100vw; 
}

.main-content{
  margin-bottom: 3em;
  z-index:1;
  background: linear-gradient(to top,#f4f3f8,#f4f3f8,#f4f3f8,#f4f3f8,white);
}
</style>