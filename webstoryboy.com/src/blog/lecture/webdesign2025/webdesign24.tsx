import CodeBlock from '@/components/post/post-code'

export default function Webdesign24() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 <strong>F-4 유형 레이아웃</strong>을 함께 만들어보겠습니다. 이
        유형은 앞서 다뤘던 F-1부터 F-3까지의 흐름을 그대로 이어가며,{' '}
        <strong>콘텐츠 배치와 푸터 구조</strong>에서 약간의 변화가 있는 것이
        특징입니다.
      </p>
      <p>
        특히 <code>공지사항</code>과 <code>갤러리</code> 영역을{' '}
        <strong>가로 분할</strong>로 구성하고, 하단 푸터를{' '}
        <strong>3분할 구조</strong>로 정리하는 방식이 눈에 띄는데요, 익숙한
        패턴이 많기 때문에 지금까지 따라오셨다면 무리 없이 완성하실 수 있을
        거예요!
      </p>
      <p>
        그럼 오늘도 천천히, 차근차근 따라오시면서 완성해볼까요? 렛츠 고! 💪🚀
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutF-4.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 F-4으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 F-4</title>
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
        <code>&lt;footer&gt;</code> 영역은 웹페이지의 <strong>하단 영역</strong>
        을 구성합니다. 이 레이아웃에서는 <code>footer1</code>,{' '}
        <code>footer2</code>, <code>footer3</code>의 <strong>3분할 구조</strong>
        로 나뉘어 있으며, 각각 가로 방향으로 배치되어 있어요.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2"></div>
    <div class="footer3"></div>
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
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}
#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #929292;
}
#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #838383;
}`}
      />
      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;header&gt;</code> : 상단 레이아웃으로 로고와 내비게이션
          메뉴를 포함합니다.
        </li>
        <li>
          <code>&lt;article id=&quot;slider&quot;&gt;</code> : 슬라이드 배너와
          하단 링크 박스를 포함한 전폭 배너 영역입니다.
        </li>
        <li>
          <code>&lt;section id=&quot;contents&quot;&gt;</code> : 메인 콘텐츠
          공간으로, 상단 배너와 하단의 공지/갤러리 영역을 포함합니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 하단 구조로, 좌우 2분할과 가운데 중간
          박스를 구성합니다.
        </li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>width: 1340px + margin: 0 auto</code> : 전체 콘텐츠를 가운데
          정렬하는 기본 방식입니다.
        </li>
        <li>
          <code>
            position: absolute + left: 50% + transform: translateX(-50%)
          </code>{' '}
          : 슬라이더 하단의 링크 박스를 가로 중앙에 정확히 배치하는 조합입니다.
        </li>
        <li>
          <code>display: flex</code> : 콘텐츠 내부(공지/갤러리)와 푸터 구조에서
          가로 정렬을 위해 사용됩니다.
        </li>
        <li>
          <code>background-color</code> : 각 블록의 시각적 구분을 돕기 위해
          사용한 임시 색상입니다.
        </li>
      </ul>
      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          <strong>슬라이더 내부 요소의 정중앙 배치</strong>에 대한 position +
          transform 조합을 복습했습니다.
        </li>
        <li>
          <strong>콘텐츠 영역을 상하 + 좌우로 분할</strong>하는 flex 레이아웃
          활용을 익혔습니다.
        </li>
        <li>
          푸터를 <strong>좌/우 구조 + 가운데 블록</strong>으로 배치하는 3분할
          설계를 연습했습니다.
        </li>
        <li>
          <strong>1340px 고정형 레이아웃</strong> 중심으로 화면 정렬 구조를
          이해했습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        🎉 드디어 F-4 유형까지 모두 완성하셨습니다! 지금까지 F-1부터 F-4
        유형까지, 다양한 레이아웃 구조와 세부 배치를 함께 차근차근 연습해보셨죠?
        여기까지 따라오신 여러분, 정말 <strong>수고 많으셨습니다</strong> 👏👏👏
      </p>
      <p>
        실기 시험에서 중요한 건 빠르게 코드를 짜는 것도 있지만, 구조를 파악하고
        나만의 방식으로 <strong>안정적으로 구현하는 감각</strong>을 익히는
        것입니다. 오늘 배운 내용은 그 감각을 키워나가는 데 분명히 큰 도움이
        되었을 거예요.
      </p>
      <p>
        이제 F유형까지 모두 마쳤다면, A~F 전체 유형을 복습하며 내 것으로 만드는
        시간만 남았습니다. 연습을 반복하면 실력은 반드시 올라갑니다. 💪
      </p>
      <p>
        끝까지 포기하지 않고 완주하신 여러분은 이미 자격증 합격을 향해 큰 걸음을
        내디뎠어요! 앞으로도 꾸준히 연습하시고, 실전에서도 긴장하지 마시고
        차분하게 작성하신다면 좋은 결과 있을 거예요. 😊
      </p>
      <p>
        <strong>진심으로 고생 많으셨습니다!</strong> 다음 단계에서도 함께
        응원할게요! 🌟
      </p>
    </>
  )
}
