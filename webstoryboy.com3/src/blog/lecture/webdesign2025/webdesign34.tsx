import CodeBlock from '@/components/post/post-code'

export default function Webdesign34() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간에는 웹디자인기능사의 하이라이트, 바로 S-4 유형의 반응형 이미지
        슬라이드를 만들어보겠습니다!
      </p>
      <p>
        반응형 슬라이드를 구현하기 위해서는 기존 방식처럼 &lt;img&gt; 태그를
        사용하는 것보다는, CSS background 속성을 활용하는 것이 좋습니다. 그렇게
        하면 슬라이드 크기에 맞춰 이미지가 유연하게 늘어나고 줄어들기 때문에,
        다양한 화면 크기에 대응하기 훨씬 수월하거든요.
      </p>
      <p>
        기존 슬라이드 스크립트 구조를 크게 바꾸지 않고, CSS만 잘 조정해도 웬만한
        반응형 슬라이드는 구현할 수 있습니다. 물론 완벽한 반응형을 만들기
        위해서는 고려해야 할 사항이 더 많지만, 시험 난이도나 제한된 시간을
        감안하면 적당한 수준에서 마무리해도 충분하다고 생각해요. 자, 그럼 고민은
        접어두고! 지금부터 반응형 이미지 슬라이드를 함께 만들어볼까요? 😄 렛츠
        고! 💪✨
      </p>

      <h4>1. 구조 잡기</h4>
      <p>
        이번에는 E-1 유형의 레이아웃을 사용하였습니다. 소스는 그대로 복사하셔서
        사용하셔도 상관없습니다. 이 레이아웃을 모른다면 꼭 공부하고 오셔야
        합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <main id="main">
            <header id="header">
                <h1></h1>
                <nav></nav>
            </header>
            <!-- //header -->

            <section id="contents">
                <div class="banner"></div>
                <div class="notice"></div>
                <div class="gallery"></div>
                <div class="link"></div>
            </section>
            <!-- //contents -->

            <article id="slider">
            </article>
            <!-- //slider -->
        </main>
        <!-- //main -->
        <footer id="footer">
            <div class="footer1"></div>
            <div class="footer2">
                <div class="footer2-1"></div>
                <div class="footer2-2"></div>
            </div>
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
    width: 100%;           
}
#main {
    width: 100%;
    height: calc(100vh - 120px);
    background-color: #efefef;
    display: flex;
}
#header {
    width: 200px;
    height: 100%;
}
#header h1 {
    width: 100%;
    height: 10%;
    background-color: #e3e3e3;
}
#header nav {
    width: 100%;
    height: 90%;
    background-color: #d9d9d9;
}
#contents {
    width: 400px;
    height: 100%;
}
#contents .banner {
    width: 100%;
    height: 15%;
    background-color: #d1d1d1;
}
#contents .notice {
    width: 100%;
    height: 35%;
    background-color: #c7c7c7;
}
#contents .gallery {
    width: 100%;
    height: 35%;
    background-color: #bcbcbc;
}
#contents .link {
    width: 100%;
    height: 15%;
    background-color: #b1b1b1;
}
#slider {
    width: calc(100% - 600px);
    height: 100%;
    background-color: #a3a3a3;
}
#footer {
    width: 100%;
    display: flex;
}
#footer .footer1 {
    width: 20%;
    height: 120px;
    background-color: #9d9d9d;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #929292;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #838383;
}`}
      />
      <p>
        이미지 슬라이드 영역을 작업했습니다. 기존과 다르게 img 태그를 쓰지 않고,
        글씨만 나오도록 했습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
    <div class="sliderWrap">
        <div class="slider s1">
            <span>이미지1</span>
        </div>
        <div class="slider s2">
            <span>이미지2</span>
        </div>
        <div class="slider s3">
            <span>이미지3</span>
        </div>
    </div>
</article>
<!-- //slider -->`}
      />
      <p>
        이미지는 하나로 합쳐주기 위해서 position을 사용하였고, 모든 이미지를
        숨기고 첫 번째 이미지만 나오도록 하였습니다. 백그라운드 이미지를
        불러오고 이미지 사이즈를 화면에 맞추도록 background-size: cover;를
        사용하였고, 가운데로 위치하기 위해서 background-position: center;를
        사용했습니다. 글씨는 가운데로 오기 위해서 position: absolute를
        주었습니다.
      </p>
      <CodeBlock
        language='css'
        code={`/* slider */
.sliderWrap {
    position: relative;
    height: 100%;
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
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.sliderWrap .slider.s1 {
    background-image: url(https://webstoryboy.github.io/webstoryboy/w_webd/slider/slider04.jpg);
}
.sliderWrap .slider.s2 {
    background-image: url(https://webstoryboy.github.io/webstoryboy/w_webd/slider/slider05.jpg);
}
.sliderWrap .slider.s3 {
    background-image: url(https://webstoryboy.github.io/webstoryboy/w_webd/slider/slider06.jpg);
}
.sliderWrap .slider span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255,255,255,0.4);
    padding: 10px 20px;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        기존 S-1 유형과 구조가 거의 동일합니다. 😊 S-1 유형을 이미 이해하고
        계시거나 외워두셨다면, 이번 S-4 유형은 CSS만 조금 조정해주면 손쉽게
        완성할 수 있어요.
      </p>
      <p>
        간단히 흐름을 다시 설명드릴게요. 먼저 currentIndex = 0으로 현재
        슬라이드를 초기화하고, 모든 슬라이드 요소들을 변수에 담아둡니다. 그리고
        setInterval() 함수를 이용해 일정한 간격으로 슬라이드가 자동으로
        넘어가도록 설정하죠.
      </p>
      <p>
        다음 슬라이드는 currentIndex에 1을 더한 값으로 지정해줍니다. 그런데 이게
        단순히 0 → 1 → 2 → 끝! 이 아니에요. 슬라이드를 무한히 반복시켜야 하니까,
        전체 슬라이드 수로 나눈 나머지 값을 사용해 nextIndex를 계산합니다. 예를
        들어 슬라이드가 3개라면, 1 % 3 = 1, 2 % 3 = 2, 3 % 3 = 0, 이런 식으로
        계속 1 → 2 → 0 → 1 → 2... 무한 반복되는 순서가 만들어집니다.
      </p>
      <p>
        이렇게 구한 nextIndex를 기준으로 슬라이드를 전환해주고, 마지막엔 그 값을
        다시 currentIndex에 저장해서 다음 반복을 준비하면 됩니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    let currentIndex = 0;   //현재 이미지 설정
                
    setInterval(() => {     //3초마다 실행
        let nextIndex = (currentIndex + 1) % 3 // 1 2 0 1 2 0 1 2 0

        $(".slider").eq(currentIndex).fadeOut(1200);   //첫 번째 이미지 숨김
        $(".slider").eq(nextIndex).fadeIn(1200);    //두번째 이미지 나타남

        currentIndex = nextIndex;   //두번째 이미지 값을 현재 이미지에 저장
    }, 3000);
</script>`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        자바스크립트 작동하기 위해서는 애니메이션이 구현되어야 하기 때문에
        다음의 CSS를 제거할 것입니다. 그리고 저 부분은 자바스크립트로
        처리하겠습니다.
      </p>
      <CodeBlock
        language='css'
        code={`.sliderWrap > div {
    display: none;
}
.sliderWrap > div:first-child {
    display: block;
} `}
      />
      <p>
        먼저 querySelectorAll()을 이용해 모든 슬라이드 이미지를 선택한 후,
        forEach()를 사용해 각각의 이미지에 투명도(opacity)를 0으로 설정해줍니다.
        이렇게 하면 처음에는 모든 이미지가 보이지 않게 되죠.
      </p>
      <p>
        그다음, 첫 번째 이미지에만 opacity를 1로 설정해서 초기 화면에 표시되도록
        합니다. 이제 setInterval()을 사용해서 일정한 시간 간격으로 이미지가 자동
        전환되도록 만듭니다. 다음에 보여줄 이미지는 현재 인덱스 값에 1을 더해
        계산하고, 현재 이미지는 opacity를 0으로, 다음 이미지는 opacity를 1로
        설정해 부드럽게 전환되도록 합니다.
      </p>
      <p>
        이때 transition 속성을 함께 설정해주면 애니메이션 효과가 적용되어,
        이미지가 자연스럽게 바뀌는 느낌을 줄 수 있어요. 마지막으로 다음 이미지의
        인덱스를 현재 인덱스로 갱신해주면, 이 과정을 계속 반복하며 슬라이드가
        순환됩니다.
      </p>

      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let currentIndex = 0;   //현재 이미지   
    const slider = document.querySelectorAll(".slider"); //각각의 이미지들
    slider.forEach(el => el.style.opacity = "0");   //모든 이미지 투명도 0
    slider[0].style.opacity = 1;    //첫번째 이미지는 투명도 1

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slider.length;     //다음 이미지 

        slider[currentIndex].style.opacity = "0";       //첫번째 이미지를 숨김
        slider[nextIndex].style.opacity = "1";          //두번째 이미지 나타남
        slider.forEach(el => el.style.transition = "all 1s");   //이미지 애니메이션 추가

        currentIndex = nextIndex;       //두번째 값을 현재 이미지에 저장
    }, 3000);   
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
        <li>&lt;img&gt; : 실제 이미지 콘텐츠 (S-4에서는 사용하지 않음)</li>
        <li>&lt;span&gt; : 이미지 위 텍스트를 보여주는 요소</li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>background-image : 반응형 구현을 위한 핵심 이미지 처리 방식</li>
        <li>
          background-size: cover / background-position: center : 이미지의 크기와
          위치 조절
        </li>
        <li>position: absolute / relative : 텍스트와 이미지의 배치 제어</li>
        <li>transition : 애니메이션 부드럽게 설정</li>
      </ul>

      <h5>✅ 제이쿼리 핵심 메서드</h5>
      <ul>
        <li>.fadeIn() / .fadeOut() : 이미지의 자연스러운 전환 효과 구현</li>
        <li>.eq(index) : 특정 인덱스의 요소 선택</li>
        <li>setInterval() : 일정 시간 간격으로 자동 실행 설정</li>
      </ul>

      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>querySelectorAll() : 여러 요소 선택</li>
        <li>style.opacity / transition : 투명도 기반 애니메이션 구현</li>
        <li>setInterval() : 주기적 실행 로직 작성</li>
        <li>콜백 함수 : 특정 동작 시점에 실행되는 함수</li>
      </ul>

      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>
          &lt;img&gt; 태그 대신 background 속성을 사용해 반응형 이미지 구성
        </li>
        <li>슬라이드를 겹쳐놓고 opacity를 조절해 전환</li>
        <li>기존 S-1 유형과 동일한 스크립트 로직 재활용 가능</li>
        <li>슬라이드 동작 자체보단 CSS 구조가 핵심</li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        반응형 이미지 슬라이드까지 완성했습니다! 이번 S-4 유형은 기존 S-1 유형의
        스크립트를 거의 그대로 활용할 수 있어서, CSS 구조만 잘 설정하면 어렵지
        않게 구현할 수 있었을 거예요.
      </p>
      <p>
        시험지에 반응형이라는 표현이 명시되어 있진 않지만, 최근의 웹 흐름과
        트렌드를 반영했을 때 배경 이미지를 활용한 반응형 슬라이드는 매우 좋은
        선택입니다. 여유가 된다면 이 방식으로 구현해보시길 추천드립니다!
      </p>
      <p>
        물론, 시간이 부족하거나 구현에 어려움이 있다면 고정형 이미지로도 구현은
        가능합니다. 중요한 건 동작이 제대로 되는지, 흐름이 매끄러운지가
        핵심이니까요.
      </p>
      <p>
        오늘도 끝까지 따라오시느라 정말 수고 많으셨습니다! 반응형 슬라이드까지
        익히셨다면, 여러분의 코딩 실력은 한 단계 더 성장한 거예요. 다음 시간에도
        실무와 시험 모두에 유용한 내용으로 찾아뵙겠습니다. 😊💪
      </p>
    </>
  )
}
