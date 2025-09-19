import CodeBlock from '@/components/post/post-code'

export default function Webdesign22() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간에는 <strong>F-2 유형 레이아웃</strong>을 함께
        만들어보겠습니다. 전체적인 구조는 F-1과 유사하지만, 콘텐츠 배치 방식에서
        약간의 차이가 있어요. 큰 틀은 익숙하니 가볍게 복습하는 느낌으로 천천히
        따라와 주세요!
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutF-2.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 F-2으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 F-2</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체 구조는 <code>#wrap</code>이라는 부모 요소 안에 네 개의 주요
        섹션으로 구성되어 있습니다. 상단에는 <code>&lt;header&gt;</code>가
        위치하고, 그 아래로 <code>&lt;slider&gt;</code>, 메인 콘텐츠를 담는{' '}
        <code>&lt;section id=&quot;contents&quot;&gt;</code>, 마지막으로 하단의{' '}
        <code>&lt;footer&gt;</code>가 차례로 배치되어 있습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <header id="header"></header>
        <article id="slider"></article>
        <section id="contents"></section>
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
#header {
    width: 1340px;
    height: 100px;
    margin: 0 auto;
    background-color: #efefef;
}
#slider {
    width: 100%;
    height: 350px;
    background-color: #e3e3e3;
}
#contents {
    width: 1340px;
    height: 450px;
    margin: 0 auto;
    background-color: #d9d9d9;
}
#footer {
    width: 1340px;
    height: 120px;
    margin: 0 auto;
    background-color: #d1d1d1;
}`}
      />

      <h4>2. 각 섹션 작업하기</h4>
      <p>
        <code>&lt;header&gt;</code> 영역은 웹페이지의 상단, 즉 머리 부분을
        담당하는 구역입니다. 이 안에는 왼쪽에 위치할 <code>로고</code> 영역과,
        오른쪽에 배치될 <code>내비게이션 메뉴(nav)</code>가 포함되어 있어요.
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
    width: 1340px;
    margin: 0 auto;
    display: flex;
}
#header .logo {
    width: 20%;
    height: 100px;
    background-color: #efefef;
}
#header .nav {
    width: 80%;
    height: 100px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        <code>&lt;slider&gt;</code> 영역은 이미지 슬라이드나 배너가 들어가는
        공간입니다. 전체 너비(<code>width: 100%</code>)를 차지하며, 높이는{' '}
        <code>350px</code>로 설정되어 있어요. 하단에는 <code>.link</code>라는
        박스가 하나 들어가 있는데, 이 박스는
        <strong>슬라이더 영역 안의 하단에 가로 중앙</strong>에 위치하도록 CSS로
        정렬되었습니다.
        <code>position: absolute</code>와 <code>left: 50%</code>, 그리고
        <code>transform: translateX(-50%)</code> 조합은 정중앙 정렬 공식처럼
        자주 쓰이는 패턴이니 꼭 기억해두세요! 😉
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
    <div class="link">링크</div>
</article>
<!-- //slider -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 350px;
    background-color: #d9d9d9;
    position: relative;
}
#slider .link {
    width: 1340px;
    height: 100px;
    background-color: #c7c7c7;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}`}
      />
      <p>
        <code>&lt;section id=&quot;contents&quot;&gt;</code>는 본문 영역의 핵심
        콘텐츠를 담는 공간이에요. 이 안에는 <code>갤러리</code>와{' '}
        <code>공지사항</code> 두 개의 <code>&lt;article&gt;</code> 박스가
        포함되어 있습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <article class="banner"></article>
    <div>
        <article class="notice"></article>
        <article class="gallery"></article>
    </div>
</section>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 1340px;
    margin: 0 auto;
}
#contents .banner {
    width: 100%;
    height: 150px;
    background-color: #b8b8b8;
}
#contents > div {
    width: 100%;
    display: flex;
}
#contents > div .notice {
    width: 50%;
    height: 350px;
    background-color: #b1b1b1;
}
#contents > div .gallery {
    width: 50%;
    height: 350px;
    background-color: #a3a3a3;
}`}
      />
      <p>
        <code>&lt;footer&gt;</code>는 페이지의 맨 아래 영역이며, 좌우 2개 +
        가운데 2단 구성으로 이루어진 <strong>3분할 + 중첩 구조</strong>입니다.
        <code>.footer1</code>은 좌측, <code>.footer3</code>은 우측에 배치되고,
        <code>.footer2</code>는 가운데에서 <code>.footer2-1</code>,{' '}
        <code>.footer2-2</code>로 위아래로 나뉩니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2">
        <div class="footer2-1"></div>
        <div class="footer2-2"></div>
    </div>
</footer>
<!-- //footer -->`}
      />
      <CodeBlock
        language='css'
        code={`#footer {
    width: 1340px;
    margin: 0 auto;
    display: flex;
}
#footer .footer1 {
    width: 80%;
    height: 120px;
    background-color: #9d9d9d;
}
#footer .footer2 {
    width: 20%;
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
          <code>&lt;header&gt;</code> : 상단 영역으로, 로고와 내비게이션 메뉴를
          포함합니다.
        </li>
        <li>
          <code>&lt;article id=&quot;slider&quot;&gt;</code> : 슬라이드 영역으로
          전체 너비를 차지하며, 링크 박스가 포함됩니다.
        </li>
        <li>
          <code>&lt;section id=&quot;contents&quot;&gt;</code> : 콘텐츠 영역으로
          배너, 공지사항, 갤러리를 포함한 분할 구조입니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단으로 좌우 2분할 + 중앙 2단
          구조로 되어 있습니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>width: 1340px + margin: 0 auto</code> → 고정형 레이아웃을 중앙
          정렬하는 방식입니다.
        </li>
        <li>
          <code>position: absolute + left: 50% + transform</code> → 슬라이드 안
          링크 박스를 정확히 가로 중앙에 배치합니다.
        </li>
        <li>
          <code>display: flex</code> → 공지사항과 갤러리를 가로로 나란히
          배치하는 데 사용됩니다.
        </li>
        <li>
          <code>background-color</code> → 시각적으로 영역을 구분하고 레이아웃
          구조를 쉽게 파악할 수 있도록 도와줍니다.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          고정형 콘텐츠(1340px)와 유동형 영역(<code>slider</code>)의 조합으로
          다양한 배치 방식을 연습했습니다.
        </li>
        <li>
          <code>position</code>과 <code>transform</code>을 이용한{' '}
          <strong>가로 정중앙 배치 기법</strong>을 익혔습니다.
        </li>
        <li>
          <strong>콘텐츠 영역의 상단/하단 분할</strong> 및{' '}
          <strong>공지/갤러리 좌우 분할 구조</strong>를 연습했습니다.
        </li>
        <li>
          푸터의 <strong>2분할 + 내부 2단 구조</strong> 구현을 통해 중첩
          레이아웃을 구성하는 법을 익혔습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        이번 F-2 유형도 멋지게 완성하셨습니다! 👏 반복 연습을 통해 패턴을
        익혀두면 새로운 구조도 훨씬 빠르게 구현할 수 있어요.
      </p>
      <p>
        조금씩 익숙해지다 보면, 시험장에서도 자연스럽게 손이 움직일 거예요.
        오늘도 수고 많으셨습니다! 다음 유형도 함께 힘내서 완성해봐요 💪😊
      </p>
    </>
  )
}
