import CodeBlock from '@/components/post/post-code'

export default function Webdesign05() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 B유형을 함께 만들어볼 거예요. B유형은 A유형과 달리 전체 화면을
        활용하는 구조입니다. 실제 웹사이트에서도 자주 사용되는 레이아웃이라 꼭
        익혀두면 좋아요! A유형보다 조금 더 복잡할 수는 있지만, 반복해서 연습하면
        누구나 쉽게 익힐 수 있어요. 그럼 바로 시작해볼까요? 🚀
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutB-1.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 B-1으로 변경해주겠습니다. 상단에
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
    <title>웹디자인개발기능사 레이아웃 B-1</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 wrap박스 안에 4개의 박스가 있는 구조입니다. 섹션 태그를
        이용하여 해당 아이디를 설정했습니다.
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
      <p>
        해당 영역을 확인하기 위해 width, height, background-color를
        설정하였습니다. 전과 다른 점이 있다면 전체 영역이기 때문에 width값을
        100%를 설정한 점이 다릅니다. 100%로 설정하면 브라우저 크기에 맞게 전체로
        표현 될 것입니다.
      </p>
      <CodeBlock
        language='css'
        code={` * {
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

      <h4>2. 각 섹션 작업하기</h4>
      <p>
        헤더 영역은 전체 영역과 가운데 영역으로 구성되어 있고, 가운데 영역은
        로고 영역과 네비 영역으로 구성되어 있습니다. 전체 영역을 나타내는 header
        영역에는 width: 100%를 설정하고 header_container 영역에는 width 값을
        1200px로 설정합니다. header_container 영역은 가운데로 오기 위해서
        margin: 0 auto를 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="header">
    <div class="header_container">
        <h1 class="logo"></h1>
        <nav class="nav"></nav>
    </div>
</div>
<!-- //header -->`}
      />
      <CodeBlock
        language='css'
        code={`#header {
    width: 100%;
    background-color: #efefef;
}
#haeader .header_container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
#haeader .header_container .logo {
    width: 20%;
    height: 100px;
    background-color: #d9d9d9;
}
#haeader .header_container .nav {
    width: 80%;
    height: 100px;
    background-color: #d1d1d1;
}`}
      />

      <p>
        슬라이드 영역은 전체 영역이 없고 가운데 영역만 있기 때문에 margin: 0
        auto;를 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="slider"></div>
<!-- //slider -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    background-color: #c7c7c7;
}`}
      />

      <p>
        컨텐츠 영역도 전체 영역은 없고 가운데 영역만 있는 구조입니다. 가운데
        영역 안에 3개의 자식 영역이 들어가는 형태입니다. 3개의 영역은 width값을
        33.3333%로 설정하고, 상위 박스영역에는 flex를 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<main id="contents">
    <section class="content1"></section>
    <section class="content2"></section>
    <section class="content3"></section>
</main>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 1200px;
    margin: 0 auto;
    display: flex;
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
        마지막으로 부터 영역은 전체 영역이 들어가기 때문에 footer 영역한테는
        width를 100%로 설정하고, footer_container에게는 width값을 1200px로
        설정하고 가운데 정렬를 위해 margin: 0 auto를 설정하겠습니다. 자식으로
        3개의 박스가 있으니 이 부분도 width, height을 설정하고 부모박스한테
        flex를 설정하면 가로로 정렬이 됩니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer_container">
        <div class="footer1"></div>
        <div class="footer2">
            <div class="footer2-1"></div>
            <div class="footer2-2"></div>
        </div>
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
#footer .footer__container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
#footer .footer__container .footer1 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}
#footer .footer__container .footer2 {
    width: 80%;
}
#footer .footer__container .footer2 .footer2-1 {
    width: 100%;
    height: 50px;
    background-color: #929292;
}
#footer .footer__container .footer2 .footer2-2 {
    width: 100%;
    height: 50px;
    background-color: #838383;
}`}
      />

      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          &lt;div&gt; : 레이아웃을 나누는 기본 블록 요소. 의미 없이 영역 구분 시
          사용.
        </li>
        <li>&lt;header&gt; : 사이트 상단 영역. 로고, 내비게이션 포함.</li>
        <li>
          &lt;article&gt; : 독립된 콘텐츠 단위. 슬라이드 영역 등에서 의미 부여에
          적합.
        </li>
        <li>
          &lt;main&gt; : 페이지의 핵심 콘텐츠를 감싸는 영역. 문서당 1회 사용
          권장.
        </li>
        <li>
          &lt;section&gt; : 주제별 콘텐츠 묶음. 반복 콘텐츠 구조화에 적합.
        </li>
        <li>
          &lt;footer&gt; : 하단 정보, 메뉴, 카피라이터 등이 포함되는 영역.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>width: 100%</code> → 전체 화면을 가득 채우는 기본 레이아웃의
          핵심 속성.
        </li>
        <li>
          <code>margin: 0 auto</code> → 가운데 정렬. 중앙 고정형 레이아웃 구현.
        </li>
        <li>
          <code>display: flex</code> → 가로 배치에 사용. header, contents,
          footer 구성에 필수.
        </li>
        <li>
          <code>background-color</code> → 시각적 구조 확인을 위한 색상 설정.
        </li>
      </ul>

      <h5>✅ 마진(Margin)과 패딩(Padding)의 차이</h5>
      <ul>
        <li>
          margin : 요소 <em>바깥쪽</em>의 여백입니다. 다른 요소와의 간격을
          조절할 때 사용합니다. 예) 박스와 박스 사이의 간격 설정
        </li>
        <li>
          padding : 요소 <em>안쪽</em>의 여백입니다. 콘텐츠(글자 등)와 테두리
          사이의 간격을 설정할 때 사용합니다. 예) 버튼 내부의 글자 여백 조절
        </li>
        <li>
          <code>margin: 0 auto;</code> → 좌우 마진을 자동으로 설정해{' '}
          <strong>가운데 정렬</strong>할 때 자주 사용됩니다.
        </li>
        <li>
          <code>padding: 10px;</code> → 요소 안쪽 여백을 10px로 설정하여
          콘텐츠가 너무 붙지 않도록 만듭니다.
        </li>
        <li>
          마진은 외부 간격, 패딩은 내부 간격! 시각적으로 여백을 조절할 때 어떤
          쪽을 조절해야 할지 구분해서 사용하는 것이 중요합니다.
        </li>
      </ul>

      <h5>✅ 구조 설계 포인트</h5>
      <ul>
        <li>
          <code>#wrap</code> : 전체 레이아웃을 감싸는 부모 요소로서, 가로 폭
          100% 설정.
        </li>
        <li>
          <code>.header_container</code>, <code>.footer_container</code> : 고정
          폭(1200px) 박스이며, 내부에서 flex 정렬 사용.
        </li>
        <li>
          슬라이더 및 콘텐츠 영역은 <code>width: 1200px</code>와{' '}
          <code>margin: 0 auto</code>로 중앙 정렬 처리.
        </li>
        <li>
          푸터는 2단 구조 + 2중 구조로 구성되어 실무와 유사한 복합 레이아웃을
          학습함.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          B유형은 <strong>전체 너비 100% 레이아웃</strong>과{' '}
          <strong>고정 폭 중앙 콘텐츠</strong>를 함께 사용하는 실전형
          구조입니다.
        </li>
        <li>
          다양한 위치에서 flex를 적용하여 <strong>가로 배치의 이해도</strong>를
          높일 수 있었습니다.
        </li>
        <li>
          시멘틱 태그의 의미 기반 활용과 CSS 정렬 방식이 실제 프로젝트에서도
          그대로 사용됩니다.
        </li>
        <li>
          슬라이드, 콘텐츠, 푸터 영역의 다양한 레이아웃 분할 방식을 통해{' '}
          <strong>반복적인 실무 패턴을 익혔습니다.</strong>
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        A유형보다 구조는 조금 복잡했지만, 전체 레이아웃의 개념을 잡는 데 있어
        매우 중요한 예제였습니다.
      </p>
      <p>
        B유형을 통해 실무형 레이아웃을 어떻게 구성하고, 어떤 식으로 마크업과
        CSS를 분리하여 작업하는지 감을 잡으셨을 거예요. 반복해서 따라 하고 손에
        익히면 실전에서도 능숙하게 다룰 수 있으니, 꼭 여러 번 연습해보세요! 😊
      </p>
      <p>다음 유형도 함께 천천히 익혀보도록 하겠습니다. 수고하셨습니다! 👏</p>
    </>
  )
}
