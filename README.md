# 📐 소앤수학학원 (So & Math Academy)

> **수학 커리큘럼을 한눈에 보고, 나에게 맞는 학습 로드맵을 탐색하는 웹 플랫폼**

소앤수학학원(So & Math Academy)의 수학 교육 콘텐츠와 커리큘럼을  
직관적이고 인터랙티브하게 탐색할 수 있도록 제작한 **반응형 웹 플랫폼**입니다.

[![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3%2B-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#-license)

🌐 **Live Demo:** [sonmath.netlify.app](https://sonmath.netlify.app/)

---

## ✨ Overview

소앤수학학원 웹 플랫폼은 복잡하게 느껴질 수 있는 수학 학습 과정을  
**커리큘럼 → 단계별 로드맵 → 학습 과정**의 흐름으로 직관적으로 보여주는 것을 목표로 제작되었습니다.

학생이 자신의 학년과 학습 단계에 맞는 수학 과정을 쉽게 탐색할 수 있도록  
**인터랙티브 UI**와 **반응형 레이아웃**을 적용했습니다.

### 🎯 핵심 목표

- 초·중·고 수학 커리큘럼을 직관적으로 탐색
- 단계별 학습 로드맵 시각화
- 모바일부터 데스크톱까지 일관된 사용자 경험 제공
- 재사용 가능한 컴포넌트 기반 구조 구축
- 빠르고 가벼운 프론트엔드 성능 확보

---

## 🚀 주요 기능

### 1. 🎯 Interactive Curriculum & Learning Roadmap

학습자의 과정에 맞춰 수학 커리큘럼을 탐색할 수 있습니다.

- 초등 / 중등 / 고등 과정별 커리큘럼 필터링
- 과정별 학습 내용을 카드 형태로 제공
- 단계별 학습 경로를 **Roadmap UI**로 시각화
- 인터랙티브 카드 및 모달 UI를 활용한 상세 정보 탐색

---

### 2. ⚡ High Performance & Mobile Optimization

다양한 디바이스에서 빠르고 안정적으로 사용할 수 있도록 최적화했습니다.

- **Mobile-First Responsive Design**
- 이미지 **Lazy Loading**
- 폰트 최적화를 통한 초기 렌더링 성능 개선
- Tailwind CSS Utility Class 기반의 반응형 레이아웃
- 모바일 / 태블릿 / 데스크톱 환경 대응

---

### 3. 🎨 Clean UI / UX & Design System

복잡한 학습 정보를 최대한 쉽게 이해할 수 있도록 깔끔한 UI를 지향했습니다.

- 직관적인 네비게이션 구조
- 모던하고 미니멀한 비주얼 디자인
- 재사용 가능한 UI 컴포넌트
- Atomic Design에 가까운 컴포넌트 모듈화
- 일관된 간격, 타이포그래피 및 인터랙션 설계

---

## 🛠 Tech Stack

### Frontend

| Technology | Usage |
|---|---|
| **React** | 컴포넌트 기반 UI 개발 |
| **TypeScript** | 정적 타입 시스템 및 안정적인 개발 |
| **Tailwind CSS** | 반응형 스타일링 및 디자인 구현 |
| **Lucide React** | 아이콘 시스템 |

### Deployment & Development

| Technology | Usage |
|---|---|
| **Git / GitHub** | 버전 관리 및 소스 코드 관리 |
| **Netlify** | 정적 웹 배포 및 CI/CD |

---

## 🏗 Architecture

컴포넌트 기반 아키텍처를 사용하여  
화면과 기능을 독립적으로 관리하고 재사용할 수 있도록 구성했습니다.

```text
UI Layer
   │
   ├── Header
   ├── Curriculum Card
   ├── Roadmap
   ├── Modal
   └── Navigation
   │
   ▼
Page Layer
   │
   ├── Main Page
   └── Curriculum / Detail Views
   │
   ▼
Data Layer
   │
   ├── Curriculum Data
   └── Learning Roadmap Data
```

이러한 구조를 통해 새로운 커리큘럼이나 UI 컴포넌트를 추가할 때  
기존 코드의 수정 범위를 최소화할 수 있도록 설계했습니다.

---

## 📂 Project Structure

```text
.
├── src/
│   ├── assets/          # 이미지, 폰트 등 정적 리소스
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   │   ├── Header
│   │   ├── Card
│   │   ├── Modal
│   │   └── ...
│   ├── data/            # 커리큘럼 / 로드맵 데이터
│   ├── pages/           # 페이지 및 화면 구성
│   ├── styles/          # 글로벌 스타일 및 Tailwind 설정
│   └── App.tsx          # 애플리케이션 엔트리
│
├── public/              # 파비콘 및 정적 파일
├── index.html           # HTML 템플릿
├── tailwind.config.js   # Tailwind CSS 설정
├── package.json         # 프로젝트 의존성 관리
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

다음 환경이 필요합니다.

- **Node.js v18.0.0 이상**
- **npm / pnpm / yarn**

### Installation

#### 1. Repository Clone

```bash
git clone https://github.com/your-username/so-and-math.git
```

#### 2. Project Directory 이동

```bash
cd so-and-math
```

#### 3. Dependencies 설치

```bash
npm install
```

#### 4. Development Server 실행

```bash
npm run dev
```

실행 후 터미널에 표시되는 로컬 주소로 접속하면 프로젝트를 확인할 수 있습니다.

---

## 🌐 Deployment

본 프로젝트는 **Netlify**를 통해 배포되며, GitHub Repository와 연동된 자동 배포 환경을 사용합니다.

```text
GitHub Push
    │
    ▼
Netlify Build
    │
    ▼
Production Deploy
```

`main` 브랜치에 코드가 push되면 Netlify에서 빌드 및 배포가 자동으로 진행됩니다.

### 🔗 Live Site

**https://sonmath.netlify.app/**

---

## 📱 Responsive Design

다양한 화면 크기에서 사용할 수 있도록 반응형 UI를 적용했습니다.

```text
Mobile
  ↓
Tablet
  ↓
Desktop
```

모바일 환경을 우선적으로 고려하고, 화면 크기에 따라  
레이아웃과 카드 구성 등이 자연스럽게 변경되도록 구현했습니다.

---

## 📈 Performance

웹 서비스의 초기 로딩 속도와 사용성을 개선하기 위해 다음과 같은 최적화를 적용했습니다.

- 이미지 Lazy Loading
- 폰트 최적화
- 불필요한 리소스 로딩 최소화
- 반응형 레이아웃 최적화
- 컴포넌트 기반 구조를 통한 유지보수성 향상

---

## 🔮 Future Improvements

향후 다음과 같은 기능을 확장할 수 있습니다.

- [ ] 사용자별 학습 진도 저장
- [ ] 학습 기록 / 통계 대시보드
- [ ] 로그인 및 학생별 맞춤 커리큘럼
- [ ] 커리큘럼 검색 기능
- [ ] 학습 완료 체크 및 Progress UI
- [ ] 관리자용 커리큘럼 관리 기능

---

## 🎓 Project Goals

이 프로젝트는 단순한 학원 소개 페이지를 넘어,

> **"수학 학습 과정을 어떻게 하면 더 직관적으로 보여줄 수 있을까?"**

라는 문제에서 출발해  
커리큘럼 데이터와 인터랙티브 UI를 결합하는 방향으로 설계되었습니다.

이를 통해 **React + TypeScript + Tailwind CSS** 기반의  
실제 서비스형 프론트엔드 개발 경험을 쌓는 것을 목표로 합니다.

---

## 📄 License

This project is licensed under the **MIT License**.

---

<p align="center">
  <strong>📐 So & Math Academy</strong><br/>
  Interactive Mathematics Curriculum Web Platform
</p>
