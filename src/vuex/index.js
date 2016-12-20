import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import global from './modules/global'
import game from './modules/game'
import shop from './modules/shop'
// console log vuex
import createLogger from 'vuex/dist/logger';


Vue.use(Vuex)

const debug = true;

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    global,
    game,
    shop
  },
  // 是否开启调试模式
  strict: true,
  // 插件
  plugins: debug ? [createLogger()] : []
})
