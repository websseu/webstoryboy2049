import CodeBlock from '@/components/post/post-code'

export default function Webdesign11() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 C-3 유형 레이아웃을 함께 만들어보겠습니다. 기존에 작업했던
        C유형들과 구조가 비슷하기 때문에, 이번에도 빠르게 실습하며 복습하는
        느낌으로 진행해보겠습니다. 기초 레이아웃 흐름이 익숙해졌다면, 이번
        유형은 훨씬 수월하게 느껴지실 거예요! 그럼 바로 시작해볼까요? 렛츠 고!
        💪
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutC-3.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 C-3으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 C-3</title>
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
    width: 20%;
    background-color: #838383;
}
#footer .footer2 {
    width: 80%;
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
          <code>&lt;aside&gt;</code> : 좌측 고정 메뉴에 사용되는 보조 콘텐츠
          영역.
        </li>
        <li>
          <code>&lt;main&gt;</code> : 주요 콘텐츠를 감싸는 중앙 영역.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 독립적인 콘텐츠 블록에 사용 (슬라이드
          등).
        </li>
        <li>
          <code>&lt;section&gt;</code> : 관련 콘텐츠 그룹을 묶는 용도.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 사이트 하단 정보를 포함하는 영역.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 수평 정렬을 위해 <code>#wrap</code>,{' '}
          <code>#contents</code>, <code>#footer</code> 등에 적용.
        </li>
        <li>
          <code>width</code>, <code>height</code> → 각 박스의 크기를 설정하여
          레이아웃 구조 구분.
        </li>
        <li>
          <code>background-color</code> → 시각적으로 구조를 확인하기 위해 각
          박스에 배경색 지정.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          C-3 유형은 C-1, C-2와 동일한 큰 틀을 유지하면서, **반복 복습과 응용
          연습**을 위한 구성입니다.
        </li>
        <li>
          <code>#aside</code>와 <code>#main</code>으로 수평 구조를 잡고, 내부
          콘텐츠를 명확하게 분할했습니다.
        </li>
        <li>
          HTML 구조와 CSS 스타일을 매칭하며 **선택자 설계 방식에 익숙해지는
          과정**을 경험했습니다.
        </li>
        <li>
          이제는 각 박스를 배치하고 스타일을 지정하는 흐름이 **자연스럽게 손에
          익는 단계**입니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        C-3 유형까지 정말 잘 따라오셨습니다! 🎉 반복되는 구조 속에서도{' '}
        <strong>박스 배치 방식, 선택자 적용, 레이아웃 분할</strong>의 개념이
        점점 더 자연스럽게 체득되고 있을 거예요.
      </p>
      <p>
        이제 곧 D유형으로 넘어가면, 조금 더 다양한 변형 구조나 레이아웃 응용이
        나올 예정입니다. 그 전에 C유형을 한 번 더 복습하고 넘어가도 좋아요!
      </p>
      <p>그럼 다음 단계에서도 계속 함께 달려보아요! 수고하셨습니다 😊</p>
    </>
  )
}
