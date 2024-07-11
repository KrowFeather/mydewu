import { defineStore } from "pinia";

export const useOtherStore = defineStore('others',{
    state(){
        return{
            rnamecnt:0,
            h1:1,
            h2:0,
            h3:0,
            h4:0
        }
    }
})