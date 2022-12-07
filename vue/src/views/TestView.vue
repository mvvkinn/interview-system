<template>
    <main>
      <div class="container-joinus">
        <section class="joinUs">
          <article class="joinUs_title">
            <div class="joinUs_title-select">
              <h1>정보입력</h1>
            </div>
            <hr />
            <form class="info_area" @click.prevent="submitForm()">
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>Email*</p></div>
                <div class="info_input_area">
                    <input
                        v-model="email"
                        ref="email"
                        type="text"
                        class="info_input_text_2"
                        :class="{ error: inputError.email }"
                    />
                    <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>질문1*</p></div>
                <div class="info_input_area">
                    <input
                        v-model="question_one"
                        ref="question_one"
                        type="text"
                        class="info_input_text"
                        :class="{ error: inputError.question_one }"
                        placeholder="질문을 입력해주세요."
                    />
                    <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>점수1*</p></div>
                <div class="info_input_area">
                    <input
                        v-model="score_one"
                        ref="score_one"
                        type="number"
                        class="info_input_text"
                        :class="{ error: inputError.score_one }"
                        placeholder="점수를 입력해주세요."
                    />
                    <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>질문2*</p></div>
                <div class="info_input_area">
                    <input
                        v-model="question_two"
                        ref="question_two"
                        type="text"
                        class="info_input_text"
                        :class="{ error: inputError.question_two }"
                        placeholder="질문을 입력해주세요."
                    />
                    <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>점수2*</p></div>
                <div class="info_input_area">
                    <input
                        v-model="score_two"
                        ref="score_two"
                        type="number"
                        class="info_input_text"
                        :class="{ error: inputError.score_two }"
                        placeholder="점수를 입력해주세요."
                    />
                    <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>질문3*</p></div>
                <div class="info_input_area">
                    <input
                        v-model="question_three"
                        ref="question_three"
                        type="text"
                        class="info_input_text"
                        :class="{ error: inputError.question_three }"
                        placeholder="질문을 입력해주세요."
                    />
                    <p class="error_txt">{{ inputErrorMsg }}</p>
                </div>
              </div>
              <div class="info_line">
                <div class="info_empty"></div>
                <div class="info_name_area"><p>점수3*</p></div>
                <div class="info_input_area">
                    <input
                        v-model="score_three"
                        ref="score_three"
                        type="number"
                        class="info_input_text"
                        :class="{ error: inputError.score_three }"
                        placeholder="점수를 입력해주세요."
                    />
                    <p class="error_txt">{{ inputErrorMsg }}</p>
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
</template>

<script>
// import {store} from "@/store";

export default {
    components: {
        
    },
    data(){
        return {        
            question_one:"",
            question_two:"",
            question_three:"",
            score_one:"",
            score_two:"",
            score_three:"",
            email: JSON.parse(localStorage.getItem("user")).email,
            isEmpty: false,
            inputError: {
                question_one:false,
                question_two:false,
                question_three:false,
                score_one:false,
                score_two:false,
                score_three:false,
            },
            inputErrorMsg:"",
        }
    },
    watch:{
        question_one(){
            if(this.question_one.trim() !== ""){
                this.inputError.question_one = false;
            }
        },
        question_two(){
            if(this.question_two.trim() !== ""){
                this.inputError.question_two = false;
            }
        },
        question_three(){
            if(this.question_three.trim() !== ""){
                this.inputError.question_three = false;
            }
        },
        score_one(){
            if(this.score_one.trim() !== ""){
                this.inputError.score_one = false;
            }
        },
        score_two(){
            if(this.score_two.trim() !== ""){
                this.inputError.score_two = false;
            }
        },
        score_three(){
            if(this.score_three.trim() !== ""){
                this.inputError.score_three = false;
            }
        },
    },
    methods: {
        // selectScore(){
        //     this.isClick = true;
        //     window.open(
        //         "modal",
        //         "blank",
        //         "width=800, height=650, location=no, status=no, scrollbars=yes"
        //     )
        // },
        // close(){
        //     window.close();
        // },
        async submitForm(){
            const data = {
                question_one: this.question_one,
                score_one: this.score_one,
                question_two: this.question_two,
                score_two: this.score_two,
                question_three: this.question_three,
                score_three: this.score_three
            };

            const arrayValue = Object.values(data);
            focus:{
                for(let i in arrayValue) {
                    if(arrayValue[i]===""){
                        this.isEmpty = true;
                        switch(+i){
                            case 0:
                                this.$refs.question_one.focus();
                                this.inputError.question_one = true;
                                this.inputErrorMsg = "질문을 입력해주세요.";
                                console.log(this.inputError.question_one);
                                console.log(this.inputErrorMsg);
                                break focus;
                            case 1:
                                this.$refs.score_one.focus();
                                this.inputError.score_one = true;
                                this.inputErrorMsg = "점수를 입력해주세요.";
                                break focus;
                            case 2:
                                this.$refs.question_two.focus();
                                this.inputError.question_two = true;
                                this.inputErrorMsg = "질문을 입력해주세요.";
                                break focus;
                            case 3:
                                this.$refs.score_two.focus();
                                this.inputError.score_two = true;
                                this.inputErrorMsg = "점수를 입력해주세요.";
                                break focus;
                            case 4:
                                this.$refs.question_three.focus();
                                this.inputError.question_three = true;
                                this.inputErrorMsg = "질문을 입력해주세요.";
                                break focus;
                            case 5:
                                this.$refs.score_three.focus();
                                this.inputError.score_three = true;
                                this.inputErrorMsg = "점수를 입력해주세요.";
                                break focus;
                        }
                    } else {
                        this.isEmpty = false;
                    }
                }
            }
            if (this.isEmpty === false) {
                await this.$axios
                    .post("/score/test", JSON.stringify(data), {
                        headers: { "Content-Type": "application/json" },
                    })
                    .then(() => {
                        this.$router.push("/admin/progress");
                        // this.$router.push("/admin/progress/list");
                    });
                }
            }
        },
        // isEmail(){
        //     const data = {
        //         email: this.email,
        //     }
        //     store.dispatch("isDuplicate",{...data}).then((res)=>{
        //         if (res) {
        //             this.inputError.email = true;
        //             this.inputErrorMsg = "이미 사용중인 이메일입니다.";
        //         } else {
        //             this.inputError.email = false;
        //         }
        //     });
        // }
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