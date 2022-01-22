import {getterTree, mutationTree, actionTree} from 'typed-vuex'
import axios from 'axios'

export const state = () => ({
  count: 0 as number,
  countList: [] as number[]
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  average: (state) => state.countList.length
    ? state.countList.reduce((p: number, c: number) => p + c, 0) / state.countList.length
    : 0
})

export const mutations = mutationTree(state, {
  countUp(state) {
    state.count += 1
  },
  appendCount(state, value: number) {
    // nuxt の場合再代入の必要なし。push で再描画される。
    state.countList.push(value)
  }
})

export const actions = actionTree(
  {state, getters, mutations},
  {
    async addToCountList({commit, dispatch, getters, state}) {
      commit('appendCount', state.count)
    }
  }
)
