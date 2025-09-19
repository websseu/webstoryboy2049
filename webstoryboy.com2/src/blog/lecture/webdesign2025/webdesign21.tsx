import CodeBlock from '@/components/post/post-code'

export default function Webdesign21() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        오늘은 2025년에 새롭게 추가된 <strong>F-1 유형 레이아웃</strong>을 함께
        만들어볼 거예요. 처음 접하는 구조일 수 있지만, 지금까지 차근차근
        연습해오신 분들이라면 전혀 어렵지 않게 따라오실 수 있을 거예요. 편안한
        마음으로 함께 시작해볼까요? 렛츠 기릿! 💪✨
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutF-1.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 F-1으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 F-1</title>
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
}
`}
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
    background-color: #d1d1d1;
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
    <article class="gallery"></article>
    <article class="notice"></article>
</section>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 1340px;
    margin: 0 auto;
}
#contents .gallery {
    width: 100%;
    height: 150px;
    background-color: #c7c7c7;
}
#contents .notice {
    width: 100%;
    height: 300px;
    background-color: #bbbbbb;
}`}
      />
      <p>
        <code>&lt;footer&gt;</code>는 페이지의 맨 아래에 위치하며, 사이트의 부가
        정보나 저작권, 연락처 등을 담는 공간입니다. 이 구조에서는 총{' '}
        <strong>3개의 박스</strong>로 구성되어 있어요.
        <code>.footer1</code>은 좌측, <code>.footer2</code>는 중앙,{' '}
        <code>.footer3</code>는 우측에 배치될 수 있는 기본 틀입니다.
      </p>
      <p>
        특히 <code>.footer2</code>는 다시 <code>.footer2-1</code>과{' '}
        <code>.footer2-2</code>로 나뉘어
        <strong>2단 중첩 구조</strong>로 설계되어 있습니다. 이런 구조는 실제
        시험에서도 자주 등장하므로 꼭 익혀두세요! 🧩
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
    height: 120px;
    margin: 0 auto;
    display: flex;
}
#footer .footer1 {
    width: 20%;
    height: 120px;
    background-color: #b8b8b8;
}
#footer .footer2 {
    width: 80%;
    height: 120px;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #b1b1b1;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #a3a3a3;
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
          갤러리와 공지사항 등 주요 정보 블록을 포함합니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단 영역으로 3개의 수평 분할 +
          내부 2단 구조로 구성됩니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>width: 1340px + margin: 0 auto</code> → 고정된 콘텐츠 영역을
          수평 중앙에 배치합니다.
        </li>
        <li>
          <code>position: absolute + left: 50% + transform</code> → 슬라이더
          하단의 링크 박스를 정확히 중앙 정렬합니다.
        </li>
        <li>
          <code>background-color</code> → 각 영역을 시각적으로 구분하고 구조를
          파악하기 쉽게 도와줍니다.
        </li>
      </ul>
      <h5>✅ transform 속성 정리</h5>
      <ul>
        <li>
          <code>transform</code>은 요소에 다양한 시각적 변형(translate, rotate,
          scale, skew 등)을 적용할 수 있는 속성입니다.
        </li>
        <li>
          <code>translateX(-50%)</code> : 요소를{' '}
          <strong>자기 자신의 너비의 50%만큼 왼쪽으로 이동</strong>시킵니다.
          <br />
          주로 <code>left: 50%</code>와 함께 사용되어 가로 중앙 정렬을 정확하게
          구현할 때 사용됩니다.
        </li>
        <li>
          <code>translateY()</code> : 위 또는 아래로 이동시킬 때 사용합니다.{' '}
          <code>translateY(-50%)</code>는 세로 중앙 정렬 시 활용됩니다.
        </li>
        <li>
          <code>scale()</code> : 요소를 확대 또는 축소할 수 있습니다. 예){' '}
          <code>scale(1.2)</code>는 120% 확대
        </li>
        <li>
          <code>rotate()</code> : 요소를 시계 방향으로 회전시킵니다. 예){' '}
          <code>rotate(45deg)</code>는 45도 회전
        </li>
        <li>
          <code>skew()</code> : 요소를 기울입니다. 예){' '}
          <code>skew(10deg, 0deg)</code>
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          고정형 콘텐츠 레이아웃(<code>1340px</code>)과 유동형 요소(
          <code>slider</code>)의 조합을 연습했습니다.
        </li>
        <li>
          <code>position</code>과 <code>transform</code>을 활용한 정중앙 배치
          기법을 익혔습니다.
        </li>
        <li>
          푸터의 <strong>3분할 + 내부 2단 중첩 구조</strong> 구성 능력을
          키웠습니다.
        </li>
        <li>구조적으로 깔끔하고 명확한 4단계 레이아웃 패턴을 실습했습니다.</li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        이렇게 해서 F-1 유형 레이아웃도 완성되었습니다! 👏 이번 유형을 통해 고정
        너비와 유동 너비, 정중앙 배치, 그리고 중첩 레이아웃까지 한꺼번에 복습할
        수 있었죠.
      </p>
      <p>
        다양한 유형을 반복하다 보면, 어느 순간 새로운 구조도 익숙한 패턴처럼
        느껴질 거예요. 중요한 건 흐름을 이해하고, 틀에 맞춰 **빠르고 정확하게
        구현하는 연습**을 계속해나가는 것입니다.
      </p>
      <p>다음 유형에서도 함께 성장해봐요! 고생 많으셨습니다 😊💻🔥</p>
    </>
  )
}
