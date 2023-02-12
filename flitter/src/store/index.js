import { createStore } from 'vuex'
import flitsModule from './flits'
import loginModule from './login'
import usersModule from './users'
import createPersistedState from "vuex-persistedstate"

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
    login: loginModule,
    flits: flitsModule,
    users: usersModule
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })]
})