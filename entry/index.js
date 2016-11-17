import Vue from 'vue'
import 'common.scss'
import App from '../src/components/index/App'
import router from '../src/routers/IndexRouter'
import store from '../src/vuex'

const app = new Vue({
	render: h => h(App),
    store,
	router
}).$mount('#app')
