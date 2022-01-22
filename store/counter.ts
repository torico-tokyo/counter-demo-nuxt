import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'


@Module({
  name: 'counter',
  stateFactory: true,
  namespaced: true
})
export default class extends VuexModule {
  // カウンター
  count: number = 0

  // カウンターの値を追加するリスト
  countList: number[] = []

  // countList の平均値を求める
  get average() {
    return this.countList.length
      ? this.countList.reduce((p: number, c: number) => p + c, 0) / this.countList.length
      : 0
  }

  // カウンターを増加
  @Mutation
  countUp() {
    this.count += 1
  }

  // カウンターリストに追加する
  @Mutation
  appendCount(value: number) {
    // vuex の場合再代入の必要なし。push で再描画される。
    this.countList.push(value)
  }

  // 現在のカウンターの値を countList に追加するアクション
  @Action({rawError: true})
  addToCountList() {
    this.appendCount(this.count)
  }
}
