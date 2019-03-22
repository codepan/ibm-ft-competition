import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  navigation: ['竞赛公告', '竞赛背景', '参赛对象', '竞赛赛制', '竞赛赛程', '竞赛奖励', '竞赛组织', '技术支持']
}

export default new Vuex.Store({
  state
})
