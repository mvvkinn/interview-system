<template>
  <body class="dark" :class="{ active: active }">
    <div class="modalArea">
      <div class="import_titleArea">
        <p class="import_title">내 이력서</p>
      </div>
      <div class="import_textArea">
        <p class="import_Username">{{ user_name }}</p>
        <p class="import_text">님의 현재 보유한 이력서 목록입니다.</p>
      </div>
      <div v-if="resumeList.length">
        <div class="import_listArea">
          <div
            class="import_resumeObject"
            v-for="(resume, index) in resumeList"
            :key="index"
          >
            <p class="import_resumeTitle">{{ resume.title }}</p>
            <div class="import_resumeBtnArea">
              <p class="import_resumeDate">
                {{ resume.createdAt?.slice(0, 10).split("-").join("/") }}
              </p>
              <router-link :to="`/notice/detail/modal/resume/${resume.id}`"
                ><div class="import_btn_small" id="btn_black">보기</div>
              </router-link>
              <div
                class="import_btn_small"
                id="btn_blue"
                @click.prevent="callUp(resume.id)"
              >
                불러오기
              </div>
            </div>
          </div>
        </div>
        <div class="import_btnArea">
          <div class="import_btn" id="btn_black" @click.prevent="close">
            닫기
          </div>
        </div>
      </div>
      <div v-else>
        <div class="import_btnArea">
          <div
            class="import_btn"
            id="btn_blue"
            @click.prevent="callUp('false')"
          >
            이력서 등록하기
          </div>
          <div class="import_btn" id="btn_black" @click.prevent="close">
            닫기
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      resumeList: [],
      user_name: JSON.parse(localStorage.getItem("user")).name,
      user_email: JSON.parse(localStorage.getItem("user")).email,
    };
  },
  props: {
    active: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      window.close();
    },
    callUp(id, isResume) {
      if (id) {
        localStorage.setItem("resumeId", id);
      } else {
        localStorage.setItem("isResume", isResume);
      }
      this.close();
    },
  },
  async created() {
    console.log("hi");
    const resume = await this.$axios.get(`/resume?email=${this.user_email}`);
    this.resumeList = resume.data;
    console.log(this.resumeList);

    window.addEventListener("beforeunload", (e) => console.log(e));
  },
};
</script>

<style scoped>
.modalArea {
  background-color: #f3f3f3;
  width: 800px;
  position: absolute;
}

.active {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
</style>
