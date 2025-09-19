import CodeBlock from '@/components/post/post-code'

export default function Webdesign33() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 슬라이드는 앞에서 만든 두 번째 슬라이드와 거의 동일한 구조를 갖고
        있어요. 다른 점이 있다면, 이미지의 움직임 방향이 좌우가 아닌 위아래라는
        것뿐이죠!
      </p>
      <p>
        그래서 앞의 내용을 제대로 이해하셨다면, 이번 유형은 어렵지 않게 응용하실
        수 있을 거예요. 코드 흐름도 거의 같고, 핵심은 방향만 바꿔주는 거랍니다.
        먼저 혼자 한 번 도전해보시는 것도 좋습니다. 해보다 막히는 부분이 있다면
        저와 함께 차근차근 해결해보면 되니까요.😉
      </p>
      <p>그럼 오늘도 마지막까지! 힘차게 시작해볼까요? 🚀 렛츠 고!</p>

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
        이번에는 슬라이드 영역을 본격적으로 구성해보겠습니다! 우선 이미지가 3장
        있다고 가정하고, 각 이미지와 함께 텍스트를 덧붙여 표시해줄 HTML 구조를
        만들어줄 거예요. 이렇게 하나의 슬라이드는 이미지와 텍스트가 함께
        들어가는 컨텐츠 박스로 보면 됩니다. 여기서 꼭 기억하셔야 할 점! 이미지를
        &lt;img&gt; 태그로 삽입할 때는 반드시 alt 속성을 적어줘야 합니다.
        왜냐하면, 이는 웹 표준의 기본 규칙이기 때문이죠. 이미지가 로딩되지
        않거나 시각적 접근성이 필요한 사용자에게 alt 속성은 대체 정보가
        되어줍니다. 특히 웹디자인개발기능사 시험에서는 &apos;웹 표준
        준수&apos;라는 말이 문제지에도 명시되어 있기 때문에, 이런 사소한 요소
        하나하나가 감점의 요인이 될 수 있다는 점, 꼭 기억해두세요!
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
        이미지는 세로로 정렬할 것이기 때문에 특별히 할 것이 없습니다. 원래
        이미지는 세로로 정렬이 되니깐요! 하지만 여기서 중요한 점은 이미지에
        간격이 생기는 현상을 막아야 합니다. 이미지는 인라인 구조이기 때문에
        보이지 않는 폰트 크기, 간격 등이 생깁니다. 그래서 블록구조로 변경하거나
        폰트사이즈를 0으로 설정하면 해결이 되지만 vertical-align: top; 이 방법을
        제일 많이 사용하니깐, 이렇게 설정할께요~ 그러면 간격이 없어지기 때문에
        이미지가 일정한 간격으로 이동하게 됩니다. 저기서 틀리는 분들도
        많더라구요! 주의해주세요!
      </p>
      <CodeBlock
        language='css'
        code={`/* slider */
#slider {
    overflow: hidden;
}
.sliderWrap .slider {
    position: relative;
}
.sliderWrap .slider img {
    vertical-align: top;
}
.sliderWrap .slider span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    padding: 10px 20px;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        이번 유형은 이미지가 왼쪽으로 이동하는 것이 아니라, 위쪽으로 이동한다는
        점만 다릅니다. 그래서 가로 너비를 기준으로 하던 이전 방식 대신, 각
        이미지의 세로 높이인 $slider.height() 값을 기준으로 계산해주셔야 해요.
        이미지 이동 방식은 동일하게 setInterval()을 활용하고, 첫 번째 이미지를
        복사해 마지막에 붙여주는 방식도 그대로 사용합니다. 이렇게 해야 마지막
        이미지에서 처음 이미지로 자연스럽게 연결되는 무한 슬라이드가 만들어지죠.
      </p>
      <p>
        단지 이동 방향이 위쪽이기 때문에 애니메이션 속성은 marginLeft 대신
        marginTop을 사용해야 합니다. 슬라이더가 위로 이동하면서 다음 이미지가
        자연스럽게 등장하게 되는 거예요. 그리고 마지막 슬라이드까지 도달했을
        때는 애니메이션이 끝난 후, 순간적으로 위치를 초기화해줍니다. 이때
        애니메이션을 꺼둔 상태에서 marginTop을 0으로 설정하면 사용자 눈에는 전혀
        이질감 없이 처음 위치로 자연스럽게 돌아가게 됩니다.
      </p>
      <p>
        이 흐름만 잘 이해하신다면 위쪽 슬라이드도 어렵지 않게 구현하실 수
        있습니다. 이해가 잘 안되신다면, 주석을 천천히 읽어보며 따라해보세요! 😊
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function(){
        let currentIndex = 0;   //현재 이미지 설정
        $(".sliderWrap").append($(".slider").first().clone(true));  //첫번째 이미지를 복사해서 마지막에 추가

        setInterval(function(){     //3초에 한번씩 실행   
            currentIndex++;     //현재 이미지를 1씩 증가
            $(".sliderWrap").animate({marginTop: -currentIndex * 300 + "px"}, 600);     //이미지 애니메이션

            if(currentIndex == 3){  //마지막 이미지
                setTimeout(function(){
                    $(".sliderWrap").animate({ marginTop:0 }, 0);   //애니메이션 초기화
                    currentIndex = 0;   //현재 이미지를 초기화
                }, 700)
            }
        }, 3000);
    });
</script>`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        원리는 앞서 작업한 슬라이드와 크게 다르지 않습니다. 먼저, 첫 번째
        이미지를 복제해서 마지막 위치에 추가합니다. 이렇게 하면 이미지가
        자연스럽게 이어지며 무한 반복 슬라이드를 구현할 수 있죠.
      </p>
      <p>
        중요한 포인트는 이미지들이 세로로 정확하게 정렬되어 있어야 한다는
        점입니다. 만약 여백이 생기거나 정렬이 어긋나면 슬라이드가 매끄럽지 않게
        동작할 수 있으므로, 이 부분은 반드시 CSS에서 먼저 완벽하게 설정하고
        넘어가야 합니다. 스크립트에서는 우선 현재 이미지를 나타내는
        currentIndex를 0으로 초기화합니다. 그리고 querySelectorAll()로 전체
        이미지 리스트를, firstElementChild로 첫 번째 이미지를 선택해서
        cloneNode(true)로 복제합니다. 복제한 이미지는 appendChild()를 통해
        마지막에 붙여줍니다.
      </p>
      <p>
        이제 슬라이드를 움직일 시간입니다. setInterval()을 사용해 일정 시간
        간격으로 슬라이드를 실행하고, 매번 currentIndex를 1씩 증가시켜 위쪽으로
        이동합니다. 이때 translateY와 함께 transition: all 0.6s를 설정하여
        부드러운 애니메이션을 적용합니다. 마지막 슬라이드까지 이동한 경우에는
        약간의 지연을 준 뒤 transition을 0으로 초기화하고, translateY도 0으로
        돌려서 위치를 처음으로 리셋합니다. 물론 currentIndex도 다시 0으로
        설정해야 다음 순환이 자연스럽게 이어집니다.
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let currentIndex = 0;   //현재 이미지 설정
    const sliderWrap = document.querySelector(".sliderWrap");   //전체 이미지
    const slider = document.querySelectorAll(".slider");    //각각의 이미지
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);   //첫번째 이미지를 저장 
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {     //3초에 한번씩 실행
        currentIndex++;     //현재 이미지 1씩 증가
        sliderWrap.style.transition = "all 0.6s";   //애니메이션 추가
        sliderWrap.style.marginTop = -currentIndex * 300 + "px";    //이미지 이동

        if(currentIndex == slider.length){  //마지막 이미지
            setTimeout(() => {
                sliderWrap.style.transition = "0s";     //애니메이션 정지
                sliderWrap.style.marginTop = "0";       //이미지 위치 초기화
                currentIndex = 0;   //현재 이미지 초기화
            }, 700);
        }
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
        <li>&lt;img&gt; : 실제 이미지 콘텐츠</li>
        <li>&lt;span&gt; : 이미지 위 텍스트를 보여주는 요소</li>
      </ul>
      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>overflow: hidden : 슬라이드 영역을 벗어나는 콘텐츠를 숨김</li>
        <li>
          margin-top / transform: translateY : 슬라이드를 위로 이동시키는 핵심
          속성
        </li>
        <li>transition : 애니메이션이 부드럽게 작동하도록 설정</li>
        <li>vertical-align: top : 이미지 하단 여백 제거</li>
      </ul>
      <h5>✅ 제이쿼리 핵심 메서드</h5>
      <ul>
        <li>.append() : 요소를 마지막에 추가</li>
        <li>.clone() : 기존 요소를 복제</li>
        <li>.animate() : 요소에 애니메이션 효과 적용</li>
        <li>setInterval() : 주기적인 실행 처리</li>
      </ul>
      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>querySelectorAll() : 여러 요소 선택</li>
        <li>cloneNode(true) : 노드 전체 복제</li>
        <li>appendChild() : 복제한 요소 삽입</li>
        <li>style.marginTop / transform: translateY : 요소의 위치 이동</li>
        <li>setTimeout / setInterval : 타이밍 제어 함수</li>
        <li>
          콜백 함수 : 특정 시점에 실행되는 함수 (타이머, 이벤트 등에서 사용)
        </li>
      </ul>
      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>
          첫 번째 슬라이드를 복제해 마지막에 추가하여 자연스러운 무한 반복 구성
        </li>
        <li>슬라이드 전체를 위 방향으로 이동시키며 애니메이션 처리</li>
        <li>마지막 슬라이드 도달 시 원위치로 순간 이동해 반복 흐름 유지</li>
        <li>인덱스와 타이밍을 정확히 제어하는 것이 핵심</li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        이번 유형은 두 번째 유형을 응용한 버전이었기 때문에 복습하는 기분으로
        작업하셨을 거예요.
      </p>
      <p>
        슬라이드를 제대로 구현하는 것은 단순한 기능 이상의 의미가 있습니다.
        시험에서는 이 파트가 점수 배점이 크고, 실무에서도 가장 많이 활용되는
        구조 중 하나니까요. 그렇기 때문에 슬라이드 구현은 반드시 익혀두셔야
        합니다.
      </p>
      <p>
        처음에는 어렵고 길게 느껴질 수 있지만, 원리를 파악하고 반복해서
        구현해보면 점점 자연스럽게 손에 익게 될 거예요. 그렇게 축적된 감각은
        다른 기능 구현에도 큰 도움이 됩니다. 그리고 하나 더! 이 슬라이드를
        기반으로 버튼, 닷 네비게이션, 자동 정지 등의 기능도 확장해보세요. 진짜
        재미는 그때부터 시작됩니다! 😉
      </p>
      <p>
        지금까지 함께한 이미지 슬라이드 여정, 정말 고생 많으셨습니다. 꾸준히
        연습하고 도전하는 여러분을 진심으로 응원합니다. 다음 콘텐츠에서 또
        만나요! 😊👏
      </p>
    </>
  )
}
