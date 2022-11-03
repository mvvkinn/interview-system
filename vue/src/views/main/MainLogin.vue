<template>
  <div>
    <main>
      <div class="main_page_align">
        <div class="main_page_objects">
          <img src="/src/public/assets/images/logo1.png" class="logo_img" />
          <br />
          <img src="/src/public/assets/images/logo2.png" class="logo_img" />
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
            <div
              class="main_page_btn"
              id="login_btn"
              onclick="location.href='main_page_2.html'"
            >
              LOG IN
            </div>
            <div
              class="main_page_btn"
              id="join_btn"
              onclick="location.href='../join_us/join_us_1.html'"
            >
              JOIN US
            </div>
            <div class="main_find_area">
              <div class="main_find_area_inner">
                <div
                  class="main_find_link"
                  onclick="location.href='../find_id/find_id_1.html'"
                >
                  아이디(학번)
                </div>
                <div
                  class="main_find_link"
                  onclick="location.href='../find_pw/find_pw_1.html'"
                >
                  비밀번호 찾기
                </div>
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
