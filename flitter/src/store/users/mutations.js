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
    setFollowedPeople(state, followedPeople) {
        state.followedPeople = followedPeople
    }
}

export default mutations