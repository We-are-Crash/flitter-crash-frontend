<template>
  <div class="title">
    <h1>Flits</h1>
    <div class="modal-container" v-if="token">
      <form id="flitForm">
        <textarea
          type="text"
          required
          placeholder="Type your flit ☺️"
        ></textarea>
        <!-- <button class="closeModal" @click="togglePopup()">close</button> -->
        <button
          type="submit"
          value="Crear flit"
          @click="createAndRefreshFlits(flitInfo)"
        >
          Flit it!
        </button>
      </form>
    </div>
  </div>
  <div class="flitList-main-wraper">
    <div v-if="isLoading">Cargando...</div>
    <div class="flits-list" v-else>
      <FlitCard
        v-for="flit in flits"
        :key="flit._id"
        :flit="flit"
        @goUserProfile="goUserProfile(flit)"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useFlits from "@/composables/useFlits";
import FlitCard from "@/components/FlitCard.vue";
import router from "@/router";

export default defineComponent({
  name: "flitsView",
  components: {
    FlitCard,
  },

  setup() {
    const { flits, isLoading, fetchFlits, fetchFollowedPeopleFlits } =
      useFlits();

    const token = localStorage.getItem("token");

    if (token) {
      fetchFollowedPeopleFlits(token);
    } else {
      fetchFlits();
    }

    function goUserProfile(flit) {
      const id = flit.id_user._id;
      router.push({ name: "selectedUserView", params: { id } });
    }

    return {
      isLoading,
      flits,
      token,
      goUserProfile,
    };
  },
});
</script>

<style scoped>
h1 {
  margin-top: 70px;
  margin-bottom: 20px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flitList-main-wraper {
  display: flex;
  justify-content: center;
}

.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.372);
  padding: 20px;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
textarea {
  margin-top: 15px;
  padding: 0 35px 45px;
  border-style: none;
  border: solid 0.8px #2c3e50;
  border-radius: 5px;
  color: #00172d;
  background-color: rgba(255, 255, 255, 0.548);

  align-self: center;
}
label {
  align-self: flex-start;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

button {
  width: 70%;
  align-self: center;
  padding: 5px;
  border: solid 1px #00172d;
  border-radius: 6px;
  background-color: unset;
  font-size: 16px;
  font-weight: bolder;
  color: #00172d;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
}
</style>
