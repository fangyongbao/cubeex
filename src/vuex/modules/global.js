import * as types from '../mutation-types'

// initial state
const state = {
    // 是否显示日期删选
    areaStatus: false,
    // 视图切换的方向
    direction: 'forward'
}

// mutations
const mutations = {
    [types.SET_AREA_STATUS](state, { areaStatus }) {
        state.areaStatus = areaStatus
    },
    [types.SET_DIRECTION](state, { direction }) {
        state.direction = direction
    }
}

export default {
    state,
    mutations
}
