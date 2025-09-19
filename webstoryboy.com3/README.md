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

- public : 이미지 정리
- favicon.ico : 파비콘
- error.tsx : 에러 페이지
- loading.tsx : 로딩 페이지
- not-found.tsx : 404 페이지
- layout.tsx : 레이아웃 셋팅
- globals.css : 폰트 셋팅

### 03. 헤더 작업하기

- app/(home)/page.tsx : 홈 페이지 만들기
- app/(home)/layout.tsx : 홈 레이아웃 설정
- components/header/index.tsx : 헤더 컴퍼넌트 설정
- components/footer/index.tsx : 푸터 컴퍼넌트 설정
- components/header/header-logo.tsx : 헤더 로고 설정
- components/header/header-left.tsx : 헤더 왼쪽 메뉴 설정
- components/header/mobile-menu.tsx : 헤더 왼쪽 모바일 메뉴 설정
- components/header/menu-item.tsx : 헤더 왼쪽 모바일 메뉴 아이템 설정
- components/header/header-right.tsx : 헤더 오른쪽 메뉴 설정

### 04. 페이지 셋팅 및 레이아웃 셋팅

- app/(root)/contact/page.tsx : 연락처 페이지 설정
- app/(root)/contact/layout.tsx : 연락처 레이아웃 설정
- app/(root)/email/page.tsx : 이메일 페이지 설정
- app/(root)/email/layout.tsx : 이메일 레이아웃 설정
- app/(root)/notice/page.tsx : 공지사항 페이지 설정
- app/(root)/notice/layout.tsx : 공지사항 레이아웃 설정

- app/(root)/inspiration/page.tsx : 인스퍼레이션 페이지 설정
- app/(root)/inspiration/layout.tsx : 인스퍼레이션 레이아웃 설정
- app/(root)/inspiration/site/page.tsx : 인스퍼레이션 - 사이트 페이지 설정
- app/(root)/inspiration/tutorial/page.tsx : 인스퍼레이션 - 튜토리얼 페이지 설정

- app/(root)/lecture/page.tsx : 강의 페이지 설정
- app/(root)/lecture/layout.tsx : 강의 레이아웃 설정
- app/(root)/lecture/type/page.tsx : 강의 - 타입스크립트 페이지 설정
- app/(root)/lecture/webdesign2025/page.tsx : 강의 - 웹디자인기능사 페이지 설정

- app/(root)/reference/page.tsx : 레퍼런스 페이지 설정
- app/(root)/reference/layout.tsx : 레퍼런스 레이아웃 설정
- app/(root)/reference/html/page.tsx : 레퍼런스 - HTML 페이지 설정
- app/(root)/reference/css/page.tsx : 레퍼런스 - CSS 페이지 설정
- app/(root)/reference/javascript/page.tsx : 레퍼런스 - JAVASCRIPT 페이지 설정

- app/(root)/tutorial/page.tsx : 튜토리얼 페이지 설정
- app/(root)/tutorial/layout.tsx : 튜토리얼 레이아웃 설정
- app/(root)/tutorial/css-animation/page.tsx : 튜토리얼 - CSS 애니메이션 페이지 설정
- app/(root)/tutorial/gsap-animation/page.tsx : 튜토리얼 - GSAP 애니메이션 페이지 설정

### 05. 공지사항 페이지

- app/(root)/notice/page.tsx

### 06. 문의하기 페이지

- app(root)/contact/page.tsx : 연락처 페이지 설정
- lib/actions/contact.action.ts : 서버 액션 설정
- lib/db/model/contact.model.ts : 디비 모델 설정
- lib/types.ts : 타입 설정
- lib/validator.ts : 유효성 검사 설정

### 07. 회원가입 / 로그인 / 소셜 로그인 / 아이디.비밀번호 찾기

- app/(auth)/sign-up/page.tsx : 회원가입 페이지 설정
- components/auth/signup-form.tsx : 회원가입 폼 설정
- components/auth/signup-footer.tsx : 회원가입 푸터 설정

- app/(auth)/sign-in/page.tsx : 로그인 페이지 설정
- components/auth/signin-form.tsx : 로그인 폼 설정
- components/auth/signin-footer.tsx : 로그인 푸터 설정

- componetns/user/user-conditions.tsx 이용약관
- componetns/user/user-privacy.tsx 개인정보취급방침

- lib/actions/user.action.ts : 서버 액션 설정
- lib/db/model/user.model.ts : 디비 모델 설정
- lib/types.ts : 타입 설정
- lib/validator.ts : 유효성 검사 설정

- components/auth/google-signin-form.tsx : 구글 설정
- components/auth/github-signin-form.tsx : 깃헙 설정
- app/api/auth/[...nextauth]/route.ts : API 설정
- auth.th : 몽고디비 설정
- middleware.ts : 몽고디비 설정

- components/auth/find-email-dialog.tsx : 이메일 찾기 설정
- components/auth/find-email.tsx : 이메일 찾기 설정
- components/auth/find-pw-dialog.tsx : 비밀번호 찾기 설정
- components/auth/find-pw.tsx : 비밀번호 찾기 설정
- email/email-verification : 이메일 인증 확인
- email/email-password : 비밀번호 인증 확인

### 10. 프로필 설정

- components/header/header-right.tsx
- components/user/user-profile.tsx : 프로필 컴퍼넌트 설정
- 수정 작업 해야함 \*\*

### 11. 관리자 - 문의사항 목록 페이지

- app/admin/contact/page.tsx : 문의하기 페이지 설정
- components/page/page-index.tsx : 페이지 번호 설정
- components/page/page-selector.tsx : 페이지 갯수 설정
- components/contact/contact-delete.tsx : 문의하기 삭제 설정

### 12. 관리자 - 회원목록 페이지

- app/admin/users/page.tsx : 회원 관리 페이지 설정
- components/page/page-index.tsx : 페이지 번호 설정
- components/page/page-selector.tsx : 페이지 갯수 설정
- components/user/user-edit.tsx : 회원 수정 설정
- components/user/user-delete.tsx : 회원 삭제 설정

### 12. 관리자 - 글 목록 작성하기

- app/admin/posts/page.tsx : 글 관리 페이지 설정
- components/page/page-index.tsx : 페이지 번호 설정
- components/page/page-selector.tsx : 페이지 갯수 설정
- components/post/post-delete.tsx : 페이지 삭제하기

### 13. 관리자 - 글 작성하기

- app/admin/posts/create/page.tsx : 글 작성하기 설정
- components/post/post-create.tsx : 글 작성하기 폼 설정
- components/post/post-tag.tsx : 글 작성하기 태그 설정
- components/post/post-tooltip.tsx : 글 작성하기 툴팁 설정
- components/post/post-select.tsx : 글 작성하기 선택하기 설정

### 14. 관리자 - 글 수정하기

- app/admin/posts/[id]/page.tsx : 글 수정하기 설정
- components/post/post-update.tsx : 글 수정하기 폼 설정

### 15. 글 상세페이지 만들기

- app/post/[slug]/page.tsx : 글 상세 페이지 설정
- app/post/layout.tsx : 글 상세 페이지 레이아웃 설정
- blog : 상세페이지 컴퍼넌트 설정
- components/post/post-like : 좋아요 버튼
- components/post/post-list : 목록 보기
- components/post/post-pdf : PDF 보기

### 16. 레퍼런스 페이지
