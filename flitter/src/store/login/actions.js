import flitterApi from "@/api/flitterApi";
import router from "@/router";

const actions = {
  async login({commit}, credentials) {

    const {data}  = await flitterApi.post("/users/login", credentials);

    commit("setToken", data.token);

    commit("setSelfUser", data.user)
    
    localStorage.setItem("token", data.token)

    router.push({name: "flitsView"})
  },

  async signUp({ commit }, userInfo) {
    const { data } = await flitterApi.post("/users/signup", userInfo);

    commit("setSelfUser", data.user);

    commit("setToken", data.token);

    localStorage.setItem("token", data.token);

    router.push({ name: "flitsView" });
  },
  
};

export default actions;