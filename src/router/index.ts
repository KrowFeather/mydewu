import { createRouter, createWebHashHistory } from "vue-router"
import ExplorePage from '@/pages/ExplorePage.vue'
import HomePage from '@/pages/HomePage.vue'
import PurchasePage from '@/pages/PurchasePage.vue'
import UserPage from '@/pages/UserPage.vue'
import RecommendGoods from '@/pages/PurchasePage/RecommendGoods.vue'
import ShoeCate from '@/pages/PurchasePage/ShoeCate.vue'
import ClothesCate from '@/pages/PurchasePage/ClothesCate.vue'
import LoginPage from "@/pages/LoginPage.vue"
import RecommendPage from "@/pages/HomePage/RecommendPage.vue"
import InspirationPage from "@/pages/HomePage/InspirationPage.vue"
import MerchandiseInfo from "@/pages/MerchandiseInfo.vue"
import FriendZone from "@/pages/HomePage/FriendZone.vue"
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/HomePage'
        },
        {
            name:'explore',
            path:'/ExplorePage',
            component:ExplorePage
        },
        {
            name:'home',
            path:'/HomePage',
            component:HomePage,
            redirect:'/HomePage/RecommendPage',
            children:[
                {
                    name:'recommend',
                    path:'RecommendPage',
                    component:RecommendPage,
                },
                {
                    name:'inspiration',
                    path:'InspirationPage',
                    component:InspirationPage,
                },
                {
                    name:'friendzone',
                    path:'FriendZone',
                    component:FriendZone,
                }
            ]
        },
        {
            name:'purchase',
            path:'/PurchasePage',
            component:PurchasePage,
            redirect:'/PurchasePage/RecommendGoods',
            children:[
                {
                    name:'recommendgoods',
                    path:'RecommendGoods',
                    component:RecommendGoods
                },
                {
                    name:'shoecate',
                    path:'ShoeCate',
                    component:ShoeCate
                },
                {
                    name:'clothescate',
                    path:'ClothesCate',
                    component:ClothesCate
                },
            ]
        },
        {
            name:'user',
            path:'/UserPage',
            component:UserPage
        },
        {
            name:'login',
            path:'/LoginPage',
            component:LoginPage
        },
        {
            name:'merchandise',
            path:'/MerchandiseInfo',
            component:MerchandiseInfo
        }
    ]
})

export default router