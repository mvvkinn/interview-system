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
        <article class="find__password find__success">
          <div>
            <div class="find__password-form">
              <img src="@/assets/images/logo1.png" alt="" />
              <h1>비밀번호변경 완료</h1>
              <p>비밀번호 변경이 완료되었습니다.</p>
              <router-link to="/">
                <button>홈으로</button>
              </router-link>
            </div>
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
