import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    // 是否使用 HTML5 history 模式
    // mode: 'history',
    // 是否使用虚拟模式
    abstract: true,
    // 定义路由根路径
    root: '',
    redirect: {
        // 重定向任意未匹配路径到 /home
        '*': '/game'
    },
    routes: [{
        path: '/game',
        component: (resolve) => {
            require(['../components/index/game/GameCom.vue'], resolve)
        }
    }, {
        path: '/shop',
        component: (resolve) => {
            require(['../components/index/shop/ShopCom.vue'], resolve)
        }
    }, {
        path: '*',
        component: (resolve) => {
            require(['../components/index/game/GameCom.vue'], resolve)
        }
    }]
})

/***
 * 全局钩子函数
 ***/
// router.beforeEach(function(transition) {
//     if (transition.to.userAuth === true) {
//         // 返回一个断定会 true 或者 false 的 Promise
//         //return AuthService.isLoggedIn()
//         return true
//     } else {
//         return true
//             //transition.next()
//     }
// })

export default router