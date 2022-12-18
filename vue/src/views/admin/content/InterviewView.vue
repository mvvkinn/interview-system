<template>
  <body class="interview_body">
    <div class="interview_area">
      <div class="interview_title">면접진행</div>
      <div class="interview_subArea">
        <div class="interview_subObject">
          <div class="subObject_title" id="subObjectTitle_black">지원자</div>
          <div class="interview_content" id="interview_applicantName">
            <!-- {{ applicant.user_name  }} -->
            <textarea class="interview_applicantName_value" :value="scoreData.name"></textarea>
            <!-- <p :value="scoreData.name"></p> -->
          </div>
        </div>
      </div>
      <div class="interview_format_line">
        <div class="fotmat_line_title">면접명</div>
        <div class="fotmat_line_value">
          <!-- <p>{{ applicant.notice_title }}</p> -->
          <textarea :value="scoreData.notice_title"></textarea>
        </div>
      </div>
      <div class="interview_format_line">
        <div class="fotmat_line_title">평가기준</div>
        <div class="fotmat_line_value">
          <p>
            프론트엔드 업무에 대한 전반적인 이해 및 업무능력 평가. 관련 자격 및
            업무 커뮤니케이션 능력 평가.
          </p>
        </div>
      </div>
      <div class="format_table_titleArea">
        <div class="interview_cell_title" id="cell_title">질문</div>
        <div class="interview_cell_title" id="cell_title_score">점수</div>
      </div>
      <div class="interview_format_table" id="interview_mainTable">
        <div class="table_format_line">
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreData.question_one"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreData.score_one"
            />
          </div>
        </div>
        <div class="table_format_line">
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreData.question_two"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreData.score_two"
            />
          </div>
        </div>
        <div class="table_format_line" id="table_line_bottom">
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreData.question_three"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreData.score_three"
            />
          </div>
        </div>
      </div>
      <div class="format_table_titleArea">
        <div class="interview_cell_title">기타의견</div>
      </div>
      <div class="interview_format_table" id="interview_opinionTable">
        <textarea
          class="interview_cell_value"
          id="cell_opinion"
          :value="scoreData.add_question"
          placeholder="기타의견을 입력해주세요."
        ></textarea>
      </div>
      <div class="inverview_btnArea">
        <router-link :to="`/admin/content/${$route.params.interviewId}/list`">
          <div class="interview_btn" id="interview_blueBtn">나가기</div>
        </router-link>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';
// import { initCall} from "@/plugins/stream";

export default {
  data() {
    return {
      // -- score --
      applicant:{},
      scoreGet: {},
      scoreData: {},
      id: "",
      email: "",
      name: "",
      notice_title:"",
      roomName: this.$route.params.roomName,
    };
  },
  async beforeRouteEnter(to,from,next){
    console.log(to);
    const applicant = await axios.get(
      `/apply/applicant?intereview_number=${to.params.roomName}`
    );
    next((vm) => {
      vm.applicant = applicant.data;
    });
  },
  async created() {

    // const resumeText = await this.$axios.get(
    //   "https://1f7e8739-9ff7-4489-b58c-08e6d4bb6681.mock.pstmn.io/interview/resume"
    // );
    // this.resumeList = resumeText.data.resumelist;

    // this.resumeDetail = this.resumeList.filter(
    //   (v) => v.number === +this.$route.params.number
    // )[0];

    this.scoreGet = await this.$axios.get(
      // `/score/read?id=${this.id}&email=${this.email}&name=${this.name}`
      // "/score/read/?id=1&email=admin&name=&notice_title="
      `/score/read/?email=${this.email}&name=${this.name}&notice_title=${this.notice_title}`
    );
    this.scoreData = this.scoreGet.data;
    console.log(this.scoreGet);
  },
  // async mounted() {
  //   await this.$loadScript("/socket.io/socket.io.js");

  //   // eslint-disable-next-line no-undef
  //   this.socket = io();
  //   this.socket.emit("joinRoom", this.roomName);

  //   /**
  //    * event on join
  //    * Send local offer to remote
  //    */
  //   this.socket.on("join", async (userObjArr) => {
  //     this.myStream = await initCall();
  //     this.myVideo = this.myStream;
  //     const length = userObjArr.length;
  //     if (length === 1) {
  //       return;
  //     }

  //     for (let i = 0; i < length - 1; ++i) {
  //       try {
  //         const newPC = this.createConnection(userObjArr[i].socketId);
  //         const offer = await newPC.createOffer();

  //         newPC.setLocalDescription(offer);
  //         this.socket.emit("offer", offer, userObjArr[i].socketId);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   });

  //   /**
  //    * event on recieved offer
  //    * set remote peer offer
  //    */
  //   this.socket.on("offer", async (offer, remoteSocketId) => {
  //     try {
  //       const newPC = this.createConnection(remoteSocketId);
  //       await newPC.setRemoteDescription(offer);

  //       const answer = await newPC.createAnswer();
  //       newPC.setLocalDescription(answer);
  //       this.socket.emit("answer", answer, remoteSocketId);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   });

  //   this.socket.on("answer", (answer, remoteSocketId) => {
  //     this.pcObj[remoteSocketId].setRemoteDescription(answer);
  //   });

  //   /**
  //    * set remote ICECandidate
  //    */
  //   this.socket.on("candidate", (ice, remoteSocketId) => {
  //     this.pcObj[remoteSocketId].addIceCandidate(ice);
  //   });

  //   this.socket.on("leave_room", (leavedSocketId) => {
  //     this.removeVideo(leavedSocketId);
  //   });

  //   this.socket.on("reject_join", () => {
  //     // Erase names
  //     this.roomName = "";
  //   });

  //   // setInterval(() => {
  //   //   this.count();
  //   // }, 1000);
  // },
};
</script>

<style scoped>
#cell_normal {
  width: 95%;
}
#cell_title {
  width: 95%;
}
.interview_applicantName_value {
  border:none;
  padding-top: 20px;
  background: none;
  text-align: center;
  overflow: hidden;
}
.fotmat_line_value textarea {
  border: none;
  overflow: hidden;
  width: inherit;
  color: #333;
  font-family: noto sans kr;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.3;
}
</style>
