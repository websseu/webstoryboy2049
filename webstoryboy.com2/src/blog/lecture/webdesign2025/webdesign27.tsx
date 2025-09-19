import CodeBlock from '@/components/post/post-code'

export default function Webdesign27() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간은 가로 메뉴 스크립트 세 번째 유형을 함께 만들어보겠습니다!
      </p>
      <p>
        이번 유형의 가장 큰 특징은, 마우스를 올렸을 때 서브메뉴 전체의 배경이
        함께 나오는 구조입니다. 이전 유형 2에서는 서브 메뉴만 나왔지만, 이번엔
        서브 메뉴를 감싸는 전체 배경까지 함께 나타나는 방식이죠.
      </p>
      <p>
        이런 형태는 실무에서도 정말 자주 쓰이는 메뉴 구조예요. 특히 다양한
        콘텐츠가 들어가는 복잡한 메뉴나, 메가 메뉴(Mega Menu) 형태에서도 자주
        활용되기 때문에 실전에서도 써먹기 좋은 유형입니다. 물론 시험을 위한
        연습이지만, 이번 유형은 실무에서도 강력하게 활용되는 구조이니 꼭 제대로
        익혀두시면 앞으로도 큰 도움이 될 거예요! 그럼 오늘도 같이 차근차근
        만들어볼까요? 렛츠 기릿! 💪😃
      </p>
      <h4>1. 구조 잡기</h4>
      <p>
        미리보기를 확인하시면 서브 메뉴가 전체 영역을 차지하는 메뉴 유형입니다.
        메뉴가 헤더 밑 부분으로 위치해야 하고, 전체 영역은 헤더의 가로 값과
        동일해야 하는 특징이 있습니다. 우선은 A-1 레이아웃 소스를 가져와서
        작업을 해보겠습니다.
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
        메뉴 코드는 기본의 유형과 동일하게 작업을 할 것이고, 서브 메뉴에는
        submenu 클래스를 작업하였습니다. .nav &gt; ul &gt; li안에 ul &gt;
        li구조가 있는 형태입니다.
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
      <p>
        nav의 위치는 display: flex;와 justify-content: right;를 이용하여 오른쪽
        하단으로 위치를 설정했습니다. 전체 영역의 배경이 필요하기 때문에 이것은
        header영역에 가상요소를 만들어 클래스 on을 붙이면 나오도록 설정했습니다.
        메뉴에 마우스 오버를 하면 서브 메뉴도 나오고 가상 요소 전체 배경도
        나오게 작업할 것입니다. 스크립트를 작업하기 전에 CSS를 완벽하게 하고
        넘어가야 합니다.
      </p>
      <CodeBlock
        language='css'
        code={`/* nav */
#header {
    position: relative;
}
#header::after {
    content: '';
    width: 100%;
    height: 0px;
    background-color: #808080;
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 1;
    transition: all 400ms;
}
#header.on::after {
    height: 155px;
}
.nav {
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
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        코드는 문서가 모두 로드된 뒤에 실행되도록 $(function(){}) 구문 안에서
        시작됩니다.{' '}
      </p>
      <p>
        이 구조는 jQuery에서 자주 사용하는 기본 패턴으로, HTML이 다 불러와지고
        나면 그때부터 안의 코드를 실행해달라는 뜻이에요. 이제 본격적으로 메뉴
        동작을 설정해봅니다.{' '}
      </p>
      <p>
        먼저 .nav &gt; ul &gt; li — 즉, 각 메뉴 항목에 마우스를 올렸을 때
        실행되는 동작을 지정해줄게요. 마우스를 올리면 .nav &gt; ul &gt; li &gt;
        ul 이라는 서브 메뉴 전체를 선택해서 slideDown()으로 펼쳐줍니다. 그 전에
        .stop()을 함께 사용하는 이유는, 빠르게 마우스를 왔다갔다 했을 때
        애니메이션이 중첩돼서 꼬이지 않도록 기존 동작을 멈춰주기 위해서예요.
        그리고 (900)이라는 값은 0.9초 동안 부드럽게 내려오라는 의미입니다. 이와
        동시에 #header에 on 클래스를 추가해주는데요, 이 클래스는 CSS에서 ::after
        가상요소에 배경을 보여주는 역할을 합니다. 즉, 메뉴에 마우스를 올리면
        서브 메뉴도 내려오고, 배경도 함께 나타나는 구조가 되는 거죠. 이제
        마우스를 떼면 어떻게 될까요?
      </p>
      <p>
        다시 .nav &gt; ul &gt; li에 mouseout 이벤트를 지정해서, 서브 메뉴는
        slideUp(100)으로 빠르게 닫아주고, #header에 추가했던 on 클래스도
        removeClass()로 제거해줍니다. 이렇게 하면 배경도 자연스럽게 사라지게
        됩니다.
      </p>
      <CodeBlock
        language='js'
        code={`$(function(){
    $(".nav > ul > li").mouseover(function(){        
        $(".nav > ul > li > ul").stop().slideDown(900);  
        $("#header").addClass("on");  
    });

    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().slideUp(100);
        $("#header").removeClass("on");  
    });
})`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        이 코드는 페이지가 완전히 로드된 후에 실행됩니다. 먼저, .nav &gt;
        ul이라는 메뉴 전체 리스트를 선택해서 navList라는 변수에 저장하고, 그
        영역에 mouseover와 mouseout 이벤트를 각각 등록합니다. 마우스를 메뉴 위에
        올리면, navList 안에 있는 모든 .submenu 요소들을 선택해서 forEach()로
        하나씩 꺼내며, 각 서브 메뉴의 style.height 값을 &quot;155px&quot;로
        설정해 서브 메뉴가 펼쳐지도록 합니다.{' '}
      </p>
      <p>
        이와 동시에, #header 요소에 on 클래스를 추가하여 CSS에서 정의한 가상
        요소 배경이 나타나도록 설정합니다. 반대로 마우스를 메뉴에서 떼면
        mouseout 이벤트가 실행되는데, 앞서 선택했던 .submenu들의 height를
        &quot;0px&quot;로 되돌려 닫히게 만들고, #header에 추가했던 on 클래스를
        제거하여 배경도 함께 사라지도록 처리합니다.{' '}
      </p>
      <p>
        결과적으로 이 코드는 마우스를 올리면 모든 서브 메뉴와 배경이 함께
        자연스럽게 펼쳐지고, 마우스를 떼면 모두 함께 닫히는 동작을 구현하는
        스크립트입니다. 애니메이션 효과는 CSS의 transition 속성으로 부드럽게
        처리됩니다.
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "155px";
        });
        document.getElementById("header").classList.add("on");
    });

    navList.addEventListener("mouseout", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
        document.getElementById("header").classList.remove("on");
    });
}`}
      />
      <CodeBlock
        language='css'
        code={`/* 자바스크립트용 CSS */
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
        <li>&lt;nav&gt; : 메뉴 전체를 감싸는 내비게이션 영역</li>
        <li>&lt;ul&gt;, &lt;li&gt; : 메뉴와 서브 메뉴 항목 구조 구성</li>
        <li>&lt;a&gt; : 각각의 메뉴 항목에 연결되는 링크</li>
        <li>
          가상요소 <code>::after</code> : 서브메뉴 배경을 만들어주는 핵심
        </li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>position: relative/absolute → 위치 지정과 기준점 설정</li>
        <li>display: none/block → 제이쿼리용 서브메뉴 숨김/표시</li>
        <li>
          height + overflow + transition → 자바스크립트용 슬라이드 효과 구현
        </li>
        <li>z-index → 메뉴와 배경 요소의 층을 나누는 중요한 속성</li>
      </ul>
      <h5>✅ 제이쿼리 메서드 개념</h5>
      <ul>
        <li>
          <code>.addClass(&quot;on&quot;)</code> → 선택한 요소에{' '}
          <strong>클래스를 추가</strong>합니다.
        </li>
        <li>
          <code>.removeClass(&quot;on&quot;)</code> → 선택한 요소에서{' '}
          <strong>지정한 클래스를 제거</strong>합니다.
        </li>
        <li>
          <code>.stop()</code> →{' '}
          <strong>현재 진행 중인 애니메이션을 멈추고</strong> 새로운
          애니메이션을 실행합니다.
        </li>
        <li>
          <code>.slideDown(300)</code> / <code>.slideUp(300)</code> → 요소를
          부드럽게 열고 닫는 효과를 줍니다. 괄호 안의 숫자(밀리초)는
          애니메이션의 속도입니다. <code>300</code>은 0.3초, <code>900</code>은
          0.9초입니다.
        </li>
      </ul>
      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>
          <code>querySelector()</code> → <strong>하나의 요소</strong>만 선택할
          때 사용합니다.
        </li>
        <li>
          <code>querySelectorAll()</code> → <strong>여러 개의 요소</strong>를
          한꺼번에 선택할 때 사용합니다.
        </li>
        <li>
          <code>forEach()</code> → <code>querySelectorAll()</code>로 선택한 여러
          요소에 <strong>하나씩 동작을 적용</strong>할 때 사용합니다.
        </li>
        <li>
          <code>classList.add()</code> / <code>classList.remove()</code> → 특정
          요소에 <strong>클래스를 추가하거나 제거</strong>할 때 사용합니다.
        </li>
      </ul>
      <h5>✅ 이번 실습의 핵심 포인트</h5>
      <ul>
        <li>서브 메뉴 뿐만 아니라 전체 배경도 함께 나오는 구조 구현</li>
        <li>CSS 가상요소와 JavaScript/제이쿼리의 class 제어를 함께 활용</li>
        <li>실무에서 많이 사용하는 메가 메뉴 구조의 기초 구현 방식 학습</li>
        <li>시험뿐 아니라 실제 프로젝트에서도 유용한 구조임을 이해</li>
      </ul>
      <h4>5. 마무리</h4>
      <p>
        이번 유형은 단순히 메뉴를 보여주는 것을 넘어서 배경까지 함께 제어하는
        고급 구조를 다뤘습니다. 이런 방식은 실제 실무 웹사이트에서도 자주
        활용되는 만큼, 오늘의 실습은 단순 시험 대비를 넘어선 실전 코딩
        경험이라고 생각하셔도 좋아요!
      </p>
      <p>
        처음엔 선택자나 클래스 제어가 복잡해 보일 수 있지만, 구조의 흐름을
        이해하고 나면 훨씬 쉽고 재밌게 느껴질 거예요. 지금은 따라만 해도
        괜찮습니다. 자주 보고, 손으로 직접 코딩하면서 익히다 보면 어느 순간
        ‘나도 할 수 있겠는데?’ 하는 자신감이 생길 거예요.
      </p>
      <p>
        오늘도 끝까지 수고 많으셨습니다. 다음 시간엔 더 멋진 UI를 함께
        만들어볼게요! 포기하지 마시고, 하나씩 천천히 함께 가봅시다! 당신의
        성장을 항상 응원합니다. 😊💪
      </p>
    </>
  )
}
