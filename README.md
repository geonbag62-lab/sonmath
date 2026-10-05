# 📐 소앤수학학원 (So & Math Academy)

> **수학 커리큘럼을 한눈에 보고, 학습 로드맵을 탐색할 수 있는 웹 플랫폼**

소앤수학학원(So & Math Academy)의 수학 교육 콘텐츠와 커리큘럼을
직관적이고 인터랙티브하게 탐색할 수 있도록 제작한 반응형 웹 플랫폼입니다.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/ko/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/ko/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/ko/docs/Web/JavaScript)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#-license)

🌐 **Live Demo:** [sonmath.netlify.app](https://sonmath.netlify.app/)

---

## ✨ Overview

소앤수학학원 웹 플랫폼은 복잡하게 느껴질 수 있는 수학 학습 과정을
**커리큘럼 → 단계별 학습 경로 → 세부 학습 내용**의 흐름으로
직관적으로 보여주는 것을 목표로 제작되었습니다.

별도의 프레임워크 없이 **HTML, CSS, JavaScript**를 기반으로 구현하여
가볍고 빠르게 동작하는 웹 환경을 구성했습니다.

### 🎯 핵심 목표

- 초·중·고 수학 커리큘럼을 직관적으로 탐색
- 단계별 학습 로드맵 시각화
- 다양한 디바이스에 대응하는 반응형 UI 구현
- JavaScript를 활용한 인터랙티브 기능 구현
- 별도의 프론트엔드 프레임워크 없이 가볍게 동작하는 웹 서비스 구현

---

## 🚀 주요 기능

### 1. 🎯 Interactive Curriculum & Learning Roadmap

학습 과정별 수학 커리큘럼을 쉽고 직관적으로 탐색할 수 있습니다.

- 초등 / 중등 / 고등 과정별 커리큘럼 구성
- 과정별 학습 내용을 카드 UI로 표현
- 단계별 학습 경로를 Roadmap 형태로 시각화
- JavaScript를 활용한 동적 UI 및 사용자 인터랙션

---

### 2. 📱 Responsive Web Design

PC뿐만 아니라 모바일 환경에서도 사용할 수 있도록 반응형 레이아웃을 적용했습니다.

- Mobile / Tablet / Desktop 대응
- 화면 크기에 따른 레이아웃 조정
- 가독성을 고려한 타이포그래피 및 간격 설계
- 다양한 해상도에서 일관된 사용자 경험 제공

---

### 3. 🎨 Clean UI / UX

수학 학습 정보를 복잡하지 않게 보여주는 것을 중심으로 UI를 설계했습니다.

- 직관적인 네비게이션
- 깔끔하고 모던한 디자인
- 카드 기반 콘텐츠 구성
- CSS를 활용한 애니메이션 및 인터랙션
- 사용자 흐름을 고려한 페이지 구성

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | 웹 페이지 구조 및 콘텐츠 구성 |
| **CSS3** | 레이아웃, 반응형 디자인, 스타일링 |
| **JavaScript** | 동적 UI, 인터랙션 및 사용자 동작 처리 |
| **Git / GitHub** | 버전 관리 및 소스 코드 관리 |
| **Netlify** | 웹 사이트 배포 |

> **Framework / Library:** 별도의 프론트엔드 프레임워크 없이 Vanilla HTML/CSS/JavaScript로 구현

---

## 🏗 Project Architecture

```text
HTML
 │
 ├── 페이지 구조
 ├── 콘텐츠
 └── UI 요소
      │
      ▼
CSS
 │
 ├── Layout
 ├── Responsive Design
 ├── Typography
 └── Animation / Visual Style
      │
      ▼
JavaScript
 │
 ├── 사용자 인터랙션
 ├── 커리큘럼 필터링
 ├── 동적 UI
 └── 이벤트 처리
```

HTML이 전체 구조를 담당하고,
CSS가 화면 디자인과 반응형 레이아웃을 담당하며,
JavaScript가 사용자 인터랙션과 동적인 기능을 담당하는 구조입니다.

---

## 📂 Project Structure

```text
.
├── index.html          # 메인 HTML 페이지
├── css/
│   └── style.css       # 전체 스타일 및 반응형 디자인
├── js/
│   └── main.js       # 인터랙션 및 동적 기능
├── assets/             # 이미지 및 기타 정적 리소스
└── README.md
```



---

## 🚀 Getting Started

### Requirements

별도의 복잡한 개발 환경은 필요하지 않습니다.

- 최신 웹 브라우저
- Git (선택 사항)

### Run Locally

Repository를 다운로드하거나 Clone한 뒤 `index.html`을 브라우저로 열면 실행할 수 있습니다.

```bash
git clone https://github.com/your-username/so-and-math.git
cd so-and-math
```

그 후 `index.html`을 실행합니다.

간단한 로컬 서버를 사용할 경우:

```bash
python -m http.server 8000
```

브라우저에서 다음 주소로 접속합니다.

```text
http://localhost:8000
```

---

## 🌐 Deployment

본 프로젝트는 **Netlify**를 통해 배포하고 있습니다.

GitHub Repository와 Netlify를 연결하면
코드를 수정하고 push할 때 변경사항을 자동으로 배포할 수 있습니다.

```text
GitHub
   │
   │ push
   ▼
Netlify
   │
   │ Deploy
   ▼
Live Website
```

### 🔗 Live Site

**https://sonmath.netlify.app/**

---

## 🔮 Future Improvements

향후 다음과 같은 기능을 추가할 수 있습니다.

- [ ] 학생별 학습 진도 저장
- [ ] 학습 완료 체크 기능
- [ ] 커리큘럼 검색 기능
- [ ] 학습 기록 및 통계
- [ ] 학생별 맞춤 학습 로드맵
- [ ] 관리자용 커리큘럼 관리 기능

---

## 🎓 Project Goal

이 프로젝트의 핵심 목표는 단순한 학원 소개 페이지를 넘어

> **"수학 학습 과정을 어떻게 하면 더 직관적으로 보여줄 수 있을까?"**

라는 문제를 웹 인터페이스로 풀어내는 것입니다.

프론트엔드 프레임워크에 의존하지 않고
**HTML + CSS + JavaScript**만으로 실제 서비스 형태의
반응형 웹 플랫폼을 구현하는 것을 목표로 했습니다.

---

## 📄 License

This project is licensed under the **MIT License**.

---

<p align="center">
  <strong>📐 So & Math Academy</strong><br/>
  Interactive Mathematics Curriculum Web Platform
</p>
