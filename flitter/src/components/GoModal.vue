<template>
  <div class="modal">
    <div class="modal-background">
      <div class="modal-container">
        <h1>Lets flit around </h1>
        <form id="flitForm">
          <label for="">Type your flit ☺️</label>
          <textarea
          type="text"
          required>
          </textarea>
          <button class="closeModal" @click="togglePopup()">
            close
          </button>
          <button type="submit" value="Crear flit" @click="createAndRefreshFlits(flitInfo)">Flit it!</button>
          </form>
      </div>
    </div>
  </div>
</template>


<script>

import useFlits from '@/composables/useFlits';
import { ref } from 'vue';

export default {
  props: ['togglePopup'],

  setup() {
    const message = ref({message: null})

    const { fetchFlits, createNewFlit } = useFlits()

    let id_user = localStorage.getItem("selfUserId")

    const flitInfo = { 
      id_user: id_user,
      message: message}

    async function createAndRefreshFlits(flitInfo) { 
      await createNewFlit(flitInfo)
      await fetchFlits()
    }

    return { 
      flitInfo, 
      createAndRefreshFlits 
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
textarea{
  padding: 5px 5px;
  border-style: none;
  border: solid 0.8px #2c3e50;
  border-radius: 5px;
  color: #00172d;
  width: 90%;
  align-self: center;
  height: 60%;
}
label{
  align-self: flex-start;
}

form{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}


button {
    width: 80%;
    align-self: center;
    padding: 5px;
    margin-top: 10px;
    border: solid 1px #00172d;
    border-radius: 6px;
    background-color: unset;
    font-size: 16px;
    font-weight: bolder;
    color: #00172d;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>