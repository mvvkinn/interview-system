<template>
  <div>
    <HeaderView />
    <main>
      <div class="notice_adm_container">
        <div class="notice_adm_navbar">
          <div class="notice_adm_nav__menu">
            <ul>
              <router-link to="/admin/resume">
                <li class="adm_nav__menu--li">
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
                  <p>면접관페이지</p>
                </li>
              </router-link>
              <router-link to="/admin/notice">
                <li class="adm_nav__menu--li active">
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
                  <p>면접 공지</p>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <section class="notice_adm">
          <article class="notice_adm__write">
            <div class="notice_adm__write-title">
              <h1>글쓰기</h1>
            </div>
            <hr />
            <div class="notice_adm_write-content">
              <textarea
                id="title"
                type="text"
                placeholder="글제목"
                v-model="title"
              ></textarea>
              <textarea
                id="content"
                type="text"
                placeholder="내용"
                v-model="content"
              ></textarea>
            </div>
            <div class="notice_adm_write-applybutton">
              <div class="notice_adm_write-applybutton-begin">
                <p>모집 시작일시</p>
                <input
                  id="begin"
                  type="datetime-local"
                  v-model="start_recruit"
                />
              </div>
              <div class="notice_adm_write-applybutton-deadline">
                <p>모집 마감일시</p>
                <input
                  id="deadline"
                  type="datetime-local"
                  v-model="end_recruit"
                />
              </div>
              <div class="notice_adm_write-applybutton-number">
                <p>채용 할 인원 수</p>
                <input id="number" type="number" v-model="number" />
              </div>
            </div>
            <div class="notice_adm_write-filebutton">
              <input type="file" id="file" accept="image/*" @change="upload" />
            </div>
            <div class="component__content-column">
              <div class="component__content-column--button">
                <button id="blueBtn" @click.prevent="noticeForm">업로드</button>
                <router-link to="/admin/notice">
                  <button id="grayBtn">취소</button>
                </router-link>
              </div>
            </div>
            <hr />
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
import { store } from "@/store";
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      title: "",
      content: "",
      start_recruit: "",
      end_recruit: "",
      image: "",
      number: "",
    };
  },
  methods: {
    async noticeForm() {
      const data = {
        title: this.title,
        content: this.content,
        start_recruit: this.start_recruit,
        end_recruit: this.end_recruit,
        image: this.image,
        number: this.number,
      };
      store
        .dispatch("notice", { ...data })
        .then((res) => {
          if (res == 201) {
            this.$router.push("/admin/notice");
          } else {
            console.log(this.data);
          }
        })
        .catch((e) => console.log(e));
    },
    upload(e) {
      let file = e.target.files;
      let reader = new FileReader();
      let formData = new FormData();

      reader.readAsDataURL(file[0]);
      // formData에 사진 추가
      formData.append("image", file[0]);
      store.dispatch("uploadNotice", formData).then((res) => {
        // 서버 uploads폴더 사진 경로를 저장
        this.image = res;
        console.log(this.image);
      });
    },
  },
};
</script>

<style>
.notice_adm_write-content textarea:nth-child(2) {
  height: 550px;
}

.notice_adm_write-applybutton {
  display: flex;
  justify-content: right;
  padding-bottom: 30px;
}
.notice_adm_write-applybutton p {
  float: left;
}
.notice_adm_write-applybutton-begin {
  /* margin-right: 80px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-right: 20px;
}

.notice_adm_write-applybutton-begin p {
  margin-right: 10px;
}

.notice_adm_write-applybutton-begin input {
  height: 35px;
  font-family: "noto sans kr";
}
.notice_adm_write-applybutton-deadline {
  /* margin-left: 80px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-right: 20px;
}

.notice_adm_write-applybutton-deadline p {
  margin-right: 10px;
}

.notice_adm_write-applybutton-deadline input {
  height: 35px;
  font-family: "noto sans kr";
}
.notice_adm_write-filebutton input::file-selector-button {
  background-color: #3c62e5;
  color: white;
  border: 0;
  height: 25px;
  cursor: pointer;
}

.notice_adm_write-applybutton-number {
  /* margin-right: 80px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.notice_adm_write-applybutton-number p {
  margin-right: 10px;
}

.notice_adm_write-applybutton-number input {
  width: 45px;
  height: 35px;
  font-family: "noto sans kr";
}

.notice_adm_write-filebutton {
  display: flex;
  justify-content: flex-end;
}
#file {
  border: none;
  width: 15.7%;
}
</style>
