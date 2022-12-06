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
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">인적사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">이름</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="이름을 입력해주세요."
                    ></textarea>
                    <div class="tableComponent_title">생년월일</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="생년 6자리를 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">휴대폰</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="'-'제외하고 입력"
                    ></textarea>
                    <div class="tableComponent_title" id="emailTitle">
                      E-mail
                    </div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="이메일을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine" id="addressLine">
                    <div class="tableComponent_title" id="addressTitle">
                      주소
                    </div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="'-'제외하고 입력"
                      id="addressTextArea"
                    ></textarea>
                  </div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">학력사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      기간
                    </div>
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_center"
                    >
                      학교명
                    </div>
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      전공
                    </div>
                  </div>
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101 ~ 220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      placeholder="학교명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="전공을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101 ~ 220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      placeholder="학교명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="전공을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101 ~ 220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      placeholder="학교명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="전공을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine" id="addLine">+</div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">
                    자격 및 교육사항
                  </div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      취득일자
                    </div>
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_classname"
                    >
                      자격 및 교육명
                    </div>
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_rating"
                    >
                      등급
                    </div>
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      발행기관
                    </div>
                  </div>
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_classname"
                      placeholder="자격 및 교육명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      placeholder="등급을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="발행기관을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine" id="addLine">+</div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">경력사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      근무기간
                    </div>
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_classname"
                    >
                      근무처
                    </div>
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_rating"
                    >
                      직위
                    </div>
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      부서
                    </div>
                  </div>
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101 ~ 220102"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_classname"
                      placeholder="근무처를 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      placeholder="직위를 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="부서를 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine" id="addLine">+</div>
                </div>
                <div class="component__content-column">
                  <div class="component__content-column--button">
                    <button id="blueBtn">수정하기</button>
                    <button id="blackBtn">삭제</button>
                    <router-link to="/mypage/resume/list">
                      <button id="grayBtn">목록</button>
                    </router-link>
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
