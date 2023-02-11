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
};

export default actions;
