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
              <h1>등록정보 인증</h1>
            </div>
            <hr />
            <div class="email_area">
              <p>등록된 사용자 정보를 입력해주세요.</p>
              <div class="input_area" id="input_area_top">
                <input type="text" class="input_info" placeholder="성명" />
              </div>
              <div class="input_area">
                <input
                  type="text"
                  class="input_info"
                  placeholder="생년월일  예)20220101"
                />
              </div>
              <div class="find_menu_btn_area">
                <router-link to="/find/id/success">
                  <div class="btn_normal">
                    <p>인증하기</p>
                  </div>
                </router-link>
              </div>
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
