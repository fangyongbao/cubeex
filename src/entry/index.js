// import 'babel-polyfill';
import Vue from 'vue';
import 'common.scss';
import 'flex.scss';
import 'animate.scss';
import 'ui.scss';
import App from '../pages/demos/app';
import router from '../routers/indexRouter';
import store from '../vuex';

import cubeex from '../../dist/js/cubeex.js';
console.log(cubeex);

// const FastClick = require('fastclick')
// FastClick.attach(document.body)

const app = new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
