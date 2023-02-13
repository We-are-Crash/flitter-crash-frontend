import { useStore } from "vuex"
import { computed } from "vue";

const useUsers = () => {
    const store = useStore()

    return {

        //Getters
        selectedUser: computed(() => store.getters["users/getSelectedUser"]),
        isLoading: computed(() => store.getters["users/getIsLoading"]),
        selfUser: computed(() => store.getters["users/getSelfUser"]),

        //Actions
        fetchUsers: () => store.dispatch("users/fetchUsers"),
        fetchSelectedUser: (id_user) => store.dispatch("users/fetchSelectedUser", id_user),
        followAUser: (userId, selfUserId) => store.dispatch("users/followAUser", userId, selfUserId),
        unfollowAUser: (userId, selfUserId) => store.dispatch("users/unfollowAUser", userId, selfUserId),
        signUp: (userInfo) => store.dispatch("users/signUp", userInfo), 
        login: (credentials) => store.dispatch("users/login", credentials)
        
    }
}

export default useUsers
