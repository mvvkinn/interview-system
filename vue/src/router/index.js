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
  // find_id
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
  // find_password
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
  // mypage
  {
    path: "/mypage/resume",
    name: "mypage_resume",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/resume/RegistResume.vue"
      ),
  },
  {
    path: "/mypage/apply",
    name: "mypage_apply",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/interview/MyApplyInterview.vue"
      ),
  },
  {
    path: "/mypage/apply/detail",
    name: "mypage_apply_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/interview/MyApplyInterviewDetail.vue"
      ),
  },
  {
    path: "/mypage/changeinfo",
    name: "mypage_changeinfo",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/changeinfo/EnterPassword.vue"
      ),
  },
  {
    path: "/mypage/changeinfo/personal",
    name: "mypage_changeinfo_personal",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/changeinfo/ChangeInformation.vue"
      ),
  },
  // notice
  {
    path: "/notice",
    name: "notice_list",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/notice/NoticeList.vue"),
  },
  {
    path: "/notice/detail",
    name: "notice_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/notice/NoticeDetail.vue"
      ),
  },
  {
    path: "/notice/apply",
    name: "notice_apply",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/notice/interview/InterviewApply.vue"
      ),
  },
  {
    path: "/notice/apply/success",
    name: "notice_apply_success",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/notice/interview/InterviewApplySuccess.vue"
      ),
  },
  // success
  {
    path: "/success",
    name: "success_search",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/success/SelectSuccess.vue"
      ),
  },
  {
    path: "/success/result",
    name: "success_result",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/success/InterviewResult"
      ),
  },
  // admin
  {
    path: "/admin/notice",
    name: "admin_notice_list",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/notice/NoticeList.vue"
      ),
  },
  {
    path: "/admin/notice/write",
    name: "admin_notice_write",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/notice/NoticeWrite.vue"
      ),
  },
  {
    path: "/admin",
    name: "admin_interview",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/resume/SelectInterview.vue"
      ),
  },
  {
    path: "/admin/resume",
    name: "admin_interview_resume",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/resume/ResumeList.vue"
      ),
  },
  {
    path: "/admin/resume/detail",
    name: "admin_interview_resume_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/resume/ResumeDetail.vue"
      ),
  },
  {
    path: "/admin/progress",
    name: "admin_interview_progress",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/progress/SelectInterview.vue"
      ),
  },
  {
    path: "/admin/progress/list",
    name: "admin_interview_progress_list",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/progress/ProgressList.vue"
      ),
  },
  {
    path: "/admin/progress/evaluation",
    name: "admin_interview_progress_evaluation",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/progress/InterviewEvaluation.vue"
      ),
  },
  {
    path: "/admin/content",
    name: "admin_interview_content",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/content/SelectInterview.vue"
      ),
  },
  {
    path: "/admin/content/list",
    name: "admin_interview_content_list",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/content/ContentList.vue"
      ),
  },
  {
    path: "/admin/content/detail",
    name: "admin_interview_content_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/content/ContentDetail.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
