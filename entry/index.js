import 'babel-polyfill';
import Vue from 'vue';
import 'common.scss';
import 'flex.scss';
import 'animate.scss';
import App from '../src/pages/demos/app';
import router from '../src/routers/indexRouter';
import store from '../src/vuex';


const FastClick = require('fastclick')
FastClick.attach(document.body)

const app = new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
