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
              <router-link to="/success">
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
              <li class="component__menu--li active">
                <router-link to="/mypage/resume">내 이력서</router-link>
              </li>
              <li class="component__menu--li">
                <router-link to="/mypage/interview">내 면접</router-link>
              </li>
              <li class="component__menu--li">
                <router-link to="/mypage/changeinfo">개인정보 변경</router-link>
              </li>
              <li></li>
            </ul>
          </nav>
          <article class="component__content">
            <div class="component__content-div">
              <h1>이력서 제목1</h1>
              <form class="component__content--hr">
                <div class="component__content-column">
                  <div class="component__content-column--img">
                    <img src="https://via.placeholder.com/297x358" alt="" />
                    <button>이미지 업로드</button>
                  </div>
                </div>
                <div class="component__content-column">
                  <h2>인적사항</h2>
                  <div class="component__table">
                    <div class="component__table-column">
                      <label for="name">이름</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="이름을 입력해주세요."
                      />
                      <label for="birth">생년월일</label>
                      <input id="birth" type="text" placeholder="8자리 입력" />
                    </div>
                    <div class="component__table-column">
                      <label for="phone">휴대폰</label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="'-'없이 입력"
                      />
                      <label for="email">E-mail</label>
                      <input
                        id="email"
                        type="textarea"
                        placeholder="example@example.com"
                      />
                    </div>
                    <div class="component__table-column">
                      <label for="adress">주소</label>
                      <input
                        id="adress"
                        type="text"
                        placeholder="주소를 입력해주세요."
                      />
                    </div>
                  </div>
                </div>
                <div class="component__content-column">
                  <h2>학력사항</h2>
                  <div class="component__table">
                    <div class="component__table-column">
                      <label for="period">기간</label>
                      <input
                        id="period"
                        type="text"
                        placeholder="00/00/00 - 00/00/00"
                      />
                      <input
                        id="period"
                        type="text"
                        placeholder="00/00/00 - 00/00/00"
                      />
                      <input
                        id="period"
                        type="text"
                        placeholder="00/00/00 - 00/00/00"
                      />
                    </div>
                    <div class="component__table-column">
                      <label for="school">학교명</label>
                      <input
                        id="school"
                        type="text"
                        placeholder="학교명을 입력해주세요."
                      />
                      <input
                        id="school"
                        type="text"
                        placeholder="학교명을 입력해주세요."
                      />
                      <input
                        id="school"
                        type="text"
                        placeholder="학교명을 입력해주세요."
                      />
                    </div>
                    <div class="component__table-column">
                      <label for="major">전공</label>
                      <input
                        id="major"
                        type="text"
                        placeholder="전공을 입력해주세요."
                      />
                      <input
                        id="major"
                        type="text"
                        placeholder="전공을 입력해주세요."
                      />
                      <input
                        id="major"
                        type="text"
                        placeholder="전공을 입력해주세요."
                      />
                    </div>
                  </div>
                  <button>+</button>
                </div>
                <div class="component__content-column">
                  <h2>자격 및 교육 사항</h2>
                  <div class="component__table">
                    <div class="component__table-column">
                      <label for="achive">취득일자</label>
                      <input id="achive" type="text" placeholder="0000/00/00" />
                    </div>
                    <div class="component__table-column">
                      <label for="quality">자격 및 교육명</label>
                      <input
                        id="quality"
                        type="text"
                        placeholder="자격 및 교육명을 입력해주세요."
                      />
                    </div>
                    <div class="component__table-column">
                      <label for="rating">등급</label>
                      <input
                        id="rating"
                        type="text"
                        placeholder="등급을 입력해주세요."
                      />
                    </div>
                    <div class="component__table-column">
                      <label for="issuer">발행기관</label>
                      <input
                        id="issuer"
                        type="text"
                        placeholder="발행기관을 입력해주세요."
                      />
                    </div>
                  </div>
                  <button>+</button>
                </div>
                <div class="component__content-column">
                  <h2>경력사항</h2>
                  <div class="component__table">
                    <div class="component__table-column">
                      <label for="employ">근무기간</label>
                      <input
                        id="employ"
                        type="text"
                        placeholder="00/00/00 - 00/00/00"
                      />
                    </div>
                    <div class="component__table-column">
                      <label for="position">근무처</label>
                      <input
                        id="position"
                        type="text"
                        placeholder="근무처를 입력해주세요."
                      />
                    </div>
                    <div class="component__table-column">
                      <label for="job">직위</label>
                      <input
                        id="job"
                        type="text"
                        placeholder="직위를 입력해주세요."
                      />
                    </div>
                    <div class="component__table-column">
                      <label for="department">부서</label>
                      <input
                        id="department"
                        type="text"
                        placeholder="부서를 입력해주세요."
                      />
                    </div>
                  </div>
                  <button>+</button>
                </div>
                <div class="component__content-column">
                  <div class="component__content-column--button">
                    <button>수정하기</button>
                    <button>삭제</button>
                    <button>
                      <router-link to="/mypage/resume/list">목록</router-link>
                    </button>
                  </div>
                </div>
              </form>
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
