# #Interview-system

### 프로젝트 기간

2022년 09월 01일 ~ 2022년 12월 21일

---

<img src="https://user-images.githubusercontent.com/102431281/208467663-c7a8f42c-9379-4c4e-bd06-942b14816988.png"  width="600" height="350"/>

- **#Interviewe-system은 면접 지원과 면접 과정을 결합한 웹 프로젝트입니다.**
- **기본적으로 면접 진행과 관련된 기능들이 서로 연관되어 동작하도록 DB를 설계하였습니다.**
- **세부구현기능**
  - **[회원관리](#member)**
  - **[이력서관리](#resume)**
  - **[공지관리](#notice)**
  - **[지원관리](#apply)**
  - **[채점관리](#score)**
  - **[화상면접관리](#meeting)**

---

# 개발 환경

- HTML, CSS, JS
- MySQL
- Express
- node.js
- Vue.js 2
- AWS EC2

---

# Team Members

- 김은정
  - **Github** - ([https://github.com/0uizi0](https://github.com/0uizi0))
  - **Mail** - 0uizi0@naver.com
- 이설아
  - **Github** - ([https://github.com/LSeolAh](https://github.com/LSeolAh))
  - **Mail** - sualah0417@naver.com
- 장태민
  - **Github** - ([https://github.com/taemin-jang](https://github.com/taemin-jang))
  - **Mail** - jtm990506@gmail.com
- 윤재민
  - **Github** - ([https://github.com/Jminss](https://github.com/Jminss))
  - **Mail** - yjn0243@naver.com
- 김민우
  - **Github** - ([https://github.com/mvvkinn](https://github.com/mvvkinn))
  - **Mail** - mvvkinn@mvvkinn.xyz
- 신희섭
  - **Github** - ([https://github.com/heeseobSHIN](https://github.com/heeseobSHIN))
  - **Mail** - zergpower08@gmail.com

---

# Member

![Member](https://user-images.githubusercontent.com/102431281/208466684-5ed781c5-7036-4231-9556-6d751887b66a.gif)

- [x] 회원가입 시 입력 정보 조건에 알맞도록 제어
- [x] 회원페이지 정보조회 및 회원정보 권한 부여

# Resume

![Resume](https://user-images.githubusercontent.com/102431281/208467255-223b8047-071b-4ef1-a3a8-efcafa63dff4.gif)

- [x] 이력서 작성 및 삭제 기능
- [x] 지원 이력서 작성 시 불러오기 기능

# Notice

![Notice](https://user-images.githubusercontent.com/102431281/208467265-62f39c30-bfa0-4256-ad0e-6c274ab96ba7.gif)

- [x] 관리자 계정으로 로그인 시 채용 공고 권한 부여
- [x] 채용 공고 게시판 정렬 기능

# Apply

![Apply](https://user-images.githubusercontent.com/102431281/208467281-1aa6d497-bdc5-4e09-83d9-808d825e5038.gif)

- [x] 채공 공고 별 지원 기능
- [x] 지원 시작일 및 지원 마감일에 따른 지원 활성화 기능
- [x] 지원 시 수험번호 발급 기능
- [x] 공고 별 지원자 및 이력서 조회 기능

# Score

![Score](https://user-images.githubusercontent.com/102431281/208467287-3de98935-67cf-4ef4-a2d8-acf27af76e25.gif)

- [x] 실시간 채점 과정을 통한 부정행위 및 점수 누락 방지
- [x] 지원 공고 별 면접 결과 조회 기능
- [x] 합격 / 불합격 여부 기능

# Meeting

![Meeting](https://user-images.githubusercontent.com/102431281/208467292-56fe572d-9c72-4594-8ef4-f70a6c39a42b.gif)

- [x] 지원 공고 별 오프라인 / 온라인 면접 진행 기능
- [x] 관리자 및 면접관 계정으로 로그인 시 채점 권한 부여

---

## 프로젝트 실행

```
#백엔드 패키지 다운
cd backend/
yarn

#프론트엔드 실행
cd vue
yan build

#백엔드 실행
cd backend/
yarn dev
```
