vu
<template>
  <div>
    <HeaderView />
    <main>
      <div class="adm_container">
        <section class="adm-interview">
          <article class="adm__rsm-content adm-interview-content">
            <div class="adm__rsm-content-div">
              <h1>2022년도 하반기 OOOOO 프론트엔드 개발자 모집 - 김명지</h1>
            </div>
            <div class="adm__rsm-content-checklist">
              <table class="adm__rsm-content-info--table">
                <tbody>
                  <tr>
                    <th class="adm__rsm-content-info--table--section-1">
                      면접명
                    </th>
                    <td class="adm__rsm-content-info--table--section-2">
                      2022년도 하반기 OOOOO 프론트엔드 개발자 모집
                    </td>
                    <th class="adm__rsm-content-info--table--section-3">
                      지원자
                    </th>
                    <td class="adm__rsm-content-info--table--section-4">
                      김명지
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="adm__rsm-content-criteria--table">
                <tbody>
                  <tr>
                    <th class="adm__rsm-content-criteria--table--section-1">
                      평가 기준
                    </th>
                    <td class="adm__rsm-content-criteria--table--section-2">
                      프론트엔드 업무에 대한 전반적인 이해 및 업무능력 평가.
                      관련 자격 및 업무 커뮤니케이션 능력 평가. <br />평가기준
                      예시
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="adm__rsm-content-checklist--table">
                <thead>
                  <tr>
                    <th class="adm__rsm-content-checklist--table--section-1">
                      질문 목록
                    </th>
                    <th class="adm__rsm-content-checklist--table--section-2">
                      추가 질문
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <!-- <td class="adm__rsm-content-checklist--table--section-1">주 질문 1</td> -->
                    <td class="adm__rsm-content-checklist--table--section-1">
                      <textarea id="input01" placeholder="주 질문 1"></textarea>
                    </td>
                    <td
                      class="adm__rsm-content-checklist--table--section-2"
                      rowspan="4"
                    >
                      <textarea
                        id="input1"
                        placeholder="추가 질문 내용"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="adm__rsm-content-checklist--table--section-1">
                      <textarea id="input02" placeholder="주 질문 2"></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="adm__rsm-content-checklist--table--section-1">
                      <textarea id="input03" placeholder="주 질문 3"></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="adm__rsm-content-checklist--table--section-1">
                      <textarea id="input04" placeholder="주 질문 4"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="adm__rsm-content-checklist--title">평가준거</p>
            <div class="adm__rsm-content-checklist">
              <table class="adm__rsm-content-score--table">
                <thead>
                  <tr>
                    <th class="adm__rsm-content-score--table--section-1">
                      주 질문
                    </th>
                    <th class="adm__rsm-content-score--table--section-2">
                      점수 (100점 만점)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="adm__rsm-content-score--table--section-1">
                      <textarea id="input05" placeholder="주 질문 1"></textarea>
                    </td>
                    <!-- <td class="adm__rsm-content-score--table--section-2"><text class="score">00</text>점</td> -->
                    <td class="adm__rsm-content-score--table--section-2">
                      <input
                        id="score01"
                        type="number"
                        min="0"
                        max="100"
                        placeholder="00"
                      />
                      점
                    </td>
                  </tr>
                  <tr>
                    <td class="adm__rsm-content-score--table--section-1">
                      <textarea id="input06" placeholder="주 질문 2"></textarea>
                    </td>
                    <td class="adm__rsm-content-score--table--section-2">
                      <input
                        id="score02"
                        type="number"
                        min="0"
                        max="100"
                        placeholder="00"
                      />점
                    </td>
                  </tr>
                  <tr>
                    <td class="adm__rsm-content-score--table--section-1">
                      <textarea id="input07" placeholder="주 질문 3"></textarea>
                    </td>
                    <td class="adm__rsm-content-score--table--section-2">
                      <input
                        id="score03"
                        type="number"
                        min="0"
                        max="100"
                        placeholder="00"
                      />점
                    </td>
                  </tr>
                  <tr>
                    <td class="adm__rsm-content-score--table--section-1">
                      <textarea id="input08" placeholder="주 질문 4"></textarea>
                    </td>
                    <td class="adm__rsm-content-score--table--section-2">
                      <input
                        id="score04"
                        type="number"
                        min="0"
                        max="100"
                        placeholder="00"
                      />점
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="adm__rsm-content-opinion--table">
                <tbody>
                  <tr>
                    <th class="adm__rsm-content-opinion--table--section-1">
                      기타 의견
                    </th>
                    <td class="adm__rsm-content-opinion--table--section-2">
                      <textarea id="input09"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="adm__rsm-content-btn">
              <hr class="adm__rsm-content-hr" />
              <router-link to="/admin/progress/list">
                <button class="submit">제출하기</button>
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
