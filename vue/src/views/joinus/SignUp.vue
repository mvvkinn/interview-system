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
                    placeholder="아이디를 입력해주세요."
                  />
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
                    placeholder="비밀번호를 입력해주세요."
                  />
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>이름*</p></div>
                <div class="info_input_area">
                  <input
                    @input="checkInput"
                    ref="name"
                    type="text"
                    class="info_input_text"
                  />
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
                      id="male"
                      value="male"
                    />
                    <p class="radio_value">남자</p>
                  </label>
                  <label class="label_gender">
                    <input
                      v-model="gender"
                      class="info_input_radio"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
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
                    type="text"
                    class="info_input_text"
                    placeholder="예)20221212"
                  />
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
                    placeholder="'-' 제외하고 입력"
                    @input="checkInput"
                  />
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
                  />
                  <p class="email_center">@</p>
                  <input type="text" class="info_input_text_2" />
                  <select name="email_back" class="email_select">
                    <option value="self">직접입력</option>
                    <option value="naver">naver.com</option>
                    <option value="daum">daum.net</option>
                    <option value="gmail">gmail.com</option>
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
                  />
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
                  />
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
      gender: "",
      birthdate: "",
      phone: "",
      email: "",
      zipcode: "",
      address: "",
      isAgree: false,
    };
  },
  watch: {},
  methods: {
    async submitForm() {
      const data = {
        username: this.username,
        password: this.password,
        name: this.name,
        gender: this.gender,
        birthdate: this.birthdate,
        phone: this.phone,
        email: this.email,
        zipcode: this.zipcode,
        address: this.address,
        recieve_info: this.isAgree,
      };
      // const arrayKey = Object.keys(data);

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
    },
  },
  computed: {},
};
</script>

<style></style>
