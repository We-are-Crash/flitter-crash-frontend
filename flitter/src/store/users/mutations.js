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
    setSelfUser(state, selfUser) {
        state.selfUser = selfUser
    },
}

export default mutations