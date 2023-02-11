import flitterApi from "@/api/flitterApi";

const actions = {
  async fetchUsers({ commit }) {
    const { data } = await flitterApi.get("/users");

    commit("setUsers", data);
  },

  async fetchSelectedUser({ commit }, id) {
    console.log("Entra en la función");

    commit("setIsLoading", true)

    const { data } = await flitterApi.get(`/users/${id}`) 

    console.log(data)
    commit("setSelectedUser", data.user);

    commit("setIsLoading", false)

    console.log("Establece el user")

  },
};

export default actions;
