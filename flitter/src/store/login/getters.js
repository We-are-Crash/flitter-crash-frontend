const getters = {
  getToken(state) {
    return state.token;
  },
  getSelfUser(state) {
    console.log("Hola")
    return state.selfUser
  },

};

export default getters;