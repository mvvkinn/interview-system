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
                <div class="info_name_area"><p>이메일*</p></div>
                <div class="info_input_area">
                  <input
                    v-model="email"
                    ref="email"
                    type="text"
                    class="info_input_text_2"
                    :class="{ error: inputError.email }"
                    @blur="isEmail"
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
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
                <div class="info_name_area"><p>주소*</p></div>
                <div class="info_input_area">
                  <input
                    v-model="zipcode"
                    ref="zipcode"
                    type="text"
                    class="info_input_text"
                    maxlength="5"
                    :class="{ error: inputError.zipcode }"
                    @input="checkInput($event, 'number')"
                  />
                  <p class="error_txt">{{ inputErrorMsg }}</p>
                  <button class="info_value_btn" @click="execDaumPostcode">
                    우편번호
                  </button>
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
                <div class="info_name_area"><p>역할*</p></div>
                <div class="info_input_area">
                  <select v-model="role">
                    <option value="user">면접자</option>
                    <option value="recruiter">면접관</option>
                    <option value="admin">관리자</option>
                  </select>
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
import { store } from "@/store";
export default {
  components: {
    HeaderView,
    FooterView,
  },
  mounted() {
    this.$loadScript(
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    );
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
      zipcode: "",
      address: "",
      role: "",
      isAgree: true,
      isEmpty: false,
      inputError: {
        email: false,
        password: false,
        name: false,
        birthdate: false,
        phone: false,
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
        email: this.email,
        password: this.password,
        name: this.name,
        gender: this.gender,
        birthdate: this.birthdate.slice(2, 10).split("-").join(""),
        phone: this.phone,
        zipcode: this.zipcode,
        address: this.address,
        recieve_info: this.isAgree,
        role: this.role,
      };

      const arrayValue = Object.values(data);
      focus: {
        for (let i in arrayValue) {
          if (arrayValue[i] === "") {
            this.isEmpty = true;
            switch (+i) {
              case 0:
                this.$refs.email.focus();
                this.inputError.email = true;
                this.inputErrorMsg = "이메일을 확인해주세요.";
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
                this.$refs.zipcode.focus();
                this.inputError.zipcode = true;
                this.inputErrorMsg = "우편번호를 확인해주세요.";
                break focus;
              case 7:
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
      console.log(this.isEmpty);
      console.log(this.role);

      if (this.isEmpty === false) {
        console.log("hi");
        await this.$axios
          .post("/auth/signup", JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
          })
          .then(() => {
            this.$router.push("/signup/success");
          });
      }
    },
    checkInput(e, role) {
      if (role === "korean") {
        this.name = e.target.value.replace(this.regexp.korean, "");
        e.target.value = this.name;
      }

      if (role === "dash") {
        this.phone = e.target.value.replace(/-|\D/g, "");
        e.target.value = this.phone;
      }

      if (role === "number") {
        this.zipcode = e.target.value.replace(this.regexp.number, "");
        e.target.value = this.zipcode;
      }
    },
    isEmail() {
      const data = {
        email: this.email,
      };
      store.dispatch("isDuplicate", { ...data }).then((res) => {
        if (res) {
          this.inputError.email = true;
          this.inputErrorMsg = "이미 사용중인 이메일입니다.";
        } else {
          this.inputError.email = false;
        }
      });
    },
    execDaumPostcode(e) {
      e.preventDefault();
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }
          // 우편번호를 입력한다.
          this.zipcode = data.zonecode;
        },
      }).open();
      this.$refs.address.focus();
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

.info_input_area select {
  height: 35px;
}
</style>
