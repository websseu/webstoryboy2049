import CodeBlock from '@/components/post/post-code'

export default function Webdesign18() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간에는 E-2 유형 레이아웃을 함께 작업해보겠습니다. 전체 구조는
        앞서 만들었던 E-1 유형과 거의 동일하지만, 한 가지 큰 차이점이 있습니다.
        바로 높이값 설정 방식인데요!
      </p>
      <p>
        E-1 유형은 100vh를 기준으로 화면 높이에 딱 맞추어 작업했다면, E-2 유형은
        고정된 픽셀 값으로 높이를 임의 지정하는 방식입니다. 즉, 화면에 딱 맞게
        정밀하게 계산할 필요는 없고, 일정한 높이 값만 잘 지정해주면 구조적으로
        문제없이 구현할 수 있습니다. 이전 유형을 잘 따라오셨다면 이번 유형도
        어렵지 않게 완성하실 수 있을 거예요! 그럼 지금부터 같이 시작해볼까요? 🥹
        렛츠 고!
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutE-2.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 E-2으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 E-2</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 E-1 유형과 동일하게 main, footer로 2단 구조로
        만들겠습니다. main의 높이 값은 임의로 750px로 설정하고, footer의 높이
        값은 100px로 설정했습니다.
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
    height: 750px;
    background-color: #efefef;
}
#footer {
    width: 100%;
    height: 100px;
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
    display: flex;
}
#header {
    width: 200px;
    height: 750px;
    background-color: #efefef;
}
#contents {
    width: 400px;
    height: 750px;
    background-color: #e3e3e3;
}
#slider {
    width: calc(100% - 600px);
    height: 750px;
    background-color: #d9d9d9;
}
#footer {
    width: 100%;
    height: 100px;
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
}
#header h1 {
    width: 100%;
    height: 100px;
    background-color: #e3e3e3;
}
#header nav {
    width: 100%;
    height: 650px;
    background-color: #d9d9d9;
}`}
      />
      <p>
        컨텐츠 영역은 공지사항, 갤러리, 링크 영역으로 3개의 영역으로 이루어져
        있습니다. 자식 박스의 높이 값이 설정되어 있기 때문에 부모 박스 영역에는
        높이 값을 줄 필요가 없습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <div class="notice"></div>
    <div class="gallery"></div>
    <div class="link"></div>
</section>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 400px;
}
#contents .notice {
    width: 100%;
    height: 300px;
    background-color: #c7c7c7;
}
#contents .gallery {
    width: 100%;
    height: 300px;
    background-color: #bcbcbc;
}
#contents .link {
    width: 100%;
    height: 150px;
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
    height: 750px;
    background-color: #bcbcbc;
}`}
      />
      <p>푸터 영역은 3개의 영역으로 이루어져 있습니다.</p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2"></div>
    <div class="footer3"></div>
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
    height: 100px;
    background-color: #b1b1b1;
}
#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #a3a3a3;
}
#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}`}
      />

      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;main&gt;</code> : 전체 콘텐츠를 감싸는 영역으로 header,
          contents, slider로 구성됩니다.
        </li>
        <li>
          <code>&lt;header&gt;</code> : 로고와 내비게이션이 들어가는 왼쪽 고정
          영역입니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 콘텐츠 그룹을 구성하며, 공지사항,
          갤러리, 링크를 포함합니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 슬라이드 영역을 담당하며 가변 너비로
          설정됩니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단 정보를 나타내며 3분할 구조로
          구성됩니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>height: 750px</code> → E-1과 달리 <strong>고정 픽셀값</strong>
          으로 전체 높이를 지정했습니다.
        </li>
        <li>
          <code>width: calc(100% - 600px)</code> → 슬라이드 영역이 남는 공간을
          자동으로 채우게 설정합니다.
        </li>
        <li>
          <code>display: flex</code> → <code>#main</code>, <code>#footer</code>{' '}
          등에 적용하여 가로 정렬을 구현합니다.
        </li>
        <li>
          <code>background-color</code> → 각 영역을 시각적으로 구분하기 위해
          사용했습니다.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          고정 높이 레이아웃 구현에 집중했습니다. 전체적으로 픽셀 단위로 정확한
          레이아웃을 구성했습니다.
        </li>
        <li>
          <code>calc()</code>를 활용해 가변 슬라이드 영역을 구성하는 방법을
          복습했습니다.
        </li>
        <li>
          콘텐츠 영역은 세 개의 고정 박스로 나누고, <code>height</code>로 정밀
          제어해 안정적인 레이아웃을 만들었습니다.
        </li>
        <li>
          <code>display: flex</code>를 통해 좌우 영역 정렬과 푸터의 3분할 구조를
          손쉽게 구현했습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        고생 많으셨습니다! 😊 E-2 유형도 성공적으로 마무리하셨네요. 이번 유형은
        고정된 높이 값을 사용하는 만큼, 시각적으로 안정적인 구조를 만드는 연습이
        되셨을 거예요.{' '}
      </p>
      <p>
        지금까지의 연습을 바탕으로 레이아웃 감각이 한층 더 성장했을 거라
        믿습니다. 처음엔 낯설고 복잡해 보이지만, 반복을 통해 자연스럽게 손에
        익는 게 핵심입니다. 📌 다음 유형으로 넘어가기 전에 한 번쯤 직접 처음부터
        코딩하며 복습해보는 것도 추천드립니다. 그럼 다음 레이아웃에서 또 만나요!
        💻🔥 렛츠 기릿!
      </p>
    </>
  )
}
