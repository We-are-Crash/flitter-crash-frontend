import { useStore } from "vuex"
import { computed } from "vue";

const useLogin = () => {
    const store = useStore()

    return {
        //Getters
        token: computed(() => store.getters["login/getToken"]),
        selfUser: computed(() => store.getters["login/getSelfUser"]),

        //Mutations
        logout: (value) => store.commit("login/deleteToken", value),

        //Actions
        signUp: (userInfo) => store.dispatch("login/signUp", userInfo), 
        login: (credentials) => store.dispatch("login/login", credentials)
        
    }
}

export default useLogin