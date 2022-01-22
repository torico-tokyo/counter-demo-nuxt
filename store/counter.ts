import {getterTree, mutationTree, actionTree} from 'typed-vuex'

export const state = () => ({
  // カウンター
  count: 0 as number,
  // カウンターの値を追加するリスト
  countList: [] as number[]
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  // countList の平均値を求める
  average: (state) => state.countList.length
    ? state.countList.reduce((p: number, c: number) => p + c, 0) / state.countList.length
    : 0
})

export const mutations = mutationTree(state, {
  // カウンターを増加
  countUp(state) {
    state.count += 1
  },
  // カウンターリストに追加する
  appendCount(state, value: number) {
    // nuxt の場合再代入の必要なし。push で再描画される。
    state.countList.push(value)
  }
})

export const actions = actionTree(
  {state, getters, mutations},
  {
    // 現在のカウンターの値を countList に追加するアクション
    async addToCountList({commit, dispatch, getters, state}) {
      commit('appendCount', state.count)
    }
  }
)
