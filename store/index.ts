import {Store} from 'vuex'
import {getModule} from 'vuex-module-decorators'
import CounterModule from '~/store/counter'

/* eslint-disable import/no-mutable-exports */
let counterStore: CounterModule

/* eslint-able import/no-mutable-exports */

function initialiseStores(store: Store<any>): void {
  counterStore = getModule(CounterModule, store)
}

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export {
  initialiseStores,
  counterStore,
}
