import { defineStore } from "pinia";

export const useOtherStore = defineStore('others',{
    state(){
        return{
            rnamecnt:0
        }
    }
})