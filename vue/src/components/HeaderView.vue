<template>
  <header>
    <div class="header__column">
      <div class="header__logo">
        <div class="header__logo--image">
          <router-link :to="`/main`">
            <img src="@/assets/images/logo4.png" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="header__column">
      <div class="header__title">
        <h1>마이페이지</h1>
      </div>
    </div>

    <div class="header__column">
      <nav>
        <ul class="header__menu">
          <li>안녕하세요,</li>
          <li>{{ user.name }}님,</li>
          <router-link :to="`/`">
            <li class="component__header-menu--button">로그아웃</li>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user", "token"]),
  },
};
</script>

<style></style>
