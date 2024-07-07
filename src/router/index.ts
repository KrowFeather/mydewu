import { createRouter, createWebHashHistory } from "vue-router"
import ExplorePage from '@/pages/ExplorePage.vue'
import HomePage from '@/pages/HomePage.vue'
import PurchasePage from '@/pages/PurchasePage.vue'
import UserPage from '@/pages/UserPage.vue'

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
            component:HomePage
        },
        {
            name:'purchase',
            path:'/PurchasePage',
            component:PurchasePage
        },
        {
            name:'user',
            path:'/UserPage',
            component:UserPage
        },
    ]
})

export default router