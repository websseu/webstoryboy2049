import CodeBlock from '@/components/post/post-code'

export default function Webdesign12() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 C-4 유형 레이아웃을 함께 만들어보겠습니다. 기존에 작업했던
        C유형들과 구조는 거의 동일하고, 푸터 구조만 약간 다르게 구성된
        레이아웃이에요. 이미 익숙한 구조이기 때문에, 이번에도 빠르게 실습하면서
        마무리하는 느낌으로 진행해보겠습니다. 그럼 바로 시작해볼까요? 렛츠 기릿!
        💪
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutC-4.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 C-4으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 C-4</title>
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
      <p>푸터 영역은 3개의 영역으로 작업하겠습니다.</p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2"></div>
    <div class="footer3"></div>
</footer>`}
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
    background-color: #9d9d9d;
}
#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #929292;
}
#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #838383;
}`}
      />
      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;aside&gt;</code> : 좌측 고정 사이드 영역으로 메뉴나 로고
          배치에 사용됩니다.
        </li>
        <li>
          <code>&lt;main&gt;</code> : 주요 콘텐츠를 포함하는 메인 레이아웃
          영역입니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 독립적인 콘텐츠 블록, 예: 슬라이더
          영역에 사용됩니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 관련 콘텐츠 묶음을 표현합니다. 콘텐츠
          영역에서 사용되었습니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단의 정보나 추가 콘텐츠를
          배치하는 영역입니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 수평 정렬을 위해 <code>#wrap</code>,{' '}
          <code>#contents</code>, <code>#footer</code>에 적용되었습니다.
        </li>
        <li>
          <code>width</code>, <code>height</code> → 각 박스의 크기를 정확히
          설정하여 레이아웃 분할을 구현했습니다.
        </li>
        <li>
          <code>background-color</code> → 각 영역의 시각적 구분을 위해 컬러를
          설정해 레이아웃 구조를 쉽게 파악하도록 했습니다.
        </li>
      </ul>
      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          C유형의 마지막 예제로, 기존 구조를 복습하며 푸터 3분할 레이아웃을
          새롭게 적용해보았습니다.
        </li>
        <li>
          <code>20% / 60% / 20%</code>로 나뉜 푸터 구조를 통해 비율 조절과 Flex
          정렬 방식을 실습했습니다.
        </li>
        <li>
          이제는 구조 작성과 박스 나누기가 익숙해졌으며, 실무에서도 유용한
          레이아웃 감각을 습득하게 되었습니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        여기까지 C-4 유형 레이아웃을 완성해보았습니다! C유형은 전체적으로 비슷한
        구조를 갖고 있어{' '}
        <strong>반복 학습을 통해 기본기를 다지기에 가장 좋은 유형</strong>
        입니다.
      </p>
      <p>
        이번 C-4까지 완료했다면, 이제 <strong>D유형</strong>으로 넘어갈 준비가
        되셨습니다! 다음 단계로 더 다양한 레이아웃을 배워보며 실력을
        쌓아가볼게요 💪
      </p>
      <p>수고 많으셨습니다! 다음 유형에서 또 만나요 😊</p>
    </>
  )
}
