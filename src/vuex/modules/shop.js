import * as types from '../mutation-types'

// initial state
const state = {
  shopList: []
}

// mutations
const mutations = {
  [types.SET_SHOP_LIST] (state, { shopList }) {
    state.shopList = shopList
  }
}

export default {
  state,
  mutations
}