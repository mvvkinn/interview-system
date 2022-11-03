<template>
  <div>
    <main>
      <div class="main_page_align">
        <div class="main_page_objects">
          <img src="@/assets/images/logo1.png" class="logo_img" />
          <br />
          <img src="@/assets/images/logo2.png" class="logo_img" />
          <div class="login_area">
            <input
              type="text"
              class="main_input"
              id="login_id"
              placeholder="아이디 또는 이메일"
            />
            <input
              type="password"
              class="main_input"
              id="login_pw"
              placeholder="비밀번호를 입력해주세요."
            />
            <router-link to="/main">
              <div class="main_page_btn" id="login_btn">LOG IN</div>
            </router-link>
            <router-link to="/joinus">
              <div class="main_page_btn" id="join_btn">JOIN US</div>
            </router-link>
            <div class="main_find_area">
              <div class="main_find_area_inner">
                <router-link to="/find/id">
                  <div class="main_find_link">아이디(학번)</div>
                </router-link>
                <router-link to="/find/password">
                  <div class="main_find_link">비밀번호 찾기</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
