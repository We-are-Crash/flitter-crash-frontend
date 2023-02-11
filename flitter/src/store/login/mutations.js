const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setSelfUser(state, selfUser) {
    state.selfUser = selfUser
  },
  deleteToken(state) {
    state.token = null
  },
};

export default mutations;