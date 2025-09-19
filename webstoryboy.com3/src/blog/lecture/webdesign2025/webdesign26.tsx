import CodeBlock from '@/components/post/post-code'

export default function Webdesign26() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간은 가로 메뉴 스크립트 두 번째 유형을 함께 만들어보겠습니다!
        먼저 오른쪽에 있는 미리보기 버튼을 눌러 완성된 모습을 한번 확인해보세요.
        이번 메뉴는 첫 번째와 달리, 마우스를 올리면 모든 서브메뉴가 한 번에
        보여지는 형태입니다.{' '}
      </p>
      <p>
        첫 번째는 해당 항목만 서브메뉴가 열리는 구조였다면, 두 번째는 전체
        서브메뉴가 동시에 열리는 구조예요. 스크립트 차이는 크지 않지만, 구조와
        CSS가 조금 다르기 때문에 당황하지 않고 차근차근 진행하는 게 중요합니다.
        특히 시험장에서는 스크립트보다 CSS 위치와 구조가 더 중요하게 작용하니,
        CSS를 먼저 정확하게 셋팅하고 넘어가는 습관을 들이시는 걸 추천드려요!
        그럼 이번에도 하나씩 같이 만들어보면서 실력을 쌓아볼까요? 렛츠 기릿! 💪🥹
      </p>
      <h4>1. 구조 잡기</h4>
      <p>
        미리보기 화면을 확인해 보시면 메뉴에 마우스를 오버하면 서브 메뉴가
        나오는 구조입니다. 우선 이 유형을 만들어 보기 전에 A-1 레이아웃 유형의
        소스를 가져와서 메뉴 위치와 CSS를 먼저 작업하겠습니다. 스크립트를
        작업하기 전에 CSS를 먼저 셋팅하는 것이 가장 중요합니다. 레이아웃을
        공부를 하지 않았다면 레이아웃 유형을 꼭 공부하고 오셔야 합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <div id="header">
            <div class="logo"></div>
            <nav class="nav"></nav>
        </div>
        <!-- //header -->

        <div id="slider">
        </div>
        <!-- //slider -->

        <div id="contents">
            <div class="content1"></div>
            <div class="content2"></div>
            <div class="content3"></div>
        </div>
        <!-- //contents -->

        <div id="footer">
            <div class="footer1"></div>
            <div class="footer2"></div>
            <div class="footer3"></div>
        </div>
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
    width: 1200px;
    margin: 0 auto;
}
#header {
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
    background-color: #e3e3e3;
}
#slider {
    width: 100%;
    height: 300px;
    background-color: #d9d9d9;
}
#contents {
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
}
#footer {
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
      <p>
        여기까지 셋팅이 완료되었다면, 메뉴 레이아웃을 작업해보겠습니다. 메뉴
        레이아웃은 li안에 li가 들어간 구조입니다. 이렇게 작업하면 구조가 깨지기
        때문에 두번째 ul은 position: absolute를 이용하여 절대적인 위치값을
        설정하였고, 부모 박스 li 속성에 position: relative;를 설정하였습니다.
        또한 li 안에 li가 있는 구조이기 때문에 &gt;를 사용하여 바로 밑에 있는
        자식만 선택하도록 설정하였습니다. 만약 &gt;가 없다면 자식에 자식도
        선택이 되어서 코드를 짜는데 불편하기 때문에 &gt;를 설정하였습니다.
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
.nav > ul {
    display: flex;
    justify-content: right;
    margin-top: 30px;
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
    top: 38px;
    width: 100%;
    text-align: center;
    display: none;
}
.nav > ul > li > ul > li > a {
    display: inline-block;
    padding: 10px;
    background-color: #c1c1c1;
    width: 100%;
    box-sizing: border-box;
}
.nav > ul > li > ul > li > a:hover {
    background-color: #8f8f8f;
}
/* 자바스크립트 CSS */
.nav > ul > li > ul {
    display: block;
    height: 0;
    overflow: hidden;
    transition: all 600ms;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        제이쿼리를 작업하기 전에는 반드시 제이쿼리 라이브러리 파일을
        연동하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>`}
      />
      <p>
        이번에도 메뉴 유형 1과 마찬가지로 먼저 li 선택자를 설정해줄게요.
        $(&quot;.nav &gt; ul &gt; li&quot;)
      </p>
      <p>
        그리고 여기에 마우스 오버 이벤트인 mouseenter를 추가하고, 모든 서브
        메뉴(.nav &gt; ul &gt; li &gt; ul)를 한꺼번에 열어줄 수 있도록
        slideDown() 애니메이션을 사용하면 됩니다.{' '}
        <span className='uline'>여기서 중요한 차이점이 있어요!</span>
      </p>
      <p>
        유형 1에서는 $(this)를 사용했죠? → 그래서 내가 마우스를 올린 해당 메뉴만
        서브 메뉴가 나왔습니다. 하지만 지금은 $(this)를 쓰지 않고 .nav &gt; ul
        &gt; li &gt; ul을 직접 선택합니다. → 이렇게 하면 모든 서브 메뉴가 동시에
        열리게 됩니다.
      </p>
      <p>
        바로 이 부분이 메뉴 유형 1과 유형 2의 가장 큰 차이점이에요. 선택자를
        어디에 어떻게 쓰느냐에 따라 전체가 열릴지, 하나만 열릴지가 달라지는
        거죠! mouseout 이벤트도 같은 방식으로 설정해주시면 됩니다. 그리고 꼭
        넣어줘야 하는 부분이 하나 있어요 — 바로 .stop()입니다!
      </p>
      <p>
        이걸 왜 쓰냐면요, 마우스를 빠르게 오버하거나 움직일 때, 애니메이션이
        아직 끝나지 않았는데 또 새로운 애니메이션이 실행되면 버벅이거나 이상하게
        작동할 수 있어요. 이때 .stop()을 사용하면 지금 진행 중인 애니메이션을
        멈추고 새로운 명령만 실행하게 만들어서 불필요한 애니메이션 중첩을 방지할
        수 있어요. 그래서 더 자연스럽고 안정적으로 작동하게 됩니다.
      </p>
      <CodeBlock
        language='js'
        code={`$(function(){
    $(".nav > ul > li").mouseover(function(){        
        $(".nav > ul > li > ul").stop().slideDown(200);    
    });

    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().slideUp(200);
    });
})`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        먼저 navList라는 변수를 만들어서 메뉴 전체 영역인 .nav &gt; ul을
        선택해줄게요. 그다음, 마우스를 ul에 올렸을 때 ul의 자식들인 .submenu를
        찾아서 모두 동시에 열어주도록 height 값을 152px로 설정합니다.
      </p>
      <p>
        서브 메뉴가 여러 개이기 때문에 querySelectorAll(&quot;.submenu&quot;)로
        전부 선택한 뒤, forEach()를 사용해서 반복 처리해줍니다. 자바스크립트는
        제이쿼리처럼 .slideDown() 같은 애니메이션 기능이 없어요. 그래서 부드러운
        전환 효과는 CSS에서 따로 설정해줘야 합니다.
      </p>
      <ul>
        <li>transition: all 600ms; → 부드럽게 열리도록 설정</li>
        <li>
          overflow: hidden; → height: 0일 때 메뉴 내용이 튀어나오지 않도록 처리
        </li>
        <li>height 속성 → 열 때는 152px, 닫을 땐 0으로 설정</li>
      </ul>
      <p>
        마우스를 뗐을 때(mouseout)도 같은 방식으로 처리하되, 이번엔 height 값을
        0으로 바꿔주면 자연스럽게 닫히는 애니메이션이 적용됩니다. 확실히
        제이쿼리보다 직접 처리해줘야 할 부분이 조금 더 많긴 하지만, 애니메이션의
        원리나 흐름은 거의 동일합니다. 이 방식에 익숙해지면 나중에 더 다양한
        동적 기능도 쉽게 구현할 수 있어요!
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "155px";
        });
    });
    navList.addEventListener("mouseout", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
    });
}`}
      />
      <CodeBlock
        language='css'
        code={`/* 자바스크립트 CSS */
.nav > ul > li > ul {
    display: block;
    height: 0;
    overflow: hidden;
    transition: all 600ms;
}`}
      />
      <h4>4. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>&lt;nav&gt; : 내비게이션 영역 전체를 감싸는 태그</li>
        <li>&lt;ul&gt;, &lt;li&gt; : 메뉴와 서브 메뉴의 리스트 구조 구성</li>
        <li>&lt;a&gt; : 메뉴 항목 클릭 시 링크 연결용</li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>position: relative → 서브메뉴의 기준이 되는 상위 요소에 사용</li>
        <li>position: absolute → 서브메뉴를 상단 메뉴에 맞춰 배치</li>
        <li>display: none/block → 서브메뉴의 열림/닫힘 제어 (제이쿼리용)</li>
        <li>
          height, overflow, transition → 자바스크립트용 부드러운 애니메이션 효과
          설정
        </li>
      </ul>
      <h5>✅ 선택자 사용의 핵심 (&gt; 기호 차이)</h5>
      <ul>
        <li>
          <code>&gt;</code> 기호는 바로 아래의 직계 자식만 선택할 때 사용
        </li>
        <li>
          <code>.nav &gt; ul &gt; li</code> → 정확하게 단계별 요소만 선택
        </li>
        <li>
          <code>.nav ul li</code> → 중첩된 모든 하위 요소까지 선택되어 의도치
          않게 적용될 수 있음
        </li>
        <li>
          시험처럼 구조가 정해져 있을 때는 반드시 <code>&gt;</code> 기호를 써서
          정확한 선택자 사용이 중요
        </li>
      </ul>

      <h5>✅ 스크립트 로직 요약</h5>
      <ul>
        <li>제이쿼리 : mouseover/mouseout + .stop().slideDown()/slideUp()</li>
        <li>
          자바스크립트 : mouseover/mouseout + querySelectorAll() + height 스타일
          조절
        </li>
        <li>자바스크립트에서는 CSS 애니메이션 전환 설정 필수 (transition)</li>
      </ul>
      <h5>✅ 이번 실습의 핵심</h5>
      <ul>
        <li>서브메뉴가 전체 동시에 열리는 구조 구현</li>
        <li>선택자의 차이에 따라 동작 방식이 달라지는 흐름을 이해</li>
        <li>자바스크립트와 제이쿼리의 구조 차이를 경험하고 비교</li>
        <li>시험 실습 시, CSS 구조 파악과 선택자 사용이 더 중요할 수 있음</li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        처음에는 선택자도 어렵고, 제이쿼리와 자바스크립트 차이도 헷갈릴 수
        있어요. 하지만 지금 여러분은 단순히 따라 치는 걸 넘어, 어떤 구조가 왜
        필요한지, 무엇을 조심해야 하는지까지 배워가고 있습니다.
      </p>
      <p>
        🌱 오늘 배운 것을 한 번 더 복습해보고, “왜 이렇게 써야 하는 걸까?” 하고
        질문해보세요. 그 고민이 쌓이면 시험장에서의 실수는 점점 줄어들고, 진짜
        실무에서도 통하는 개발자로 성장하게 됩니다.
      </p>
      <p>
        무엇보다 중요한 건, 지금 포기하지 않고 끝까지 따라와 주신 여러분의
        꾸준함이에요. 작은 성취가 쌓이면 어느 순간 큰 자신감이 됩니다. 수고
        많으셨습니다! 다음 시간에도 함께 성장해봐요 😊 당신의 코딩 여정, 제가
        계속 함께 하겠습니다! 화이팅입니다! 💪🚀
      </p>
    </>
  )
}
