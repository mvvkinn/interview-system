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
          <h1>아이디 입력</h1>
          <div>
            <hr />
            <div class="find__password-form">
              <p>비밀번호를 찾고자 하는 아이디를 입력해주세요.</p>
              <input type="text" placeholder="아이디를 입력하세요." />
              <router-link to="/find/password/auth">
                <button>아이디 확인</button>
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
