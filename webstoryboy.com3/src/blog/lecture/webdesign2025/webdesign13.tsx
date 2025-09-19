import CodeBlock from '@/components/post/post-code'

export default function Webdesign13() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 드디어 D유형 레이아웃을 작업해보겠습니다. D유형은 지금까지와는
        다르게 반응형 웹 레이아웃입니다. 즉, 전체 화면 기준으로 설계되며, 화면
        크기에 따라 유연하게 동작하는 구조예요.
      </p>
      <p>
        기존 A~C 유형과는 다르게, 디테일한 구성과 수치 조정이 중요하기 때문에
        샘플 PDF를 꼭 참고하시고, 픽셀 단위도 정확히 작업해주셔야 합니다. 이번
        유형은 난이도가 살짝 올라가지만, 그만큼 실무에서 많이 쓰이는 구조라서 꼭
        연습해두시면 좋아요! 그럼 바로 시작해볼까요? 집중해서! 꼼꼼하게! 렛츠
        기릿 🤩
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign 폴더 안에 layoutD-1.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 D-1으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 D-1</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 왼쪽 사이드, 콘텐츠 영역, 푸터 영역으로 구성되어
        있습니다. 특징이라면 반응형이긴 하지만, 왼쪽 메뉴는 200px로 고정되어
        있습니다.
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
      <p>
        왼쪽 사이드를 고정시키고, 메인 컨텐츠를 100%로 작업하게 되면, 전체 가로
        값은 200px + 100%가 되기 때문에 100%를 초과하게 됩니다. 전체 가로 값은
        100%에 맞추기 위해서는 콘텐츠 값에서 200px을 빼주어야 합니다. 그 부분을
        CSS로 표현하기 위해서는 calc를 사용할 수 있습니다. 즉 연산이 가능합니다.
        이렇게 하면 가로로 정렬이 가능해집니다. 한번 확인해보세요! 여기서
        주의할점은 width: calc(100% - 200px);를 작성시 하이픈(-) 양 옆으로
        공백이 꼭 있어야 합니다.
      </p>
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
    height: 850px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 850px;
    background-color: #e3e3e3;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #d9d9d9;
}`}
      />
      <p>
        메인 콘텐츠의 구조는 슬라이드, 배너, 공지사항 구조로 이루어져 있습니다.
        슬라이드와 배너는 article태그로, 공지사항은 section태그로
        작업하였습니다. 이렇게 하면 전체적인 레이아웃은 완성이 되었습니다. 이제
        세부적인 영역을 작업해보겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <aside id="aside"></aside>
    <main id="main">
        <article id="slider"></article>
        <article id="banner"></article>
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
    height: 850px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 850px;
    background-color: #e3e3e3;
}
#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
}
#banner {
    width: 100%;
    height: 200px;
    background-color: #d1d1d1;
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
    height: 750px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        슬라이드 영역을 작업해보겠습니다. 이번 유형의 슬라이드는 특이한게 링크
        배너가 슬라이드 위에 위치해 있습니다. 그래서 position:absolute를
        이용하여 내가 원하는 위치로 설정할 것입니다. 주의할 점이 있다면 절대
        위치를 설정하였다면 기준점이 되는 relative를 설정해야 합니다. 부모
        박스를 기준으로 잡기위해 slider에 postion: relative를 설정하였습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
    <div class="link"></div>
</article>`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
    position: relative;
}
#slider .link {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 300px;
    background-color: #9d9d9d;
}`}
      />
      <p>배너 영역도 특이한 부분이 없기 때문에 영역만 확인하겠습니다.</p>
      <CodeBlock language='html' code={`<article id="banner"></article>`} />
      <CodeBlock
        language='css'
        code={`#banner {
    width: 100%;
    height: 200px;
    background-color: #d1d1d1;
}`}
      />
      <p>
        콘텐츠 공지사항 영역도 특이한 부분이 없기 때문에 영역만 확인하겠습니다.
      </p>
      <CodeBlock language='html' code={`<section id="contents"></section>`} />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 100%;
    height: 250px;
    background-color: #c7c7c7;
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
    background-color: #bcbcbc;
}
#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #b1b1b1;
}
#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #a3a3a3;
}`}
      />
      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;aside&gt;</code> : 고정된 왼쪽 메뉴 영역입니다. 로고나
          내비게이션이 들어갑니다.
        </li>
        <li>
          <code>&lt;main&gt;</code> : 슬라이드, 배너, 콘텐츠 등 주요 콘텐츠가
          포함되는 영역입니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 슬라이드와 배너처럼 독립적인 콘텐츠
          블록에 사용되었습니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 공지사항 등 일반 콘텐츠 그룹을 표현할
          때 사용됩니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트의 하단 정보를 담는 영역이며,
          3분할로 구성됩니다.
        </li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 가로 정렬을 위해 <code>#wrap</code>과{' '}
          <code>#footer</code>에 사용되었습니다.
        </li>
        <li>
          <code>width: calc(100% - 200px)</code> → 고정 너비를 제외한 나머지
          공간을 자동 계산하여 반응형 레이아웃을 구현합니다.
        </li>
        <li>
          <code>position: relative</code> + <code>absolute</code> → 슬라이드
          위에 링크 배너를 정확한 위치에 배치할 때 사용합니다.
        </li>
        <li>
          <code>background-color</code> → 구조 시각화를 위해 각 영역별 배경색을
          다르게 지정했습니다.
        </li>
      </ul>
      <h5>✅ position 속성 정리</h5>
      <ul>
        <li>
          <code>position: relative</code> → 기준점을 설정합니다. 자식 요소가{' '}
          <code>absolute</code>일 때 이 요소를 기준으로 배치됩니다.
        </li>
        <li>
          <code>position: absolute</code> → 부모 중 <code>relative</code>가
          설정된 요소를 기준으로 원하는 위치에 자유롭게 배치합니다.
        </li>
        <li>
          예를 들어, 슬라이드 영역 위에 배너를 고정할 때는 슬라이드 박스에{' '}
          <code>relative</code>, 배너에 <code>absolute</code>를 적용해 위치를
          지정합니다.
        </li>
      </ul>

      <h5>✅ calc() 함수 정리</h5>
      <ul>
        <li>
          <code>calc()</code>는 CSS에서 <strong>값을 계산</strong>하여 유동적인
          레이아웃을 구성할 수 있게 해주는 함수입니다.
        </li>
        <li>
          이번 실습에서는 고정된 <code>aside</code> 영역(200px)을 제외한 나머지
          영역을 계산하기 위해 <code>width: calc(100% - 200px)</code>을
          사용했습니다.
        </li>
        <li>
          주의사항 : <strong>연산 기호 앞뒤에 반드시 공백</strong>을 넣어야
          합니다. 예: <code>calc(100% - 200px)</code>
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        이제 반응형 레이아웃의 기초인 D유형도 마무리되었습니다! 🎉 이전 A~C
        유형들과 비교했을 때, 구조는 조금 더 복잡해졌지만 핵심 개념만 잘
        파악하면 어렵지 않게 구성할 수 있습니다.
      </p>
      <p>
        다음 유형부터는 더 다양하고 응용된 반응형 형태가 나올 수 있으니, 이번
        기회를 통해 <strong>기초 레이아웃</strong>을 탄탄하게 익혀두세요.
      </p>
      <p>
        그럼 D유형은 여기서 마무리하고, 다음 E유형에서 또 만나요! 수고
        많으셨습니다. 💙
      </p>
    </>
  )
}
