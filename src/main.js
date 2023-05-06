import { createWebHistory, createRouter } from "vue-router";
import allUsers from "./Pages/allusers.vue";
import userDetails from "./Pages/userdetails.vue";
import editUser from "./Pages/edituser.vue";
import addUser from "./Pages/adduser.vue";
import error from "./Pages/error.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createApp } from "vue";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: allUsers,
    alias: "/users", //to make two paths
  },
  {
    path: "/users/:id",
    component: userDetails,
  },
  {
    path: "/edit/:id",
    component: editUser,
  },
  {
    path: "/add",
    component: addUser,
  },
  {
    path: "/:NotFound(.*)*",
    component: error,
    meta: { hideNavbar: true }, //meta is for hide navBar when it navigate to error page
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
