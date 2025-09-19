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
npx shadcn@latest init
npm i react-icons
npm i next-themes
npm i mongoose mongodb @auth/mongodb-adapter
npm i bcryptjs
npm i --save-dev @types/bcryptjs
npm i nodemailer
npm i --save-dev @types/nodemailer
npm i next-auth@beta
```

```
npx shadcn@latest add button
npx shadcn@latest add navigation-menu
npx shadcn@latest add dropdown-menu
npx shadcn@latest add alert-dialog
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add sonner
npx shadcn@latest add checkbox
npx shadcn@latest add sheet

```

```
form 설치하면 자동 설치
npm i zod
npm i react-hook-form
npm i @hookform/resolvers
```

```

npm i next-themes
npm i react-icons
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

- layout.tsx 설정

### 03. 회원가입

**1단계: 약관 동의**

- 이용약관 및 개인정보취급방침 체크
- 전체 동의 체크박스로 편의성 제공
- 약관 보기 링크 (추후 구현 가능)

**2단계: 이메일 입력**

- 이메일 주소 입력 및 유효성 검사
- 인증 메일 발송

**3단계: 이메일 인증**

- 6자리 인증번호 입력
- 5분 제한 시간 안내

**4단계: 사용자 정보 입력**

- 이름과 비밀번호 입력
- 비밀번호 확인 필드 추가
- 비밀번호 일치 검증

**5단계: 회원가입 완료**

- 축하 메시지 및 성공 아이콘
- 로그인 페이지로 이동 버튼
- 메인으로 돌아가기 버튼
