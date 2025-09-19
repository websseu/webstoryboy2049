import CodeBlock from '@/components/post/post-code'

export default function Webdesign301() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 F-3 유형의 가로 메뉴를 함께 구현해보겠습니다. 이 유형은 이전 메뉴들과 마찬가지로
        서브메뉴를 절대 위치로 제어하면서, 전체 배경이 메인 영역에 가상 요소로 함께 펼쳐지는 효과를
        연습하게 됩니다.
      </p>
      <p>
        특히 <code>::after</code> 가상 요소와 <code>position: absolute</code>를 적절히 활용하여 메인
        배경과 서브메뉴를 동시에 조절하는 방법을 익힐 수 있어요. 스크립트로는 jQuery와 순수
        JavaScript 모두를 다뤄볼 예정이니, 상황에 맞는 구현 방식을 직접 비교해보며 학습해보세요!
      </p>
      <h4>1. 구조 잡기</h4>
      <p>
        이번에는 F-3 유형 레이아웃에 메뉴 유형을 작업을 해보겠습니다. 기본적인 코드는 그대로
        복사하셔서 사용하셔도 됩니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <header id="header">
          <h1 class="logo"></h1>
          <nav class="nav"></nav>
    </header>
    <!-- //header -->

    <article id="slider">
        <div class="link"></div>
    </article>
    <!-- //slider -->

    <section id="contents">
        <article class="banner"></article>
        <article class="notice"></article>
    </section>
    <!-- //contents -->

    <footer id="footer">
        <div class="footer1"></div>
        <div class="footer2">
            <div class="footer2-1"></div>
            <div class="footer2-2"></div>
        </div>
      </footer>
      <!-- //footer -->
</div>`}
      />
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
    color: #000;
}
#wrap {
    width: 100%;
}
#header {
    width: 1340px;
    margin: 0 auto;
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
}
#slider {
    width: 100%;
    height: 350px;
    background-color: #d9d9d9;
    position: relative;
}
#slider .link {
    width: 1340px;
    height: 100px;
    background-color: #c7c7c7;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}
#contents {
    width: 1340px;
    height: 450px;
    margin: 0 auto;
}
#contents .banner {
    width: 100%;
    height: 150px;
    background: #bcbcbc;
}
#contents .notice {
    width: 100%;
    height: 300px;
    background: #b1b1b1;
}
#footer {
    width: 1340px;
    margin: 0 auto;
    display: flex;
}
#footer .footer1 {
    width: 20%;
    height: 120px;
    background-color: #a3a3a3;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #9d9d9d;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #838383;
}`}
      />
      <p>
        네비게이션 코드는 &lt;nav class=&quot;nav&quot;&gt; 안에 &lt;ul&gt;→&lt;li&gt;→&lt;a&gt;로
        최상위 메뉴를 만들고, 각 &lt;li&gt; 내부에 &lt;ul class=&quot;submenu&quot;&gt;로 서브메뉴를
        중첩했습니다. CSS에서는 .nav에 position: relative를 주고, .submenu는 position: absolute로
        좌표를 지정해 원하는 위치에 고정하도록 했습니다. 전체 배경은 메인 영역(#main)에 ::after
        가상요소를 작업해 관리하며, 스크립트에서 클래스 토글 시 width: 0→100%로 배경이 펼쳐지게
        구성했습니다. 이렇게 하면 사이드와 무관하게 메인에서 가상요소를 통해 배경을 제어하고,
        서브메뉴는 절대위치로 편하게 배치할 수 있습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<nav class="nav">
    <ul>
        <li>
            <a href="#">메뉴1</a>
            <ul class="submenu">
                <li><a href="#">서브메뉴1-1</a></li>
                <li><a href="#">서브메뉴1-2</a></li>
                <li><a href="#">서브메뉴1-3</a></li>
                <li><a href="#">서브메뉴1-4</a></li>
            </ul>
        </li>
        <li>
            <a href="#">메뉴2</a>
            <ul class="submenu">
                <li><a href="#">서브메뉴2-1</a></li>
                <li><a href="#">서브메뉴2-2</a></li>
                <li><a href="#">서브메뉴2-3</a></li>
            </ul>
        </li>
        <li>
            <a href="#">메뉴3</a>
            <ul class="submenu">
                <li><a href="#">서브메뉴3-1</a></li>
                <li><a href="#">서브메뉴3-2</a></li>
            </ul>
        </li>
        <li>
            <a href="#">메뉴4</a>
            <ul class="submenu">
                <li><a href="#">서브메뉴4-1</a></li>
                <li><a href="#">서브메뉴4-2</a></li>
                <li><a href="#">서브메뉴4-3</a></li>
            </ul>
        </li>
    </ul>
</nav>`}
      />
      <p>
        네비게이션 전체는 상대위치(relative)와 높은 z-축 순서(z-index)를 지정해서 서브메뉴가 다른
        콘텐츠 위로 자연스럽게 떠오르도록 했습니다. 메뉴 항목들은 가로 방향의 플렉스 컨테이너로
        오른쪽에 정렬되어 있고, 각 항목마다 상대위치를 기준으로 삼아 그 안에 숨겨둔 서브메뉴를
        절대위치로 배치합니다. 링크는 블록 요소처럼 일정한 여백을 갖도록 처리하고, 기본 배경색과
        마우스 오버 시 배경색이 바뀌도록 해서 시각적 반응을 줍니다.{' '}
      </p>
      <p>
        서브메뉴는 처음에 보이지 않게 숨겨뒀다가, 호버나 스크립트로 활성화될 때 나타나도록
        구성했습니다. 슬라이더 영역에는 역시 상대위치를 설정한 뒤, 가상요소(::after)를 배경으로
        사용해 높이가 0에서 특정 값으로 부드럽게 확장되는 애니메이션을 적용합니다. 클래스가 토글되면
        이 가상요소의 높이가 바뀌면서 배경이 아래로 펼쳐지는 효과를 구현한 것이 핵심입니다.
      </p>
      <CodeBlock
        language='css'
        code={`/* nav */
.nav {
    position: relative;
    z-index: 1000;
}
.nav > ul {
    display: flex;
    justify-content: right;
    margin-top: 61px;
}
.nav > ul > li {
    position: relative;
}
.nav > ul > li > a {
    display: inline-block;
    padding: 10px 50px;
    background-color: #b0b0b0;
}
.nav > ul > li > a:hover {
    background-color: #696969;
}
.nav > ul > li > ul {
    position: absolute;
    left: 0;
    top: 39px;
    width: 100%;
    text-align: center;
    display: none;
}
.nav > ul > li > ul > li > a {
    display: inline-block;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}
.nav > ul > li > ul > li > a:hover {
    background-color: #8f8f8f;
}
#slider {
    position: relative;
}
#slider::after {
    content: '';
    width: 100%;
    height: 0;
    background-color: #b0b0b0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    transition: all 300ms;
}
#slider.on::after {
    height: 193px;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        먼저 jQuery 라이브러리를 불러온 뒤 <code>$(function(){})</code> 구문으로 “문서가 모두
        준비되면 이 코드를 실행”하도록 선언합니다.
      </p>
      <p>
        메뉴 항목(<code>.nav &gt; ul &gt; li</code>)에 마우스를 올리면, 모든 서브메뉴에{' '}
        <code>.stop().fadeIn(500)</code>을 적용해 0.5초 동안 부드럽게 나타나게 하고,{' '}
        <code>#slider</code>에는 <code>.addClass(&apos;on&apos;)</code>을 붙여 가상 요소 배경이
        확장되도록 합니다. 반대로 마우스를 떼면 <code>.stop().fadeOut(100)</code>으로 0.1초 만에
        서브메뉴를 숨기고, <code>.removeClass(&apos;on&apos;)</code>으로 배경을 원래 상태로
        되돌립니다.
      </p>
      <p>
        여기서 <code>.stop()</code>은 연속 실행되는 애니메이션이 꼬이지 않도록 방지해 주며,{' '}
        <code>.addClass()</code>와 <code>.removeClass()</code>만으로 CSS 전환 효과를 직관적으로
        제어할 수 있습니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function () {
        $('.nav > ul > li').mouseover(function () {
            $('.nav > ul > li > ul').stop().fadeIn(500)
            $('#slider').addClass('on')
        })
        $('.nav > ul > li').mouseout(function () {
            $('.nav > ul > li > ul').stop().fadeOut(100)
            $('#slider').removeClass('on')
        })
    })
</script>`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        <code>window.onload</code> 이벤트를 이용해 “페이지 로드 완료 후 실행”을 선언합니다.
        <code>document.querySelector(&apos;.nav &gt; ul&apos;)</code>로 최상위 메뉴 컨테이너를
        가져와, 마우스 오버와 마우스 아웃에 각각 <code>addEventListener</code>를 등록합니다.
      </p>
      <p>
        마우스를 올리면 모든 서브메뉴(<code>.submenu</code>)의 <code>style.height</code>를
        <code>&apos;155px&apos;</code>로 바꿔 CSS <code>transition</code>에 따라 부드럽게 펼쳐지게
        하고,
        <code>#slider</code>에는 <code>classList.add(&apos;on&apos;)</code>으로 배경 가상요소가
        확장되도록 트리거합니다.
      </p>
      <p>
        마우스를 떼면 각 서브메뉴 높이를 <code>&apos;0px&apos;</code>로 축소하고,
        <code>classList.remove(&apos;on&apos;)</code>으로 배경을 원상복구합니다. 스크립트는
        상태·스타일 토글만 담당하며, 실제 애니메이션은 CSS가 처리합니다.
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function () {
    let navList = document.querySelector('.nav > ul')

    navList.addEventListener('mouseover', () => {
        navList.querySelectorAll('.submenu').forEach((sub) => {
            sub.style.height = '155px'
        })
        document.getElementById('slider').classList.add('on')
    })

    navList.addEventListener('mouseout', () => {
        navList.querySelectorAll('.submenu').forEach((sub) => {
            sub.style.height = '0px'
        })
        document.getElementById('slider').classList.remove('on')
    })
}`}
      />
      <CodeBlock
        language='css'
        code={`/* 자바스크립트 CSS */
.nav > ul > li > ul {
    display: block;
    height: 0;
    overflow: hidden;
    transition: all 400ms;
}`}
      />
      <h4>4. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>&lt;nav&gt; : 전체 메뉴를 감싸는 내비게이션 영역</li>
        <li>&lt;ul&gt;, &lt;li&gt; : 메뉴와 서브 메뉴 항목 구성의 핵심 구조</li>
        <li>&lt;a&gt; : 각각의 메뉴 항목에 연결된 하이퍼링크</li>
        <li>&lt;aside&gt; : 세로형 메뉴를 사이드 영역에 배치할 때 활용되는 구조</li>
        <li>::after : CSS에서 가상 요소를 만들어 배경처럼 활용하는 데 사용됩니다</li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          position: relative / absolute : 서브메뉴와 배경의 위치를 정확하게 제어할 때 필요합니다.
        </li>
        <li>right, top : 서브메뉴가 어디서 나타날지를 지정하는 좌표입니다.</li>
        <li>display: none / block : 서브메뉴를 보이게 하거나 숨기는 가장 기본적인 방법입니다.</li>
        <li>transition : CSS 속성이 변화할 때 부드러운 애니메이션을 만들기 위한 속성입니다.</li>
        <li>
          z-index : 메뉴와 배경이 겹칠 때 어떤 요소가 위로 올라올지를 설정하는 계층 순서입니다.
        </li>
      </ul>
      <h5>✅ 제이쿼리 핵심 메서드</h5>
      <ul>
        <li>
          <code>.stop()</code> : 현재 실행 중인 애니메이션을 즉시 정지시켜 충돌을 방지합니다.
        </li>
        <li>
          <code>.fadeIn(duration)</code> / <code>.fadeOut(duration)</code> : 부드러운 페이드 효과로
          요소를 나타내거나 숨깁니다.
        </li>
        <li>
          <code>.addClass(className)</code> / <code>.removeClass(className)</code> : 지정한 클래스를
          추가·제거해 CSS 전환을 트리거합니다.
        </li>
      </ul>

      <h5>✅ JavaScript 핵심 메서드</h5>
      <ul>
        <li>
          <code>document.querySelector(selector)</code> / <code>querySelectorAll(selector)</code> :
          CSS 선택자로 요소를 단일 또는 다중 선택합니다.
        </li>
        <li>
          <code>element.addEventListener(event, handler)</code> : 특정 이벤트에 대한 콜백을 등록해
          사용자 상호작용을 처리합니다.
        </li>
        <li>
          <code>NodeList.forEach(callback)</code> : 선택된 요소 목록을 순회하며 반복 처리를
          수행합니다.
        </li>
        <li>
          <code>element.style.height = value</code> : 인라인 스타일로 높이를 변경해 CSS 전환
          애니메이션을 제어합니다.
        </li>
        <li>
          <code>element.classList.add(&apos;on&apos;)</code> /{' '}
          <code>element.classList.remove(&apos;on&apos;)</code> : 클래스 토글로 가상 요소
          애니메이션을 제어합니다.
        </li>
      </ul>
      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>
          <code>::after</code> 가상 요소와 클래스 토글을 활용해 전체 배경이 부드럽게 펼쳐지는 구조
          구현
        </li>
        <li>
          <code>position: relative</code>와 <code>absolute</code> 조합으로 서브메뉴 위치를 정확히
          제어
        </li>
        <li>
          jQuery의 <code>.stop().fadeIn()/fadeOut()</code> vs. 순수 JS의 <code>style.height</code>{' '}
          토글 비교 학습
        </li>
        <li>
          CSS <code>transition</code>과 JS 클래스 제어를 분리해 역할을 명확히 하고, 유지보수성을
          높이는 패턴 이해
        </li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        와, 여기까지 따라오느라 정말 수고 많으셨어요! 이제 여러분은 복잡해 보이던 배경 슬라이드와
        서브메뉴 토글을 손쉽게 제어할 수 있는 자신감을 얻으셨을 거예요.
      </p>
      <p>
        처음엔 낯설어 보였던 <code>::after</code> 가상 요소와 클래스 토글도, 이제는 여러분의
        아이디어를 현실로 구현할 수 있는 강력한 무기가 되었습니다. jQuery와 순수 JS 방식 모두
        섭렵했으니, 어떤 상황에서도 최적의 방식을 선택할 수 있는 멋진 개발자로 성장하실 거예요!
      </p>
      <p>
        계속해서 “왜 이렇게 동작하는지”를 스스로 질문하고, 직접 응용해 보는 연습을 이어가 보세요.
        작은 성취가 모여 큰 실력이 되고, 여러분의 프로젝트가 더욱 빛나는 순간이 올 겁니다. 포기하지
        말고, 매일 한 걸음씩 전진하세요—웹스토리보이가 언제나 여러분의 곁에서 응원합니다! 😊💪
      </p>
    </>
  )
}
