<template>
  <div>
    <HeaderView />
    <main>
      <div class="notice_adm_container">
        <div class="notice_adm_navbar">
          <div class="notice_adm_nav__menu">
            <ul>
              <router-link to="/admin/resume">
                <li class="adm_nav__menu--li">
                  <img
                    src="@/assets/images/icons/menuIcon_user.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_user_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  <p>관리자 페이지</p>
                </li>
              </router-link>
              <router-link to="/success">
                <li class="adm_nav__menu--li">
                  <img
                    src="@/assets/images/icons/menuIcon_search.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_search_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  <p>합격자 조회</p>
                </li>
              </router-link>
              <router-link to="/admin/notice">
                <li class="adm_nav__menu--li active">
                  <img
                    src="@/assets/images/icons/menuIcon_notice.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_notice_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  <p>면접 공지</p>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <section class="notice_adm">
          <article class="notice_adm__write">
            <div class="notice_adm__write-title">
              <h1>글쓰기</h1>
              <!-- <button>불러오기</button> -->
            </div>
            <hr />
            <div class="notice_adm_write-content">
              <textarea id="title" type="text" placeholder="글제목"></textarea>
              <textarea id="content" type="text" placeholder="내용"></textarea>
            </div>
            <div class="notice_adm_write-applybutton">
              <div class="notice_adm_write-applybutton-begin">
                <p>모집 시작일시</p>
                <input id="begin" type="datetime-local" />
              </div>
              <div class="notice_adm_write-applybutton-deadline">
                <p>모집 마감일시</p>
                <input id="deadline" type="datetime-local" />
              </div>
            </div>
            <div class="notice_adm_write-filebutton">
              <label for="input-file">파일 첨부</label>
              <input type="file" id="input-file" style="display: none" />
            </div>
            <div class="notice_adm_write-button">
              <button>업로드</button>
              <button>
                <router-link to="/admin/notice">취소</router-link>
              </button>
            </div>
            <hr />
          </article>
        </section>
      </div>
    </main>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style>
.notice_adm_write-content textarea:nth-child(2) {
  height: 550px;
}

.notice_adm_write-applybutton {
  display: flex;
  justify-content: center;
  padding: 30px 10px;
}
.notice_adm_write-applybutton p {
  float: left;
}
.notice_adm_write-applybutton-begin {
  /* margin-right: 80px; */
  font-size: 18px;
}
.notice_adm_write-applybutton-begin input {
  height: 35px;
}
.notice_adm_write-applybutton-deadline {
  /* margin-left: 80px; */
  font-size: 18px;
}
.notice_adm_write-applybutton-deadline input {
  height: 35px;
}
</style>
