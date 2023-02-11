const getters = {
    getUsers(state) {
        return state.users
    },
    getIsLoading(state) {
        return state.isLoading
    },
    getSelectedUser(state) {
        return state.selectedUser
    },
    getIsFollowed(state) {
        return state.isFollowed
    }
  
}

export default getters