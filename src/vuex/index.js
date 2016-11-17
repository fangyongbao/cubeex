import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import game from './modules/game'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    game,
    shop
  },
  // 是否开启调试模式
  strict: false,
  // 插件
  plugins: []
})
