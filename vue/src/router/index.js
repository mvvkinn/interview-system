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
    path: "/mypage/resume/list",
    name: "mypage_resume_list",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/resume/ListView.vue"
      ),
  },
  {
    path: "/mypage/resume/detail",
    name: "mypage_resume_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/resume/DetailView.vue"
      ),
  },
  {
    path: "/mypage/resume/detail/:id",
    name: "mypage_resume_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/resume/DetailView.vue"
      ),
  },
  {
    path: "/mypage/interview",
    name: "mypage_apply",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/interview/ListView.vue"
      ),
  },
  {
    path: "/mypage/interview/detail/:number",
    name: "mypage_apply_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/mypage/interview/DetailView.vue"
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
        /* webpackChunkName: "about" */ "../views/mypage/changeinfo/ChangeInfo.vue"
      ),
  },
  // notice
  {
    path: "/notice",
    name: "notice_list",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/notice/ListView.vue"),
  },
  {
    path: "/notice/detail/:id",
    name: "notice_detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/notice/DetailView.vue"),
  },
  {
    path: "/notice/detail/:id/apply",
    name: "notice_apply",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/notice/interview/ApplyView.vue"
      ),
  },
  {
    path: "/notice/apply/success",
    name: "notice_apply_success",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/notice/interview/ApplySuccess.vue"
      ),
  },
  {
    path: "/notice/detail/:id/modal",
    name: "notice_view_myResumeList",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/notice/interview/SelectResume.vue"
      ),
  },
  {
    path: "/notice/detail/modal/resume/:id",
    name: "notice_view_myResumeList_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/notice/interview/ResumePriview.vue"
      ),
  },
  // passcheck
  {
    path: "/passcheck",
    name: "passcheck_search",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/passcheck/SearchView.vue"
      ),
  },
  {
    path: "/passcheck/result/:id",
    name: "passcheck_result",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/passcheck/InterviewResult.vue"
      ),
  },
  // admin
  {
    path: "/admin/notice",
    name: "admin_notice_list",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/notice/ListView.vue"
      ),
  },
  {
    path: "/admin/notice/detail/:id",
    name: "admin_notice_list",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/notice/DetailView.vue"
      ),
  },
  {
    path: "/admin/notice/write",
    name: "admin_notice_write",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/notice/WriteView.vue"
      ),
  },
  {
    path: "/admin/notice/detail/:id/amend",
    name: "admin_notice_amend",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/notice/AmendView.vue"
      ),
  },
  {
    path: "/admin/resume",
    name: "admin_interview",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/resume/SearchInterview.vue"
      ),
  },
  {
    path: "/admin/resume/:interviewId/list",
    name: "admin_interview_resume",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/resume/ListView.vue"
      ),
  },
  {
    path: "/admin/resume/:interviewId/list/:resumeId/detail",
    name: "admin_interview_resume_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/resume/DetailView.vue"
      ),
  },
  {
    path: "/admin/progress",
    name: "admin_interview_progress",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/progress/SearchInterview.vue"
      ),
  },
  {
    path: "/admin/progress/:interviewId/list",
    name: "admin_interview_progress_list",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/progress/ListView.vue"
      ),
  },
  {
    path: "/admin/progress/:interviewId/list/:number/:roomName",
    name: "admin_interview_progress_evaluation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VideoMeeting.vue"),
  },
  {
    path: "/admin/content",
    name: "admin_interview_content",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/content/SearchInterview.vue"
      ),
  },
  {
    path: "/admin/content/:interviewId/list",
    name: "admin_interview_content_list",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/content/ListView.vue"
      ),
  },
  {
    // path: "/admin/content/:interviewId/list/:number/detail",
    path: "/admin/content/:interviewId/list/:roomName/detail",
    name: "admin_interview_content_detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/admin/content/InterviewView.vue"
      ),
  },
  {
    path: "/meeting/:roomName",
    name: "video_meeting",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VideoMeeting.vue"),
  },
  // {
  //   path: "/meeting/offLine",
  //   name: "offLine_meeting",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ "../views/admin/content/InterviewView.vue"
  //     ),
  // },
  {
    path: "/offline/:roomName",
    name: "offLine_meeting",
    component: () => import("../views/admin/progress/InterviewEvaluation.vue"),
  },
  {
    path: "/:interviewId/list/:number/:roomName",
    name: "admin_interview_progress_evaluation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VideoMeeting.vue"),
  },
  {
    path: "/qrcode/resume/:id",
    name: "admin_interview_progress_evaluation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/QrcodeResume.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
