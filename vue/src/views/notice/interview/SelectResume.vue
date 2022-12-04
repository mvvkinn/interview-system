<template>
  <body class="dark" :class="{ active: active }">
    <div class="modalArea">
      <div class="import_titleArea">
        <p class="import_title">내 이력서</p>
      </div>
      <div class="import_textArea">
        <p class="import_Username">김명지</p>
        <p class="import_text">님의 현재 보유한 이력서 목록입니다.</p>
      </div>
      <div class="import_listArea">
        <div class="import_resumeObject">
          <p class="import_resumeTitle">Title</p>
          <div class="import_resumeBtnArea">
            <p class="import_resumeDate">2022/01/01</p>
            <router-link to="/notice/detail/modal/resume"
              ><div class="import_btn_small" id="btn_black">보기</div>
            </router-link>
            <div class="import_btn_small" id="btn_blue">불러오기</div>
          </div>
        </div>
        <div class="import_resumeObject">
          <p class="import_resumeTitle">Title</p>
          <div class="import_resumeBtnArea">
            <p class="import_resumeDate">2022/01/01</p>
            <router-link to="/notice/detail/modal/resume"
              ><div class="import_btn_small" id="btn_black">보기</div>
            </router-link>
            <div class="import_btn_small" id="btn_blue">불러오기</div>
          </div>
        </div>
        <div class="import_resumeObject">
          <p class="import_resumeTitle">Title</p>
          <div class="import_resumeBtnArea">
            <p class="import_resumeDate">2022/01/01</p>
            <router-link to="/notice/detail/modal/resume"
              ><div class="import_btn_small" id="btn_black">보기</div>
            </router-link>
            <div class="import_btn_small" id="btn_blue">불러오기</div>
          </div>
        </div>
      </div>
      <div class="import_btnArea">
        <div class="import_btn" id="btn_black" @click.prevent="close">닫기</div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      window.close();
    },
  },
};
</script>

<style scoped>
.modalArea {
  background-color: #f3f3f3;
  width: 800px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* .dark {
  display: none;
} */
.active {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
</style>
