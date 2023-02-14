<template>
  <div class="app-wraper">
    <div>
      <button @click="fetchFlits()">Pedir flits</button>
    </div>

    <form>

      <div>
        <input
          type="text"
          placeholder="Mensaje"
          v-model="flitInfo.message"
          required
        />
      </div>

      <div id="lower">
        <input
          class="button"
          type="submit"
          value="Crear flit"
          @click="createAndRefreshFlits(flitInfo)"
        /> 
      </div>
    </form>

    <div>
      <button @click="fetchUsers()">Pedir usuarios</button>
    </div>
    <div>
      <button @click="openModal">Abrir Modal</button>

      <GoModal title="Hola mundo" v-if="isOpen" @on:close="closeModal">
        <h3>Introduce el nuevo mensaje</h3>
        <form
          @submit.prevent="
            createNewFlit(flitInfo);
            isOpen = false;
            flitInfo.message = '';
          "
        >
          <input
            type="text"
            placeholder="Mensaje Nuevo"
            v-model="flitInfo.message"
            required
          />
          <button type="submit">Crear Flit</button>
        </form>
      </GoModal>
    </div>
  </div>
  <GoBack />
</template>

<script>
import useFlits from "@/composables/useFlits"; 
import useUsers from "@/composables/useUsers";
import router from "@/router";
import { ref } from "vue"; 
import GoBack from "@/components/GoBack";
import GoModal from "@/components/GoModal";

export default {
  name: "testView",
  components: {
    GoBack,
    GoModal,
  },
  setup() {

    const message = ref({message: null}) 

    const { fetchFlits, createNewFlit } = useFlits();
    const { fetchUsers } = useUsers();
    const isOpen = ref(false);
    function goProfile() {
      router.push({ name: "profileView" });
    }

    let id_user = localStorage.getItem("selfUserId")
    console.log(id_user)

    const flitInfo = { 
      id_user: id_user,
      message: message}

    async function createAndRefreshFlits(flitInfo) { 
      await createNewFlit(flitInfo)
      await fetchFlits()

    }

    return {
      flitInfo, 
      fetchUsers,
      isOpen,
      goProfile,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
      /* createNewFlit, */
      fetchFlits,
      createAndRefreshFlits 
    };
  },
};
</script>

<style scoped>
.app-wraper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 40px;
}

.create-flit {
  display: flex;
  flex-direction: column;
}

input {
  padding: 5px 5px;
  margin: 10px;
  border-style: none;
  border: solid 0.8px #2c3e50;
  border-radius: 5px;
  color: #00172d;
}

button {
  padding: 5px 25px;
  margin-top: 15px;
  margin-bottom: 20px;
  border-style: none;
  border: solid 1px #00172d;
  border-radius: 6px;
  background-color: gray;
  font-size: 16px;
  font-weight: bolder;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
