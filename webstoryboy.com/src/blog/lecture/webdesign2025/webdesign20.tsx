import CodeBlock from '@/components/post/post-code'

export default function Webdesign20() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 E-4 유형 레이아웃을 함께 만들어보겠습니다. E유형은
        웹디자인기능사 실기 시험에서 구조적으로 가장 복잡한 유형 중 하나입니다.
      </p>
      <p>
        다양한 콘텐츠 구성이 들어가고, 각 영역의 너비와 높이도 다양하게 설정되어
        있어 초반에는 조금 헷갈릴 수 있어요. 하지만 걱정하지 마세요! 지금까지
        A~E-3 유형까지 연습해오셨다면, 이미 레이아웃의 흐름과 방식은 충분히
        익숙하실 거예요. E-4 유형 역시 핵심은 반복 연습과 구조 파악입니다. 자,
        그럼 복잡함 속에서 규칙을 찾아가는 즐거움! 같이 도전해볼까요? 렛츠 기릿!
        💪✨
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutE-4.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 E-4으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 E-4</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        main과 footer로 이루어진 2단구조로 먼저 작업을 하겠습니다. 화면 높이
        값에 맞게 height 값을 설정해야 함으로 main의 높이 값은 height:
        calc(100vh - 120px);로 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <main id="main"></main>
        <footer id="footer"></footer>
    </div>
</body>`}
      />
      <CodeBlock
        language='css'
        code={` * {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 100%;           
}
#main {
    width: 100%;
    height: calc(100vh - 120px);
    background-color: #efefef;
}
#footer {
    width: 100%;
    height: 120px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        메인 콘텐츠는 3개의 영역으로 이루어져 있으며, header, contents, slider로
        구성하였습니다. 여기서 헤더와 콘텐츠는 고정값이고, 슬라이드는 유동적이기
        때문에 width: calc(100% - 600px); 이렇게 설정해야 반응형이 가능합니다.
        이렇게 하면 화면의 크기를 변경해도 화면에 맞게 변하는 모습을 볼 수
        있습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <main id="main">
        <header id="header"></header>
        <section id="contents"></section>
        <article id="slider"></article>
    </main>
    <footer id="footer"></footer>
</div>`}
      />
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 100%;           
}
#main {
    width: 100%;
    height: calc(100vh - 120px);
    display: flex;
}
#header {
    width: 200px;
    height: 100%;
    background-color: #efefef;
}
#contents {
    width: 400px;
    height: 100%;
    background-color: #e3e3e3;
}
#slider {
    width: calc(100% - 600px);
    height: 100%;
    background-color: #d9d9d9;
}
#footer {
    width: 100%;
    height: 120px;
    background-color: #d1d1d1;
}`}
      />

      <h4>2. 각 섹션 작업하기</h4>
      <p>
        메인 박스 안에 헤더 영역을 작업하겠습니다. 헤더 영역은 로고와 메뉴
        영역으로 나누어져 있습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<header id="header">
    <h1></h1>
    <nav></nav>
</header>
<!-- //header -->`}
      />
      <CodeBlock
        language='css'
        code={`#header {
    width: 200px;
    height: 100%;
}
#header h1 {
    width: 100%;
    height: 10%;
    background-color: #efefef;
}
#header nav {
    width: 100%;
    height: 90%;
    background-color: #e3e3e3;
}`}
      />
      <p>
        컨텐츠 영역은 4개의 영역으로 이루어져 있습니다. 배너, 공지사항, 갤러리,
        링크 영역으로 이루어져 있으며, 높이 값은 화면 비율에 맞추어야 하기
        때문에 %로 작업하였습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <article class="banner"></article>
    <article class="notice"></article>
    <article class="gallery"></article>
    <article class="link"></article>
</section>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 400px;
    height: 100%;
}
#contents .banner {
    width: 100%;
    height: 15%;
    background-color: #d9d9d9;
}
#contents .notice {
    width: 100%;
    height: 35%;
    background-color: #d1d1d1;
}
#contents .gallery {
    width: 100%;
    height: 35%;
    background-color: #c7c7c7;
}
#contents .link {
    width: 100%;
    height: 15%;
    background-color: #bcbcbc;
}`}
      />
      <p>
        슬라이드 영역은 특별한 것이 없으니 영역만 잡고 넘어가겠습니다. 대신
        width 값은 유동적으로 변해야 하기 때문에 width: calc(100% - 600px)
        이렇게 설정했습니다.
      </p>
      <CodeBlock language='html' code={`<article id="slider"></article>`} />
      <CodeBlock
        language='css'
        code={`#slider {
    width: calc(100% - 600px);
    height: 100%;
    background-color: #b1b1b1;
}`}
      />
      <p>
        푸터 영역은 3개의 영역으로 나누고, 두번재 영역은 다시 두개의 영역으로
        작업하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2">
        <div class="footer2-1"></div>
        <div class="footer2-2"></div>
    </div>
    <div class="footer3"></div>
</footer>
<!-- //footer -->`}
      />
      <CodeBlock
        language='css'
        code={`#footer {
    width: 100%;
    height: 120px;
    display: flex;
}
#footer .footer1 {
    width: 200px;
    height: 120px;
    background-color: #a3a3a3;
}
#footer .footer2 {
    width: calc(100% - 500px);
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #9d9d9d;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #929292;
}
#footer .footer3 {
    width: 300px;
    height: 120px;
    background-color: #838383;
}`}
      />

      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;main&gt;</code> : 전체 콘텐츠를 감싸는 영역. header,
          contents, slider를 포함합니다.
        </li>
        <li>
          <code>&lt;header&gt;</code> : 로고와 내비게이션을 포함한 왼쪽 고정
          메뉴 영역입니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 콘텐츠 영역으로 배너, 공지사항, 갤러리,
          링크로 구성됩니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 슬라이드 영역과 콘텐츠 내부 블록들에
          사용됩니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 3분할 + 중첩 구조로 되어 있는 사이트
          하단입니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>height: calc(100vh - 120px)</code> → 전체 화면 높이에서 푸터
          높이를 뺀 값을 메인 영역에 지정합니다.
        </li>
        <li>
          <code>width: calc(100% - 600px)</code> → 고정된 header(200px) +
          contents(400px)를 제외한 슬라이드 영역을 유동적으로 만듭니다.
        </li>
        <li>
          <code>height: 퍼센트(%)</code> → 콘텐츠 영역 내부는 비율 기반으로
          높이를 설정하여 유연하게 구성됩니다.
        </li>
        <li>
          <code>background-color</code> → 구조 파악과 디버깅을 위한 임시
          색상으로 각 영역을 구분합니다.
        </li>
      </ul>

      <h5>✅ flex 속성 정리</h5>
      <ul>
        <li>
          <code>display: flex</code> → <code>#main</code>과 <code>#footer</code>
          에 적용되어 가로 정렬을 구현합니다.
        </li>
        <li>
          <code>flex-direction</code> → 기본값 <code>row</code>로 좌우 영역
          정렬. 필요 시 <code>column</code>도 사용 가능
        </li>
        <li>
          <code>justify-content</code>, <code>align-items</code> → 주축 및
          교차축 정렬 시 사용됩니다.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          <strong>calc()</strong>를 활용한 유동 레이아웃 구현 (가로 및 세로 방향
          모두 적용)
        </li>
        <li>
          콘텐츠 섹션의 <strong>퍼센트 기반 높이 분할</strong> 방식 숙지
        </li>
        <li>
          푸터의 <strong>3단 + 내부 2단 중첩 레이아웃</strong> 구성 연습
        </li>
        <li>섹션 간 구조 차이 파악과 세부 정렬 구조 이해</li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        이제 E-4 유형까지 모두 완성하셨습니다 🎉 처음에는 복잡해 보일 수 있지만,
        전체 레이아웃 흐름 → 각 섹션 구성 → 세부 스타일 적용이라는 틀로 접근하면
        어렵지 않게 해결할 수 있습니다.
      </p>
      <ul>
        <li>연습은 많이 할수록 좋습니다.</li>
        <li>오답도 중요합니다. 어디서 막히는지 스스로 점검해보세요.</li>
        <li>
          시험장에서는 시간도 중요하니, 구조 파악에 익숙해질 때까지 손으로 직접
          그려보고 코딩해보는 것도 큰 도움이 됩니다.
        </li>
      </ul>
      <p>그럼 다음 유형에서도 다시 만나요! 고생 많으셨습니다 😎💯</p>
    </>
  )
}
