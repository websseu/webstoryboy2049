import CodeBlock from '@/components/post/post-code'

export default function Webdesign09() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 C유형 레이아웃을 함께 만들어보겠습니다. C유형은 2000년대 초반에
        많이 사용되던 구조로, 가운데 정렬이 아닌 왼쪽 정렬 방식으로 구성된 것이
        특징입니다. 사이트 전체가 왼쪽에 고정되고, 그 안에 콘텐츠들이 배치되는
        구조죠. 이 레이아웃은 2023년 버전 개정 전에 사용되던 방식이라 최근
        레이아웃들에 비해 비교적 단순하고 쉬운 편이에요.
      </p>
      <p>그럼 빠르게 정리하고, 다음 D유형으로 넘어가볼게요! 렛츠 기릿! 💨</p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더 안에 layoutC-1.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 C-1으로 변경해주겠습니다.
      </p>

      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 C-1</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 왼쪽 메뉴와 콘텐츠로 구성되어 있습니다. aside와 main
        영역으로 설정하겠습니다.
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
    <h1 class="logo"></h1>
    <nav class="nav"></nav>
</aside>
<!-- //aside -->`}
      />
      <CodeBlock
        language='css'
        code={`#aside {
    width: 20%;
}
#aside .logo {
    width: 100%;
    height: 100px;
    background-color: #efefef;
}
#aside .nav {
    width: 100%;
    height: 550px;
    background-color: #d9d9d9;
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
        푸터 영역은 두개의 영역으로 나누고, 두번째 영역에 두개의 영역으로
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
    height: 100px;
    background-color: #9d9d9d;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 50px;
    background-color: #929292;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 50px;
    background-color: #838383;
}`}
      />

      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;aside&gt;</code> : 사이드바 역할을 하며, 보통 좌측 고정
          메뉴에 사용됩니다.
        </li>
        <li>
          <code>&lt;main&gt;</code> : 문서의 주요 콘텐츠 영역을 감싸는 태그로,
          한 문서에 한 번만 사용합니다.
        </li>
        <li>
          <code>&lt;article&gt;</code> : 독립적인 콘텐츠 단위(예: 슬라이더 등)에
          사용됩니다.
        </li>
        <li>
          <code>&lt;section&gt;</code> : 주제별로 묶이는 콘텐츠 그룹을
          나타냅니다.
        </li>
        <li>
          <code>&lt;footer&gt;</code> : 페이지의 하단 정보를 구성하는
          영역입니다.
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code> → 요소들을 가로로 정렬할 때 사용.{' '}
          <code>#wrap</code>과 <code>#contents</code>, <code>#footer</code>에
          적용됨.
        </li>
        <li>
          <code>width</code> → 전체 또는 일부 영역의 너비를 지정. 퍼센트(%)로
          비율 조절 가능.
        </li>
        <li>
          <code>height</code> → 각 섹션의 높이를 설정해 전체 구조를 시각적으로
          구분.
        </li>
        <li>
          <code>background-color</code> → 각 영역의 배경색을 지정해 구조 확인을
          쉽게 함.
        </li>
      </ul>

      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>
          C유형은 <strong>왼쪽 정렬 방식</strong>으로 구성된 고정형
          레이아웃입니다.
        </li>
        <li>
          <code>aside</code> + <code>main</code>을 사용해 양옆 배치를 구성하고,{' '}
          <code>display: flex</code>를 통해 수평 정렬을 구현했습니다.
        </li>
        <li>
          슬라이더, 콘텐츠, 푸터 구조까지 포함하여 전체 웹사이트 구조를 간결하게
          구성했습니다.
        </li>
        <li>
          푸터는 <strong>2단 → 2중 구조</strong>를 가지며, 하위 박스 분할 연습에
          좋은 예제였습니다.
        </li>
        <li>
          최근에는 잘 사용되지 않지만, 과거 고정형 웹사이트의 구조를 이해하는 데
          효과적입니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        수고하셨습니다! 🎉 이번 C유형은 최근 레이아웃과는 다르게 왼쪽 정렬이라는
        고정형 스타일을 사용했지만, 레이아웃의 기본 구조를 이해하고 정리하는 데
        아주 좋은 예제였습니다.
      </p>
      <p>
        이제 D유형으로 넘어가면 조금 더 다양한 구조와 응용이 나올 예정이에요.
        다양한 형태의 실전 레이아웃을 익히는 과정이니 기대하셔도 좋습니다!
      </p>
      <p>
        여기까지 따라오신 여러분 정말 고생 많으셨고, 다음 단계도 저와 함께
        차근차근 만들어보아요! 😄
      </p>
    </>
  )
}
