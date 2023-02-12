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
    setIsFollowed(state, value) {
        state.isFollowed = value
    },
}

export default mutations