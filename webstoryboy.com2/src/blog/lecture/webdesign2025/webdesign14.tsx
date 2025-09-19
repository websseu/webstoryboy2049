import CodeBlock from '@/components/post/post-code'

export default function Webdesign14() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        좋아요! D-2유형은 D-1과 구조는 유사하지만 콘텐츠 영역 구성에 차이가
        있으니 비교하면서 작업하면 더 이해가 잘 될 거예요. 샘플 이미지
        참고하면서 정확한 위치와 크기를 맞추는 게 중요합니다. 시작할 준비
        되셨나요? 😎
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutD-2.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 D-2으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 D-2</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 aside, main, footer영역으로 나누어져 있습니다.
        aside영역은 width값이 200px로 고정되어 있고, main 영역을 유동적으로
        변하는 구조입니다. main 영역의 width값은 100%에서 200px 뺀값을 넣어주면
        전체적인 구조는 깨지지 않고 가로로 정렬이 됩니다. 그러기 위해서는 width:
        calc(100% - 200px);를 설정하면 됩니다.
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
    height: 650px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 650px;
    background-color: #e3e3e3;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #d9d9d9;
}`}
      />
      <p>
        이번 유형의 main 유형에는 두개의 섹션만 들어갑니다. 배너 섹션은 이미지
        슬라이드 안으로 들어갑니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <aside id="aside"></aside>
    <main id="main">
        <article id="slider"></article>
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
    height: 650px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 650px;
    background-color: #e3e3e3;
}
#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
}
#contents {
    width: 100%;
    height: 250px;
    background-color: #c7c7c7;
}
#footer {
    width: 100%;
    height: 100px;
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
    height: 550px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        슬라이드 영역을 작업해보겠습니다. 슬라이드 영역에는 이미지 영역과 배너
        영역으로 나누어 집니다. 여기서 배너 영역도 230px로 고정되어 있기 때문에
        이미지 영역의 width 값은 calc(100% - 230px)으로 설정해야 합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
    <div class="image"></div>
    <div class="banner"></div>
</article>`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    display: flex;
}
#slider .image {
    width: calc(100% - 230px);
    height: 400px;   
    background-color: #d9d9d9; 
}
#slider .banner {
    width: 230px;
    height: 400px;
    background-color: #d1d1d1;
}`}
      />
      <p>컨텐츠 영역은 두개의 영역으로 구성되어 있습니다.</p>
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
      <p>푸터 영역은 3개의 영역으로 작업하겠습니다.</p>
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
          <code>&lt;aside&gt;</code> : 고정된 왼쪽 메뉴 영역입니다. 로고와
          내비게이션 메뉴가 들어갑니다.
        </li>
        <li>
          <code>&lt;main&gt;</code> : 슬라이드, 배너, 콘텐츠 등 주요 콘텐츠가
          포함된 영역입니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 슬라이드와 배너처럼 독립적인 콘텐츠
          블록을 표현할 때 사용됩니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 공지사항 등 일반적인 콘텐츠 그룹을
          구성할 때 사용됩니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단 정보를 담는 영역이며, 3분할
          구조로 되어 있습니다.
        </li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 수평 배치를 위해 <code>#wrap</code>,
          <code>#footer</code> 등에 사용됩니다.
        </li>
        <li>
          <code>flex-wrap: wrap</code> → flex 항목들이 한 줄에 다 들어가지 않을
          경우 줄 바꿈을 가능하게 해줍니다. <code>#wrap</code>에 적용되어
          footer가 다음 줄에 배치됩니다.
        </li>
        <li>
          <code>width: calc(100% - 200px)</code> → 고정된 <code>aside</code>
          너비(200px)를 제외한 가변 영역을 계산하여 반응형 구현에 활용됩니다.
        </li>
        <li>
          <code>position: relative</code> + <code>absolute</code> → 슬라이드
          위에 링크 배너를 올릴 때 정확한 위치 설정을 위해 사용됩니다.
        </li>
        <li>
          <code>background-color</code> → 각 영역을 시각적으로 구분하기 위해
          다른 색상으로 지정하였습니다.
        </li>
      </ul>
      <h5>✅ flex 속성 정리</h5>
      <ul>
        <li>
          <code>display: flex</code> → 부모 요소에 적용하여 자식 요소들을 가로
          방향(기본값) 으로 정렬합니다.
        </li>
        <li>
          <code>flex-direction</code> → 정렬 방향을 지정합니다. 기본값은
          <code>row</code> (가로 정렬), 세로 정렬은 <code>column</code>을
          사용합니다.
        </li>
        <li>
          <code>justify-content</code> → 주축(가로축 기준)에서 자식 요소들의
          정렬 위치를 설정합니다. (예: <code>center</code>,
          <code>space-between</code>)
        </li>
        <li>
          <code>align-items</code> → 교차축(세로축 기준)에서 자식 요소들의 정렬
          방식을 설정합니다.
        </li>
        <li>
          <code>flex-wrap</code> → 자식 요소가 한 줄을 초과할 경우 자동 줄 바꿈
          여부를 결정합니다. <code>wrap</code>을 설정하면 다음 줄로 넘어갑니다.
        </li>
        <li>
          실습에서는 <code>#wrap</code>과 <code>#footer</code>에 flex 속성이
          적용되어 가로 정렬과 레이아웃 분할에 사용되었습니다.
        </li>
      </ul>
      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          반응형 레이아웃 구현을 위한 <code>calc()</code>
          사용법을 익혔습니다. 고정 사이드바와 가변 메인 영역의 조합이
          포인트입니다.
        </li>
        <li>
          <code>position: relative</code>와 <code>absolute</code>를 활용해
          요소를 원하는 위치에 정확하게 배치하는 방법을 연습했습니다.
        </li>
        <li>
          <code>display: flex</code>와 <code>flex-wrap</code>을 조합해 가로 정렬
          + 줄바꿈 처리가 가능한 구조를 만들었습니다.
        </li>
        <li>
          시각적 레이아웃 파악을 돕기 위해 <code>background-color</code>를 각
          박스마다 지정하여 구조 시각화 연습도 함께 진행했습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        이렇게 해서 D-2 유형도 완성되었습니다! 👏 D-1 유형과의 차이를 잘
        비교해가며 작업하셨다면, 실제 구조 설계에 대한 이해가 한층 더 깊어졌을
        거예요.
      </p>
      <p>
        지금처럼 기본기를 차곡차곡 쌓아간다면 어떤 유형이든 충분히 해낼 수
        있습니다. 다음은 D-3 유형으로 넘어가볼까요? 계속해서 도전해봅시다! 💪🔥
      </p>
    </>
  )
}
