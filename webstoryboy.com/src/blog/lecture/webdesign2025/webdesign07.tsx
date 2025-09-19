import CodeBlock from '@/components/post/post-code'

export default function Webdesign07() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 유형도 전체 영역과 가운데 영역이 혼합된 레이아웃으로 구성되어
        있습니다.
      </p>
      <p>
        앞서 만들었던 B-1, B-2 유형에서는 각 섹션마다 개별적으로 container
        스타일을 만들어 적용했었죠. 하지만 이번에는 공통된 container 클래스를
        재활용해서 작업해보겠습니다. 여기서 &quot;재활용&quot;이란? CSS에서
        클래스를 여러 번 사용할 수 있다는 의미입니다. id는 문서 내에서 한 번만
        사용 가능하지만, class는 여러 요소에 반복해서 적용할 수 있어요.
      </p>
      <p>
        그래서 웹사이트를 만들 때는 보통 큰 틀(전체 구조)은 id를 사용하고, 세부
        구조나 반복되는 스타일은 class를 사용하는 것이 일반적입니다. 이번에도
        함께 만들어보면서 자연스럽게 익혀볼게요! 렛츠 기릿! 😇
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutB-3.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 B-3으로 변경해주겠습니다. 오른쪽에
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
    <title>웹디자인개발기능사 레이아웃 B-3</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>전체적인 레이아웃을 먼저 만들겠습니다.</p>
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
      <p>
        해당 영역을 확인하기 위해 width, height, background-color를
        설정하였습니다. width값을 100%를 설정하고, height값과 background-color을
        넣어서 영역을 확인하겠습니다.
      </p>
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
        각 섹션의 전체영역과 가운데 영역을 만들겠습니다. 재활용이 가능한
        클래스를 사용하여 가운데 영역을 만들겠습니다.
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
      <p>
        container영역은 재활용 되는 부분이기 때문에 height 값은 부모 박스한테
        상속을 받고 가운데 정렬을 위하여 margin: 0 auto;를 사용합니다. 영역
        확인을 위해 백그라운드는 rgba를 이용하여 작업하면 투명도 설정이
        가능합니다. 컨테이너 박스 자식들은 가로 정렬이 필요하기 때문에 flex도
        미리 넣어주겠습니다.
      </p>
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
        헤더 영역은 전체 영역과 가운데 영역을 설정해야 합니다. container속성은
        재사용이 가능하니 한번만 쓰면 됩니다. 헤더 영역에는 로고 영역과 메뉴
        영역을 설정합니다.
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
#header .container .logo {
    width: 20%;
    height: 100px;
    background-color: #c7c7c7;
}
#header .container .nav {
    width: 80%;
    height: 100px;
    background-color: #bcbcbc;
}`}
      />

      <p>슬라이드 영역은 width값과 height을 설정하면 됩니다.</p>
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
        컨텐츠 영역도 전체 색만 빼주고 작업하겠습니다. 처음에는 전체 영역과
        가운데 영역을 나누어서 작업을 했지만, 여기서 색만 빼서 티 안나게
        하겠습니다. 컨텐츠 영역에는 자식 요소 3개를 만들고 영역을 만들겠습니다.
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
#contents .container .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}
#contents .container .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #b1b1b1;
}
#contents .container .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #a3a3a3;
}`}
      />
      <p>
        푸터 영역도 전체 영역과 가운데 영역으로 나누어서 작업하겠습니다.
        container를 설정하고 자식으로 3개의 박스를 넣겠습니다. 이미 flex가
        설정되어 있으니 width와 height만 설정하면 영역이 잡힐것입니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="container">
        <div class="footer1"></div>
        <div class="footer2"></div>
        <div class="footer3"></div>
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
#footer .container .footer1 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}
#footer .container .footer2 {
    width: 60%;
    height: 100px;
    background-color: #929292;
}
#footer .container .footer3 {
    width: 20%;
    height: 100px;
    background-color: #838383;
}`}
      />

      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;header&gt;</code> : 페이지의 상단 구조. 로고와 내비게이션을
          포함.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 독립된 콘텐츠 단위. 슬라이드 등 의미
          있는 콘텐츠에 사용.
        </li>
        <li>
          <code>&lt;main&gt;</code> : 문서의 중심 콘텐츠. 페이지당 한 번만 사용.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 논리적으로 묶인 콘텐츠 블록.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 페이지 하단 정보, 링크, 저작권 등의
          영역.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>width: 100%</code> → 브라우저 전체 너비를 채우는 기본 구조 설정.
        </li>
        <li>
          <code>margin: 0 auto</code> → 고정 너비 요소를 수평 가운데 정렬.
        </li>
        <li>
          <code>height: inherit</code> → 부모 요소의 높이를 자식에게 그대로
          적용.
        </li>
        <li>
          <code>background-color: rgba()</code> → 배경색에 투명도를 적용하여
          구조를 시각적으로 구분.
        </li>
        <li>
          <code>display: flex</code> → 자식 요소를 가로 방향으로 정렬할 때 사용.
        </li>
      </ul>
      <h5>✅ CSS 색상 표현 방법</h5>
      <ul>
        <li>
          <code>이름표기법</code> : <code>red</code>, <code>blue</code>,{' '}
          <code>green</code> 등 기본 색상 이름
        </li>
        <li>
          <code>16진수</code> : <code>#ff0000</code> (빨강),{' '}
          <code>#0000ff</code> (파랑) 등
        </li>
        <li>
          <code>RGB</code> : <code>rgb(255, 0, 0)</code> (빨강),{' '}
          <code>rgb(0, 0, 255)</code> (파랑)
        </li>
        <li>
          <code>RGBA</code> : <code>rgba(0, 0, 0, 0.2)</code>처럼{' '}
          <strong>투명도</strong>까지 설정 가능
        </li>
        <li>
          <code>HSL / HSLA</code> : 색상, 채도, 밝기로 표현. 예:{' '}
          <code>hsl(120, 100%, 50%)</code>
        </li>
      </ul>

      <h5>✅ 공통 클래스 활용</h5>
      <ul>
        <li>
          <code>.container</code> 클래스는 가운데 정렬, 고정 폭, flex 정렬 등의
          공통 속성을 포함합니다.
        </li>
        <li>
          여러 섹션에서 반복적으로 사용되므로 유지보수와 작업 효율이 향상됩니다.
        </li>
        <li>
          실무에서도 반복되는 구조를 하나의 클래스에 담아{' '}
          <strong>재사용</strong>하는 방식을 많이 사용합니다.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          B유형의 전체 너비 레이아웃 구조를 바탕으로 가운데 콘텐츠를 구성하는
          패턴을 연습했습니다.
        </li>
        <li>
          <code>.container</code> 클래스를 통해 재사용 가능한 CSS 설계를
          경험했습니다.
        </li>
        <li>
          flex를 통한 가로 배치, 영역 분리 구조를 반복하며 자연스럽게 레이아웃
          설계 감각을 키웠습니다.
        </li>
        <li>
          효율적이고 유지보수하기 쉬운 CSS 구조의 기초를 익히는 실습이었습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        수고하셨습니다! 이번 B-3 유형을 통해
        <strong>효율적인 CSS 클래스 활용법</strong>과
        <strong>반복되는 레이아웃 구조의 설계 방식</strong>을 연습해보았습니다.
      </p>
      <p>
        container 클래스를 한 번 정의해 여러 곳에서 사용하는 방법은 앞으로
        프로젝트를 할 때도 매우 유용하게 쓰일 거예요. 직접 코드로 작성해보며
        익숙해지는 것이 가장 중요합니다. 여러 번 반복해서 연습해보세요 💪
      </p>
      <p>
        다음 유형도 더욱 알차게 준비했으니 기대해 주세요! 고생 많으셨습니다 😊
      </p>
    </>
  )
}
