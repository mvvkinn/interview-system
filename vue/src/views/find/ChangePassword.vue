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
        <article class="find__password new">
          <h1>새 비밀번호 입력</h1>
          <div>
            <hr />
            <div class="find__password-form">
              <p>변경할 비밀번호를 입력해주세요.</p>
              <input type="password" placeholder="비밀번호" />
              <input type="password" placeholder="비밀번호 확인" />
              <router-link to="/find/password/success">
                <button>변경하기</button>
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
