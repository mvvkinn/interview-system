vu
<template>
  <div>
    <HeaderView />
    <main>
      <section class="find component">
        <div class="component-column">
          <nav class="component-column--nav">
            <ul>
              <router-link to="/mypage/resume">
                <li class="active">
                  <img
                    src="@/assets/images/icons/menuIcon_user.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_user_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  마이페이지
                </li>
              </router-link>
              <!-- router link to = /success -->
              <router-link to="/passcheck">
                <li>
                  <img
                    src="@/assets/images/icons/menuIcon_search.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_search_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  합격자조회
                </li>
              </router-link>
              <router-link to="/notice">
                <li>
                  <img
                    src="@/assets/images/icons/menuIcon_notice.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_notice_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  면접 공지
                </li>
              </router-link>
            </ul>
          </nav>
        </div>
        <div class="component-column">
          <nav>
            <ul class="component__menu">
              <li class="component__menu--li">
                <router-link to="/mypage/resume">내 이력서</router-link>
              </li>
              <li class="component__menu--li">
                <router-link to="/mypage/interview">내 면접</router-link>
              </li>
              <li class="component__menu--li active">
                <router-link to="/mypage/changeinfo">개인정보 변경</router-link>
              </li>
              <li></li>
            </ul>
          </nav>
          <article class="component__content">
            <div class="component__content-div">
              <h1>개인정보 변경</h1>
              <div class="component__content--hr">
                <div class="component__content-form change">
                  <div class="component__content-form--div">
                    <label for="name">이름</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="이름을 입력해주세요."
                    />
                  </div>
                  <div class="component__content-form--div">
                    <label>성별</label>
                    <span>
                      <div>
                        <input type="radio" id="man" />
                        <label for="man">남자</label>
                      </div>
                      <div>
                        <input type="radio" id="woman" />
                        <label for="woman">여자</label>
                      </div>
                    </span>
                  </div>
                  <div class="component__content-form--div">
                    <label for="birth">생년월일</label>
                    <input type="text" id="birth" placeholder="8자리 입력" />
                  </div>
                  <div class="component__content-form--div">
                    <label for="tel">전화번호</label>
                    <input type="text" id="tel" placeholder="'-'없이 입력" />
                  </div>
                  <div class="component__content-form--div">
                    <label for="email">이메일</label>
                    <span>
                      <input type="text" id="email" placeholder="example" />
                      <p>@</p>
                      <input type="text" id="email" placeholder="example.com" />
                    </span>
                  </div>
                  <div class="component__content-form--div">
                    <label for="adress">주소</label>
                    <div>
                      <span>
                        <input
                          type="text"
                          id="adress"
                          placeholder="우편번호를 입력해주세요."
                        />
                        <button>우편번호</button>
                      </span>
                      <input
                        type="text"
                        id="adress"
                        placeholder="주소를 입력해주세요."
                      />
                    </div>
                  </div>
                  <div class="component__content-form--div">
                    <button>변경하기</button>
                    <button>
                      <router-link to="/mypage/changeinfo">취소</router-link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style></style>
