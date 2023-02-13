import { createStore } from 'vuex'
import flitsModule from './flits'
import usersModule from './users'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    flits: flitsModule,
    users: usersModule
  },
})