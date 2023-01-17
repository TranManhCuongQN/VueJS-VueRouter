<template>
  <div>
    <h1 class="text-center text-primary">Pet List</h1>
    <div class="pet-list row">
      <div v-for="(pet, index) in petList" :key="index" class="col-lg-4 mb-2">
        <pet-item :pet="pet" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("pets");
import PetItem from "../components/PetItem.vue";
export default {
  components: {
    PetItem,
  },
  computed: {
    ...mapState({
      petList: (state) => state.petList,
    }),
  },
};
</script>

<style></style>
