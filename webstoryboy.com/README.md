# 🌟 WebStoryBoy – 개발을 배우다. 🌟

WebStoryBoy는 최신 웹 기술을 깊이 있게 다루는 종합 <b>개발 튜토리얼</b> 플랫폼입니다.  
단순한 문서가 아닌, 단계별 인터랙티브 가이드와 실전 프로젝트를 통해 실무 역량을 쌓아보세요!

**WebStoryBoy = 웹 + 스토리 + 보이 (개발을 배우는 공간)**  
"Web" → 최신 웹 기술과 트렌드  
"Story" → 배우고 성장하는 개발자의 이야기  
"Boy" → 끊임없이 탐구하는 열정적인 개발자

**WebStoryBoy의 목표와 철학**  
프로그래밍은 단순한 코드가 아닌, 배움의 과정과 성장의 기록입니다.  
웹스토리보이는 최신 웹 개발 지식을 공유하고, 실전에서 활용할 수 있는 강력한 개발 역량을 길러주는 공간입니다.

# 블로그 만들기

## vscode-extensions

1.  eslint
2.  Prettier - Code formatter
3.  Material Icon Theme
4.  Tailwind CSS IntelliSense
5.  es7+ react snippets
6.  pretty typescript errors

## setting.json

```js
{
  // UI
  "workbench.iconTheme": "material-icon-theme",
  "explorer.compactFolders": false,

  // Editor
  "editor.minimap.enabled": false,
  "editor.fontSize": 13,
  "editor.formatOnSave": true,

  // Prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true
}
```

## document

1. based on docs at https://nextjs.org/docs/app/getting-started/installation run
2. based on docs at https://ui.shadcn.com/docs/installation/next run
3. based on docs at https://react-icons.github.io/react-icons/ run
4. based on docs at https://zod.dev/ run
5. based on docs at https://mongoosejs.com/docs/guide.html/ run
6. based on docs at https://vercel.com/ run
7. based on docs at https://authjs.dev/ run

### 01. 설치하기

```
npx create-next-app@latest ./
```

```
npx shadcn@latest init
npm i tw-animate-css
npm i react-icons
npm i next-themes
npm i next-auth@beta
npm i mongoose mongodb @auth/mongodb-adapter
npm i bcryptjs
npm i --save-dev @types/bcryptjs
npm i zod
npm i react-hook-form
npm i @hookform/resolvers
npm i nodemailer
npm i --save-dev @types/nodemailer
npm i react-markdown --legacy-peer-deps
npm i react-markdown-editor-lite --legacy-peer-deps
npm install react-syntax-highlighter --legacy-peer-deps
npm i --save-dev @types/react-syntax-highlighter --legacy-peer-deps

```

```
npx shadcn@latest add button
npx shadcn@latest add sonner
npx shadcn@latest add dropdown-menu
npx shadcn@latest add navigation-menu
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add table
npx shadcn@latest add checkbox
npx shadcn@latest add select
npx shadcn@latest add pagination
npx shadcn@latest add alert-dialog
npx shadcn@latest add dialog
npx shadcn@latest add tabs
npx shadcn@latest add tooltip
npx shadcn@latest add badge
npx shadcn@latest add sheet
npx shadcn@latest add scroll-area
npx shadcn@latest add accordion
npx shadcn@latest add textarea
npx shadcn@latest add card
npx shadcn@latest add skeleton
npx shadcn@latest add breadcrumb
```

### 02. 기본 셋팅

- public
- error.tsx
- favicon.ico
- globals.css
- layout.tsx
- loading.tsx
- not-found.tsx

### 03. 헤더 작업하기

- app/(home)/page.tsx
- app/(home)/layout.tsx
- components/header/index.tsx
- components/footer/index.tsx
- lib/constants.ts
- components/header/header-logo.tsx
- components/header/header-left.tsx
- components/header/header-right.tsx
- lib/utils.ts

### 04. 메인/서브 페이지 작업하기

- app/(home)/page.tsx
- app/(root)/(content)/inspiration/page.tsx
- app/(root)/(content)/inspiration/site/page.tsx
- app/(root)/(content)/inspiration/tutorial/page.tsx
- app/(root)/(content)/lecture/page.tsx
- app/(root)/(content)/lecture/javascript-typescript/page.tsx
- app/(root)/(content)/lecture/webdesign2025/page.tsx
- app/(root)/(content)/reference/page.tsx
- app/(root)/(content)/reference/html/page.tsx
- app/(root)/(content)/reference/css/page.tsx
- app/(root)/(content)/reference/javascript/page.tsx
- app/(root)/(content)/tutoial/page.tsx
- app/(root)/(content)/tutoial/gsap-animation/page.tsx
- app/(root)/(content)/tutoial/uiux-design/page.tsx

### 05. 공지사항 페이지

- app/(root)/notice/page.tsx

### 06. 문의하기 페이지

- app(root)/contact/page.tsx
- lib/actions/contact.action.ts
- lib/db/model/contact.model.ts
- lib/types.ts
- lib/validator.ts

### 07. 회원가입

- app/(auth)/sign-up/page.tsx
- components/auth/signup-footer.tsx
- componetns/user/user-conditions.tsx 이용약관
- componetns/user/user-privacy.tsx 개인정보취급방침
- components/auth/signup-form.tsx
- lib/actions/user.action.ts 액션
- lib/db/model/user.model.ts 모델 설정

### 08. 로그인

- app/(auth)/sign-in/page.tsx
- components/auth/signin-footer.tsx
- components/auth/signin-form.tsx
- lib/actions/user.action.ts
- lib/types.ts
- lib/validator.ts

### 09. 소셜 로그인

- components/auth/google-signin-form.tsx 구글
- components/auth/github-signin-form.tsx 깃헙
- app/api/auth/[...nextauth]/route.ts API 설정
- auth.th
- middleware.ts

### 10. 프로필 설정

- components/header/header-right.tsx
- components/user/user-profile.tsx

### 11. 관리자 - 회원관리 설정

- app/admin/user/page.tsx
- components/page/page-index.tsx : 회원 목록 페이지
- components/page/page-selector.tsx : 회원 목록 갯수
- components/user/user-delete.tsx : 회원 삭제
- components/user/user-edit.tsx : 회원 수정

## 12. 관리자 - 글 작성하기

- app/admin/posts/create/page.tsx : 글 작성하기
- components/post/post-select.tsx : 카테고리 선택
- components/post/post-tooltip.tsx : 툴팁
- components/post/post-tag.tsx : 태그

## 13. 관리자 - 글 목록

- app/admin/posts/page.tsx : 글 목록 페이지
