import CodeBlock from '@/components/post/post-code'

export default function Webdesign29() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간은 메뉴 유형 다섯 번째, 즉 M-4 유형과 동일한 구조를 함께
        다뤄보게 됩니다.
      </p>
      <p>
        전체적인 레이아웃이나 메뉴 동작 방식은 이전에 작업했던 M-4 유형과 완전히
        동일해요. 다만 딱 하나, 서브메뉴의 위치만 다르게 설정되어 있습니다. 이
        위치는 스크립트로 제어할 필요 없이 CSS만으로 충분히 조절할 수 있습니다.
      </p>
      <p>
        즉, 스크립트는 이전에 사용했던 내용을 그대로 활용하고, CSS에서 위치
        조정(top, left, transform 등)만 다듬어주면 됩니다. 그렇기 때문에 이번
        유형은 연습용으로 혼자 먼저 시도해보기에도 정말 좋은 기회예요. 혹시 M-4
        유형이 기억이 안 난다면 잠깐 다시 훑어보고 오셔도 좋고, 아니면 그대로
        따라하면서 복습 겸 적용해보셔도 충분합니다. 작업을 시작하면서 꼭 기억할
        포인트는, &quot;스크립트는 그대로, 핵심은 CSS에서 서브메뉴의 위치
        조절!&quot;
      </p>
      <p>
        그럼 오늘도 실력을 한 단계 업그레이드할 수 있는 멋진 시간이 되길 바라며,
        같이 만들어봅시다! 렛츠 기릿! 💪😇
      </p>

      <h4>1. 구조 잡기</h4>
      <p>
        이번에는 D-1 유형 레이아웃에 메뉴 유형을 작업을 해보겠습니다. 기본적인
        코드는 그대로 복사하셔서 사용하셔도 됩니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <aside id="aside">
            <h1></h1>
            <nav></nav>
        </aside>
        <!-- //aside -->

        <main id="main">
            <article id="slider"></article>
            <article id="link"></article>
            <section id="contents">
                <div class="content1"></div>
                <div class="content2"></div>
            </section>
        </main>
        <!-- //main -->

        <footer id="footer">
            <div class="footer1"></div>
            <div class="footer2">
                <div class="footer2-1"></div>
                <div class="footer2-2"></div>
            </div>
            <div class="footer3"></div>
        </footer>
        <!-- //footer -->
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
li {
    list-style: none;
}
a {
    text-decoration: none;
    color: #000;
}
#wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
#aside {
    width: 200px;
}
#aside h1 {
    width: 100%;
    height: 100px;
    background-color: #efefef;
}
#aside nav {
    width: 100%;
    height: 700px;
    background-color: #e3e3e3;
}
#main {
    width: calc(100% - 200px);
}
#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
}
#link {
    width: 100%;
    height: 150px;
    background-color: #d1d1d1;
}
#contents {
    width: 100%;
    display: flex;
}
#contents .content1 {
    width: 50%;
    height: 250px;
    background-color: #c7c7c7;
}
#contents .content2 {
    width: 50%;
    height: 250px;
    background-color: #bcbcbc;
}
#footer {
    width: 100%;
    display: flex;
}
#footer .footer1 {
    width: 20%;
    height: 120px;
    background-color: #b1b1b1;
}
#footer .footer2 {
    width: 60%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #a3a3a3;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #9d9d9d;
}
#footer .footer3 {
    width: 20%;
    height: 120px;
    background-color: #929292;
}`}
      />
      <p>
        메뉴 코드를 추가하고 CSS를 설정하겠습니다. 서브메뉴가 오른쪽으로 나오는
        위치기 때문에 position: absolute로 위치를 잡아주면 됩니다. 기준점이 되는
        li에 position: relative를 넣어주면 됩니다. 위치는 오른쪽에 위치해야 하기
        때문에 right: -200px;를 설정해주고, width 값을 200px로 설정해주면
        됩니다.
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
                <li><a href="#">서브메뉴2-4</a></li>
            </ul>
        </li>
        <li>
            <a href="#">메뉴3</a>
            <ul class="submenu">
                <li><a href="#">서브메뉴3-1</a></li>
                <li><a href="#">서브메뉴3-2</a></li>
                <li><a href="#">서브메뉴3-3</a></li>
                <li><a href="#">서브메뉴3-4</a></li>
            </ul>
        </li>
        <li>
            <a href="#">메뉴4</a>
            <ul class="submenu">
                <li><a href="#">서브메뉴4-1</a></li>
                <li><a href="#">서브메뉴4-2</a></li>
                <li><a href="#">서브메뉴4-3</a></li>
                <li><a href="#">서브메뉴4-4</a></li>
            </ul>
        </li>
    </ul>
</nav>`}
      />
      <CodeBlock
        language='css'
        code={`/* nav */
.nav > ul > li {
    position: relative;
}
.nav > ul > li > a {
    padding: 10px;
    display: block;
    text-align: center;
    background-color: #ccc;
}
.nav > ul > li > a:hover {
    background-color: #dbdbdb;
}
.nav > ul > li > ul {
    position: absolute;
    right: -200px;
    top: 0;
    width: 200px;
    background-color: #6d6d6d;
    display: none;
}
.nav > ul > li > ul > li > a {
    padding: 10px;
    display: block;
}
.nav > ul > li > ul > li > a:hover {
    background-color: #c0c0c0;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        제이쿼리 라이브러리를 HTML 상단이나 하단에 &lt;script&gt; 태그로
        연결해주는 것이 가장 먼저입니다. 그래야 이후의 $() 문법이 정상적으로
        작동합니다.
      </p>
      <p>
        그 다음은 본격적인 메뉴 동작을 구현하는 스크립트 부분입니다.
        $(&quot;.nav &gt; ul &gt; li&quot;)는 메뉴 항목 하나하나를 선택하는
        선택자입니다. 여기서 &gt; 기호는 바로 아래 자식 요소만 선택한다는
        의미로, 정확한 구조를 타겟할 수 있게 도와줍니다. 이 선택자에
        .mouseover() 메서드를 사용해 이벤트를 연결합니다. 이벤트란 말 그대로
        ‘특정 상황이 발생했을 때 실행되는 동작’을 뜻합니다. 즉, 사용자가
        마우스를 메뉴 항목에 올렸을 때 이 이벤트가 실행됩니다.
      </p>
      <p>
        이벤트 내부에서 $(this).find(&quot;.submenu&quot;)를 사용하면, 현재
        마우스를 올린 메뉴 항목 안에서 .submenu라는 클래스를 가진 하위 요소(서브
        메뉴)를 찾아낼 수 있습니다. 그 서브 메뉴에 .stop().slideDown()을
        적용하면, 애니메이션이 겹치는 현상을 막은 뒤 부드럽게 펼쳐지도록
        동작하게 됩니다.{' '}
      </p>
      <p>
        .stop()은 이전에 실행되던 애니메이션이 남아있을 경우 그것을
        중지시켜주어, 여러 번 빠르게 마우스를 움직여도 애니메이션이 꼬이지
        않도록 도와주는 역할을 합니다. 반대로 .mouseout() 이벤트를 설정하여,
        마우스가 해당 항목에서 빠져나갔을 때는 .slideUp()을 통해 서브 메뉴를
        닫아주는 방식으로 구현됩니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
</script>`}
      />

      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        자바스크립트로 구현하는 메뉴 방식도 이전 유형과 크게 다르지 않습니다.
        이번에는 조금 다른 구조로 코드를 작성해보며, 다양한 접근 방식에
        익숙해지는 것이 목적입니다.
      </p>
      <p>
        먼저 메뉴 항목 .nav &gt; ul &gt; li는 여러 개가 존재하므로, 여러 요소를
        한꺼번에 선택해야 합니다. 이럴 때 사용하는 것이 바로
        querySelectorAll()입니다. 이 메서드는 선택자에 해당하는 모든 요소를
        가져오고, 배열처럼 다룰 수 있는 NodeList를 반환합니다.
      </p>
      <p>
        이제 각 메뉴 항목에 개별적으로 이벤트를 연결하기 위해 forEach() 메서드를
        사용합니다. 이 반복문 안에서 function() 또는 화살표 함수를 사용해 각각의
        항목에 대해 원하는 동작을 정의할 수 있습니다. 이런 함수를 콜백 함수라고
        하는데, 지금은 너무 어렵게 생각하지 않으셔도 됩니다. “특정 시점에
        호출되는 함수구나” 정도로만 이해하고 넘어가셔도 충분합니다.
      </p>
      <p>
        이벤트는 mouseover와 mouseout 두 가지로 나뉘며, 각각 마우스를 올렸을
        때와 뗐을 때 실행됩니다. 동작의 핵심은 메뉴 항목 안의 .submenu 요소를
        찾아서, 그 높이값을 바꾸는 것입니다. 기본 상태에서는 height: 0px으로
        서브 메뉴가 숨겨져 있다가, 마우스를 올리면 height: 155px 같은 값으로
        변경되어 부드럽게 펼쳐지게 됩니다. 반대로 마우스를 떼면 다시 높이를
        0으로 설정하여 닫히는 효과를 만들 수 있죠.
      </p>
      <p>
        이처럼 자바스크립트에서는 슬라이드 애니메이션을 직접 만들기 위해
        style.height와 함께 CSS의 transition 속성을 활용하게 됩니다.
        제이쿼리처럼 .slideDown() 같은 메서드가 자동으로 제공되는 것은 아니기
        때문에 조금 더 명시적으로 제어해야 한다는 점만 기억해두시면 됩니다.
        지금처럼 직접 코드를 구성해보며 “무엇을 선택하고, 어떤 동작을 시킬
        것인지” 흐름을 이해하는 것이 가장 중요합니다.
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function(){
    var navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(function(navItem) {
        navItem.addEventListener("mouseover", function() {
            this.querySelector(".submenu").style.height = "155px";
        });
        navItem.addEventListener("mouseout", function() {
            this.querySelector(".submenu").style.height = "0px";
        });
    });
};`}
      />
      <p>
        그리고 다음과 같이 CSS 설정을 해야 애니메이션이 작동했습니다. 이 부분을
        자바스크립트로 표현해보겠습니다. 다중 선택을 해야 하기 때문에 여기도
        forEach를 사용했고, CSS에서 설정한 부분을 자바스크립트로 표현했습니다.
        style을 사용하면 그대로 쓸 수 있습니다. 대신 두번째 ul을 선택해야 하기
        때문에 nav.querySelector(&quot;ul&quot;)를 사용했습니다. 이런식으로도
        작업이 가능합니다. 이렇게 하면 CSS는 따로 설정하지 않아도 됩니다. 출처:
      </p>
      <CodeBlock
        language='css'
        code={`.nav > ul > li > ul {
    height: 0;
    overflow: hidden;
    transition: height 400ms;
}`}
      />
      <CodeBlock
        language='js'
        code={`.navList.forEach(nav => {
    nav.querySelector("ul").style.display = "block";
    nav.querySelector("ul").style.height = "0";
    nav.querySelector("ul").style.overflow = "hidden";
    nav.querySelector("ul").style.transition = "height 400ms";
});`}
      />

      <h4>4. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>&lt;nav&gt; : 전체 메뉴를 감싸는 내비게이션 영역</li>
        <li>&lt;ul&gt;, &lt;li&gt; : 메뉴와 서브 메뉴 항목 구성의 핵심 구조</li>
        <li>&lt;a&gt; : 각각의 메뉴 항목에 연결된 하이퍼링크</li>
        <li>
          &lt;aside&gt; : 세로형 메뉴를 사이드 영역에 배치할 때 활용되는 구조
        </li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          position: relative / absolute : 기준점 설정과 서브메뉴 위치 조절
        </li>
        <li>right: -200px : 서브메뉴를 오른쪽 외부로 위치시키는 핵심 위치값</li>
        <li>
          height, overflow, transition : 슬라이드 애니메이션 효과를 위한 필수
          조합
        </li>
        <li>display: none / block : 서브메뉴의 표시 및 숨김 처리</li>
      </ul>
      <h5>✅ 제이쿼리 메서드 개념</h5>
      <ul>
        <li>
          <code>.mouseover()</code> / <code>.mouseout()</code> : 마우스
          오버/아웃 시 이벤트 감지
        </li>
        <li>
          <code>.find()</code> : 현재 선택된 요소 내부에서 자식 요소 탐색
        </li>
        <li>
          <code>.stop()</code> : 연속된 애니메이션 충돌 방지를 위한 중지 처리
        </li>
        <li>
          <code>.slideDown()</code> / <code>.slideUp()</code> : 부드러운
          열림/닫힘 애니메이션
        </li>
      </ul>
      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>
          <code>querySelectorAll()</code> : 여러 요소를 한 번에 선택할 때 사용
        </li>
        <li>
          <code>forEach()</code> : 선택된 요소 각각에 반복 동작을 부여
        </li>
        <li>
          <code>this.querySelector()</code> : 현재 요소 내부에서 자식 요소를
          선택
        </li>
        <li>
          <code>style.height = ...</code> : 서브 메뉴의 열림/닫힘 제어를 위한
          직접 설정
        </li>
        <li>
          CSS의 <code>transition</code> 속성은 애니메이션이 부드럽게 작동하도록
          보조
        </li>
        <li>
          <strong>콜백 함수 (callback function)</strong> : 함수 안에 또 다른
          함수를 인자로 넘겨주는 방식.
        </li>
      </ul>
      <h5>✅ 자바스크립트 핵심 개념 - 콜백 함수</h5>
      <ul>
        <li className='uline'>
          콜백 함수란 어떤 함수의 인자로 전달되어, 특정 시점에 실행되는 함수 를
          말합니다.
        </li>
        <li>
          예를 들어 <code>forEach()</code>에서 우리가 전달하는{' '}
          <code>function(navItem) {'{ ... }'}</code>이 바로 콜백 함수입니다.
        </li>
        <li>
          쉽게 말하면, &quot;이 작업이 끝나면 이걸 실행해줘!&quot;라고 미리
          전달해주는 함수라고 생각하시면 됩니다.
        </li>
        <li>
          이벤트 처리에서도 마찬가지예요.{' '}
          <code>
            addEventListener(&quot;mouseover&quot;, function() {'{ ... }'})
          </code>
          처럼 마우스를 올렸을 때 실행할 코드를 함수 형태로 넘겨주죠. 이 함수도
          콜백 함수입니다.
        </li>
        <li>
          자바스크립트는 <strong>비동기 처리</strong>가 많은 언어이기 때문에,
          콜백 함수의 개념은 아주 자주 등장하고 중요합니다.
        </li>
        <li>
          처음엔 어렵게 느껴질 수 있지만, 지금은 &quot;이벤트가 발생했을 때
          실행되는 함수&quot; 정도로 가볍게 이해하셔도 괜찮습니다.
        </li>
      </ul>
      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>
          가로형 메뉴 로직을 그대로 활용하되, 서브메뉴의 위치만 우측으로 재배치
        </li>
        <li>CSS 위치 제어와 스크립트 제어를 분리하여 더 깔끔한 구조 구현</li>
        <li>제이쿼리와 자바스크립트를 비교하며 각 방식의 차이와 장단점 체험</li>
        <li>
          실무에서 자주 사용하는 사이드 메뉴 인터페이스를 구현해볼 수 있는 좋은
          예제
        </li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        이번 시간에는 세로형 메뉴 구조, 그중에서도 서브 메뉴가 오른쪽에 펼쳐지는
        유형을 함께 만들어봤습니다. 구조 자체는 익숙했던 이전 유형들과 거의
        비슷하지만, CSS 위치 조절만으로 새로운 메뉴 스타일을 완성할 수 있다는
        점이 핵심이었어요.
      </p>
      <p>
        특히 오늘은 &quot;스크립트는 동일하게 쓰되, 위치는 CSS로
        제어한다&quot;는 구조적 사고를 익히는 데에 초점을 맞췄습니다. 메뉴
        동작을 스크립트로만 해결하려고 하기보다는, 레이아웃과 스타일의 책임을
        분리해서 작업하는 연습을 해보신 거예요. 이것이 바로 실무에서 자주
        사용하는 방식입니다. 혹시 오늘 따라 좀 어렵게 느껴졌다면 너무 걱정하지
        마세요. 처음에는 단순 따라 하는 것만으로도 충분하고, 반복하면서 하나씩
        이해되는 순간이 반드시 옵니다.
      </p>
      <p>
        메뉴 유형이 반복되면서 지루할 수도 있지만, 이 안에 숨겨진 레이아웃 설계,
        인터랙션 흐름, 선택자 활용법이 여러분의 개발 실력을 조용히 단단하게
        만들어주고 있다는 걸 기억해주세요. 오늘도 끝까지 따라오시느라 정말 고생
        많으셨습니다! 다음 시간엔 또 다른 실전 UI와 함께, 새로운 구조를 익히러
        가보겠습니다. 포기하지 마시고, 하나씩 차근차근. 당신의 코딩 여정을
        언제나 응원합니다 😊💪
      </p>
    </>
  )
}
