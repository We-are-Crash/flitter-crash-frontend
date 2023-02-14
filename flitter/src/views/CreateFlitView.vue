<template>
  <div class="app-wraper">
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
          @click="createNewFlit(flitInfo)"
        />
      </div>
    </form>

    <!-- <div>
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
    </div> -->
  </div>
  <!-- <GoBack /> -->
</template>

<script>
import useFlits from "@/composables/useFlits"; 
// import router from "@/router";
import { ref } from "vue"; 
// import GoBack from "@/components/GoBack";

export default {
  name: "createFlitView",
  components: {
    // GoBack,
  },
  setup(){
    const message = ref({message: null}) 
    const { createNewFlit } = useFlits();

    let id_user = localStorage.getItem("selfUserId")

    const flitInfo = {
      id_user: id_user,
      message: message
  }

  return {
    flitInfo,
    createNewFlit
  }
}
}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  padding: 20px; 
  width: 300px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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
