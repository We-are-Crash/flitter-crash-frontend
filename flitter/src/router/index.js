import { createRouter, createWebHashHistory } from "vue-router";
import haveRoleGuard from './role-guards';

const routes = [
  {
    path: "/",
    name: "flitsView",
    component: () =>
      import(/* webpackChunkName: "flitsView" */ "../views/FlitsView.vue"),
  },
  {
    path: "/signup",
    name: "signupView",
    component: () =>
      import(/* webpackChunkName: "signupView" */ "../views/SignupView.vue"),
  },

  {
    path: "/login",
    name: "loginView",
    component: () =>
      import(/* webpackChunkName: "loginView" */ "../views/LoginView.vue"),
  },
  {
    path: "/test",
    name: "testView",
    component: () =>
      import(/* webpackChunkName: "testView" */ "../views/TestView.vue"),
  },
  {
    path: "/create-flit",
    name: "createFlitView",
    component: () =>
      import(/* webpackChunkName: "createFlitView" */ "../views/CreateFlitView.vue"),
  },
  {
    path: "/flit-details/:id",
    name: "flitDetailView",
    component: () => import("../views/FlitDetailView.vue"),
    props: (route) => {
      const id = route.params.id;
      return id;
    },
  },
  {
    path: "/user-profile/:id",
    name: "selectedUserView",
    beforeEnter: [haveRoleGuard],
    component: () => import("../views/SelectedUserView.vue"),
    props: (route) => {
      const id = route.params.id;
      return id;
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
