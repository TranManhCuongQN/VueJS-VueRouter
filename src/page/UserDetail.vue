<template>
  <div class="container">
    <h1 class="text-center">detail user</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <img :src="userDetail.avatar" alt="" class="img-thumbnail" />
        </div>
        <div class="col-sm-7">
          <h3>
            Name:
            <span class="badge badge-info">
              {{ userDetail.name }}
            </span>
          </h3>
          <h3>
            Email:
            <span class="badge badge-info">
              {{ userDetail.email }}
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
  computed: {
    ...mapState({
      userDetail: (state) => state.userDetail,
    }),
  },
  methods: {
    ...mapActions({
      getUserById: "getUserByIdAction",
    }),
  },
  created() {
    this.getUserById(this.$route.params.userId);
  },
};
</script>

<style></style>
