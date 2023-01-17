<template>
  <h1 class="text-center text-primary">User List</h1>
  <div class="user-list">
    <div v-for="(user, index) in userList" :key="index" class="mb-2">
      <user-item :user="user" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("users");
import UserItem from "../components/UserItem.vue";
export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
  },
};
</script>

<style>
.user-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
