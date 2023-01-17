<template>
  <div class="card" style="width: 18rem">
    <img :src="pet.image" alt="card-image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ pet.name }}</h5>
      <span class="badge badge-secondary">{{ pet.type }}</span>
      <p class="card-text">
        {{ pet.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pet: {
      type: Object,
    },
  },
};
</script>

<style></style>
