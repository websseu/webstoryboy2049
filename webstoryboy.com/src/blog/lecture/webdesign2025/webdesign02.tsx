import CodeBlock from '@/components/post/post-code'

export default function Webdesign02() {
  return (
    <>
      <h3>소개</h3>
      <p>
        안녕하세요! 웹스토리보이입니다. 이번에는 웹디자인개발기능사 A-2 유형의
        레이아웃을 함께 만들어보겠습니다.
      </p>
      <p>
        A-2 유형은 기본적인 구조가 A-1과 동일하며, 차이는 오직 내용물에
        있습니다. A-1에서는 div 태그만을 사용해 레이아웃을 구성했다면, 이번
        A-2에서는 시멘틱 태그(Semantic Tag) 를 활용해 코딩해보겠습니다.
      </p>
      <p>
        웹디자인 기능사 시험에서는 웹 표준과 접근성을 고려한 마크업이
        요구됩니다. 물론 div만으로도 충분히 구조를 만들 수 있지만, 의미를 부여한
        시멘틱 태그를 사용하는 것이 더 바람직한 방법입니다. 이번 예제를 통해
        header, nav, main, section, article, footer 같은 시멘틱 태그의 역할과
        사용법을 자연스럽게 익힐 수 있을 거예요.
      </p>
      <p>그럼 바로 시작해볼까요? 😇 렛츠기릿!</p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutA-2.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 A-2으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 A-2</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p className='uline'>
        구조 만들기 : 전체적인 레이아웃을 확인하고 전체적인 구조를 만들어
        보겠습니다.
      </p>
      <p>
        이 유형은 크게 header, slider, contents, footer로 구성되어 있으며,
        전체적인 영역을 감싸는 wrap으로 구성되어 있습니다. 이 부분은 body 영역에
        아래와 같이 표현하겠습니다. 웹 문서에서 영역을 잡을 때는 블록구조1
        태그를 이용하여 작업합니다. 시멘틱 태그를 이용하여 해당 영역 의미에 맞게
        태그를 작업하였습니다. 이런 태그를 시멘틱 태그라 합니다.
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
      <p className='uline'>
        구조 영역 표시하기 : 전체적인 구조를 작업했으니 CSS를 통해 구조가 잘
        잡혔는지 확인해보겠습니다.
      </p>
      <p>
        시멘틱 태그를 사용하여도, 아이디를 설정하였기 때문에 CSS는 아이디를 통해
        설정하면 됩니다. 블록 구조를 가운데 정렬하기 위하여 전체 영역을 감싸고
        있는 wrap에 margin: 0 auto;를 설정하였습니다. 샘플 PDF를 보고 width,
        Height를 설정하고, 백그라운드 색을 설정하였습니다. 이렇게 하면 기본
        구조는 다 잡았습니다. 이제는 각 섹션을 세심하게 한번 작업해보겠습니다.
      </p>
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 1200px;
    margin: 0 auto;
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
        헤더 영역에는 로고 영역과 네비 영역으로 나누어지고 부모 박스한테
        display:flex를 주면, 가로로 정렬이 됩니다. width: 80%는 부모박스를
        기준으로 80%를 의미합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="header">
    <h1 class="logo"></h1>
    <div class="nav"></div>
</div>
<!-- //header -->`}
      />
      <CodeBlock
        language='css'
        code={`#header {
    width: 100%;
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
      <p>슬라이드 영역은 별거 없기 때문에 정리만 하고 넘어가겠습니다.</p>
      <CodeBlock
        language='html'
        code={`<div id="slider"></div>
<!-- //slider -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 300px;
    background-color: #d9d9d9;
}`}
      />
      <p>
        컨텐츠 영역은 3개의 영역으로 나누어집니다. 각 영역의 독립적인 의미를
        가진다면 section 태그를 사용할 수 있습니다. 이번에는 섹션 태그를
        사용하여 영역을 나누겠습니다. 나머지 부분은 동일합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="contents">
    <section class="content1"></section>
    <section class="content2"></section>
    <section class="content3"></section>
</div>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 100%;
    display: flex;
}
#contents .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #d1d1d1;
}
#contents .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #c7c7c7;
}
#contents .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}`}
      />
      <p>
        푸터 영역도 콘텐츠와 동일하게 3개의 영역으로 나누어집니다. 여기에서는
        독립적인 영역을 나타내는 부분이 아니기 때문에 div 태그를 사용하였습니다.
        시멘틱 태그는 해당 영역에 적당한 의미가 부여된 태그가 있으면, 적절하게
        사용하면 됩니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="footer">
    <div class="footer1"></div>
    <div class="footer2"></div>
    <div class="footer3"></div>
</div>
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
        <li>&lt;div&gt; : 가장 기본적인 블록 요소. 영역 구분용으로 사용됨.</li>
        <li>
          &lt;header&gt; : 페이지나 섹션의 머리말 영역. 로고, 제목, 메뉴 등이
          포함됨.
        </li>
        <li>
          &lt;nav&gt; : 주요 내비게이션 링크를 담는 영역. 사이트 이동을 돕는
          메뉴 역할.
        </li>
        <li>
          &lt;main&gt; : 문서의 주요 콘텐츠 영역. 페이지에서 한 번만 사용하며
          핵심 내용을 포함.
        </li>
        <li>
          &lt;section&gt; : 주제별로 구분되는 콘텐츠 묶음. 제목 태그와 함께
          사용하는 것이 일반적.
        </li>
        <li>
          &lt;article&gt; : 독립적으로 배포 가능한 콘텐츠. 블로그 글, 뉴스 기사,
          게시글 등에 사용.
        </li>
        <li>
          &lt;footer&gt; : 페이지나 섹션의 바닥글 영역. 저작권, 연락처, 부가
          링크 등을 포함.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 자식 요소들을 가로로 정렬할 때 사용.{' '}
          <code>#header</code>, <code>#contents</code>, <code>#footer</code>에
          적용하여 가로 배치 실습.
        </li>
        <li>
          <code>margin: 0 auto</code> → 가운데 정렬. <code>#wrap</code>에
          적용하여 페이지 전체를 중앙에 위치.
        </li>
        <li>
          <code>width, height</code> → 레이아웃 박스의 크기 설정. 모든 영역에
          정확한 사이즈 지정 실습.
        </li>
        <li>
          <code>background-color</code> → 구조 확인용 시각적 배경색 설정.
        </li>
      </ul>

      <h5>✅ 구조 설계 포인트</h5>
      <ul>
        <li>
          <code>#wrap</code> : 전체 레이아웃을 감싸는 메인 컨테이너
        </li>
        <li>
          <code>#header</code>, <code>#slider</code>, <code>#contents</code>,{' '}
          <code>#footer</code> : 시각적 구조 구분
        </li>
        <li>flex 속성을 활용한 가로 배치 (헤더/컨텐츠/푸터 내부 요소)</li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          기본적인 레이아웃 구조를 이해하고, flex를 활용한 영역 배치를
          경험했습니다.
        </li>
        <li>
          시험에서도 의미 있는 구조 설계 + 최신 CSS 방식(flex) 을 적용하는 것이
          중요합니다.
        </li>
        <li>
          실제 시험에선 float 대신 <code>flex</code> 사용이 권장됩니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        A-2 유형은 앞서 만든 A-1 유형을 다시 복습하면서 조금 더 심화된 방식으로
        구현한 예제입니다. 두 번째는 훨씬 수월하지 않으신가요? 😄 세 번째, 네
        번째 반복하게 되면 점점 더 익숙해지고 자신감도 생길 거예요. 두고보세요!
        😜
      </p>
      <p>
        처음부터 깊고 복잡한 내용을 한꺼번에 하진 않아요. 조금씩 반복하면서,
        서서히 깊이 들어가는 방식으로 진행되니까 지금은 부담 없이 전체적인
        흐름만 익힌다는 느낌으로 따라와 주세요.
      </p>
      <p>
        처음 코딩을 하신다면 분명 오타나 실수로 어려움을 느끼실 수 있어요. 그럴
        땐 제가 제공한 코드와 차근차근 비교하면서 하나씩 따라오면 됩니다. 좌절은
        금물! 💪 누구나 그렇게 시작합니다.
      </p>
    </>
  )
}
