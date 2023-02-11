<template>
  <div></div>
  <div v-if="isLoading">
    <div>Cargando...</div>
  </div>
  <div v-else>
    <div class="user-card">
      <img class="user-background" src="../assets/user-bg.jpg" />

      <div class="user-info">
        <div class="avatar-and-follow-btn">
          <img
            class="avatar"
            src="../assets/flitterLogo2-removebg-preview.png"
          />
          <button>Follow</button>
        </div>
        <h1>{{ selectedUser.name }}</h1>
        <p class="bio">
          Hardcoded bio Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <div class="follow-count">
          <p><span>21</span> following</p>
          <p><span>12</span> followers</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useUsers from "@/composables/useUsers";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "selectedUserView",
  components: {},

  setup() {
    const route = useRoute();

    const id = route.params.id;

    const { selectedUser, fetchSelectedUser, isLoading } = useUsers();

    console.log("Hola");

    fetchSelectedUser(id);
    console.log("Usuario", selectedUser);

    return { selectedUser, isLoading };
  },
});
</script>

<style scoped>
.user-card {
  background-color: rgb(246, 245, 240);
  display: flex;
  flex-direction: column;
}
.user-background {
  max-height: 150px;
}
.user-info {
  min-height: 200px;
  padding: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
}

.avatar-and-follow-btn {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
}

.avatar {
  width: 60px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.533);
}

button {
  background: none;
  border: 1px solid rgb(103, 103, 103);
  border-radius: 15px;
  color: rgb(47, 47, 47);
  cursor: pointer;

  padding: 5px 15px;
}

button:active,
button:hover {
  color: white;
  background-color: rgb(52, 52, 52);
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.bio {
  font-size: 16px;
  margin-bottom: 18px;
}

.follow-count {
  display: flex;
  justify-content: space-around;
}
.follow-count p {
  font-size: 14px;
}

.follow-count span {
  font-size: 16px;
  font-weight: bold;
}
</style>
