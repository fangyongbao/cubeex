import * as types from './mutation-types'

// 设置规则弹出框的状态
export const setRuleStatus = ({ commit, state }, ruleStatus) => {
  commit(types.SET_RULE_STATUS, { ruleStatus })
}

// 设置商品列表
export const setShopList = ({ commit, state }, shopList) => {
  commit(types.SET_SHOP_LIST, { shopList })
}

