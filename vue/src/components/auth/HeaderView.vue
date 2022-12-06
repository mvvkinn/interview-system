<template>
  <header>
    <div class="header__column">
      <div class="header__logo">
        <div class="header__logo--image">
          <router-link :to="`/`">
            <img id="header_logoImg" src="@/assets/images/logo4.png" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="header__column">
      <div class="header__title">
        <h1>회원가입</h1>
      </div>
    </div>

    <div class="header__column">
      <nav>
        <ul class="header__menu">
          <li>마이페이지</li>
          <li>|</li>
          <li>합격자조회</li>
          <li>|</li>
          <li>면접공지</li>
          <li>|</li>
          <li>로그인</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
