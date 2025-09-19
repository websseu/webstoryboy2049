import CodeBlock from '@/components/post/post-code'

export default function Webdesign28() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간에는 네 번째 메뉴 유형, 바로 세로형 메뉴를 함께
        만들어보겠습니다.
      </p>
      <p>
        이번 메뉴는 사이드 메뉴가 있는 레이아웃에서 자주 사용되는 구조로,
        가로형과는 조금 다른 느낌의 인터페이스를 경험하실 수 있어요. PDF를
        살펴보면 이 메뉴는 정적인 레이아웃뿐 아니라, 반응형 레이아웃에서도 자주
        사용되는 걸 볼 수 있는데요, 이번에는 그중에서도 조금 더 난이도가 있을 수
        있는 반응형 레이아웃 환경에서 작업을 진행해보겠습니다.
      </p>
      <p>
        사실 메뉴 유형 1, 2, 3번에서 사용된 원리와 이번 세로형 메뉴의 원리는
        거의 동일합니다. 다만 가로와 세로 레이아웃에 따라 약간의 구조적 차이가
        생기기 때문에 이 부분을 함께 짚어보면서 비교해보시면 훨씬 이해가 쉬울
        거예요. 이번 시간은 복습하는 마음으로 천천히 따라오시면 됩니다. 그럼
        오늘도 새로운 유형으로 연습해볼까요? 렛츠 기릿! 😆💪
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
        메뉴 코드를 추가하고 CSS를 설정하겠습니다. CSS는 기존보다 조금 더
        간단합니다. 우선 서브 메뉴는 잠시 숨겨놓겠습니다.
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
.nav > ul > li > a {
    display: block;
    padding: 10px;
    background-color: #ccc;
    text-align: center;
}
.nav > ul > li > a:hover {
    background-color: #9c9c9c;
}
.nav > ul > li > ul {
    display: none;
}
.nav > ul > li > ul > li > a {
    display: block;
    padding: 10px;
    text-align: center;
}
.nav > ul > li > ul > li > a:hover {
    background-color: #c0c0c0;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        먼저 &lt;script&gt; 태그로 외부 제이쿼리 라이브러리를 불러왔습니다.
        이렇게 해야 제이쿼리 문법을 사용할 수 있습니다.
      </p>
      <p>
        이제 실제 동작을 살펴볼게요. .nav &gt; ul &gt; li는 메뉴의 각 항목들을
        선택하는 선택자입니다. 이 항목들에 mouseover 이벤트를 걸어주고, 해당
        항목 안에서 .submenu라는 클래스를 가진 서브메뉴를 찾아서 .slideDown()을
        실행합니다. 이 메서드는 서브메뉴를 아래로 펼치는 애니메이션을 만들어주는
        역할을 합니다.
      </p>
      <p>
        그 전에 .stop()을 사용하는 이유는 애니메이션이 여러 번 겹쳐서 실행되는
        걸 막기 위해서예요. 예를 들어 마우스를 빠르게 왔다갔다 하면
        slideDown()이 계속 누적되는데, .stop()을 써주면 이전 애니메이션을 멈추고
        새로운 동작만 실행하게 됩니다.
      </p>
      <p>
        마우스를 떼면 mouseout 이벤트가 실행되고, 이번에는 .slideUp() 메서드가
        작동해서 서브메뉴가 위로 접히듯 사라지게 됩니다. 간단하게 말해서,
        마우스를 올리면 slideDown(), 내리면 slideUp()으로 서브메뉴를 부드럽게
        열고 닫는 구조입니다. 코드는 짧지만, 이 안에 선택자 지정, 이벤트 처리,
        애니메이션, 그리고 충돌 방지를 위한 .stop()까지 꼭 알아야 할 핵심
        기능들이 잘 담겨 있어요.
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
        먼저, window.onload를 사용해서 웹페이지의 모든 요소가 완전히 로드된 뒤에
        아래의 스크립트가 실행되도록 했습니다. 이렇게 하면 HTML이 아직 다
        불러와지기 전에 스크립트가 먼저 실행되는 걸 방지할 수 있어요.
      </p>
      <p>
        그다음은 메뉴 항목을 선택해줘야겠죠?
        document.querySelectorAll(&quot;.nav &gt; ul &gt; li&quot;) 이 코드는
        메뉴의 1차 항목들, 즉 li 요소들을 모두 찾아줍니다. 여러 개니까
        querySelectorAll을 사용한 거예요. 그리고 나서 forEach 문을 써서 각 메뉴
        항목 하나하나에 이벤트를 걸어줍니다. 마우스를 올렸을 때 mouseover
        이벤트가 실행되고, 그 안에서 this.querySelector(&quot;.submenu&quot;)를
        사용해 해당 메뉴 항목의 서브메뉴를 찾습니다. 그리고 그 서브메뉴의
        style.height를 &quot;155px&quot;로 설정해줍니다. 그러면 서브메뉴가
        펼쳐지듯이 나타나겠죠?
      </p>
      <p>
        반대로 마우스를 떼면, 즉 mouseout 이벤트가 발생하면 같은 방식으로
        style.height를 &quot;0px&quot;로 바꿔주면서 서브메뉴를 다시 접어줍니다.
        여기서 부드럽게 열리고 닫히는 효과를 주기 위해서는 CSS에서 transition과
        overflow: hidden 설정이 꼭 같이 들어가 있어야 한다는 점, 기억해주세요.
        자바스크립트는 높이값만 조정해주는 거고, 애니메이션처럼 자연스럽게
        보이는 건 CSS의 역할입니다.
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
          &lt;aside&gt;: 반응형 레이아웃에서 메뉴를 사이드 영역에 배치할 때 사용
        </li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          display: none / block : 서브 메뉴를 숨기고 보이게 할 때 사용하는 기본
        </li>
        <li>
          속성 height, overflow, transition : 슬라이드 애니메이션 구현의 핵심
          조합
        </li>
        <li>
          flex, width, calc() : 반응형 기반 레이아웃 설계 시 자주 사용하는
        </li>
        <li>
          레이아웃 속성 z-index : 메뉴가 다른 요소 위에 보이도록 층을 조절하는
          속성
        </li>
      </ul>
      <h5>✅ 제이쿼리 메서드 개념</h5>
      <ul>
        <li>.mouseover() / .mouseout() : 마우스 이벤트 발생 시 동작 정의</li>
        <li>.find() : 특정 요소 내부에서 원하는 자식 요소 탐색</li>
        <li>.stop() : 현재 실행 중인 애니메이션을 중단하여 충돌 방지</li>
        <li>
          .slideDown() / .slideUp() : 서브 메뉴를 부드럽게 열고 닫는 애니메이션
          효과
        </li>
      </ul>
      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>querySelectorAll() : 여러 요소를 한 번에 선택</li>
        <li>forEach() : 선택한 여러 요소 각각에 이벤트나 동작을 반복 적용</li>
        <li>
          this.querySelector() : 현재 선택된 요소 내부의 특정 자식 요소를 탐색
        </li>
        <li>style.height = ... : 직접 높이를 지정해 메뉴 열림/닫힘을 제어</li>
        <li>
          transition은 CSS에서 반드시 설정해 애니메이션 효과가 자연스럽게
          적용되도록 해줌
        </li>
      </ul>
      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>
          가로형 메뉴 원리를 그대로 가져오되, 세로 구조에 맞게 레이아웃을 재설계
        </li>
        <li>
          제이쿼리와 자바스크립트를 모두 비교하며 각 방식의 구현 흐름을 익힘
        </li>
        <li>
          서브 메뉴의 위치, 높이, 트랜지션 처리를 통해 부드러운 인터랙션 구현
        </li>
        <li>
          실무에서도 자주 등장하는 사이드 메뉴 구조에 대한 경험을 쌓을 수 있는
          기회
        </li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        이번 시간에는 세로형 메뉴, 특히 반응형 레이아웃 속 사이드 메뉴를
        구현해보았습니다. 그동안의 가로형 메뉴와는 구조는 다르지만, 내부 동작
        원리는 동일하다는 것을 느끼셨을 거예요. 처음에는 방향이 바뀌는
        것만으로도 어렵게 느껴질 수 있지만, 하나하나 비교하면서 따라가다 보면
        레이아웃이 어떻게 바뀌더라도 스크립트의 핵심 흐름은 같다는 것을 이해하게
        될 겁니다.
      </p>
      <p>
        이제 중요한 건 반복 연습과 흐름 파악이에요. 스크립트를 단순히 외우는 게
        아니라, &quot;왜 이렇게 작동하지?&quot; &quot;무엇을 선택해서 어떤
        행동을 시키는지&quot; 이런 논리적인 흐름을 이해하면 어떤 유형이 나와도
        두려울 게 없어요! 혹시 오늘도 이해가 어려웠다면, 걱정하지 마세요.
        처음에는 누구나 헷갈리고, 따라만 해도 충분히 성장하고 있는 겁니다.
      </p>
      <p>
        매번 하나씩 쌓아가면서 여러분만의 실무 감각을 키워보세요! 다음 시간엔 더
        흥미롭고 실전에서 바로 쓸 수 있는 UI로 함께 연습해보겠습니다. 오늘도
        정말 수고 많으셨습니다. 포기하지 말고 끝까지! 여러분의 도전을 언제나
        응원합니다 😊💪
      </p>
    </>
  )
}
