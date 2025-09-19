import CodeBlock from '@/components/post/post-code'

export default function Webdesign19() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 E-3 유형 레이아웃을 함께 만들어보겠습니다. 이번 유형은 앞서
        작업한 E-2 유형과 거의 동일합니다. 유일한 차이점이라면, 링크 영역 대신
        배너 영역이 들어간다는 점이에요. 전체적인 구조나 스타일링 방식은 완전히
        동일하니, 이번엔 혼자 힘으로 먼저 도전해보는 걸 추천드려요! 막히는
        부분이 있다면 걱정하지 마세요. 저와 함께 차근차근 다시 짚어보면 금방
        해결될 거예요 😉 그럼, 잠깐 멈추고 직접 한번 만들어보고 와주세요! 다
        했으면 함께 확인해보면서 마무리해볼까요? 🤩
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutE-3.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 E-3으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 E-3</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        구조는 2단 구조로 main과 footer로 만들겠습니다. 높이값은 임의 지정이니
        자식 요소에 높이값이 있으면 자동으로 설정될 것입니다. 우선 전체 높이 값
        750px를 설정하겠습니다.
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
    <h1 class="logo"></h1>
    <nav class="nav"></nav>
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
    background-color: #efefef;
}
#header nav {
    width: 100%;
    height: 650px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        컨텐츠 영역은 배너, 공지사항, 갤러리 영역으로 3개의 영역으로 이루어져
        있습니다. 자식 박스의 높이 값이 설정되어 있기 때문에 부모 박스 영역에는
        높이 값을 줄 필요가 없습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <article class="banner"></article>
    <article class="notice"></article>
    <article class="gallery"></article>
</section>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 400px;
}
#contents .banner {
    width: 100%;
    height: 150px;
    background-color: #d9d9d9;
}
#contents .notice {
    width: 100%;
    height: 300px;
    background-color: #d1d1d1;
}
#contents .gallery {
    width: 100%;
    height: 300px;
    background-color: #c7c7c7;
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
          <code>&lt;main&gt;</code> : header, contents, slider로 구성된 메인
          영역입니다.
        </li>
        <li>
          <code>&lt;header&gt;</code> : 좌측 로고와 내비게이션 영역으로 고정
          폭을 갖습니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 배너, 공지사항, 갤러리 등 콘텐츠 그룹을
          구성합니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 슬라이드 및 콘텐츠 내 개별 블록에
          사용되었습니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 하단 정보 영역으로 3분할 구조를
          가집니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>height: 750px</code> → 고정된 전체 높이를 지정하여 안정적인
          레이아웃을 구현합니다.
        </li>
        <li>
          <code>width: calc(100% - 600px)</code> → 고정 영역을 제외한 나머지
          영역을 유동적으로 계산해줍니다.
        </li>
        <li>
          <code>display: flex</code> → 가로 정렬 및 분할 레이아웃 구성에
          활용됩니다.
        </li>
        <li>
          <code>background-color</code> → 각 박스를 구분하고 구조를 파악하기
          쉽게 도와줍니다.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          E-2 유형과 거의 동일한 구조로, 작은 변경 요소(링크 → 배너)를 정확히
          파악하는 능력을 키울 수 있습니다.
        </li>
        <li>
          <code>calc()</code>를 활용하여 유동 영역(slider)을 반응형으로 설계하는
          방법을 복습했습니다.
        </li>
        <li>
          고정 높이 기반 레이아웃 구성 능력을 반복 학습하며 더욱 강화할 수
          있습니다.
        </li>
        <li>
          유형 간 유사성과 차이점을 분석하고 빠르게 파악하는 연습이 중요한 학습
          포인트입니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        이번 E-3 유형까지 잘 따라오셨다면, 이제 다양한 유형의 구조 변화에 대한
        감각도 많이 생기셨을 거예요. E-1~E-3 유형은 구조는 유사하지만 높이 설정
        방식, 콘텐츠 구성, 영역 이름 등의 소소한 차이를 이해하고 구현하는 것이
        핵심입니다.{' '}
      </p>
      <p>
        시험에서도 이런 변화는 충분히 나올 수 있으니, 단순히 외우기보다는 구조의
        원리를 이해하고 자주 손으로 직접 그려보는 것이 중요합니다. 이번에도 수고
        많으셨습니다!
      </p>
      <p>👏 다음 유형도 함께 준비해볼까요? 😊</p>
    </>
  )
}
