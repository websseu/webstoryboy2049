import CodeBlock from '@/components/post/post-code'

export default function Webdesign01() {
  return (
    <>
      <h3>소개</h3>
      <p>
        안녕하세요, 웹스토리보이입니다. 지금부터 레이아웃 연습을 시작하겠습니다.
        레이아웃은 A유형부터 F유형까지 총 6가지가 있으며, 각 유형을 하나씩
        연습해보겠습니다. 실제 사이트 제작 시 자주 활용되는 구조이기 때문에
        기본기를 탄탄히 익혀두면 큰 도움이 됩니다. 특히 레이아웃은 웹 코딩의
        핵심이자 기초이므로, 완벽히 이해하고 익혀두면 어떤 유형도 문제없이
        구현할 수 있습니다.
      </p>
      <p>
        웹디자인개발기능사 시험에서는 총 6가지 유형의 레이아웃이 제시되며, 각
        유형마다 4가지 형태가 포함되어 있습니다. 실제로는 유사한 구성들이 많아
        유형별로 1~2개씩만 연습해도 충분하지만, 처음 코딩을 접하는 분이라면
        반복적인 학습이 중요합니다. 따라서 24개 전체 유형을 모두 따라해보는 것을
        추천드립니다. 처음에는 어렵게 느껴질 수 있지만, 꾸준히 따라하다 보면
        시험장에서 스스로 코딩을 완성하고 있는 자신을 발견하게 될 것입니다.
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        VSCODE를 실행하고 webdesign폴더를 만들고 layoutA-1.html파일을
        만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인개발기능사 레이아웃 A-1으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인개발기능사 레이아웃 A-1</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p className='uline'>
        전체적인 레이아웃을 확인하고 전체적인 구조를 만들어 보겠습니다.
      </p>
      <p>
        이 유형은 크게 header, slider, contents, footer로 구성되어 있으며,
        전체적인 영역을 감싸는 wrap으로 구성되어 있습니다. 이 부분은 body 영역에
        아래와 같이 표현하겠습니다. 웹 문서에서 영역을 잡을 때는 블록구조 태그를
        이용하여 작업합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <div id="header"></div>
        <div id="slider"></div>
        <div id="contents"></div>
        <div id="footer"></div>
    </div>
</body>`}
      />

      <p className='uline'>
        전체적인 구조를 작업했으니 CSS를 통해 구조가 잘 잡혔는지
        확인해보겠습니다.
      </p>
      <p>
        margin: 0 auto;는 블록구조를 가운데 정렬하기 위한 속성입니다. 마진은
        박스의 바깥쪽 여백을 설정하기 위함이고, 0은 위아래, auto는 왼쪽, 오른쪽
        값을 자동으로 맞추기 위함입니다. 이렇게 하면 width값이 설정된 박스는
        가운데 정렬이 됩니다. 각각의 박스의 width, height, background-color을
        설정해주면, 브라우저 화면에 표현이 됩니다.
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
      <p className='uline'>
        헤더 영역은 크게 로고와 네비게이션으로 이루어져 있습니다.
      </p>
      <p>
        logo박스와 nav박스를 만들고 width, height을 설정하고, background-color를
        넣어서 영역을 확인해보겠습니다. 부모 박스인 header 속성에는 display:
        flex를 넣어주면, 가로로 정렬되는 것을 확인할 수 있습니다. 자식 박스에
        높이 값이 있으니, 부모 박스에 높이 값과 백그라운드 색은 지워주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="header">
    <div class="logo"></div>
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
      <p>
        슬라이드 영역은 구조상 특이 사항이 없으니, 주석 표시만하고
        지나가겠습니다.
      </p>
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
      <p className='uline'>
        컨텐츠 영역 작업하기 : 컨텐츠 영역은 3개의 박스로 구성되어 있습니다.
      </p>
      <p>
        각각의 박스에 클래스 이름2을 붙여주고, width, height, background-color를
        설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="contents">
    <div class="content1"></div>
    <div class="content2"></div>
    <div class="content3"></div>
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
      <p className='uline'>
        푸터 영역 작업하기 : 마지막으로 푸터 영역을 작업하겠습니다.
      </p>
      <p>
        푸터 영역 역시 각각의 박스에 클래스 이름2을 붙여주고, width, height,
        background-color를 설정하겠습니다. 상위 박스 footer에 display:flex를
        해주면, 가로로 정렬되는 것을 확인할 수 있습니다.
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
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          display: flex → 자식 요소들을 가로로 정렬할 때 사용. header, contents,
          footer에 적용하여 가로 배치 실습.
        </li>
        <li>
          margin: 0 auto → 가운데 정렬. #wrap에 적용하여 페이지 전체를 중앙에
          위치.
        </li>
        <li>
          width, height → 레이아웃 박스의 크기 설정. 모든 영역에 정확한 사이즈
          지정 실습.
        </li>
        <li>background-color → 구조 확인용 시각적 배경색 설정.</li>
      </ul>

      <h5>✅ 구조 설계 포인트</h5>
      <ul>
        <li>#wrap : 전체 레이아웃을 감싸는 메인 컨테이너</li>
        <li>#header, #slider, #contents, #footer : 시각적 구조 구분</li>
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
        <li>실제 시험에선 float 대신 flex 사용이 권장합니다.</li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        이렇게 첫 번째 레이아웃이 완성되었습니다. 처음 목표는 단순합니다. 무슨
        말인지 완벽히 이해하지 못해도 괜찮습니다. 일단 똑같이 따라 해서 같은
        결과만 만들어내면 성공입니다. 연습을 거듭하다 보면 자연스럽게
        익숙해지고, 점점 이해가 깊어질 거예요.
      </p>
      <p>
        예전에는 레이아웃을 만들 때 <strong>float 방식</strong>을 많이
        사용했지만, 요즘은 <strong>flex 레이아웃</strong>을 주로 사용합니다.
        웹디자인개발기능사 시험 역시 크롬과 엣지 브라우저에서만 검사하기 때문에,
        최신 방식인 flex를 사용하는 것이 훨씬 편리하고 효율적입니다.
      </p>
      <p>
        만약 이런 기본 레이아웃이 충분히 이해되고 자신 있다면 바로{' '}
        <strong>B유형</strong>으로 넘어가셔도 좋습니다. 반대로 아직 어렵거나
        조금 더 연습이 필요하다고 느껴진다면, 순서대로
        <strong>A-2 유형</strong>부터 차근차근 따라오시면 됩니다.
      </p>
      <p>수고 많으셨습니다! 다음 유형에서 다시 만나요. 🥰</p>
    </>
  )
}
