import {getAccessorType} from 'typed-vuex'
import * as counter from '@/store/counter'

export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {}

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType: any = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    counter
  }
})
