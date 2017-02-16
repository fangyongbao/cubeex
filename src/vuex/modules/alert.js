/**
 * @des: 设置alert状态和文字
 * @author nowitzki
 * @date 12.24
 */

import * as types from '../mutation-types'

// initial state
const state = {
    loadInfo: {
        msg: '',
        isShow: false,
        isMask: true
    }
}

// mutations
const mutations = {
    [types.SET_LOAD_STATUS](state, loadInfo) {
        state.loadInfo = loadInfo
    }
}

export default {
    state,
    mutations
}
