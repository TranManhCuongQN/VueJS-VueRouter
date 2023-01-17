<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<template>
  <div>
    <header>
      <the-header></the-header>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped></style>
