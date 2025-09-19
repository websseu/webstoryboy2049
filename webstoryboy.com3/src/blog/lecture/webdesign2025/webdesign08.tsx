import CodeBlock from '@/components/post/post-code'

export default function Webdesign08() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 B유형의 마지막 레이아웃인 B-4 유형을 만들어보겠습니다. 앞서
        작업했던 B유형들과 마찬가지로 전체적인 구조는 거의 동일하며, 푸터 부분만
        약간 다른 구조로 되어 있습니다. 이제 마지막이라는 마음으로, 복습하는
        느낌으로 빠르게 정리해볼게요! 그럼 바로 시작해보겠습니다 💪
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutB-4.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 B-4으로 변경해주겠습니다. 오른쪽에
        디자인 보기 버튼을 누르면 전체적인 레이아웃을 한 눈에 볼 수 있으니
        참고해주세요!
      </p>

      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 B-4</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 레이아웃을 먼저 만들겠습니다. 전체적인 구조이기 때문에 모든
        섹션의 width값은 100%로 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <header id="header"></header>
        <article id="slider"></article>
        <main id="contents"></main>
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
    width: 100%;
    height: 100px;
    background-color: #efefef;
}
#slider {
    width: 100%;
    height: 300px;
    background-color: #e3e3e3;
}
#contents {
    width: 100%;
    height: 200px;
    background-color: #d9d9d9;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #d1d1d1;
}`}
      />

      <h4>2. 컨테이너 작업하기</h4>
      <p>
        각 섹션의 전체영역과 가운데 영역을 만들겠습니다. container 섹션을 만들고
        모든 섹션에 공통으로 넣어주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <header id="header">
            <div class="container"></div>
        </header>
        <!-- //header -->

        <article id="slider">
            <div class="container"></div>
        </article>
        <!-- //slider -->

        <main id="contents">
            <div class="container"></div>
        </main>
        <!-- //contents -->

        <footer id="footer">
            <div class="container"></div>
        </footer>
        <!-- //footer -->
    </div>
    <!-- //wrap -->
</body>`}
      />
      <CodeBlock
        language='css'
        code={`.container {
    width: 1200px;
    height: inherit;
    margin: 0 auto;
    background-color: rgba(0,0,0,0.2);
    display: flex;
}`}
      />

      <h4>3. 각 섹션 작업하기</h4>
      <p>
        헤더 영역은 전체 영역과 가운데 영역으로 나누어지기 때문에 container를
        설정하고, 자식요소로 로고와 네비를 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<header id="header">
    <div class="container">
        <h1 class="logo"></h1>
        <nav class="nav"></nav>
    </div>
</header>
<!-- //header -->`}
      />
      <CodeBlock
        language='css'
        code={`#header {
    width: 100%;
    height: 100px;
    background-color: #efefef;
}
#header .logo {
    width: 20%;
    height: 100px;
    background-color: #c7c7c7;
}
#header .nav {
    width: 80%;
    height: 100px;
    background-color: #bcbcbc;
}`}
      />

      <p>
        슬라이드 영역은 가운데 영역만 설정하고, 전체 영역은 배경색을 빼서 샘플과
        똑같이 만들겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
    <div class="container"></div>
</article>
<!-- //slider -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 300px;
}`}
      />
      <p>
        컨텐츠 영역도 전체 영역의 배경색을 제거하고, 가운데 영역만
        작업하겠습니다. 자식 요소 3개를 만들어 가로로 정렬하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<main id="contents">
    <div class="container">
        <section class="content1"></section>
        <section class="content2"></section>
        <section class="content3"></section>
    </div>
</main>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 100%;
}
#contents .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}
#contents .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #b1b1b1;
}
#contents .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #a3a3a3;
}`}
      />
      <p>
        푸터 영역도 전체 영역과 가운데 영역을 분리하겠습니다. 가운데 영역은
        두개의 영역으로 만들고, 첫번째 영역은 다시 두개의 영역으로 만들겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="container">
        <div class="footer1">
            <div class="footer1-1"></div>
            <div class="footer1-2"></div>
        </div>
        <div class="footer2"></div>
    </div>
</footer>
<!-- //footer -->`}
      />
      <CodeBlock
        language='css'
        code={`#footer {
    width: 100%;
    background-color: #d1d1d1;
}
#footer .footer1 {
    width: 80%;
}
#footer .footer1 .footer1-1 {
    width: 100%;
    height: 50px;
    background-color: #9d9d9d;
}
#footer .footer1 .footer1-2 {
    width: 100%;
    height: 50px;
    background-color: #929292;
}
#footer .footer2 {
    width: 20%;
    height: 100px;
    background-color: #838383;
}`}
      />

      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;header&gt;</code> : 상단 영역으로, 로고와 내비게이션 포함.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 의미 있는 독립 콘텐츠(여기서는 슬라이더
          영역).
        </li>
        <li>
          <code>&lt;main&gt;</code> : 문서의 핵심 콘텐츠를 감싸는 영역.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 콘텐츠 내부에서 주제별로 구분할 때
          사용.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 하단 정보, 메뉴, 저작권 등을 포함하는
          영역.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>width: 100%</code> → 브라우저 전체 폭을 채우는 구조 설정.
        </li>
        <li>
          <code>margin: 0 auto</code> → 고정 폭 콘텐츠를 가운데 정렬.
        </li>
        <li>
          <code>height: inherit</code> → 부모 요소의 높이를 자식 요소에 상속.
        </li>
        <li>
          <code>display: flex</code> → 자식 요소를 가로로 나란히 정렬.
        </li>
        <li>
          <code>background-color: rgba()</code> → 배경색을 투명도 있게 지정해
          시각적 구조 확인.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          전체 구조는 B유형의 반복된 패턴을 따르되,{' '}
          <strong>푸터의 구조만 변경된 예제</strong>였습니다.
        </li>
        <li>
          2단 → 다시 2단 구조의 푸터를 만들며{' '}
          <strong>복잡한 하위 레이아웃 분할</strong> 방법을 연습했습니다.
        </li>
        <li>
          <code>.container</code>의 재사용을 통해{' '}
          <strong>효율적인 CSS 설계 방식</strong>을 체험했습니다.
        </li>
        <li>
          실무에서도 자주 쓰이는 <strong>전체 영역 + 가운데 정렬</strong> 방식의
          이해도를 높였습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        B유형의 마지막 예제까지 잘 따라오셨습니다! 이번 B-4 유형은 전체적인
        구조는 동일하지만,
        <strong>푸터 구조에 살짝 변화를 준 형태</strong>로 마무리되었습니다.
      </p>
      <p>
        레이아웃 작업의 핵심은 반복입니다. 코드를 직접 타이핑하며 구조를 눈과
        손에 익히는 것이 가장 중요해요.
        <strong>wrap → 섹션 → container → 자식 박스 구조</strong>가 자연스럽게
        떠오른다면, 여러분은 이미 기본 레이아웃을 충분히 소화하신 겁니다! 💪
      </p>
      <p>
        이제 B유형은 여기서 마무리하고, 더 다양한 레이아웃 구성이 나오는
        C유형으로 넘어가보겠습니다. 다음 강의에서 더욱 재미있고 실전적인
        내용으로 다시 만나요! 😊
      </p>
    </>
  )
}
