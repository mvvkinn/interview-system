import Vue from "vue";
import VueRouter from "vue-router";
import MainLogin from "../views/main/MainLogin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainLogin",
    component: MainLogin,
  },
  {
    path: "/main",
    name: "main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/main/MainView.vue"),
  },
  {
    path: "/joinus",
    name: "joinus",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/joinus/PrivacyPolicy.vue"
      ),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/joinus/SignUp.vue"),
  },
  {
    path: "/signup/success",
    name: "signup_success",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/joinus/SignUpSuccess.vue"
      ),
  },
  {
    path: "/find/id",
    name: "find_id",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/find/FindId.vue"),
  },
  {
    path: "/find/id/email",
    name: "find_id_email",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/auth/AuthEmail.vue"
      ),
  },
  {
    path: "/find/id/phone",
    name: "find_id_phone",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/auth/AuthPhone.vue"
      ),
  },
  {
    path: "/find/id/regist",
    name: "find_id_regist",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/auth/AuthRegist.vue"
      ),
  },
  {
    path: "/find/id/success",
    name: "find_id_success",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/find/SuccessId.vue"),
  },
  {
    path: "/find/password",
    name: "find_password",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/find/FindPassword.vue"),
  },
  {
    path: "/find/password/auth",
    name: "find_password_auth",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/find/AuthPassword.vue"),
  },
  {
    path: "/find/password/email",
    name: "find_password_email",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/auth/AuthEmail.vue"
      ),
  },
  {
    path: "/find/password/phone",
    name: "find_password_phone",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/auth/AuthPhone.vue"
      ),
  },
  {
    path: "/find/password/success",
    name: "find_password_success",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/find/SuccessPassword.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
