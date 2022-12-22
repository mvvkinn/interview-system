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
              <h1>휴대폰 인증</h1>
            </div>
            <hr />
            <router-link to="/find/id/success">
              <div class="button_area">
                <div
                  class="prove_phone_button"
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
                    휴대폰 번호 입력 후<br />인증번호를 입력하세요.
                  </h2>
                </div>
              </div>
            </router-link>
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
