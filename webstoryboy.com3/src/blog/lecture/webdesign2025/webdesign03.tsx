import CodeBlock from '@/components/post/post-code'

export default function Webdesign03() {
  return (
    <>
      <h3>소개</h3>
      <p>
        안녕하세요! 웹스토리보이입니다. 이번에는 A-3 유형 레이아웃을 함께
        만들어보겠습니다.
      </p>
      <p>
        A-3 유형은 A-2 유형과 거의 동일한 구조를 가지고 있으며, 푸터(footer)
        부분만 약간 다른 형태로 구성되어 있습니다. 하단에는 메뉴와 카피라이터
        영역이 추가되는 간단한 구조이기 때문에 전체 레이아웃 흐름을 이해하고
        있다면 어렵지 않게 따라오실 수 있을 거예요.
      </p>
      <p>
        A유형 시리즈는 기본 골격은 같고, 세부적인 부분(특히 푸터 구조)만 조금씩
        달라지는 방식이기 때문에, 한 번 익혀두면 나머지 유형도 금방 습득할 수
        있습니다. 그럼, 바로 시작해볼까요? 😅 렛츠기릿!
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutA-3.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 A-3으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 A-3</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 영역을 감싸고 있는 wrap을 만들고, 자식 요소로 header, slider,
        contents, footer를 만들겠습니다. 참고로 main 태그는 사이트에서 한번 밖에
        사용하지 못합니다.
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
        * 표시는 전체 태그를 선택하는 선택자입니다. 여기에 마진과 패딩을 0을
        주는 이유는 모든 태그에는 보이지 않는 여백이 존재합니다. 그 여백이 모든
        브라우저에서 동일하다면 상관없지만 조금씩 틀리기 때문에 모든 요소에
        여백을 초기화 시켜주는 겁니다. 그래서 넣어 줬어요!😝 각 요소에 가로,
        세로, 백그라운드를 넣어주면 영역을 볼 수 있습니다.
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
        헤더 영역은 기존과 동일합니다. 로고 영역은 사이트 문서에 있어 가장
        중요한 타이틀 역활을 하기 때문에 h1 태그를 사용할 수 있습니다. 딱
        정해진건 아니지만 대부분에 이렇게 많이 사용합니다. 여러분들도 쓰고
        싶은거 쓰시면 됩니다. 전 h1태그를 사용하겠습니다. 두개의 영역을 나누어
        주기 위해 flex를 사용하였고, 자식 요소에 width에 따라 영역이
        설정되었습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="header">
    <h1 class="logo"></h1>
    <nav class="nav"></nav>
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
      <p>슬라이드 영역은 별거 없으니 표시만 하고 넘어가겠습니다. 슝~~~</p>
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
        컨텐츠 영역은 총 3개의 섹션으로 구성되어 있습니다. 각 섹션은 독립적인
        의미를 가지기 때문에 이번에는 section 태그를 사용해서 작업했습니다. HTML
        요소를 선택하는 방법에는 여러 가지가 있는데, 여기서는 class를 이용해
        스타일을 적용했습니다.
      </p>
      <p>
        그럼 ID는 왜 쓰고, Class는 왜 쓸까요? ID와 Class는 모두 태그에
        &quot;이름&ldquo;을 부여하는 방법입니다. ID는 &quot;하나&ldquo;의 고유한
        요소를 식별할 때, Class는 &quot;여러 요소&ldquo;를 그룹 지을 때
        사용합니다. 지금은 &quot;이런 게 있구나!&ldquo; 정도로만 가볍게 알고
        넘어가셔도 괜찮습니다. 궁금하면 아래 참고
      </p>
      <p>
        코딩을 계속 반복하다 보면 자연스럽게 상황에 맞는 선택법이 익혀질 거예요.
        처음부터 모든 걸 완벽히 이해하려고 하기보다는, 직접 따라 하면서 몸에
        익히는 것이 훨씬 빠른 학습 방법입니다.
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
        마지막으로 푸터 영역을 확인해보겠습니다. 이번에 2단으로 나누고 두번째
        영역이 또 2단으로 나누어지는 구조입니다. 어렵지 않습니다. 하나씩 하고 또
        하면 그냥됩니다. 먼저 .footer1과 footer2를 작업하고 footer2-1과
        footer2-2를 작업하면 됩니다.
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
    width: 100%;
    display: flex;
}
#footer .footer1 {
    width: 20%;
    height: 100px;
    background-color: #b1b1b1;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 50px;
    background-color: #a3a3a3;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 50px;
    background-color: #9d9d9d;
}`}
      />
      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          &lt;div&gt; : 가장 기본적인 블록 요소. 의미 없이 영역을 나눌 때 사용.
        </li>
        <li>
          &lt;header&gt; : 사이트 또는 섹션의 머리말. 로고, 제목, 메뉴 등을
          포함.
        </li>
        <li>&lt;nav&gt; : 내비게이션 영역. 주요 링크나 메뉴를 구성.</li>
        <li>&lt;main&gt; : 문서의 중심 콘텐츠. 한 페이지에 한 번만 사용.</li>
        <li>
          &lt;section&gt; : 주제별 콘텐츠 묶음. 독립적인 의미가 있는 경우 사용.
        </li>
        <li>
          &lt;footer&gt; : 페이지나 섹션의 바닥글. 저작권, 정보, 부가 링크 등을
          포함.
        </li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 가로 정렬을 위한 핵심 속성. 헤더, 콘텐츠,
          푸터 내부 배치에 사용.
        </li>
        <li>
          <code>margin: 0 auto</code> → 가운데 정렬. <code>#wrap</code>에
          적용하여 레이아웃 중앙 정렬.
        </li>
        <li>
          <code>width</code>, <code>height</code> → 각 영역의 너비와 높이를
          설정.
        </li>
        <li>
          <code>background-color</code> → 색상으로 구조 확인. 학습 시 시각적으로
          유용함.
        </li>
      </ul>
      <h5>✅ ID와 CLASS의 차이</h5>
      <ul>
        <li>
          <code>id</code>는 문서 내 유일하게 사용되는 고유 식별자. 주로{' '}
          <code>#header</code>, <code>#footer</code> 등 주요 단일 영역에 사용.
        </li>
        <li>
          <code>class</code>는 여러 요소에 반복 적용할 수 있는 그룹 식별자. 공통
          스타일을 묶을 때 사용.
        </li>
        <li>
          CSS에서는 <code>#아이디명</code>과 <code>.클래스명</code>으로 스타일을
          적용.
        </li>
        <li>
          우선순위는 <code>id &gt; class</code>. 하지만 유지보수에는{' '}
          <code>class</code> 기반 설계가 더 유리함.
        </li>
      </ul>
      <h5>✅ 블록 요소 (Block Element)</h5>
      <ul>
        <li>한 줄 전체를 차지하며, 위에서 아래로 쌓이는 구조입니다.</li>
        <li>기본적으로 줄바꿈이 자동으로 발생합니다.</li>
        <li>
          가로/세로 크기(<code>width</code>, <code>height</code>) 지정이
          가능합니다.
        </li>
        <li>레이아웃을 구성할 때 주로 사용됩니다.</li>
        <li>
          <strong>예시:</strong> <code>&lt;div&gt;</code>,<code>&lt;p&gt;</code>
          , <code>&lt;h1&gt; ~ &lt;h6&gt;</code>,<code>&lt;section&gt;</code>,{' '}
          <code>&lt;article&gt;</code>,<code>&lt;header&gt;</code>,{' '}
          <code>&lt;footer&gt;</code> 등
        </li>
      </ul>
      <h5>✅ 인라인 요소 (Inline Element)</h5>
      <ul>
        <li>
          내용만큼의 너비만 차지하며, 줄바꿈 없이 한 줄 안에 나란히 배치됩니다.
        </li>
        <li>텍스트나 작은 요소들을 감쌀 때 사용합니다.</li>
        <li>
          <code>width</code>, <code>height</code> 지정이 불가능하며, 마진/패딩도
          제한적입니다.
        </li>
        <li>텍스트나 버튼, 링크 등에 자주 쓰입니다.</li>
        <li>
          <strong>예시:</strong> <code>&lt;span&gt;</code>,
          <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>,
          <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code> 등
        </li>
      </ul>
      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          A-2 유형에 이어 구조를 유지하면서 푸터를 2단, 2중 구조로 확장하는 방식
          연습.
        </li>
        <li>
          복잡한 구조도 <code>div</code>와 <code>flex</code>만으로 충분히 구현
          가능함을 체험.
        </li>
        <li>
          앞으로 나올 다른 A유형 변형에서도 이 구조와 원리를 그대로 응용 가능.
        </li>
      </ul>
      <h4>4. 마무리</h4>
      <p>
        이번 레이아웃을 통해 기본 구조 안에서 섹션을 추가하거나 세부적으로
        나누는 방법을 연습했습니다.
      </p>
      <p>
        여기까지 차근차근 따라오셨다면, 이제 기본 레이아웃 구성 능력이 눈에 띄게
        좋아지고 있을 거예요. 수고 많으셨습니다! 🎉 다음 강의에서 또 만나요!
      </p>
    </>
  )
}
