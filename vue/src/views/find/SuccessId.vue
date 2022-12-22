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
              <h1>아이디(학번)찾기 결과</h1>
            </div>
            <hr />
            <div class="result_area">
              <p>아이디(학번) 조회 결과입니다.</p>
              <div class="table_line_area">
                <div class="table_line" id="table_top">
                  <div class="table_value_top" id="table_num">순서</div>
                  <div class="table_value_top" id="table_date">가입일</div>
                  <div class="table_value_top" id="table_id">아이디(학번)</div>
                  <div class="table_value_top" id="table_name">이름</div>
                  <div class="table_value_top" id="table_birth">생년월일</div>
                </div>
              </div>
              <div class="table_line_area">
                <div class="table_line">
                  <div class="table_value" id="table_num">-</div>
                  <div class="table_value" id="table_date">-</div>
                  <div class="table_value" id="table_id">-</div>
                  <div class="table_value" id="table_name">-</div>
                  <div class="table_value" id="table_birth">-</div>
                </div>
              </div>
              <div class="find_menu_btn_area">
                <router-link to="/">
                  <div class="btn_normal">
                    <p>로그인</p>
                  </div>
                </router-link>
                <router-link to="/find/password">
                  <div class="btn_reverse">
                    <p>비밀번호 찾기</p>
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
