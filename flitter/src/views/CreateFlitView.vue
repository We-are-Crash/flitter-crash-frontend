<template>
<div class="modal">
    <div class="modal-background">
      <div class="modal-container">
        <form id="flitForm">
        <h1>Let's flit arround </h1>
          <textarea
          placeholder="What is happening?"
          type="text"
          autofocus
          v-model="flitInfo.message"
          required>
          </textarea>
          <button type="submit" @click="createNewFlit(flitInfo)">Flit it!</button>
          <GoBack />
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import useFlits from "@/composables/useFlits"; 
import { ref } from "vue"; 
import GoBack from "@/components/GoBack";

export default {
  name: "createFlitView",
  components: {
    GoBack,
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
.modal-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      background-color: rgba(0, 0, 0, 0.5);
      align-items: center;
      justify-content: center;
  }

.modal-container {
  display: flex;
  align-self: baseline;
  justify-content: space-evenly;
  background-color: white;
  padding: 20px;
  margin-top: 90px;
  width: 350px;
  height: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

h1{
  margin: 0;
}

form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.create-flit {
  display: flex;
  flex-direction: column;
}

textarea{
  padding: 5px;
  border-style: none;
  border: solid 0.8px #2c3e50;
  border-radius: 5px;
  color: #00172d;
  width: 90%;
  align-self: center;
  height: 60%;
}

button {
  width: 80%;
  align-self: center;
  padding: 5px;
  margin-top: 10px;
  border: solid 1px #00172d;
  border-radius: 6px;
  background-color: unset;
  font-size: 20px;
  font-weight: bolder;
  color: #00172d;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
}
</style>
