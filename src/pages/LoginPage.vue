<template>
    <div class="wrapper">
        <header>
            <div class="back" @click="goback">
                <img src="../assets/icons/login/close.svg" alt="">
            </div>
            <div class="header-right">
                <p>遇到问题</p>
            </div>
        </header>
        <div class="main-icon">
            <img src="../assets/icons/login/dewulogo.svg" alt="">
        </div>
        <el-form class="buttongroup">
            <el-button class="login-by-wechat" @click="login">微信一键登录</el-button>
            <br>
            <el-button class="login-by-phone">手机号登录</el-button>
        </el-form>
        <div class="lower-cb">
            <div class="other-ways">
                <p>其他方式登录</p>
                <div class="other-ways-list">
                    <div class="other-ways-item">
                        <img src="../assets/icons/login/wechat.svg" alt="">
                    </div>
                    <div class="other-ways-item">
                        <img src="../assets/icons/login/weibo.svg" alt="">
                    </div>
                    <div class="other-ways-item">
                        <img src="../assets/icons/login/qq.svg" alt="">
                    </div>
                    <div class="other-ways-item">
                        <img src="../assets/icons/login/HUPUlogo.svg" alt="">
                    </div>
                </div>
            </div>
            <div>
                <el-checkbox style="height: 2em;">
                    <span style="font-size: 0.8em;">已阅读并同意</span>
                    <span style="color: black; font-size: 0.8em;">《用户协议》《隐私政策》《买家须知》</span>
                </el-checkbox>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAccountStore } from '@/store/account';
import { useRouter } from 'vue-router';

let router = useRouter()
let accountStore = useAccountStore()
const goback = ()=>{
    router.push({
        name:'user'
    })
}

const login = ()=>{
    accountStore.isLogined=1
    router.push({
        name:'user'
    })
}
</script>

<style scoped>
header {
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1em;
}

header p {
    margin: 0;
    color: #666;
}

.main-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
}

.buttongroup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40%;
    margin: 0 1.5em;
    margin-bottom: -4em;
}

.login-by-wechat,
.login-by-phone {
    width: 100%;
    height: 3em;
}

.login-by-wechat {
    background-color: #00c2c2;
    color: white;
}
.login-by-wechat:active {
    background-color: #009b9b;
    color: white;
}
.login-by-wechat:hover {
    background-color: #009b9b;
    color: white;
}
.login-by-phone{
    color: black;
}
.login-by-phone:active {
    background-color: #ddd;
    color: black;
}
.login-by-phone:hover {
    background-color: #ddd;
    color: black;
}

.lower-cb {
    margin: 0 1.5em;
    display: flex;
    height: 9em;
    flex-direction: column;
    justify-content: space-between;
}

.other-ways{
    height: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: -2em;
}

.other-ways-list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
}
.back{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>