import UserList from "../src/page/UserList.vue";
import PetList from "../src/page/PetList.vue";
import UserDetail from "../src/page/UserDetail.vue";
import NotFound from "../src/page/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // { path: "/", redirect: "/users" },
  // alias thêm đương dẫn mới nếu "/" thì cũng vào UserList
  { path: "/users", component: UserList, alias: "/", name: "user-list" },
  { path: "/pets", component: PetList },

  // nó hiểu cái đoạn sau user-detail sẽ là 1 cái id của user
  { path: "/user-detail/:userId", component: UserDetail, name: "user-detail" },

  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass định nghĩa class là active
  linkActiveClass: "active",
});

export default router;
