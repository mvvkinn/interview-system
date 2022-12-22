<template>
  <div class="main_body">
    <HeaderView />
    <main>
      <section class="main-view" v-if="role === 'user'">
        <div class="main-view__column">
          <router-link to="/notice">
            <div class="main-view__column-content">
              <img
                id="content_img"
                src="@/assets/images/icons/icon_notice.png"
                alt=""
              />
              <div class="main-view__column-content-text">
                <h1>공지사항</h1>
                <h2>NOTICE</h2>
                <div class="main-view__column-content-tag">
                  <span>#오늘의 공지</span>
                  <span>#필수확인</span>
                  <span>#대학공지</span>
                </div>
              </div>
            </div>
            <div class="main-view__column-out-1"></div>
            <div class="main-view__column-in-1"></div>
            <div class="main-view__column-out-2"></div>
            <div class="main-view__column-in-2"></div>
            <div class="main-view__column-left-corner-1"></div>
            <div class="main-view__column-left-corner-2"></div>
            <div class="main-view__column-right-corner-1"></div>
            <div class="main-view__column-right-corner-2"></div>
            <div class="main-view__column-left-box"></div>
            <div class="main-view__column-right-box"></div>
          </router-link>
        </div>
        <div class="main-view__column">
          <router-link to="/mypage/resume">
            <div class="main-view__column-content">
              <img
                id="content_img"
                src="@/assets/images/icons/icon_mypage.png"
                alt=""
              />
              <div class="main-view__column-content-text">
                <h1>마이페이지</h1>
                <h2>MY PAGE</h2>
                <div class="main-view__column-content-tag">
                  <span>#내_이력서</span>
                  <span>#내_면접</span>
                  <span>#개인정보_변경</span>
                </div>
              </div>
            </div>
            <div class="main-view__column-out-1"></div>
            <div class="main-view__column-in-1"></div>
            <div class="main-view__column-out-2"></div>
            <div class="main-view__column-in-2"></div>
            <div class="main-view__column-left-corner-1"></div>
            <div class="main-view__column-left-corner-2"></div>
            <div class="main-view__column-right-corner-1"></div>
            <div class="main-view__column-right-corner-2"></div>
            <div class="main-view__column-left-box"></div>
            <div class="main-view__column-right-box"></div>
          </router-link>
        </div>
        <div class="main-view__column">
          <router-link to="/passcheck">
            <div class="main-view__column-content">
              <img
                id="content_img"
                src="@/assets/images/icons/icon_lookup.png"
                alt=""
              />
              <div class="main-view__column-content-text">
                <h1>합격자조회</h1>
                <h2>LOOK UP</h2>
                <div class="main-view__column-content-tag">
                  <span>#면접결과</span>
                  <span>#두근두근</span>
                  <span>#후회는_없다</span>
                </div>
              </div>
            </div>
            <div class="main-view__column-out-1"></div>
            <div class="main-view__column-in-1"></div>
            <div class="main-view__column-out-2"></div>
            <div class="main-view__column-in-2"></div>
            <div class="main-view__column-left-corner-1"></div>
            <div class="main-view__column-left-corner-2"></div>
            <div class="main-view__column-right-corner-1"></div>
            <div class="main-view__column-right-corner-2"></div>
            <div class="main-view__column-left-box"></div>
            <div class="main-view__column-right-box"></div>
          </router-link>
        </div>
      </section>
      <section class="main-view" v-else>
        <div class="main-view__column">
          <router-link to="/admin/notice">
            <div class="main-view__column-content">
              <img
                id="content_img"
                src="@/assets/images/icons/icon_notice.png"
                alt=""
              />
              <div class="main-view__column-content-text">
                <h1>공지사항</h1>
                <h2>NOTICE</h2>
                <div class="main-view__column-content-tag">
                  <span>#오늘의 공지</span>
                  <span>#필수확인</span>
                  <span>#대학공지</span>
                </div>
              </div>
            </div>
            <div class="main-view__column-out-1"></div>
            <div class="main-view__column-in-1"></div>
            <div class="main-view__column-out-2"></div>
            <div class="main-view__column-in-2"></div>
            <div class="main-view__column-left-corner-1"></div>
            <div class="main-view__column-left-corner-2"></div>
            <div class="main-view__column-right-corner-1"></div>
            <div class="main-view__column-right-corner-2"></div>
            <div class="main-view__column-left-box"></div>
            <div class="main-view__column-right-box"></div>
          </router-link>
        </div>
        <div class="main-view__column">
          <router-link to="/admin/resume">
            <div class="main-view__column-content">
              <img
                id="content_img"
                src="@/assets/images/icons/icon_mypage.png"
                alt=""
              />
              <div class="main-view__column-content-text">
                <h1>면접관페이지</h1>
                <h2>ADMIN PAGE</h2>
                <div class="main-view__column-content-tag">
                  <span>#관리자</span>
                  <span>#지원자 조회</span>
                  <span>#면접 조회</span>
                </div>
              </div>
            </div>
            <div class="main-view__column-out-1"></div>
            <div class="main-view__column-in-1"></div>
            <div class="main-view__column-out-2"></div>
            <div class="main-view__column-in-2"></div>
            <div class="main-view__column-left-corner-1"></div>
            <div class="main-view__column-left-corner-2"></div>
            <div class="main-view__column-right-corner-1"></div>
            <div class="main-view__column-right-corner-2"></div>
            <div class="main-view__column-left-box"></div>
            <div class="main-view__column-right-box"></div>
          </router-link>
        </div>
      </section>
    </main>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/main/HeaderView.vue";
import FooterView from "@/components/main/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      role: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    const role = JSON.parse(localStorage.getItem("user")).role;
    switch (role) {
      case "user":
        next((vm) => {
          vm.role = role;
        });
        break;
      case "recruiter":
        next((vm) => {
          vm.role = role;
        });
        break;
      case "admin":
        next((vm) => {
          vm.role = role;
        });
        break;
    }
  },
};
</script>

<style scoped>
template {
  height: 99vh;
  background-color: white;
}
</style>
