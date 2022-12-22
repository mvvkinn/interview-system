<template>
  <div>
    <HeaderView />
    <main>
      <div class="container-joinus">
        <section class="joinUs">
          <article class="joinUs_title">
            <div class="join_us_finish_area">
              <img src="@/assets/images/logo1.png" alt="" />
              <p class="join_us_finish_text_1">감사합니다</p>
              <p class="join_us_finish_text_2">회원가입이 완료되었습니다.</p>
            </div>
            <div class="joinUs_btn_area">
              <router-link to="/">
                <div class="next_btn">
                  <p>홈으로</p>
                </div>
              </router-link>
            </div>
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
