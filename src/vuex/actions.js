import * as types from './mutation-types'

// 设置城市联动状态
export const setAreaStatus = ({ commit, state }, areaStatus) => {
  commit(types.SET_AREA_STATUS, { areaStatus })
}

// 设置视图切换方向
export const setDirection = ({ commit, state }, direction) => {
  commit(types.SET_DIRECTION, { direction })
}

// 设置规则弹出框的状态
export const setRuleStatus = ({ commit, state }, ruleStatus) => {
  commit(types.SET_RULE_STATUS, { ruleStatus })
}

// 设置商品列表
export const setShopList = ({ commit, state }, shopList) => {
  commit(types.SET_SHOP_LIST, { shopList })
}
