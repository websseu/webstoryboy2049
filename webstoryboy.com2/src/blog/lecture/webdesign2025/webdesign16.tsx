import CodeBlock from '@/components/post/post-code'

export default function Webdesign16() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간에는 D유형의 마지막 레이아웃, D-4 유형을 함께 연습해보겠습니다.
        전체적인 구성은 지금까지의 D유형과 크게 다르지 않지만, 세부 구조에서
        약간의 차이가 있으니 꼼꼼하게 확인하면서 따라와 주세요. 하지만 걱정
        마세요! 여러분이 기본 레이아웃 구조에 익숙해졌다면, 이처럼 약간의 변형이
        있어도 얼마든지 스스로 구현할 수 있을 거예요. 💪 그럼 마지막 유형까지
        완벽하게 마무리해볼까요? 렛츠 고! 🫢✨
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutD-4.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 D-4으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 D-4</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 asdie, main, footer로 나누어 작업하였습니다. 왼쪽
        사이드는 고정값이기 때문에 width: 200px를 설정하고, 컨텐츠 영역은 width:
        100%를 설정했습니다. 이렇게 하면 가로 정렬이 안되기 때문에 고정값
        200px을 빼주고 width 값을 설정해야 합니다. main의 가로 값은 width:
        calc(100% - 200px)로 설정해야 구조가 깨지지 않겠죠!
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <aside id="aside"></aside>
        <main id="main"></main>
        <footer id="footer"></footer>
    </div>
</body>`}
      />
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
#aside {
    width: 200px;
    height: 800px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 800px;
    background-color: #e3e3e3;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #d9d9d9;
}`}
      />
      <p>
        메인 콘텐츠는 3개의 영역으로 이루어져 있으며, slider, link, contents로
        구성하였습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <aside id="aside"></aside>
    <main id="main">
        <article id="slider"></article>
        <article id="link"></article>
        <section id="contents"></section>
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
    display: flex;
    flex-wrap: wrap;
}
#aside {
    width: 200px;
    height: 800px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 800px;
    background-color: #e3e3e3;
}
#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
}
#link {
    width: 100%;
    height: 150px;
    background-color: #d9d9d9;
}
#contents {
    width: 100%;
    height: 250px;
    background-color: #c7c7c7;
}
#footer {
    width: 100%;
    height: 120px;
    background-color: #bcbcbc;
}`}
      />
      <h4>2. 각 섹션 작업하기</h4>
      <p>
        사이드 영역의 로고와 메뉴를 설정하겠습니다. 따로 크기에 대한 정의가
        없으므로, 임의로 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<aside id="aside">
    <h1 class="logo"></h1>
    <nav class="nav"></nav>
</aside>`}
      />
      <CodeBlock
        language='css'
        code={`#aside {
    width: 200px;
}
#aside .logo {
    width: 100%;
    height: 100px;
    background-color: #efefef;
}
#aside .nav {
    width: 100%;
    height: 700px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        이번 유형 슬라이드에는 아무것도 없네요!. 영역만 잡고 넘어가겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
</article>`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
}`}
      />
      <p>링크 영역도 특이한 부분이 없기 때문에 영역만 확인하겠습니다.</p>
      <CodeBlock language='html' code={`<article id="link"></article>`} />
      <CodeBlock
        language='css'
        code={`#link {
    width: 100%;
    height: 150px;
    background-color: #d1d1d1;
}`}
      />
      <p>콘텐츠 공지사항 영역은 두개의 영역으로 나누어서 작업하겠습니다.</p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <div class="content1"></div>
    <div class="content2"></div>
</section>`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 100%;
    display: flex;
}
#contents .content1 {
    width: 50%;
    height: 250px;
    background-color: #c7c7c7;
}
#contents .content2 {
    width: 50%;
    height: 250px;
    background-color: #bcbcbc;
}`}
      />
      <p>
        푸터 영역은 3개의 영역으로 나뉘고, 두번째 영역은 또 다시 두개의 영역으로
        나누어집니다.
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
    display: flex;
}
#footer .footer1 {
    width: 20%;
    height: 120px;
    background-color: #b1b1b1;
}
#footer .footer2 {
    width: 60%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #a3a3a3;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #9d9d9d;
}
#footer .footer3 {
    width: 20%;
    height: 120px;
    background-color: #929292;
}`}
      />
      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;aside&gt;</code> : 고정된 사이드 메뉴 영역으로, 로고와
          내비게이션이 포함됩니다.
        </li>
        <li>
          <code>&lt;main&gt;</code> : 슬라이드, 링크, 콘텐츠 영역 등 주요
          콘텐츠가 위치합니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 슬라이드와 링크 같은 독립적인 콘텐츠
          블록을 구성할 때 사용됩니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 공지사항 콘텐츠 등을 묶을 때
          사용됩니다. 이번에는 두 개의 콘텐츠 박스를 포함합니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단 영역으로 3분할 구조 + 중첩
          구조로 구성되어 있습니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → <code>#wrap</code>과 <code>#footer</code>{' '}
          등에 적용하여 가로 정렬을 구현합니다.
        </li>
        <li>
          <code>flex-wrap: wrap</code> → 줄 바꿈을 가능하게 하여 푸터가 아래로
          내려가도록 설정합니다.
        </li>
        <li>
          <code>width: calc(100% - 200px)</code> → 고정 사이드 영역을 제외한
          가변형 메인 콘텐츠 영역을 계산합니다.
        </li>
        <li>
          <code>background-color</code> → 구조 시각화를 위해 각 영역마다
          구분되는 색상 지정이 활용되었습니다.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          <code>calc()</code>를 활용해 고정된 사이드바와 가변 콘텐츠 영역을
          조합한 반응형 레이아웃 설계를 복습했습니다.
        </li>
        <li>
          <code>display: flex</code>와 <code>flex-wrap</code>을 활용하여 가로
          정렬과 줄바꿈 처리를 구현했습니다.
        </li>
        <li>
          <code>section</code>과 <code>footer</code> 내부에 중첩된{' '}
          <code>div</code> 요소를 구성하여 계층적 구조를 이해했습니다.
        </li>
        <li>
          각 요소에 <code>background-color</code>를 적용해 시각적 구조를 빠르게
          파악하고 디버깅하는 법을 연습했습니다.
        </li>
      </ul>
      <h4>4. 마무리</h4>
      <p>
        자, 이렇게 해서 D유형의 마지막 레이아웃인 <strong>D-4 유형</strong>까지
        모두 마무리했습니다! 🎉 A유형부터 D유형까지의 흐름을 따라오셨다면,
        이제는 다양한 레이아웃 구조에 익숙해지셨을 거예요.
      </p>
      <p>
        웹디자인기능사 실기 시험에서 중요한 건{' '}
        <strong>빠르고 정확하게 구조를 잡아내는 능력</strong>입니다. 다양한
        유형을 반복적으로 연습해두면 시험장에서 어떤 레이아웃이 나와도 당황하지
        않고 자신 있게 구현할 수 있습니다.
      </p>
      <p>
        혹시 작업 중 이해되지 않거나 막히는 부분이 있다면,
        <strong>샘플 PDF를 다시 확인하거나 댓글, 질문</strong>을 통해 도움을
        받으셔도 좋아요. 중요한 건 멈추지 않고 계속 시도하고, 직접 구현해보는
        것입니다!
      </p>
      <p>
        끝까지 함께해주셔서 감사합니다. 우리 모두 합격을 향해 가봅시다! 💪🔥
      </p>
    </>
  )
}
