import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexStore from '../vuex';

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
        name: 'menu',
        path: '/menu',
        component: (resolve) => {
            require(['../pages/demos/menu.vue'], resolve);
        }
    }, {
        name: 'pull-refresh',
        path: '/pull-refresh',
        component: (resolve) => {
            require(['../pages/demos/pull-refresh'], resolve);
        }
    }, {
        name: 'radio',
        path: '/radio',
        component: (resolve) => {
            require(['../pages/demos/radio'], resolve);
        }
    }, {
        name: 'checkbox',
        path: '/checkbox',
        component: (resolve) => {
            require(['../pages/demos/checkbox'], resolve);
        }
    }, {
        name: 'select',
        path: '/select',
        component: (resolve) => {
            require(['../pages/demos/select'], resolve);
        }
    }, {
        name: 'select-scroll',
        path: '/select-scroll',
        component: (resolve) => {
            require(['../pages/demos/select-scroll'], resolve);
        }
    }, {
        name: 'area',
        path: '/area',
        component: (resolve) => {
            require(['../pages/demos/area'], resolve);
        }
    }, {
        name: 'datetime',
        path: '/datetime',
        component: (resolve) => {
            require(['../pages/demos/datetime'], resolve);
        }
    }, {
        path: '*',
        redirect: '/menu'
    }]
})

/***
 * 全局钩子函数
 ***/

// 视图切换动画逻辑
const commit = IndexStore.commit || IndexStore.dispatch;

router.afterEach(route => {
    setTimeout(function() {
        var direction = 'forward';
        commit('SET_DIRECTION', { direction });
    }, 50)
})

export default router
