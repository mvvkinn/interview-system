<template>
  <div>
    <main>
      <div class="main_page_align">
        <div class="main_page_objects">
          <img src="@/assets/images/logo1.png" class="logo_img" />
          <br />
          <img src="@/assets/images/logo2.png" class="logo_img" />
          <form
            class="login_area"
            :class="{ error: inputError.email || inputError.password }"
            v-on:submit.prevent="submitForm"
          >
            <input
              v-model="email"
              ref="email"
              type="text"
              class="main_input"
              :class="{ error: inputError.email }"
              id="login_id"
              placeholder="이메일을 입력해주세요."
            />

            <input
              v-model="password"
              ref="password"
              type="password"
              class="main_input"
              :class="{ error: inputError.password }"
              id="login_pw"
              placeholder="비밀번호를 입력해주세요."
              autocomplete="off"
            />
            <p class="error_txt">{{ inputErrorMsg }}</p>

            <!-- <router-link to="/main"> -->
            <button class="main_page_btn" id="login_btn" type="submit">
              LOG IN
            </button>
            <!-- </router-link> -->
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
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { store } from "@/store";

export default {
  data() {
    return {
      email: "",
      password: "",
      inputError: {
        email: false,
        password: false,
      },
      inputErrorMsg: "",
    };
  },
  watch: {
    email() {
      if (this.email.trim() !== "") {
        this.inputError.email = false;
        this.inputError.password = false;
      }
    },
    password() {
      if (this.password.trim() !== "") {
        this.inputError.email = false;
        this.inputError.password = false;
      }
    },
  },
  methods: {
    async submitForm() {
      const data = {
        email: this.email,
        password: this.password,
      };

      if (this.email.trim() === "") {
        this.$refs.email.focus();
        this.inputError.email = true;
        this.inputErrorMsg = "이메일을 확인해주세요.";
      } else if (this.password.trim() === "") {
        this.$refs.password.focus();
        this.inputError.password = true;
        this.inputErrorMsg = "비밀번호를 확인해주세요.";
      }

      if (!this.inputError.email && !this.inputError.password) {
        store.dispatch("login", { ...data }).then((res) => {
          if (res !== 200) {
            this.inputError.email = true;
            this.inputError.password = true;
            this.inputErrorMsg = "입력하신 이메일과 비밀번호를 확인해주세요.";
          }
        });
      }
    },
  },
  created() {
    store.dispatch("logout");
  },
};
</script>

<style scoped>
.login_area {
  position: relative;
}

.error_txt {
  display: none;
}

input.error {
  border: 2px solid red;
}

input.error:focus {
  border: 2px solid red;
}

input:focus {
  outline: none;
  border: 1px solid blue;
}

.login_area.error .error_txt {
  display: block;
  /* position: absolute;
  top: 50px; */
  color: red !important;
}
</style>
