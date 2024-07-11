import { defineStore } from "pinia";

export const useAccountStore = defineStore('account',{
    state(){
        return{
            isLogined:0,
            userid:1,
            host:'http://127.0.0.1:5000',
            sprite:'',
        }
    }
})