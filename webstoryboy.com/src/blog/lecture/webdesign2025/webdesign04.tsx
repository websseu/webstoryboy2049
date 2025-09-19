import CodeBlock from '@/components/post/post-code'

export default function Webdesign04() {
  return (
    <>
      <h3>소개</h3>
      <p>
        안녕하세요! 웹스토리보이입니다. 오늘은 A유형의 마지막, A-4 유형
        레이아웃을 만들어보겠습니다.
      </p>
      <p>
        이번 A-4 유형도 A-3 유형과 구조는 거의 같습니다. 단지 푸터 영역의 배치
        방식만 약간 다를 뿐, 전체적인 틀은 동일하다고 생각하시면 됩니다.
        이제까지 여러 유형을 함께 만들어봤으니, 이번에는 스스로 먼저 도전해보고
        완성한 뒤에 저와 함께 코드를 비교하며 확인하는 방식을 추천드립니다. ✨
        직접 해보면서 어떤 부분이 달랐는지, 어떤 부분은 잘 따라갔는지 체크해보는
        과정이 실력을 확 끌어올리는 데 큰 도움이 될 거예요.
      </p>
      <p>자, 준비되셨나요? 그럼 바로 시작해봅시다! 고고! 😗</p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutA-4.html파일을 만들겠습니다.
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
    <title>웹디자인개발기능사 레이아웃 A-4</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        이제 전체적인 레이아웃 구조를 만들어보겠습니다. 우선, 페이지 전체를
        감싸는 wrap 요소를 만들고, 그 안에 header, slider, contents, footer
        영역을 차례대로 배치하겠습니다.
      </p>
      <p>
        참고로, 슬라이드 영역에는 저는 이번에 article 태그를 사용했습니다.
        하지만 꼭 article이어야 하는 것은 아닙니다. section 태그를 사용해도 전혀
        문제없어요!
      </p>
      <p>
        중요한 것은 &quot;이 영역이 어떤 의미를 갖는지&ldquo;를 기준으로 태그를
        선택하는 것입니다. 즉, 사용자가 생각하기에 의미가 적절하다면 어떤 시멘틱
        태그를 사용해도 괜찮습니다.
      </p>
      <p>
        태그 선택에 너무 정답을 강박처럼 느끼지 마세요. 의미를 고려해서
        자연스럽게 태그를 골라주시면 됩니다. 😉
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
        각 섹션별로 영역이 제대로 잡혔는지 표시하기 위해 width, height,
        background-color를 설정하였습니다. 블록 구조를 가운데 정렬하기 위해
        margin: 0 auto를 사용하였습니다
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
        헤더 영역도 두개의 영역으로 구성되어 있습니다. 간단하게 다음과 같이
        설정하겠습니다. 참고는 flex는 부모와 자식관계에서만 적용됩니다. 부모의
        부모한테는 적용이 안되요!
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
        컨텐츠 영역은 3개의 섹션으로 구성되어 있어 섹션 태그를 사용하여
        작업하였습니다. 이름은 편의를 위해 content로 통일하여 작업하였습니다.
        실제 서비스되는 사이트라면 그 해당 섹션 이름에 맞게 작성해주는게
        좋습니다.
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
        마지막 영역 푸터 영역은 우선 2개의 영역으로 먼저 만들겠습니다. footer1과
        footer2를 먼저 만들고, 영역이 완성되었다면, footer1-1와 footer1-2를
        만들면 됩니다. 하나씩 작업하면 어렵지 않습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1">
        <div class="footer1-1"></div>
        <div class="footer1-2"></div>
    </div>
    <div class="footer2"></div>
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
    width: 80%;
}
#footer .footer1 .footer1-1 {
    width: 100%;
    height: 50px;
    background-color: #b1b1b1;
}
#footer .footer1 .footer1-2 {
    width: 100%;
    height: 50px;
    background-color: #a3a3a3;
}
#footer .footer2 {
    width: 20%;
    height: 100px;
    background-color: #d9d9d9;
}`}
      />

      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>&lt;div&gt; : 기본 블록 요소. 의미 없는 구조 구분에 사용.</li>
        <li>
          &lt;header&gt; : 페이지나 섹션의 상단 영역. 보통 로고, 메뉴 등을 포함.
        </li>
        <li>
          &lt;nav&gt; : 주요 내비게이션 링크를 포함하는 영역. header 내부 또는
          독립 사용.
        </li>
        <li>
          &lt;main&gt; : 문서의 중심 콘텐츠를 감싸는 태그. 페이지당 1회 사용
          권장.
        </li>
        <li>
          &lt;section&gt; : 주제별 묶음. 반복되는 독립 콘텐츠를 나눌 때 사용.
        </li>
        <li>
          &lt;article&gt; : 독립적인 게시물 단위. 의미에 따라 슬라이드 영역
          등에서 활용 가능.
        </li>
        <li>
          &lt;footer&gt; : 페이지 또는 섹션의 하단 영역. 정보, 메뉴, 카피라이트
          등 포함.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 가로 배치를 위한 핵심 속성. header,
          contents, footer 등 레이아웃에 적용.
        </li>
        <li>
          <code>margin: 0 auto</code> → 전체 페이지 중앙 정렬. wrap에 적용.
        </li>
        <li>
          <code>width</code>, <code>height</code> → 각 영역의 크기 지정. 시각적
          구조 확인에 필수.
        </li>
        <li>
          <code>background-color</code> → 영역 구분 확인용 색상 설정. 연습 시
          가시성 확보.
        </li>
      </ul>

      <h5>✅ 구조 설계 포인트</h5>
      <ul>
        <li>
          <code>#wrap</code> : 전체 레이아웃을 감싸는 메인 컨테이너 역할.
        </li>
        <li>
          <code>#header</code>, <code>#slider</code>, <code>#contents</code>,{' '}
          <code>#footer</code> : 시멘틱 구조별 주요 영역.
        </li>
        <li>
          푸터 내부에 다시 2단, 혹은 2중 구조를 구성하며 복잡한 레이아웃을
          나누는 연습 진행.
        </li>
        <li>
          의미를 고려한 태그 선택 → 꼭 정해진 답이 있는 건 아니며, 의미 전달이
          핵심.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>A유형의 마지막 단계로서 전체 구조를 종합 복습하는 실습.</li>
        <li>슬라이드, 콘텐츠, 푸터 등 각 구조를 반복하면서 익숙해지는 과정.</li>
        <li>시멘틱 태그의 의미 파악 + CSS flex 활용 능력 향상.</li>
        <li>
          복잡한 레이아웃도 <code>div</code>와 <code>flex</code> 조합으로 충분히
          구현 가능함을 체험.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>A-4 유형까지 완성하신 여러분, 정말 잘 해주셨습니다! 🥳</p>
      <p>
        처음에는 생소하고 복잡하게 느껴졌을지라도, 지금쯤은 어느 정도 패턴이
        보이고, 손에 익기 시작했을 것이라고 확신합니다.
      </p>
      <p>
        이제부터는 A유형에서 익힌 패턴을 응용해서 B유형, C유형, D유형으로 확장해
        나갈 차례입니다. 복습을 게을리하지 말고, 작은 차이점도 눈여겨보면서
        조금씩 자신만의 속도로 성장해나가 봅시다. 포기하지 않고 계속 따라오는
        것만으로도 이미 반 이상 성공한 것입니다. 이제 우리는 다음 레벨로 넘어갈
        준비가 되어있습니다.
      </p>
      <p>그럼 B유형에서 다시 만나요! 렛츠기릿! 🚀</p>
    </>
  )
}
