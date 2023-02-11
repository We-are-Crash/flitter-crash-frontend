const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    
    setIsLoading(state, isLoading) {
        state.isLoading = isLoading
    },
    setSelectedUser(state, selectedUser) {
        state.selectedUser = selectedUser
    },

}

export default mutations