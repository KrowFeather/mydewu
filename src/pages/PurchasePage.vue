<template>
    <div class="wrapper-purchase">
        <header>
            <div class="header-top">
                <div class="header-top-left">
                    <div class="icon">
                        <img src="../assets/icons/dewulogo.svg" alt="">
                    </div>
                    <h4 class="rec-text">造谣得物售假的人被法院判了 &gt;</h4>
                </div>
                <div class="header-top-right">
                    <div class="signature">
                        <img src="../assets/icons/signature.svg" alt="">
                        <h4>
                            签到
                        </h4>
                    </div>
                </div>
            </div>
            <div class="header-mid">
                <SearchComp />
            </div>
            <div class="next-tabs">
                <div class="tab-item">推荐</div>
                <div class="tab-item">新人专享</div>
                <div class="tab-item">鞋类</div>
                <div class="tab-item">数码</div>
                <div class="tab-item">艺术</div>
                <div class="tab-item">潮服</div>
                <div class="tab-item">手表</div>
                <div class="tab-item">手表</div>
                <div class="tab-item">手表</div>
            </div>
        </header>
        <div class="">

        </div>
    </div>
</template>

<script lang="ts" setup>
import SearchComp from '../components/SearchComp.vue'
</script>

<style scoped>
header{
  position: fixed;
  top:0;
  left: 0;
  height:8em;
  width: 100%;
  border-bottom: 1px solid #DDD;
  background-color: white;
  z-index: 10;
}
.header-top{
    display: flex;
    justify-content: space-between;
    height: 3em;
    margin: 0 1em;
}
.next-tabs{
    display: flex;
    flex-basis: 5;
    /* width: ; */
}
.next-tabs .tab-item{
    width: 4em;
    font-size: 3.7vw;
}

.header-top-left{
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-top-left .icon{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.3em;   
}

.header-mid{
    margin-bottom: 1em;
}
.header-top-right{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.header-top-right h4{
    font-size: 2.5vw;
    margin-top: -0.1em;
    color: #1098ad;
    height: 20%;
}
.header-top-right .signature{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.signature img{
    height: 80%;
    margin-top: 1em;
}

</style>