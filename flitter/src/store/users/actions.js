import flitterApi from "@/api/flitterApi";
import router from "@/router";

const actions = {
  async fetchUsers({ commit }) {
    const { data } = await flitterApi.get("/users");
    commit("setUsers", data);
  },

  async fetchSelectedUser({ commit }, id) {

    commit("setIsLoading", true)
    const { data } = await flitterApi.get(`/users/${id}`) 
    commit("setSelectedUser", data.user);
    commit("setIsLoading", false)
  },
  async followAUser({ commit }, id, selfUserId) {

    console.log("Entra en la función")
    console.log("El id es", id)
    console.log("Tu id es", selfUserId)
    const { data } = await flitterApi.put(`/users/${id}/follow`, selfUserId) 
    console.log("Hace la petición")
    console.log("Devuelve esto:", data)
    commit("setFollowedPeople", data.peopleYouFollow); 
  },
  async unfollowAUser({ commit }, userId, selfUserId) {

    const { data } = await flitterApi.delete(`/users/${userId}/unfollow`, selfUserId) 
    console.log(data)
    commit("setFollowedPeople", data.peopleYouFollow);
  },
  async login({ commit }, credentials) {
    
    const { data } = await flitterApi.post("/users/login", credentials);
    commit("setSelfUser", data.user);
    localStorage.setItem("currentUserId", JSON.stringify(data.user._id));
    localStorage.setItem("token", data.token);
    router.push({ name: "flitsView" });
  },

  async signUp({ commit }, userInfo) {
    
    const { data } = await flitterApi.post("/users/signup", userInfo);
    commit("setSelfUser", data.user);
    localStorage.setItem("token", data.token);
    router.push({ name: "flitsView" });
  },


  
};


export default actions;
