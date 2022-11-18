<template>
  <header class="header">
    <div class="header__column">
      <div class="header__logo">
        <div class="header__logo--image">
          <router-link :to="`${main}`">
            <img src="@/assets/images/logo4.png" alt="" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="header__column">
      <nav>
        <ul class="header__menu">
          <li>안녕하세요, {{ user.name }}님.</li>
          <li>
            <div class="header__menu-logout">
              <router-link :to="`/`">
                <button>로그아웃</button>
              </router-link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user", "Token"]),
    main() {
      return this.Token ? "/main" : "/";
    },
  },
};
</script>

<style></style>
