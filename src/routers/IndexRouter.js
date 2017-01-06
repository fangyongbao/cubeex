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
    },{
        name: 'dialog',
        path: '/dialog',
        component: (resolve) => {
            require(['../pages/demos/dialog'], resolve);
        }
    },{
        path: '*',
        redirect: '/menu'
    }]
})

/***
 * 全局钩子函数
 ***/

// 视图切换动画逻辑
let history = window.sessionStorage;
history.clear();
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);
const commit = IndexStore.commit || IndexStore.dispatch;

router.beforeEach((to, from, next) => {
    const toIndex = history.getItem(to.path);
    const fromIndex = history.getItem(from.path);
    console.log(history)
    console.log('toIndex:' + toIndex)
    console.log('fromIndex:' + fromIndex)
    if (toIndex) {
        if (toIndex >= fromIndex || !fromIndex) {
            var direction = 'forward';
            commit('SET_DIRECTION', { direction })
        } else {
            var direction = 'reverse';
            commit('SET_DIRECTION', { direction })
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        var direction = 'forward';
        commit('SET_DIRECTION', { direction })
    }

    // commit('UPDATE_LOADING', true)
    setTimeout(next, 50)
})

router.afterEach(() => {
    // commit('UPDATE_LOADING', false)
})

// router.afterEach(route => {
//     setTimeout(function() {
//         var direction = 'forward';
//         commit('SET_DIRECTION', { direction });
//     }, 50)
// })

export default router
