import CodeBlock from '@/components/post/post-code'

export default function Webdesign10() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 C-2 유형 레이아웃, 벌써 10번째 레이아웃을 만들어보겠습니다.
        10번 정도 따라하다 보면 점점 감이 잡히는 느낌, 오시죠? 😄 처음에는 모든
        걸 다 이해하려고 하기보다는, 흐름을 따라가며 반복하는 것이 더
        중요합니다. 기초적인 부분을 설명할 때 모든 걸 세세히 다루진 못했지만,
        계속 따라 하다 보면 자연스럽게 익숙해질 거예요.
      </p>
      <p>
        그래도 이해가 잘 안 될 땐? 👉 검색하거나, 아니면 GTP에게 물어보면 거의
        다 해결됩니다! HTML이나 CSS 속성은 방법만 알고 있으면 언제든지 필요한
        정보는 검색해서 찾을 수 있어요. 그러니 모른다고 속상해하지 마세요.
        중요한 건 흐름과 구조를 이해하는 거예요 💡 자, 그럼 오늘도 힘내서
        만들어볼까요? 렛츠 기릿! 😣😫😔🥳
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutC-2.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 C-2으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 C-2</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 왼쪽 메뉴와 콘텐츠로 구성되어 있습니다. aside와 main
        영역으로 설정하겠습니다. 전체 크기는 1000px로 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <aside id="aside"></aside>
        <main id="main"></main>
    </div>
    <!-- //wrap -->
</body>`}
      />
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 1000px;
    display: flex;
}
#aside {
    width: 20%;
    height: 650px;
    background-color: #efefef;
}
#main {
    width: 80%;
    height: 650px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        콘텐츠 구조에는 3개의 섹션이 들어가기 때문에 이 부분도 구조화
        하겠습니다. 이렇게 하면 전체적인 구조가 완성된것 같습니다. 세부적으로
        하나씩 작업을 들어가겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <aside id="aside"></aside>
    <main id="main">
        <article id="slider"></article>
        <section id="contents"></section>
        <footer id="footer"></footer>
    </main>
</div>
<!-- //wrap -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 350px;
    background-color: #d9d9d9;
}
#contents {
    width: 100%;
    height: 200px;
    background-color: #d1d1d1;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #c7c7c7;
}`}
      />
      <h4>2. 각 섹션 작업하기</h4>
      <p>
        왼쪽 사이드 영역에는 두개의 영역이 들어갑니다. width, height,
        background-color를 넣어주고, 영역을 확인하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<aside id="aside">
    <h1></h1>
    <nav></nav>
</aside>
<!-- //aside -->`}
      />
      <CodeBlock
        language='css'
        code={`#aside {
    width: 20%;
}
#aside h1 {
    width: 100%;
    height: 100px;
    background-color: #d9d9d9;
}
#aside nav {
    width: 100%;
    height: 550px;
    background-color: #d1d1d1;
}`}
      />
      <p>슬라이드 영역은 별개 없으니 영역만 확인하고 넘어가겠습니다.</p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
</article>
<!-- //slider -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 350px;
    background-color: #c7c7c7;
}`}
      />
      <p>
        컨텐츠 영역에는 3개의 섹션으로 구성되어 있습니다. 독립적인 주제
        영역이라면, article 태그를 사용해도 괜찮습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <article class="content1"></article>
    <article class="content2"></article>
    <article class="content3"></article>
</section>
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
        푸터 영역은 두개의 영역으로 나누고, 두번째 영역은 다시 두개의 영역을
        만들겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2">
        <div class="footer2-1"></div>
        <div class="footer2-2"></div>
    </div>
</footer>`}
      />
      <CodeBlock
        language='css'
        code={`#footer {
    width: 100%;
    display: flex;
}
#footer .footer1 {
    width: 80%;
    background-color: #838383;
}
#footer .footer2 {
    width: 20%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 50px;
    background-color: #9d9d9d;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 50px;
    background-color: #929292;
}`}
      />
      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;aside&gt;</code> : 좌측 고정 메뉴 또는 보조 콘텐츠 영역.
        </li>
        <li>
          <code>&lt;main&gt;</code> : 주요 콘텐츠 영역을 감싸는 태그.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 독립적인 콘텐츠(슬라이더, 박스 등)에
          사용.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 콘텐츠 묶음이나 주제 구분 영역.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단 영역. 저작권, 링크 등을
          포함.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 수평 정렬을 위해 <code>#wrap</code>,{' '}
          <code>#contents</code>, <code>#footer</code> 등에 사용.
        </li>
        <li>
          <code>width</code>, <code>height</code> → 각 영역의 크기를 설정. 비율
          또는 고정값 사용 가능.
        </li>
        <li>
          <code>background-color</code> → 각 영역의 배경을 설정하여 시각적으로
          구분.
        </li>
      </ul>

      <h5>✅ 선택자 정리</h5>
      <ul>
        <li>
          태그 선택자 (<code>h1</code>, <code>nav</code>) → 동일 태그 전체에
          스타일 적용.
        </li>
        <li>
          클래스 선택자 (<code>.footer2</code>, <code>.content1</code>) → 반복
          가능. 여러 요소에 동일 스타일 부여.
        </li>
        <li>
          아이디 선택자 (<code>#main</code>, <code>#wrap</code>) → 유일한 요소
          식별에 사용. 문서 내 한 번만 사용.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          C-1 유형과 유사하지만, <strong>푸터 배치 순서와 구조</strong>에 변화를
          준 레이아웃입니다.
        </li>
        <li>
          왼쪽 정렬 구조와 <code>aside + main</code> 구성을 통해 과거 고정형
          레이아웃을 연습했습니다.
        </li>
        <li>
          <code>display: flex</code>를 통해 가로 정렬 패턴을 반복 숙달했습니다.
        </li>
        <li>
          선택자별 쓰임새(id, class, 태그 선택자)를 구분하고 실제 코드에
          적용해보았습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        여기까지 C-2 유형 레이아웃을 완성해보았습니다! 구조 자체는 어렵지
        않지만, <strong>선택자 사용법과 레이아웃 흐름</strong>을 복습하기에 딱
        좋은 예제였죠.
      </p>
      <p>
        반복되는 레이아웃 구성 속에서 점점 더{' '}
        <strong>flex 구조와 선택자 사용</strong>이 자연스러워졌을 거예요. 이런
        기초를 몸에 익히는 게 실력을 키우는 가장 빠른 길입니다!
      </p>
      <p>
        그럼 여기서 마무리하고, 다음 C-3 유형도 바로 이어서 연습해보겠습니다.
        수고하셨습니다 😊 화이팅입니다! 💪
      </p>
    </>
  )
}
