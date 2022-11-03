<template>
  <div>
    <HeaderView />
    <main>
      <section class="find">
        <nav>
          <ul class="find__menu">
            <li class="find__menu-id">아이디(학번) 찾기</li>
            <li class="find__menu-ps active">비밀번호 찾기</li>
          </ul>
        </nav>
        <article class="find__password">
          <h1>인증방식 선택</h1>
          <div>
            <hr />
            <div class="authentication">
              <router-link to="/find/password/email">
                <div class="authentication__form">
                  <img
                    src="@/assets/images/icons/icon_email.png"
                    alt=""
                    class="authentication__form--black"
                  />
                  <img
                    src="@/assets/images/icons/icon_email_hover.png"
                    alt=""
                    class="authentication__form--blue"
                  />
                  <div>
                    <h1>이메일 인증</h1>
                    <p>가입한 이메일로 <br />본인인증을 진행합니다.</p>
                  </div>
                </div>
              </router-link>

              <div class="authentication__form--contour"></div>

              <router-link to="/find/password/phone">
                <div class="authentication__form">
                  <img
                    src="@/assets/images/icons/icon_phone.png"
                    alt=""
                    class="authentication__form--black"
                  />
                  <img
                    src="@/assets/images/icons/icon_phone_hover.png"
                    alt=""
                    class="authentication__form--blue"
                  />
                  <div>
                    <h1>휴대폰 인증</h1>
                    <p>휴대폰 번호로 <br />본인인증을 진행합니다.</p>
                  </div>
                </div>
              </router-link>
            </div>
            <hr />
          </div>
        </article>
      </section>
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
