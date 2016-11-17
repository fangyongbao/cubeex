import * as types from '../mutation-types'

// initial state
const state = {
  ruleStatus: false
}

// mutations
const mutations = {
  [types.SET_RULE_STATUS] (state, { ruleStatus }) {
    state.ruleStatus = ruleStatus
  }
}

export default {
  state,
  mutations
}
