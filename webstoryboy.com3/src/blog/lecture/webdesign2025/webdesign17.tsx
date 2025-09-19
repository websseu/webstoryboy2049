import CodeBlock from '@/components/post/post-code'

export default function Webdesign17() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 E유형 레이아웃을 함께 만들어보겠습니다. E유형은 지금까지 학습한
        A~D유형보다 구성과 배치가 조금 더 복잡하게 느껴질 수 있습니다. 하지만
        핵심은 여전히 동일합니다. 전체 구조를 파악하고, 각 영역을 명확하게
        분리한 뒤, 순차적으로 스타일을 적용해 나가면 어렵지 않게 완성할 수
        있어요. 처음에는 복잡해 보여도, 반복해서 만들어 보면 자연스럽게
        익숙해지고, 오히려 레이아웃 감각이 한 단계 더 성장하는 기회가 될 수
        있습니다. 그러니 겁먹지 말고, 하나씩 차근차근 따라와 주세요! 👊🔥 그럼,
        E유형도 완벽하게 마스터하러 가볼까요? 렛츠 기릿! 💪🚀
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutE-1.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 E-1으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 E-1</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 2단 또는 4단으로 만들수 있습니다. 4단보다는 2단구조가 더
        안정적이기 때문에 main과 footer로 만들고 작업하겠습니다. 이번 레이아웃의
        특징은 height 값도 화면 height 값에 딱 맞추어야 합니다. 그래서 푸터
        영역을 제외한 부분을 100%로 맞추어야 합니다. 메인의 높이 값은 height:
        calc(100vh - 120px) 이렇게 설정하면 화면 높이에 딱 맞출 수 있습니다.
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
    <h1 class="logo"></h1>
    <nav class="nav"></nav>
</header>
<!-- //header -->`}
      />
      <CodeBlock
        language='css'
        code={`#header {
    width: 200px;
    height: 100%;
}
#header .logo {
    width: 100%;
    height: 10%;
    background-color: #e3e3e3;
}
#header .nav {
    width: 100%;
    height: 90%;
    background-color: #d9d9d9;
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
    background-color: #d1d1d1;
}
#contents .notice {
    width: 100%;
    height: 35%;
    background-color: #c7c7c7;
}
#contents .gallery {
    width: 100%;
    height: 35%;
    background-color: #bcbcbc;
}
#contents .link {
    width: 100%;
    height: 15%;
    background-color: #b1b1b1;
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
    background-color: #a3a3a3;
}`}
      />
      <p>
        푸터 영역은 2개의 영역으로 나누고, 두번재 영역은 다시 두개의 영역으로
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
</footer>`}
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
    background-color: #9d9d9d;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #929292;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #838383;
}`}
      />
      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;main&gt;</code> : 전체 콘텐츠를 담는 주요 영역입니다.
          header, contents, slider로 구성되어 있습니다.
        </li>
        <li>
          <code>&lt;header&gt;</code> : 로고와 내비게이션이 포함된 좌측 고정
          영역입니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 콘텐츠 그룹을 구성하는 영역으로,
          배너/공지사항/갤러리/링크 등 4개의 하위 요소를 포함합니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 슬라이드 및 각 콘텐츠 박스를 개별
          블록으로 정의할 때 사용됩니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단 정보 영역으로 2단 구조(1차
          분할 + 2차 중첩)로 구성됩니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>height: calc(100vh - 120px)</code> → 화면 전체 높이에서
          푸터(120px)를 제외한 메인 영역 높이를 설정합니다.
        </li>
        <li>
          <code>width: calc(100% - 600px)</code> → 고정 영역(header 200px +
          contents 400px)을 제외한 나머지 영역을 유동적으로 설정합니다.
        </li>
        <li>
          <code>display: flex</code> → 가로 정렬 및 복수의 블록 배치를 위해
          사용됩니다. <code>#main</code>, <code>#footer</code> 등에 적용됩니다.
        </li>
        <li>
          <code>background-color</code> → 각 영역의 구조를 시각적으로 파악할 수
          있도록 색상 구분을 적용했습니다.
        </li>
        <li>
          <code>height: %</code> → 콘텐츠 내부 영역은 화면 비율에 맞춰 높이를
          설정하였습니다 (예: 15%, 35%).
        </li>
      </ul>

      <h5>✅ 자주 사용하는 CSS 단위 정리</h5>
      <ul>
        <li>
          <code>px</code> (픽셀) : <strong>고정 크기</strong> 단위입니다.
          디바이스의 해상도나 화면 크기와 관계없이 항상 일정한 크기를
          유지합니다.
          <br />
          예) <code>width: 200px</code>
        </li>
        <li>
          <code>%</code> (퍼센트) : <strong>부모 요소 기준</strong>으로 비율을
          지정할 때 사용합니다. 반응형 레이아웃에서 자주 사용됩니다.
          <br />
          예) <code>width: 100%</code>
        </li>
        <li>
          <code>vh</code> (viewport height) :{' '}
          <strong>브라우저 화면 높이의 1%</strong>를 의미합니다. 전체 화면
          기준의 높이 설정에 유용합니다.
          <br />
          예) <code>height: 100vh</code> → 전체 화면 높이
        </li>
        <li>
          <code>vw</code> (viewport width) :{' '}
          <strong>브라우저 화면 너비의 1%</strong>를 의미합니다.
          <br />
          예) <code>width: 100vw</code>
        </li>
        <li>
          <code>em</code> : <strong>부모 요소의 폰트 크기</strong>를 기준으로
          상대적인 크기를 지정합니다.
          <br />
          예) <code>padding: 2em</code> → 부모 폰트 크기의 2배
        </li>
        <li>
          <code>rem</code> : <strong>루트(html)의 폰트 크기</strong>를 기준으로
          상대적인 크기를 지정합니다.
          <br />
          예) <code>font-size: 1.5rem</code> → 기본 폰트 크기의 1.5배
        </li>
        <li>
          <code>calc()</code> : 서로 다른 단위를{' '}
          <strong>연산하여 혼합 사용</strong>할 수 있게 해줍니다.
          <br />
          예) <code>width: calc(100% - 200px)</code>
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          <strong>
            <code>calc()</code> 활용법
          </strong>
          을 이해하고 연습했습니다. 고정값과 유동값을 조합하여 반응형 구조를
          만드는 핵심 기술입니다.
        </li>
        <li>
          <strong>화면 높이 계산</strong>을 위해 <code>100vh</code>에서 고정값을
          뺀 세로 계산식을 적용했습니다.
        </li>
        <li>
          <strong>flexbox</strong>를 사용하여 header, contents, slider의 좌우
          배치를 구성하고, footer의 내부 중첩 구조도 유연하게 구현했습니다.
        </li>
        <li>
          <strong>퍼센트 단위의 높이 분할</strong>을 통해 contents 영역 내
          콘텐츠를 비율로 배치하는 방법을 연습했습니다.
        </li>
        <li>
          <strong>레이아웃 시각화</strong>를 위한 <code>background-color</code>{' '}
          지정으로 영역을 빠르게 구분할 수 있었습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        자, 이렇게 해서 드디어 E유형의 첫 번째 레이아웃도 완성되었습니다! 🎉
      </p>
      <p>
        이번 레이아웃은 A~D유형과 비교했을 때 조금 더 디테일하고 화면 기준
        계산이 필요한 구조였습니다. 하지만 핵심 개념인{' '}
        <strong>calc() 함수의 활용</strong>,{' '}
        <strong>flexbox를 이용한 정렬</strong>, 그리고{' '}
        <strong>퍼센트 기반의 세로 높이 분할</strong>까지 잘 이해하셨다면 충분히
        해내셨을 거예요! 😊
      </p>
      <p>
        실무에서도 매우 자주 등장하는 구조이기 때문에, 꼭 여러 번 반복해서
        연습해보시고 모양을 바꾸거나 구조를 살짝 변경해보며{' '}
        <strong>응용 능력</strong>도 키워보시길 추천드립니다.
      </p>
      <p> 그럼 다음 유형에서 또 만나요! 고생하셨습니다. 👏👏👏 </p>
    </>
  )
}
