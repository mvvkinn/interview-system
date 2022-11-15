<template>
  <div>
    <HeaderView />
    <main>
      <div class="container-joinus">
        <section class="joinUs">
          <article class="joinUs_title">
            <div class="joinUs_title-select">
              <h1>정보입력</h1>
            </div>
            <hr />
            <form class="info_area" v-on:submit.prevent="submitForm">
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>아이디*</p></div>
                <div class="info_input_area">
                  <input
                    v-model="username"
                    ref="username"
                    type="text"
                    class="info_input_text"
                    :class="{ error: inputError.username }"
                    placeholder="아이디를 입력해주세요."
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                  <div class="info_value_btn">중복 확인</div>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>비밀번호*</p></div>
                <div class="info_input_area">
                  <input
                    v-model="password"
                    ref="password"
                    type="password"
                    class="info_input_text"
                    :class="{ error: inputError.password }"
                    placeholder="비밀번호를 입력해주세요."
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>이름*</p></div>
                <div class="info_input_area">
                  <input
                    :value="name"
                    @input="checkInput($event, 'korean')"
                    ref="name"
                    type="text"
                    class="info_input_text"
                    :class="{ error: inputError.name }"
                    placeholder="예) 홍길동"
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>성별*</p></div>
                <div class="info_input_area">
                  <label class="label_gender">
                    <input
                      v-model="gender"
                      class="info_input_radio"
                      type="radio"
                      name="gender"
                      value="m"
                    />
                    <p class="radio_value">남자</p>
                  </label>
                  <label class="label_gender">
                    <input
                      v-model="gender"
                      class="info_input_radio"
                      type="radio"
                      name="gender"
                      value="f"
                    />
                    <p class="radio_value">여자</p>
                  </label>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>생년월일*</p></div>
                <div class="info_input_area">
                  <input
                    v-model="birthdate"
                    ref="birthdate"
                    type="date"
                    class="info_input_text"
                    :class="{ error: inputError.birthdate }"
                    placeholder="예)20221212"
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>전화번호*</p></div>
                <div class="info_input_area">
                  <input
                    ref="phone"
                    type="text"
                    class="info_input_text"
                    :class="{ error: inputError.phone }"
                    placeholder="'-' 제외하고 입력"
                    maxlength="11"
                    :value="phone"
                    @input="checkInput($event, 'dash')"
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>이메일*</p></div>
                <div class="info_input_area">
                  <input
                    v-model="email"
                    ref="email"
                    type="text"
                    class="info_input_text_2"
                    :class="{ error: inputError.email }"
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                  <p class="email_center">@</p>
                  <input
                    type="text"
                    class="info_input_text_2"
                    :value="domain"
                  />
                  <select
                    name="email_back"
                    class="email_select"
                    @change="changeDomain"
                  >
                    <option value="">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="gmail.com">gmail.com</option>
                  </select>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>주소*</p></div>
                <div class="info_input_area">
                  <input
                    v-model="zipcode"
                    ref="zipcode"
                    type="text"
                    class="info_input_text"
                    maxlength="5"
                    :class="{ error: inputError.zipcode }"
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                  <div class="info_value_btn">우편번호</div>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"></div>
                <div class="info_input_area">
                  <input
                    v-model="address"
                    ref="address"
                    type="text"
                    class="info_input_adress"
                    :class="{ error: inputError.address }"
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>수신 동의*</p></div>
                <div class="info_input_area">
                  <label class="label_agree">
                    <input
                      v-model="isAgree"
                      class="info_input_radio"
                      type="radio"
                      name="agree"
                      value="true"
                    />
                    <p class="radio_value">동의</p>
                  </label>
                  <label class="label_agree">
                    <input
                      v-model="isAgree"
                      class="info_input_radio"
                      type="radio"
                      name="agree"
                      value="false"
                    />
                    <p class="radio_value">안함</p>
                  </label>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"></div>
                <div class="info_input_area">
                  <p class="info_blue_text">
                    * 공지사항, 합격자 발표일 소식이 SNS, 이메일로 제공됩니다.
                  </p>
                </div>
              </div>
              <div class="joinUs_btn_area">
                <router-link to="/joinus">
                  <div class="back_btn">
                    <p>이전 단계로</p>
                  </div>
                </router-link>
                <!-- <router-link to="/signup/success"> -->
                <button class="next_btn" type="submit">다음 단계로</button>
                <!-- </router-link> -->
              </div>
            </form>
            <hr />
          </article>
        </section>
      </div>
    </main>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/auth/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      username: "",
      password: "",
      name: "",
      gender: "m",
      birthdate: "",
      phone: "",
      email: "",
      domain: "",
      zipcode: "",
      address: "",
      isAgree: true,
      isEmpty: false,
      inputError: {
        username: false,
        password: false,
        name: false,
        birthdate: false,
        phone: false,
        email: false,
        zipcode: false,
        address: false,
      },
      inputErrorMsg: "",
      regexp: {
        korean: /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
        lower: /[^a-z]/g,
        upper: /[^A-Z]/g,
        number: /\D/g,
        // pwd: /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{8,24}$/,
        pwd: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
      },
    };
  },
  watch: {
    username() {
      if (this.username.trim() !== "") {
        this.inputError.username = false;
      }
    },
    password() {
      if (this.password.trim() !== "") {
        this.inputError.password = false;
      }
      if (!this.regexp.pwd.test(this.password.trim())) {
        this.inputError.password = true;
        this.inputErrorMsg = "영어 및 숫자, 특수문자를 결합한 최소 8자리 이상";
      }
    },
    name() {
      if (this.name.trim() !== "") {
        this.inputError.name = false;
      }
    },
    birthdate() {
      if (this.birthdate.trim() !== "") {
        this.inputError.birthdate = false;
      }
    },
    phone() {
      if (this.phone.trim() !== "") {
        this.inputError.phone = false;
      }
    },
    email() {
      if (this.email.trim() !== "") {
        this.inputError.email = false;
      }
    },
    zipcode() {
      if (this.zipcode.trim() !== "") {
        this.inputError.zipcode = false;
      }
    },
    address() {
      if (this.address.trim() !== "") {
        this.inputError.address = false;
      }
    },
  },
  methods: {
    async submitForm() {
      const data = {
        username: this.username,
        password: this.password,
        name: this.name,
        gender: this.gender,
        birthdate: this.birthdate,
        phone: this.phone,
        email: this.email === "" ? this.email : this.email + "@" + this.domain,
        zipcode: this.zipcode,
        address: this.address,
        recieve_info: this.isAgree,
      };

      const arrayValue = Object.values(data);
      focus: {
        for (let i in arrayValue) {
          if (arrayValue[i] === "") {
            this.isEmpty = true;
            switch (+i) {
              case 0:
                this.$refs.username.focus();
                this.inputError.username = true;
                this.inputErrorMsg = "아이디를 확인해주세요.";
                break focus;
              case 1:
                this.$refs.password.focus();
                this.inputError.password = true;
                this.inputErrorMsg = "비밀번호를 확인해주세요.";
                break focus;
              case 2:
                this.$refs.name.focus();
                this.inputError.name = true;
                this.inputErrorMsg = "이름을 확인해주세요.";
                break focus;
              case 4:
                this.$refs.birthdate.focus();
                this.inputError.birthdate = true;
                this.inputErrorMsg = "생년월일을 확인해주세요.";
                break focus;
              case 5:
                this.$refs.phone.focus();
                this.inputError.phone = true;
                this.inputErrorMsg = "전화번호를 확인해주세요.";
                break focus;
              case 6:
                this.$refs.email.focus();
                this.inputError.email = true;
                this.inputErrorMsg = "이메일을 확인해주세요.";
                break focus;
              case 7:
                this.$refs.zipcode.focus();
                this.inputError.zipcode = true;
                this.inputErrorMsg = "우편번호를 확인해주세요.";
                break focus;
              case 8:
                this.$refs.address.focus();
                this.inputError.address = true;
                this.inputErrorMsg = "주소를 확인해주세요.";
                break focus;
            }
          } else {
            this.isEmpty = false;
          }
        }
      }

      if (this.isEmpty === false) {
        await this.$axios
          .post("/auth/signup", JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log(res);
            this.$router.push("/signup/success");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    checkInput(e, role) {
      if (role === "korean") {
        this.name = e.target.value.replace(this.regexp.korean, "");
        e.target.value = this.name;
      }

      if (role === "dash") {
        this.phone = e.target.value.replace(/-/g, "");
        e.target.value = this.phone;
      }
    },
    changeDomain(e) {
      this.domain = e.target.value;
    },
  },
  computed: {},
};
</script>

<style scoped>
.info_input_area {
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

.info_input_area > .error + .error_txt {
  display: block;
  position: absolute;
  top: 50px;
  color: red !important;
}
</style>
