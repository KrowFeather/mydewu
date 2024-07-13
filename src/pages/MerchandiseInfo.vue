<template>
    <div class="wrapper">
        <header>
            <div class="back" @click="back">
                <i class="iconfont icon-fenxiang" style="font-size: 1.4em"></i>
            </div>
            <div class="header-right">
                <i class="iconfont icon-wechat-" style="font-size: 1.4em;padding-right: 0.3em; color: springgreen"></i>
                <i class="iconfont icon-more" style="font-size: 1.4em;"></i>
            </div>
        </header>
        <div class="cosmos">
            <img :src="minfo.picurl" alt="" style="height: 100%;width: 100%;">
        </div>
        <div class="separator" style="height: 1em;width: 100%;"></div>
        <div class="info-pane">
            <div class="info-pane-inner">
                <div class="info-header">
                    <div class="cost">￥
                        <h2>{{ minfo.cost }}</h2>
                        <span style="font-size: 0.8em;color: #666;">得物包邮价</span>
                    </div>
                    <div class="info-header-right">
                        <div class="recentbuy-sprite">
                            <img :src="'https://ui-avatars.com/api/?name=' + rname[(other.rnamecnt + 1) % rname.length] + '+' + rname[(other.rnamecnt + 3) % rname.length]"
                                alt="" style="width: 1.5em;height: 1.5em;border-radius: 10em ">
                        </div>
                        <p style="color: #666;font-size:0.8em">16小时前购买</p>
                        <i class="iconfont icon-forward" style="color: #666"></i>
                    </div>
                </div>
                <div class="info-desc">{{ minfo.name }}</div>
                <div class="infobottom">
                    <div class="rating">
                        <i class="iconfont icon-star" v-for="i in 5" :key="i"></i>
                        <p style="color: #666;">
                            {{ minfo.rating }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="separator" style="height: 1em;width: 100%;"></div>
        <div class="info-adv">
            <div class="banner">
                <div class="banner-in">
                    <i class="iconfont icon-dewu" style="font-size:1.4em;padding-right: 0.3em;"></i>
                    <p style="font-size: 0.8em; color: #666; width: 100%;">品牌官方专供，每件都能为你追本溯源</p>
                    <i class="iconfont icon-forward" style="color: #666;"></i>
                </div>
            </div>
            <div class="service">
                <div class="service-in">
                    <p style="font-size: 0.8em; color: #666; padding-left: 1em;width: 4em; background-color: white">服务
                    </p>
                    <span
                        style="font-size: 0.8em; color: #666; width: 100%;  background-color: white">正品保障险·7天无理由退货·晚到必赔</span>
                    <i class="iconfont icon-forward" style="color: #666;"></i>
                </div>
            </div>
            <div class="param">
                <div class="param-in">
                    <div class="p-l" style="font-size: 0.8em; color: #666; width: 4em;padding-left: 1em;">参数</div>
                    <div class="param-list">
                        <div class="param-item">
                            <p>主货号</p>
                            <p>WDSM-923</p>
                        </div>
                        <div class="param-item">
                            <p>发售价格</p>
                            <p>￥399</p>
                        </div>
                        <div class="param-item">
                            <p>发售日期</p>
                            <p>2024.03</p>
                        </div>
                    </div>
                </div>
                <div class="judge">
                    <h4 style="color: #666; font-size: 0.9em;">对比</h4>
                    <i class="iconfont icon-forward" style="color: #666;"></i>
                </div>
            </div>
        </div>
        <div class="separator" style="height: 1em;width: 100%;"></div>
        <div class="info-ubuy">
            <div class="ubuy-in">
                <div class="ubuy-header">
                    <div style="width: 100%;">
                        <h4 style="width: 10em;">最近购买（2000+）</h4>
                    </div>
                    <div class="u-h-r">
                        <p style="width: 2em; font-size: 0.8em;color: #666; ">全部</p>
                        <i class="iconfont icon-forward" style="color: #666;"></i>
                    </div>
                </div>
                <div class="ubuy-bottom">
                    <div class="ubuy-item">
                        <div class="uinfo">
                            <div class="uinfo-item">
                                <div class="usprite">
                                    <img src="https://img.picui.cn/free/2024/07/10/668e304562679.jpeg" alt=""
                                        style="width: 1.1em;border-radius: 10em;">
                                </div>
                                <div class="uname" style="font-size: 0.8em;">沸*</div>
                            </div>
                            <div class="uinfo-item">
                                <p style="color: #666; font-size: 0.8em;">黑色 2XL</p>
                            </div>
                            <div class="uinfo-item">
                                <p style="color: #666; font-size: 0.8em;">￥59</p>
                            </div>
                            <div class="uinfo-item">
                                <p style="color: #666; font-size: 0.8em;">3小时前</p>
                            </div>
                        </div>
                    </div>
                    <div class="ubuy-item">
                        <div class="uinfo">
                            <div class="uinfo-item">
                                <div class="usprite">
                                    <img src="https://img.picui.cn/free/2024/07/10/668e304584679.jpg" alt=""
                                        style="width: 1em;border-radius: 10em;">
                                </div>
                                <div class="uname" style="font-size: 0.8em;">虫*</div>
                            </div>
                            <div class="uinfo-item">
                                <p style="color: #666; font-size: 0.8em;">黑色 XL</p>
                            </div>
                            <div class="uinfo-item">
                                <p style="color: #666; font-size: 0.8em;">￥59</p>
                            </div>
                            <div class="uinfo-item">
                                <p style="color: #666; font-size: 0.8em;">4小时前</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-left">
                <div class="iconpanel">
                    <i class="iconfont icon-heart" style="font-size: 1.2em"></i>
                    <p>想要</p>
                </div>
                <div class="iconpanel">
                    <i class="iconfont icon-circle_ok" style="font-size: 1.2em"></i>
                    <p>我有</p>
                </div>
                <div class="iconpanel">
                    <i class="iconfont icon-kefu" style="font-size: 1.2em"></i>
                    <p>客服</p>
                </div>
            </div>
            <div class="footer-right">
                <el-button class="btn1">求购</el-button>
                <el-button class="btn2">立即购买</el-button>
            </div>
        </div>
    </div>
    <div class="separator" style="height: 4em;width: 100%;"></div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAccountStore } from '@/store/account';
import { useOtherStore } from '@/store/others';
let route = useRoute()
let id = route.query.id
let accountStore = useAccountStore()
let router = useRouter()
let other = useOtherStore()
onMounted(async () => {
    console.log(route.query)
    other.rnamecnt++
    await Sleep(10)
    await getInfo()
})
const Sleep = (ms: any) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
let minfo = ref({} as any)
const getInfo = async () => {
    await axios.get(accountStore.host + '/getMerchandiseInfo/' + id).then((resp) => {
        minfo.value = resp.data
        minfo.value = minfo.value[0]
        console.log('minfo:', minfo.value)
    })
}
const back = () => {
    router.back()
}
let rname = ['Home', 'Tean', 'Yun', 'Opn', 'Tc']
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.footer {
    background-color: white;
    height: 4em;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1em;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    height: 3em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 1em;
}

.btn1 {
    color: #888;
    width: 4em;
}

.btn2 {
    background-color: #01c2c1;
    color: white;
    width: 10em;
}

.footer-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.iconpanel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.iconpanel p {
    font-size: 0.5em;
}

.cosmos {
    height: 55%;
    width: 100%;
}

.info-pane {
    width: 100%;
    box-sizing: border-box;
    padding: 0 1em;
}

.info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;
    background-color: white;
    box-sizing: border-box;
    padding: 0 0.5em;
}

.info-header-right {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.cost {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.recentbuy-sprite {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.info-desc {
    display: flex;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: 0 0.5em;
}

.rating {
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5em 0.5em;
}

.info-adv {
    width: 100%;
    border-radius: 3px;
}

.service {
    box-sizing: border-box;
    padding: 0 1em;
}

.service-in {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 1em 0;
    background-color: white;
    border-bottom: 1px solid #666;
}

.param-in {
    display: flex;
    align-items: center;
}

.param {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    padding: 1em 1em;
}

.param-item {
    font-size: 0.8em;
    color: #666;
}

.param-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.judge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
}

.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1em;
    width: 100%;
}

.banner-in {
    background: linear-gradient(to left, white, #dbf9fb, #dbf9fb, white);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 0.5em;
    padding-right: 0;
}

.info-ubuy {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1em;
}

.ubuy-in {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: white;
}

.ubuy-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 0.5em;
}

.u-h-r {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ubuy-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.uinfo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
}

.uinfo-item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ubuy-bottom {
    padding-bottom: 1em;
}
</style>