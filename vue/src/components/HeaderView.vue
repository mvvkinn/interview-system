<template>
  <header>
    <div class="header__column">
      <div class="header__logo">
        <div class="header__logo--image">
          <router-link :to="`/main`">
            <img id="header_logoImg" src="@/assets/images/logo4.png" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="header__column">
      <div class="header__title">
        <h1>{{ title }}</h1>
      </div>
    </div>

    <div class="header__column">
      <nav>
        <ul class="header__menu">
          <li>안녕하세요,</li>
          <li>{{ name }}님,</li>
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
  data() {
    return {
      name: "",
      role: "",
      title: "",
    };
  },
  computed: {
    ...mapState(["user", "Token"]),
  },
  created() {
    this.name = JSON.parse(localStorage.getItem("user")).name;
    this.role = JSON.parse(localStorage.getItem("user")).role;
    if (this.role === "user") {
      this.title = "마이페이지";
    } else {
      this.title = "면접관페이지";
    }
  },
};
</script>

<style></style>
