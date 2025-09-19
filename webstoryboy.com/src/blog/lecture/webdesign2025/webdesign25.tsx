import CodeBlock from '@/components/post/post-code'

export default function Webdesign25() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        오늘은 웹디자인기능사 실기 시험의 핵심, 바로 스크립트 유형을 함께
        살펴보려고 합니다. 처음 코딩을 시작하신 분들에게는 이 파트가 가장 어렵게
        느껴질 수 있어요. 저도 예전에{' '}
        <span className='uline'>
          &quot;어떻게 하면 짧고 간단하게 외울 수 있을까?&quot;
        </span>{' '}
        고민을 참 많이 했습니다.
      </p>
      <p>
        하지만 중요한 건 단순한 외우기가 아니라, 실무에서 이 코드가 어떻게 쓰일
        수 있을까?를 이해하는 거라고 생각합니다. 그래서 코드가 짧지는 않더라도,
        논리적인 흐름에 따라 쉽게 이해할 수 있도록 구성해봤어요. 이해하면서
        익히면, 시험장에서도 훨씬 기억에 잘 남을 거예요!
      </p>
      <p>
        웹디기의 스크립트 유형에는 메뉴, 슬라이드, 탭 메뉴, 팝업이 주로 나오며,
        가장 기본적인 메뉴 유형부터 시작할게요. 메뉴는 가로형이나 세로형으로
        나뉘지만, 사실 사용하는 코드는 거의 동일하니 부담 없이 따라오시면
        됩니다.
      </p>
      <p>
        참고로, 현재 웹디기에서 다루는 스크립트는 실무에서 사용하는 최신
        기술과는 조금 거리가 있어요. 요즘은 정적인 사이트보다는 패럴랙스나
        다양한 애니메이션을 활용한 동적인 사이트가 많거든요. 그래도 자격증을
        준비하면서 실무에도 도움이 되는 코드 스타일로 연습하는 게 의미 있다고
        생각해요. 그래서 저는 이번 강의에서 제이쿼리 버전과 자바스크립트 버전 두
        가지 모두를 준비했어요.
      </p>
      <ul>
        <li>제이쿼리는 예전 웹사이트에서 여전히 많이 사용되고 있고,</li>
        <li>자바스크립트는 앞으로의 실무에서 중심이 될 언어입니다.</li>
      </ul>
      <p>
        처음이라면 자바스크립트부터 익히는 걸 추천하지만, 편한 걸로 선택하셔도
        전혀 문제 없어요! 😄
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
    background-color: #c7c7c7;
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
}`}
      />

      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        제이쿼리로 작업을 시작하기 전에 꼭 알아야 할 중요한 점이 있습니다. 바로,
        제이쿼리는 자바스크립트로 만들어졌다는 사실이에요. 브라우저는
        자바스크립트만 인식하기 때문에, 제이쿼리도 결국 자바스크립트로 작성된
        라이브러리라고 보시면 됩니다. 자바스크립트는 초보자분들에게 다소 어렵게
        느껴질 수 있지만, 제이쿼리는 그런 자바스크립트의 복잡한 문법을 더 쉽게
        사용할 수 있도록 도와주는 도구랍니다. 그래서 우리는 제이쿼리를 사용해서
        좀 더 간단하고 직관적인 코드로 다양한 기능을 구현할 수 있어요. 단, 한
        가지 중요한 점! 제이쿼리는 외부에서 만든 자바스크립트 파일이기 때문에,
        작업 전에{' '}
        <span className='uline'>
          반드시 HTML 파일에 제이쿼리 파일을 먼저 연결해주셔야 합니다.
        </span>
      </p>
      <p>
        보통 시험장에서 제공되는 폴더 안에 jquery.js 파일이 포함되어 있을
        거예요. 이 파일을 &lt;script&gt; 태그로 먼저 연결해주지 않으면, 제이쿼리
        코드는 동작하지 않으니 꼭 기억해주세요! ✅
      </p>
      <CodeBlock
        language='html'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>`}
      />
      <p>
        이렇게 연동을 하고 시작해야 합니다. 현재 버전이 1.대 버전이지만 2.대
        버전, 3.대 버전을 사용하여도 상관없습니다. 시험장에서 제공한 파일을
        사용하면 됩니다. 자바스크립트로 작업할 때에는 이런 부분은 필요가
        없습니다.
      </p>
      <p>
        그리고{' '}
        <span className='uline'>
          스크립트를 어디에 작성하느냐도 정말 중요한 포인트입니다!
        </span>{' '}
        사실 스크립트는 HTML 문서의 어디에 넣어도 동작은 합니다. 하지만
        브라우저는 위에서 아래로 코드를 순서대로 읽기 때문에, 스크립트는 보통
        HTML의 가장 아래쪽, 즉 &lt;body&gt; 태그의 끝부분에 넣는 게 가장
        안전합니다.
      </p>
      <p>
        왜냐하면 HTML 구조를 먼저 모두 읽고 나서 스크립트를 실행하는 것이
        웹페이지가 깨지지 않고, 완성된 상태에서 동작할 수 있도록 도와주기
        때문이에요. 만약 반대로, 스크립트를 너무 일찍 넣게 되면 HTML 요소들이
        아직 만들어지기 전에 스크립트가 실행되어 레이아웃이 깨지거나 오류가
        발생할 수 있습니다.
      </p>
      <p>
        그래서 이번 실습에서는 연습을 위해 스크립트를 &lt;body&gt; 끝부분에
        넣어볼게요. 하지만 실무에서는 상단에 넣는 경우도 종종 있습니다. 그럴 땐
        사이트 로딩이 끝난 후 스크립트를 실행해라!라는 보조 코드, 즉
        $(document).ready() 같은 명령어를 함께 사용해 로딩 문제를 방지할 수
        있습니다.
      </p>
      <CodeBlock
        language='js'
        code={`$(document).ready(function(){

});
//약식
$(function(){ 

});`}
      />

      <p>
        이제 준비가 끝났다면, 제이쿼리에서 가장 먼저 해야 할 일은 ‘선택자’를
        설정하는 것입니다.
      </p>
      <p>
        예를 들어, $(&quot;.nav &gt; ul &gt; li&quot;)는 메뉴 항목을 선택하는
        코드예요. 그리고 mouseover는 마우스를 올렸을 때,
        .find(&quot;.submenu&quot;)는 해당 항목 안에서 서브 메뉴를 찾아서,
        .slideDown()은 서브 메뉴를 아래로 펼쳐서 보여주겠다는 의미죠. 이처럼
        코드를 하나하나 해석하듯이 작성해보면 생각보다 훨씬 이해가 쉬워집니다!
      </p>
      <p>
        물론 $(), this, .stop() 같은 문법은 지금은 완벽히 몰라도 괜찮아요.
        처음에는 외우듯이 따라 하되, 해석하는 연습을 함께 하시는 게 중요합니다.
        &quot;이건 메뉴 항목이고, 마우스를 올리면 서브 메뉴를 보여준다&quot;
        이렇게{' '}
        <span className='uline'>
          우리말로 먼저 생각한 뒤, 제이쿼리 코드로 바꿔보는 방식이 좋아요.
        </span>
        처음엔 조금 헷갈릴 수 있지만, 작동하는지만 잘 확인하면서 연습해보세요.
        혹시 안 된다면 제가 올려드린 소스랑 차근차근 비교해보면서 수정해보면
        금방 해결됩니다. 잘 따라오셨나요?
      </p>

      <CodeBlock
        language='js'
        code={`$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
})`}
      />
      <p>
        이렇게 하면 메뉴가 잘 작동 될 것입니다. 중간 과정은 몰라도 우선 결과에
        만족하세요! 이제부터 천천히 중간 과정을 배울거니깐요! 😊 처음이니까 잘
        안 되더라도 너무 걱정하지 마세요! 다음에도 천천히 함께 연습해보면
        됩니다! 💪
      </p>

      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        이번에는 자바스크립트로 메뉴를 구현해보겠습니다. 만약 자바스크립트가
        아직 어렵게 느껴진다면, 제이쿼리로 작업해도 전혀 상관 없습니다. 하지만
        요즘 실무에서는 제이쿼리보다는 자바스크립트가 훨씬 더 많이 사용되고 있기
        때문에, 가능하다면 자바스크립트에도 도전해보시는 걸 추천드려요 😊
      </p>
      <p>
        자바스크립트는 제이쿼리처럼 별도의 라이브러리를 불러올 필요 없이,
        브라우저만 있으면 바로 사용할 수 있습니다. 다만, 제이쿼리와 마찬가지로
        스크립트를 언제 실행할지가 중요하죠. 아래는 웹페이지 로딩이 완료된 후에
        자바스크립트를 실행시키는 코드입니다. 실무나 시험 환경 모두에서 자주
        사용하는 방식이니 꼭 기억해두시면 좋아요! 두 가지 방법은 약간의 차이는
        있지만, 시험에서는 어떤 걸 사용해도 큰 문제는 없습니다.
      </p>
      <ul>
        <li>
          window.onload는 웹페이지의 모든 이미지나 리소스까지 모두 로드된 후
          실행되고,
        </li>
        <li>
          DOMContentLoaded는 HTML 구조(DOM)가 모두 만들어지면 바로 실행됩니다.
        </li>
      </ul>

      <p>
        &quot;둘 중에 뭘 써야 하지?&quot; 싶을 땐, 그냥 더 짧고 외우기 쉬운 걸
        사용하시면 됩니다! 😵‍💫 보통은 window.onload를 더 자주 사용하긴 해요.
        자세한 차이는 나중에 실무에서 한 번 더 다뤄보면 되고요, 지금은 ‘이렇게
        하면 작동한다!’는 것만 기억해도 충분합니다 💡
      </p>

      <CodeBlock
        language='js'
        code={`window.onload = function(){

};
document.addEventListener("DOMContentLoaded", function() {

})`}
      />

      <p>
        이제 자바스크립트로 메뉴에 동작을 넣어볼게요! 먼저 navList라는 변수를
        만들어서 모든 메뉴 항목들(li)을 선택합니다.
      </p>
      <p>
        제이쿼리는 하나든 여러 개든 그냥 선택자만 쓰면 되지만,
        자바스크립트에서는 여러 요소를 선택할 때 querySelectorAll을 사용해
        &quot;여러 개를 선택했어요!&quot;라고 명확히 알려줘야 해요.
      </p>
      <p>
        그리고 이렇게 선택된 여러 요소에 각각 동작을 넣기 위해{' '}
        <span className='uline'>forEach 반복문</span>을 사용해서 하나씩
        처리합니다. mouseover 이벤트로 마우스를 올렸을 때 → this는 내가 오버한
        메뉴 항목을 의미하고, → 그 안의 서브 메뉴에 height 값을 줘서 펼쳐지도록
        설정해줍니다. 반대로 mouseout 이벤트에서는 → 다시 height 값을 0으로
        바꿔서 서브 메뉴를 닫아주면 되죠!{' '}
      </p>
      <p>
        지금은 설명이 조금 어려울 수도 있어요. 사실 저도 설명하면서 “이걸 어떻게
        쉽게 말하지...” 고민 많이 하거든요 😅 하지만 지금은 &quot;아~ 이렇게
        하면 메뉴가 동작하는구나!&quot; 이 정도만 이해하셔도 충분합니다. 세세한
        부분은 다음 튜토리얼에서 더 자세히 알려드릴게요. 우선은 코드를 그대로
        따라 해보시고, 화면에서 잘 작동하는지 확인해보세요! 화이팅입니다! 💪☺️
      </p>

      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let navList = document.querySelectorAll(".nav > ul > li");
    
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".submenu").style.height = "155px";
        });
    });
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height = "0px";
        });
    });
}`}
      />
      <CodeBlock
        language='css'
        code={`/* 자바스크립트용 CSS */
.nav > ul > li > ul {
    display: block;
    height: 0;
    /* height: 155px; */
    overflow: hidden;
    transition: all 600ms;
}`}
      />

      <h4>4. 정리</h4>
      <h5>✅ 주요 HTML 구조</h5>
      <ul>
        <li>
          &lt;nav&gt; : 내비게이션 영역을 감싸는 태그. 메뉴의 전체 구조 담당.
        </li>
        <li>
          &lt;ul&gt;, &lt;li&gt; : 메뉴와 서브 메뉴 리스트 구조를 구성하는 핵심
          요소.
        </li>
        <li>&lt;a&gt; : 메뉴 항목 클릭 링크용.</li>
      </ul>
      <h5>✅ 주요 CSS 구조</h5>
      <ul>
        <li>position: relative : 기준이 되는 부모 요소로 설정 (li에 적용).</li>
        <li>
          position: absolute : 서브 메뉴 위치를 절대값으로 지정 (ul.submenu에
          적용).
        </li>
        <li>display: none/block : 서브 메뉴를 숨기거나 보이게 설정.</li>
        <li>
          transition, height : JavaScript 버전에서 슬라이드처럼 자연스러운 전환
          효과 구현.
        </li>
      </ul>
      <h5>✅ 제이쿼리 핵심 개념</h5>
      <ul>
        <li>$() : 선택자. 원하는 요소를 jQuery 방식으로 선택.</li>
        <li>.mouseover(), .mouseout() : 마우스 이벤트 감지.</li>
        <li>.find() : 현재 요소 내부에서 특정 하위 요소 탐색.</li>
        <li>.slideDown(), .slideUp() : 부드러운 메뉴 열고 닫기 효과.</li>
      </ul>
      <h5>✅ 자바스크립트 핵심 개념</h5>
      <ul>
        <li>querySelectorAll() : 여러 요소 선택.</li>
        <li>forEach() : 선택된 요소들을 하나씩 반복 처리.</li>
        <li>addEventListener() : 이벤트 등록.</li>
        <li>this.querySelector() : 현재 이벤트 대상 내부 요소 선택.</li>
        <li>style.height, transition : 직접 스타일 조작을 통해 메뉴 제어.</li>
      </ul>
      <h5>✅ 스크립트 실행 타이밍</h5>
      <ul>
        <li>
          $(document).ready() 또는 window.onload : 문서가 준비된 뒤 스크립트
          실행.
        </li>
        <li>DOMContentLoaded : DOM만 준비된 시점에 실행. 더 빠르게 실행됨.</li>
      </ul>
      <h5>✅ 이번 실습의 핵심 포인트</h5>
      <ul>
        <li>제이쿼리와 자바스크립트의 차이를 체감하며 구조를 이해.</li>
        <li>마우스 이벤트를 활용해 메뉴 열고 닫는 흐름을 익힘.</li>
        <li>레이아웃과 함께 연동되는 스크립트 구조를 경험.</li>
        <li>
          시험에서도 단순 구현보다 논리적 흐름을 갖춘 코드 작성이 더 중요합니다.
        </li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        처음으로 스크립트를 다뤄보셨는데, 어떠셨나요? 아마 중간중간 &quot;이게
        맞나…?&quot;, &quot;왜 안 되지?&quot; 하는 순간들도 있으셨을 거예요.
        하지만 걱정하지 마세요. 지금 겪는 모든 시행착오는 성장의 과정입니다.
      </p>
      <p>
        프로그래밍은 처음에는 무조건 어려운 게 당연해요. 코드를 보면 낯설고,
        복잡하고, 헷갈리고… 저도 처음엔 정말 그랬거든요. 그런데 희한하게도
        반복해서 손으로 직접 따라 하고, 오류도 겪어보고, 한 줄 한 줄 이해하려고
        노력하다 보면 어느 순간 머릿속에 흐름이 그려지기 시작합니다.
      </p>
      <p>
        앞으로도 유형 하나하나 함께 익히면서 단순 암기보다 이해 중심으로,
        실무에서도 활용 가능한 힘을 기르는 수업을 만들어갈게요 💪 오늘도 정말
        수고 많으셨습니다. 자신을 칭찬하며 마무리해보세요. 그리고 내일은 더
        가볍게, 한 걸음 더 나아가볼게요. 그럼 다음 시간에 또 만나요! 😊
        화이팅입니다! 🙌
      </p>
    </>
  )
}
