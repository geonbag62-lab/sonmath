📐 소앤수학학원 (So & Math Academy) Web Platform

소앤수학학원 웹 플랫폼 프로젝트

수학 커리큘럼 시각화, 학습 로드맵 탐색 및 인터랙티브 UI를 제공하는 반응형 웹 애플리케이션입니다.

🌐 Live Demo 보기

⚡ Overview

소앤수학학원 웹 플랫폼은 수학 학습 콘텐츠와 커리큘럼을 직관적이고 인터랙티브하게 전달하기 위해 제작된 웹 서비스입니다.

컴포넌트 기반 아키텍처를 바탕으로 모든 디바이스에서 최적의 성능과 UI/UX를 제공합니다.

Fast & Responsive: Mobile-First 접근 방식을 통한 반응형 웹 디자인

Interactive UI: 수학 로드맵 및 커리큘럼 인터랙티브 탐색

Modern Tech Stack: TypeScript + React + Tailwind CSS 조합의 안정적인 프론트엔드 환경

✨ Key Technical Features

1. 🎯 Interactive Curriculum & Learning Roadmap

초·중·고등 과정별 맞춤형 수학 커리큘럼 필터링 및 인터랙티브 카드 UI

단계별 학습 경로(Roadmap) 시각화 컴포넌트 구현

2. ⚡ High Performance & Mobile Optimization

Lighthouse Score Optimization: 이미지 Lazy Loading 및 폰트 최적화를 통한 빠른 First Contentful Paint (FCP) 달성

Responsive Layout: Tailwind CSS의 Utility Class를 적극 활용하여 모바일, 태블릿, 데스크톱 전 디바이스 맞춤 레이아웃 적용

3. 🎨 Clean UI / UX & Design System

직관적인 네비게이션 구조 및 모던하고 깔끔한 비주얼 디자인

재사용 가능한 atomic design 형태의 UI 컴포넌트 모듈화

🛠 Tech Stack

Frontend

Framework / Library: React

Language: TypeScript

Styling: Tailwind CSS

Icons: Lucide React

Deployment & CI/CD

Hosting: Netlify

Version Control: Git & GitHub

📂 Project Structure

.
├── src/
│   ├── assets/          # 이미지, 폰트 등 정적 리소스
│   ├── components/      # 재사용 가능한 UI 컴포넌트 (Header, Card, Modal 등)
│   ├── data/            # 커리큘럼 및 학습 로드맵 데이터 (JSON / TS)
│   ├── pages/           # 메인 페이지 및 세부 화면 뷰
│   ├── styles/          # Tailwind CSS 글로벌 스타일 설정
│   └── App.tsx          # 메인 애플리케이션 엔트리
├── public/              # 파비콘 및 정적 파일
├── index.html           # HTML 템플릿
├── tailwind.config.js   # Tailwind CSS 설정
├── package.json         # 프로젝트 의존성 관리
└── README.md


🚀 Getting Started

Prerequisites

Node.js (v18.0.0 이상) 및 npm / pnpm / yarn 설치가 필요합니다.

Installation

# 1. 클론
git clone https://github.com/your-username/so-and-math.git

# 2. 프로젝트 디렉토리 이동
cd so-and-math

# 3. 의존성 패키지 설치
npm install

# 4. 개발 서버 실행
npm run dev


🌐 Deployment

본 프로젝트는 Netlify를 통해 자동 배포(CI/CD)되도록 구축되어 있습니다.

main 브랜치에 코드가 푸시되면 빌드가 실행되며 라이브 사이트에 자동 반영됩니다.

Live URL: https://sonmath.netlify.app/

📄 License

This project is licensed under the MIT License.
