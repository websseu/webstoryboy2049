import CodeBlock from '@/components/post/post-code'

export default function Webdesign31() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        좋습니다! 이제 웹디자인기능사의 핵심 관문인 이미지 슬라이드에
        도전하시네요. 😊 이 영역은 단순한 암기보다는 동작 원리를 정확히
        이해하고, 반복적으로 손에 익히는 것이 무엇보다 중요합니다.
      </p>
      <p>
        특히 최근 시험 경향상 “무한 반복 슬라이드” 형태가 자연스럽고 끊김 없는
        UX로 인정받기 때문에, 그 흐름을 구현하는 방식에 익숙해지는 것이 실전
        감점 방지에도 큰 도움이 됩니다.
      </p>
      <ul>
        <li>슬라이드 트랙의 이동 방식 (translateX, margin-left 등) </li>
        <li>이미지 배열의 순서 바꾸기 또는 클론 요소 삽입 </li>
        <li>애니메이션이 끝나는 시점에 재정렬 처리</li>
        <li>setInterval과 clearInterval의 조합으로 자동 반복 제어</li>
      </ul>
      <p>이제 본격적으로 구현해볼까요?</p>

      <h4>1. 구조 잡기</h4>
      <p>
        이번에는 A-2 유형의 레이아웃을 사용하겠습니다. 레이아웃을 그대로
        복사하셔서 사용하셔도 됩니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <header id="header">
            <h1 class="logo"></h1>
            <nav class="nav"></nav>
        </header>
        <!-- //header -->

        <article id="slider">
        </article>
        <!-- //slider -->

        <main id="contents">
            <section class="content1"></section>
            <section class="content2"></section>
            <section class="content3"></section>
        </main>
        <!-- //contents -->

        <footer id="footer">
            <div class="footer1"></div>
            <div class="footer2"></div>
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
    height: 100px;
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
        이번에는 슬라이드 영역을 작업해보겠습니다. 이미지는 3장이 있다고 가정을
        하고 이미지와 글씨를 보여줄 부분을 작업하였습니다. img 태그를 작성할
        때에는 alt 속성을 꼭 적어주셔야 합니다. 웹 표준을 준수하기 위한 가장
        기본 규칙이며, 만약 이미지가 없을 때 대체 문자가 나오는 부분입니다.
        시험지에 웹 표준을 준수하라고 명시되어 있기 때문에 이런 부분이 없다면,
        감정 요인일 것입니다.
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
    <div class="sliderWrap">
        <div class="slider s1">
            <img src="https://webstoryboy.github.io/webstoryboy/w_webd/slider/slider01.jpg" alt="이미지 설명">
            <span>이미지1</span>
        </div>
        <div class="slider s2">
            <img src="https://webstoryboy.github.io/webstoryboy/w_webd/slider/slider02.jpg" alt="이미지 설명">
            <span>이미지2</span>
        </div>
        <div class="slider s3">
            <img src="https://webstoryboy.github.io/webstoryboy/w_webd/slider/slider03.jpg" alt="이미지 설명">
            <span>이미지3</span>
        </div>
    </div>
</article>
<!-- //slider -->`}
      />
      <p>
        CSS에서는 3장의 이미지를 절대값으로 설정하여 한 곳에 뭉쳐 있도록 할
        것입니다. 모든 이미지에 display: none;을 설정하여, 안보이도록 하고
        div:first-child 첫 번째 이미지만 보이도록 설정할 것입니다. 또한 이미지에
        여백이 생기게 되는데 그 부분은 vertical-align: top을 설정하면
        없어집니다. 왜 없어지는진 모르겠네요! 옛날부터 저렇게 했습니다.
        논리적으로 설명되지 않는 부분이지만 저렇게 하면 이미지 여백이
        없어집니다. 중요하니까 꼭 기억하세요! 😱 이렇게 하면 기본 셋팅은
        끝났습니다. 이제 스크립트를 들어가보겠습니다.
      </p>
      <CodeBlock
        language='css'
        code={`/* slider */
.sliderWrap {
    position: relative;
}
.sliderWrap > div {
    display: none;
}
.sliderWrap > div:first-child {
    display: block;
}
.sliderWrap .slider {
    position: absolute;
    left: 0;
    top: 0;
}
.sliderWrap .slider img {
    vertical-align: top;
}
.sliderWrap .slider span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.4);
    padding: 10px 20px;
    color: #fff;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        이미지 슬라이드를 구현할 때는 단순히 코드만 외우기보다는, 동작하는
        원리를 먼저 이해하는 것이 중요합니다.
      </p>
      <p>
        이번에 만드는 슬라이드는 총 3개의 이미지가 같은 위치에 겹쳐진 상태에서
        하나씩 번갈아가며 나타나게 됩니다. 이를 위해 CSS에서는 모든 이미지를
        position: absolute로 설정해 한 자리에 겹쳐 놓고, 기본적으로는 display:
        none 상태로 숨겨둔 뒤 첫 번째 이미지에만 display: block을 적용해 보이게
        합니다.
      </p>
      <p>
        제이쿼리에서는 이런 처리를 $slider.hide().first().show();라는 코드로
        간단하게 구현할 수 있습니다. 여기서 $slider는 .slider 클래스를 가진 모든
        이미지 요소를 선택한 것이고, hide()로 모두 숨긴 다음 first()로 첫 번째
        이미지를 선택해 show()로 보이게 하는 흐름입니다.
      </p>
      <p>
        이미지를 순환시키기 위해서는 currentIndex라는 변수를 만들어 현재 보이는
        이미지의 순서를 기록해둡니다. 그리고 setInterval() 메서드를 사용해 일정
        시간마다 이미지를 바꾸는 로직을 반복 실행합니다. 예를 들어 3초마다 다음
        이미지가 나타나게 하려면, 현재 인덱스에 1을 더한 값을 nextIndex로
        계산합니다. 하지만 이미지가 3장이기 때문에 인덱스가 2를 넘으면 다시
        0부터 시작해야 하겠죠? 이때 % 연산자(나머지 연산자)를 활용합니다. 예:
        (currentIndex + 1) % 3 이렇게 하면 0 → 1 → 2 → 0 → 1 → 2로 자연스럽게
        반복되는 인덱스 순환이 만들어집니다.
      </p>
      <p>
        이후 eq() 메서드를 활용해 현재 이미지와 다음 이미지를 순서대로 선택하고,
        fadeOut()과 fadeIn()으로 자연스럽게 전환되도록 처리합니다. 마지막에는
        currentIndex에 nextIndex 값을 저장해 다음 루프에서도 이어지도록 하면,
        무한 루프의 슬라이드가 완성됩니다.
      </p>
      <p>
        이 방식은 흐름 중심의 정석적인 구현 방법입니다. 소스가 조금 길고 복잡해
        보일 수 있지만, 단계적으로 이해하며 연습하면 오히려 더 탄탄하게 실력을
        다질 수 있어요. 처음에는 어려워 보여도, 일단 외우고 따라 하다 보면 어느
        순간 “아, 이래서 이렇게 되는구나!” 하고 자연스럽게 이해되는 시점이 올
        겁니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function(){
        let currentIndex = 0;   //현재 이미지
        
        setInterval(function(){     //3초에 한번씩 실행
            let nextIndex = (currentIndex + 1) % 3; // 1 2 0 1 2 무한반복

            $(".slider").eq(currentIndex).fadeOut(1200);    //첫번째 이미지 사라짐
            $(".slider").eq(nextIndex).fadeIn(1200);        //두번째 이미지 나타남

            currentIndex = nextIndex;  //두번째 인덱값을 현재 인덱값에 저장
        }, 3000);
    });
</script>`}
      />

      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        이번에는 자바스크립트를 사용해서 이미지 슬라이드를 구현해보겠습니다.
        제이쿼리를 이미 이해하고 계신다면, 자바스크립트 버전도 어렵지 않게
        따라오실 수 있습니다. 기본적으로 제이쿼리에서 했던 흐름을 자바스크립트로
        그대로 옮긴다고 생각하시면 됩니다.
      </p>
      <p>
        먼저 구조적인 이해부터 해볼게요. 슬라이드는 position: absolute 속성을
        이용해 모든 이미지를 하나의 위치에 겹쳐두고, 이 중 하나만 보이도록
        설정하는 방식입니다. 제이쿼리는 한 줄로 모든 요소를 선택하고 한꺼번에
        처리할 수 있지만, 자바스크립트는 이와 달리 각각을 명확하게 지정해줘야
        합니다.
      </p>
      <p>
        그래서 먼저 let currentIndex = 0;라는 변수를 선언해서 현재 보여지는
        이미지의 순서를 저장해두고,
        document.querySelectorAll(&quot;.slider&quot;)를 통해 모든 슬라이드
        이미지를 선택합니다. 이때 반환되는 건 NodeList이기 때문에, forEach()
        반복문을 활용해서 모든 이미지의 opacity를 0으로 설정해 숨겨줍니다.
        그리고 첫 번째 이미지에는 opacity = 1로 설정해 화면에 보이게 하죠. 이제
        슬라이드가 자동으로 넘어가도록 만들기 위해 setInterval() 함수를
        사용합니다. 이 함수는 일정 시간 간격으로 정해진 코드를 반복 실행해주는
        역할을 하죠. 슬라이드를 3초마다 전환하고 싶다면 setInterval(...,
        3000)처럼 설정해주면 됩니다.
      </p>
      <p>
        그 안에서는 현재 이미지의 투명도를 0으로 만들어 숨기고, 다음 이미지의
        투명도를 1로 설정해 보여주면 됩니다. 이미지 순서를 반복시키기 위해 %
        연산자(나머지)를 사용하면 간단하게 순환 처리를 할 수 있습니다. 예를 들어
        이미지가 3장이라면 nextIndex = (currentIndex + 1) % 3 이 방식으로 0 → 1
        → 2 → 0 → 1... 이런 식으로 계속 순환할 수 있어요.
      </p>
      <p>
        또한 슬라이드 전환이 부드럽게 느껴지도록 하기 위해 CSS transition 속성도
        함께 지정해줍니다. 이건 각 이미지에 직접 스타일로 추가해도 되고, CSS에서
        미리 지정해두어도 괜찮습니다. 마지막으로 currentIndex = nextIndex를
        설정해서 다음 루프에서도 순서가 이어지도록 연결해주면 전체 흐름이
        완성됩니다. 이렇게 자바스크립트는 조금 더 명시적인 코드 작성을
        요구하지만, 흐름 자체는 제이쿼리와 완전히 동일합니다. 코드를
        외우기보다는 “무엇을 선택하고, 어떤 방식으로 바꾸는지”를 이해하고 나면,
        다양한 방식으로 응용할 수 있게 될 거예요.
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let currentIndex = 0;   //현재 이미지
    const slider = document.querySelectorAll(".slider");    //모든 이미지를 변수에 저장
    slider.forEach(img => img.style.opacity ="0");  //모든 이미지를 투명하게
    slider[0].style.opacity = "1";  //첫번째 이미지만 보이게

    setInterval(() => { //3초에 한번씩 실행
        let nextIndex = (currentIndex + 1) % slider.length; // 1 2 0 1 2 무한반복

        slider[currentIndex].style.opacity = "0";   //첫번째 이미지 사라짐
        slider[nextIndex].style.opacity = "1";      //두번째 이미지 나타남
        slider.forEach(img => img.style.transition = "all 1s"); //이미지 애니메이션 추가

        currentIndex = nextIndex; //두번째 인덱값을 현재 인덱값에 저장
    }, 3000);
}`}
      />
      <CodeBlock
        language='css'
        code={`/* 자바스크립트용 CSS */
.sliderWrap > div {
    display: block;
}`}
      />

      <h4>4. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>&lt;article&gt; : 슬라이더 전체를 감싸는 영역</li>
        <li>
          &lt;div class=&quot;slider&quot;&gt; : 각각의 이미지 콘텐츠를 감싸는
          요소
        </li>
        <li>&lt;img&gt; : 실제 이미지 콘텐츠</li>
        <li>&lt;span&gt; : 이미지 위 텍스트를 보여주는 요소</li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>position: absolute/relative : 이미지 겹치기 및 기준점 설정</li>
        <li>display: none/block : 이미지 숨김 및 표시 전환</li>
        <li>opacity : 이미지 투명도 제어로 fade 효과 구현</li>
        <li>transition : 변화가 부드럽게 이뤄지도록 애니메이션 설정</li>
        <li>vertical-align: top : 이미지 하단 여백 제거</li>
      </ul>
      <h5>✅ 제이쿼리 핵심 메서드</h5>
      <ul>
        <li>.hide() / .show() : 요소 숨김/표시</li>
        <li>.fadeIn() / .fadeOut() : 부드러운 투명도 전환 애니메이션</li>
        <li>.eq(index) : 특정 순서의 요소를 선택</li>
        <li>.length : 선택된 요소의 개수 반환</li>
        <li>setInterval() : 일정 시간 간격으로 반복 실행</li>
      </ul>
      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>querySelectorAll() : 다중 요소 선택</li>
        <li>forEach() : 각 요소에 반복 작업 실행</li>
        <li>style.opacity : 투명도 조절</li>
        <li>style.transition : 부드러운 효과 적용</li>
        <li>setInterval() : 반복 실행 함수</li>
        <li>
          콜백 함수 : 특정 시점에 실행되는 함수 (forEach, setInterval 내부 등)
        </li>
      </ul>
      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>기본 구조와 스타일 설정 후 자바스크립트나 제이쿼리로 로직 구현</li>
        <li>index를 기반으로 현재 이미지와 다음 이미지를 순환하며 반복 처리</li>
        <li>fadeIn/fadeOut으로 자연스러운 이미지 전환 처리</li>
        <li>가시성보다는 흐름 파악과 원리 이해가 중요</li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        이미지 슬라이드는 웹디자인기능사 시험에서 가장 중요한 파트 중
        하나입니다. 이번에 학습한 fade 효과는 가장 기본이면서도 자주 출제되는
        유형으로, 원리만 이해하면 응용도 어렵지 않습니다. 제이쿼리든
        자바스크립트든 핵심은 흐름을 잡는 것이며, 이번 실습을 통해 그 기반을 잘
        다지셨을 거라 생각해요.
      </p>
      <p>
        처음엔 코드가 길고 복잡하게 느껴질 수 있지만, 차근차근 반복하다 보면
        어느 순간 자연스럽게 손이 따라가게 될 거예요. 중요한 건 단순히 외우는
        것이 아니라, 왜 그렇게 되는지를 이해하며 접근하는 태도입니다.
      </p>
      <p>
        다음 시간엔 다른 방식의 슬라이드 예제—좌우 슬라이드와 위아래 슬라이드도
        함께 다뤄보며 조금 더 실전 감각을 익혀볼 예정입니다. 오늘도 끝까지 수고
        많으셨습니다! 계속해서 도전하고, 실력을 한층 더 끌어올려보세요 💪😊
      </p>
    </>
  )
}
