import CodeBlock from '@/components/post/post-code'

export default function Webdesign30() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        좋습니다! 이제 메뉴 유형 중 마지막 단계인 배경이 들어가는 M-6 유형까지
        오셨네요
      </p>
      <p>
        기존의 원리를 잘 이해하셨다면, 이 유형도 수월하게 따라가실 수 있을
        거예요. 배경이 전체적으로 펼쳐지는 구조만 다를 뿐, 스크립트와 선택자
        활용 방식은 유사하니 자신감을 갖고 시작해봅시다. 😊
      </p>
      <p>
        이 유형은 배경이 슬라이드와 함께 자연스럽게 보여지게 처리하는 게
        핵심이에요. 먼저 CSS로 .nav-bg처럼 배경 요소를 준비하고, 마우스 오버 시
        해당 배경이 슬라이드처럼 펼쳐지는 효과를 자바스크립트나 제이쿼리로
        구현하는 방식입니다. 준비되셨나요? 이제 마지막 단계도 함께 완성해봐요!!
        렛츠 기릿! 💪😇
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
        메뉴 코드를 추가하고 CSS를 설정하겠습니다. 전체 배경이 오른쪽에 나오기
        때문에 main 요소에 가상요소를 작업해야 합니다. 만약 사이드 영역에
        가상요소를 잡으면 전체 영역을 잡을 수 없기 때문에 상관이 없는 메인
        영역에 가상요소를 작업해야 합니다. 해당 메뉴의 서브 메뉴들은 position:
        absolute를 이용하여 각각 위치값을 설정해야 합니다. 구조상 이게 제일 편한
        방법일 것 같습니다. 혹시 더 좋은 의견이 있으면 댓글 부탁드립니다. 어째든
        배경이 될 수 있는 요소는 메인 영역에 설정하고, 서브메뉴는 절대 위치를
        통해 위치를 억지로 잡아줬습니다.
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
        <li>
            <a href="#">메뉴5</a>
            <ul class="submenu">
                <li><a href="#">서브메뉴5-1</a></li>
            </ul>
        </li>
    </ul>
</nav>`}
      />
      <p>
        <span className='uline'>
          ::after 가상 요소 속성을 이용해서 전체 영역을 설정했습니다.
        </span>{' '}
        위치는 position: absolute를 이용해서 잡아주고, 기준점이 되는 메인 영역에
        position: relative를 설정했습니다. 나중에 스크립트로 클래스 on이 붙으면
        width: 100%;가 설정되어 있기 때문에 배경이 활성화 될 것입니다. 서브
        메뉴들의 위치는 nth-child()를 이용하면, 자식들을 선택적으로 선택할 수
        있습니다.
      </p>
      <CodeBlock
        language='css'
        code={`/* nav */
.nav {
    position: relative;
    z-index: 1000;
}
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
    background-color: #aeaeae;
}
.nav > ul > li > ul {
    position: absolute;
    right: -500px;
    top: 0;
    width: 500px;
    display: none;
}
.nav > ul > li > ul > li {
    display: inline;
}
.nav > ul > li > ul > li > a {
    padding: 10px;
    display: inline-block;
    width: 100px;
}
.nav > ul > li > ul > li > a:hover {
    background-color: #a2a2a2;
}
#main {
    position: relative;
}
#main::after {
    content: '';
    width: 0%;
    height: 193px;
    background-color: #b0b0b0;
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 1;
    transition: all 300ms;
}
#main.on::after {
    width: 100%;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        jQuery 라이브러리를 먼저 연동하고, 그 다음 $() 문법 안에 function()을
        넣어 제이쿼리의 시작을 선언해줍니다. 이건 마치 &quot;문서가 모두
        로드되면 이 코드를 실행해줘!&quot;라는 의미라고 생각하시면 됩니다.
      </p>
      <p>
        그 안에서 우리가 원하는 두 가지 동작을 구현할 건데요. 첫 번째는
        서브메뉴가 천천히 나타나는 효과입니다. 이전 메뉴 유형에서는
        .slideDown()을 사용해서 위에서 아래로 펼쳐지는 듯한 애니메이션을
        구현했다면, 이번에는 .fadeIn()을 사용해 부드럽게 서서히 나타나는 느낌을
        줍니다. 두 번째는 메인 영역의 배경이 같이 펼쳐지는 효과입니다. 이건
        CSS에서 ::after 가상 요소로 배경을 만들어 놓고, 자바스크립트에서는
        #main에 .on 클래스를 붙였다 떼면서 배경의 가로 너비가 0 → 100%로
        확장되도록 처리하는 구조입니다.
      </p>
      <p>
        이때, jQuery에서 애니메이션이 겹치거나 밀리지 않도록 하기 위해 .stop()
        메서드를 반드시 함께 써줘야 합니다. 그래야 마우스를 빠르게 움직였을 때
        애니메이션이 꼬이지 않죠. 그리고 클래스를 추가하거나 제거하는 부분은
        .addClass()와 .removeClass()를 사용하면 됩니다. 아주 직관적인
        메서드들이죠. 말 그대로 &quot;클래스를 추가하거나, 없애주기만 하면
        되는&quot; 방식입니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function(){
        $(".nav > ul > li").mouseover(function(){        
            $(".nav > ul > li > ul").stop().fadeIn();  
            $("#main").addClass("on");  
        });
        $(".nav > ul > li").mouseout(function(){
            $(".nav > ul > li > ul").stop().fadeOut();
            $("#main").removeClass("on");  
        });
    });
</script>`}
      />

      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        자바스크립트로도 메뉴 동작을 충분히 구현할 수 있습니다. 기본적인 원리는
        제이쿼리와 같고, 다만 메서드 이름과 문법이 조금 더 직관적이고 세부
        설정이 필요하다는 점만 다릅니다. 이번 유형에서는 서브 메뉴가 천천히
        펼쳐지는 애니메이션 대신, 단순히 보이고 안 보이는 상태만 전환하면 되기
        때문에 style.display 속성을 사용했습니다. 즉, 마우스를 올리면 display:
        &quot;block&quot;으로 보여주고, 마우스를 떼면 display:
        &quot;none&quot;으로 숨겨주는 방식이죠.
      </p>
      <p>
        그리고 두 번째로 중요한 점은 배경을 제어하는 방법입니다. 우리는 CSS에서
        #main::after 가상 요소를 활용해서 배경을 만들었고, 그 배경의 활성화
        여부는 클래스 .on이 붙었는지 아닌지로 판단하도록 했습니다. 그래서
        자바스크립트에서는 마우스를 올렸을 때 main 요소에
        classList.add(&quot;on&quot;)을 적용하고, 마우스를 떼면
        classList.remove(&quot;on&quot;)을 적용하는 구조입니다.
      </p>
      <p>
        여기서 핵심은, 스크립트는 단순히 클래스만 토글할 뿐이고, 실제
        애니메이션은 CSS의 transition 속성이 처리해준다는 점이에요. 즉, 역할을
        분리해서 스크립트는 상태만 제어, 스타일은 표현만 담당하게 만든 것이죠.
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.display = "block";
        });
        document.getElementById("main").classList.add("on");
    });
    navList.addEventListener("mouseout", function(){
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.display = "none";
        });
        document.getElementById("main").classList.remove("on");
    });
}`}
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
        <li>
          ::after : CSS에서 가상 요소를 만들어 배경처럼 활용하는 데 사용됩니다
        </li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          position: relative / absolute : 서브메뉴와 배경의 위치를 정확하게
          제어할 때 필요합니다.
        </li>
        <li>right, top : 서브메뉴가 어디서 나타날지를 지정하는 좌표입니다.</li>
        <li>
          display: none / block : 서브메뉴를 보이게 하거나 숨기는 가장 기본적인
          방법입니다.
        </li>
        <li>
          transition : CSS 속성이 변화할 때 부드러운 애니메이션을 만들기 위한
          속성입니다.
        </li>
        <li>
          z-index : 메뉴와 배경이 겹칠 때 어떤 요소가 위로 올라올지를 설정하는
          계층 순서입니다.
        </li>
      </ul>
      <h5>✅ 제이쿼리 메서드 개념</h5>
      <ul>
        <li>
          .mouseover() / .mouseout() : 마우스가 올라갔을 때, 빠졌을 때를
          감지하는 이벤트 메서드입니다.
        </li>
        <li>.stop() : 중복된 애니메이션 실행을 방지합니다.</li>
        <li>
          .fadeIn() / .fadeOut() : 요소가 천천히 보이거나 사라지게 하는 부드러운
          효과입니다.
        </li>
        <li>
          .addClass() / .removeClass() : 특정 요소에 클래스를 추가하거나 제거해
          CSS 효과를 연동시킵니다.
        </li>
      </ul>
      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>querySelectorAll() : 여러 요소를 선택할 때 사용합니다.</li>
        <li>
          forEach() : 선택된 요소에 하나씩 기능을 부여할 때 사용하는
          반복문입니다.
        </li>
        <li>
          classList.add() / classList.remove() : 요소에 클래스를 추가하거나
          제거해 동적인 스타일을 적용합니다.
        </li>
        <li>
          style.display = &quot;block&quot; / &quot;none&quot; : 요소의 표시
          여부를 직접 제어할 수 있습니다.
        </li>
        <li>
          transition : 자바스크립트로는 직접 지정하지 않지만, CSS와 함께
          부드러운 전환을 만들어냅니다.
        </li>
      </ul>

      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>
          이번 유형은 전체 배경이 함께 펼쳐지는 구조로, 가상 요소(::after)와
          class 제어가 핵심입니다.
        </li>
        <li>스크립트는 단순하지만, CSS 구조 설계가 조금 더 섬세해졌습니다.</li>
        <li>
          fadeIn/fadeOut 방식과 class 제어를 통해 서브메뉴와 배경을 동시에
          제어했습니다.
        </li>
        <li>
          실무에서도 사용하는 가로 배경 메뉴 구현의 기본 로직을 다뤘습니다.
        </li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        마지막 메뉴 유형까지 정말 잘 따라오셨습니다! 이번 유형은 단순히
        서브메뉴를 보여주는 것을 넘어, 전체 배경이 함께 펼쳐지는 효과를 연출하는
        방법을 배웠어요. 이처럼 디자인 요소가 더해질수록 CSS와 자바스크립트가
        협력하는 구조를 이해하는 것이 매우 중요합니다.
      </p>
      <p>
        특히 이번 시간에는 가상 요소를 활용한 배경 제어, 클래스를 통한 트리거
        방식, 그리고 자바스크립트와 제이쿼리 각각의 접근 방식을 비교하면서, 어떤
        상황에서 어떤 도구를 활용할 수 있을지 감을 잡으셨을 거예요. 지금은
        따라만 하고 있어도 괜찮습니다. 반복하다 보면 자연스럽게 이해가 되고,
        어느 순간엔 직접 구조를 설계하고 구현할 수 있게 될 거예요. &quot;왜
        이렇게 짰는지&quot;를 이해하려는 태도만 있어도 이미 절반은 성공한
        셈입니다. 이제 메뉴 유형은 마무리되었지만, 여러분의 UI 구현 여정은 이제
        시작입니다. 다음 시간엔 또 다른 실무 스타일의 인터페이스를 함께
        구현해보면서, 실력을 하나 더 끌어올려보겠습니다.
      </p>
      <p>
        포기하지 마시고, 하나씩 차근차근. 웹스토리보이는 언제나 여러분의 성장을
        응원합니다! 😊💪
      </p>
    </>
  )
}
