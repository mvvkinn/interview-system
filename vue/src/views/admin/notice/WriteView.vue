vu
<template>
  <div>
    <HeaderView />
    <main>
      <div class="notice_adm_container">
        <div class="notice_adm_navbar">
          <div class="notice_adm_nav__menu">
            <ul>
              <li>
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
                <p>관리자페이지</p>
              </li>
              <li>
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
              <li class="active">
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
            </ul>
          </div>
        </div>
        <section class="notice_adm">
          <article class="notice_adm__write">
            <div class="notice_adm__write-title">
              <h1>글쓰기</h1>
              <button>불러오기</button>
            </div>
            <hr />
            <div class="notice_adm_write-content">
              <textarea id="title" type="text" placeholder="글제목"></textarea>
              <textarea
                id="interview_title"
                type="text"
                placeholder="면접명"
              ></textarea>
              <textarea id="content" type="text" placeholder="내용"></textarea>
            </div>
            <div class="notice_adm_write-filebutton">
              <label for="input-file">파일 첨부</label>
              <input type="file" id="input-file" style="display: none" />
            </div>
            <div class="notice_adm_write-button">
              <button>업로드</button>
              <button>임시저장</button>
              <button>취소</button>
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

<style></style>
