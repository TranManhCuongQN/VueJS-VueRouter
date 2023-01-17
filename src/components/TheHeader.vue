// The giúp cho bạn biết được component này chỉ xuất hiện 1 lần trên 1 trang (có
thể xuất hiện được nhiều trang)
<template>
  <nav class="p-3 mb-2 bg-dark text-white">
    <ul class="d-flex justify-content-center align-items-center">
      <li>
        <router-link class="mx-3" :to="{ name: 'user-list' }"
          >Users</router-link
        >
      </li>
      <li>
        <router-link class="mx-3" to="/pets">Pets</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style: none;
}
a {
  display: block;
  padding: 5px 15px;
  color: unset;
}
a:hover {
  color: red;
}
.active {
  color: red;
  border-bottom: 2px solid red;
}
</style>
