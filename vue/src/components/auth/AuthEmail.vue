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
              <h1>이메일 인증</h1>
            </div>
            <hr />
            <div class="email_area">
              <p>이메일 입력 후 인증번호를 입력하세요.</p>
              <div class="input_area" id="input_area_top">
                <input type="text" class="input_email" />
                <div class="input_value_btn">인증번호 발송</div>
              </div>
              <div class="input_area">
                <input type="text" class="input_prove_number" />
                <input type="text" class="input_prove_number" />
                <input type="text" class="input_prove_number" />
                <input type="text" class="input_prove_number" />
                <input type="text" class="input_prove_number" />
                <input type="text" class="input_prove_number" />
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
