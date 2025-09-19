# Byeolstar.com

## 설치 및 설정

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
프로젝트 루트에 `.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```bash
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# GitHub OAuth (선택사항)
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# MongoDB
MONGODB_URI=your_mongodb_uri_here
```

### 3. Google OAuth 설정 방법
1. [Google Cloud Console](https://console.cloud.google.com/)에 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. "API 및 서비스" > "사용자 인증 정보" 메뉴로 이동
4. "사용자 인증 정보 만들기" > "OAuth 2.0 클라이언트 ID" 선택
5. 애플리케이션 유형을 "웹 애플리케이션"으로 설정
6. 승인된 리디렉션 URI에 `http://localhost:3000/api/auth/callback/google` 추가
7. 생성된 클라이언트 ID와 클라이언트 보안 비밀번호를 `.env.local`에 복사

### 4. 개발 서버 실행
```bash
npm run dev
```

## 컴포넌트 설치 명령어

npx create-next-app@latest ./

npx shadcn@latest init

npx shadcn@latest add button
npx shadcn@latest add dropdown-menu
npx shadcn@latest add alert-dialog
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add sonner
npx shadcn@latest add checkbox
npx shadcn@latest add sheet
npx shadcn@latest add textarea
npx shadcn@latest add scroll-area
npx shadcn@latest add table
npx shadcn@latest add pagination
npx shadcn@latest add card
npx shadcn@latest add skeleton
npx shadcn@latest add switch
npx shadcn@latest add select
npx shadcn@latest add tabs
npx shadcn@latest add tooltip
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add carousel
npx shadcn@latest add avatar
npx shadcn@latest add accordion

npm i next-themes
npm i react-icons
npm i next-auth@beta
npm i mongoose mongodb @auth/mongodb-adapter
npm i bcryptjs
npm i --save-dev @types/bcryptjs
npm i nodemailer
npm i --save-dev @types/nodemailer
npm i react-markdown --legacy-peer-deps
npm i react-markdown-editor-lite --legacy-peer-deps
npm install react-syntax-highlighter --legacy-peer-deps
npm i --save-dev @types/react-syntax-highlighter --legacy-peer-deps
```