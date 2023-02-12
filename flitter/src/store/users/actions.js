import flitterApi from "@/api/flitterApi";

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
  async followAUser({ commit }, userId, selfUserId) {

    const { data } = await flitterApi.post(`/users/${userId}/follow`, selfUserId) 

    commit("setFollowedPeople", data.peopleYouFollow);

    
  },
  async unfollowAUser({ commit }, userId, selfUserId) {

    const { data } = await flitterApi.delete(`/users/${userId}/follow`, selfUserId) 

    commit("setFollowedPeople", data.peopleYouFollow);

    localStorage.setItem(
      "followedPeople",
      JSON.stringify(data.peopleYouFollow)
    );
  },
};


export default actions;
