<template>
  <div>
    <HeaderView />
    <main>
      <div class="find">
        <nav>
          <ul class="find__menu">
            <li class="find__menu-id active">아이디(학번) 찾기</li>
            <li class="find__menu-ps">비밀번호 찾기</li>
          </ul>
        </nav>
        <section class="find_id">
          <article class="find_id_title">
            <div class="find_id_title-select">
              <h1>인증방식 선택</h1>
            </div>
            <hr />
            <div class="button_area">
              <router-link to="/find/id/email">
                <div
                  class="select_button"
                  id="email_button"
                  onmouseover="EmailHover();"
                  onmouseout="EmailOut();"
                >
                  <img
                    src="@/assets/images/icons/icon_email.png"
                    id="icon_email"
                  />
                  <h2 class="btn_title">이메일 인증</h2>
                  <h2 class="btn_text">
                    가입한 이메일로<br />본인인증을 진행합니다.
                  </h2>
                </div>
              </router-link>
              <div class="vertical_line"></div>
              <router-link to="/find/id/phone">
                <div
                  class="select_button"
                  id="phone_button"
                  onmouseover="PhoneHover();"
                  onmouseout="PhoneOut();"
                >
                  <img
                    src="@/assets/images/icons/icon_phone.png"
                    id="icon_phone"
                  />
                  <h2 class="btn_title">휴대폰 인증</h2>
                  <h2 class="btn_text">
                    휴대폰 번호로<br />본인인증을 진행합니다.
                  </h2>
                </div>
              </router-link>
              <div class="vertical_line"></div>
              <router-link to="/find/id/regist">
                <div
                  class="select_button"
                  id="info_button"
                  onmouseover="InfoHover();"
                  onmouseout="InfoOut();"
                >
                  <img
                    src="@/assets/images/icons/icon_info.png"
                    id="icon_info"
                  />
                  <h2 class="btn_title">등록정보 인증</h2>
                  <h2 class="btn_text">
                    이름과 생년월일로<br />본인인증을 진행합니다.
                  </h2>
                </div>
              </router-link>
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
import HeaderView from "@/components/auth/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style></style>
