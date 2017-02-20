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
    routes: [{
        name: 'home',
        path: '/home',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/home.vue')), 'home');
        }
    }, {
        name: 'menu',
        path: '/menu',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/menu.vue')), 'menu');
        }
    }, {
        name: 'pull-refresh-iscroll',
        path: '/pull-refresh-iscroll',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/pull-refresh-iscroll')), 'pull-refresh-iscroll');
        }
    }, {
        name: 'pull-refresh-nscroll',
        path: '/pull-refresh-nscroll',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/pull-refresh-nscroll')), 'pull-refresh-nscroll');
        }
    },{
        name: 'pull-refresh-xscroll',
        path: '/pull-refresh-xscroll',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/pull-refresh-xscroll')), 'pull-refresh-xscroll');
        }
    }, {
        name: 'radio',
        path: '/radio',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/radio')), 'radio');
        }
    }, {
        name: 'checkbox',
        path: '/checkbox',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/checkbox')), 'checkbox');
        }
    }, {
        name: 'select',
        path: '/select',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/select')), 'select');
        }
    }, {
        name: 'select-scroll',
        path: '/select-scroll',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/select-scroll')), 'select-scroll');
        }
    }, {
        name: 'area',
        path: '/area',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/area')), 'area');
        }
    }, {
        name: 'datetime',
        path: '/datetime',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/datetime')), 'datetime');
        }
    }, {
        name: 'dialog',
        path: '/dialog',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/dialog')), 'dialog');
        }
    }, {
        name: 'address-book',
        path: '/address-book',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/address-book')), 'address-book');
        }
    },{
        name: 'swiper',
        path: '/swiper',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/swiper')), 'swiper');
        }
    },{
        name: 'previewer',
        path: '/previewer',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/previewer')), 'previewer');
        }
    },{
        name: 'qrcode',
        path: '/qrcode',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/qrcode')), 'qrcode');
        }
    },{
        name: 'qq',
        path: '/qq',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/qq')), 'qq');
        }
    },{
        name: 'marquee',
        path: '/marquee',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/marquee')), 'marquee');
        }
    },{
        name: 'countdown',
        path: '/countdown',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/countdown')), 'countdown');
        }
    },{
        name: 'slider',
        path: '/slider',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/slider')), 'slider');
        }
    },{
        name: 'drag',
        path: '/drag',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/drag')), 'drag');
        }
    },{
        name: 'uploadImg',
        path: '/uploadImg',
        component: (resolve) => {
            require.ensure([], () => resolve(require('../pages/demos/uploadImg')), 'uploadImg');
        }
    },{
        path: '*',
        redirect: '/home'
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
