import CodeBlock from '@/components/post/post-code'

export default function Webdesign36() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이제 이미지 슬라이드의 마지막 유형에 도전해보려 합니다. 드디어 끝이
        보이기 시작하네요. 여기까지 함께 따라오신 여러분, 정말 대단하십니다! 👏
        혹시 잘 따라오고 계시다면 댓글로 응원도 남겨주세요!
      </p>
      <p>
        이번 마지막 유형은 난이도가 조금 있습니다. 아마 웹디자인기능사 실기에서
        가장 까다로운 유형 중 하나일 거예요. 위아래로 슬라이드를 움직이려면
        정확한 높이값이 필요한데, height를 퍼센트(%)로 설정하는 건 생각보다
        어렵습니다. 왜냐하면, 브라우저는 기본적으로 스크롤을 기준으로 콘텐츠를
        확장하기 때문에, height: 100%만으로는 원하는 높이를 제대로 적용하기가
        힘들기 때문이에요. 물론 상위 요소의 높이가 정확히 설정되어 있다면
        괜찮지만, 일반적으로는 그렇지 않죠.
      </p>
      <p>
        그래서 이번에는 vh 단위를 활용해서 작업해볼 거예요. vh는 View Height, 즉
        사용자가 보고 있는 화면의 높이를 기준으로 100등분한 단위입니다. 예를
        들어 100vh는 브라우저 전체 높이와 동일하죠. 이걸 활용하면 슬라이드
        높이를 안정적으로 설정할 수 있습니다.
      </p>
      <p>
        그럼 이제 본격적으로 시작해볼까요? 🧐 화면을 꽉 채우는 세로 슬라이드,
        같이 만들어보겠습니다!
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
        우선 푸터 부분의 높이가 120px이기 때문에 전체 높이에서 빼주었습니다.
        전체 높이 100% 값이 적용되니 않기 때문에 100vh를 사용합니다. vh 단위는
        여러분이 보고 있는 화면을 기준으로 100등분 하여 보여준다고 생각하면
        됩니다. 이렇게 화면 화면 크기가 다양해도 100vh를 설정하면 높이 값이
        꽉차게 됩니다. 다 똑같이 보이는 효과가 생깁니다. 디바이스 별로 높이가
        달라도 꽉차게 보여주는 건 똑같습니다. sliderWrap에 높이 값을 400vh
        설정했습니다. 스크립트로 복사하여 추가한 것까지 계산에 넣었습니다.
        그리고 각 이미지는 100vh로 설정했습니다. 모든 이미지는 각각 백그라운드
        설정을 하고 화면 크기에 따라 잘 보이게 하기 위해서 cover, center,
        no-repeat 속성을 넣어주었습니다.
      </p>
      <CodeBlock
        language='css'
        code={`/* slider */
#slider {
    overflow: hidden;
    height: calc(100vh - 120px);
}
.sliderWrap {
    width: 100%;
    height: 300vh;
}
.sliderWrap .slider {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
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
.sliderWrap .slider img {
    vertical-align: top;
}
.sliderWrap .slider span {
    position: absolute;
    left: 50%;
    top: calc(50% - 60px);
    transform: translate(-50%, -50%);
    background-color: rgba(255,255,255,0.3);
    padding: 10px 20px;
}`}
      />
      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        스크립트는 기존 유형과 거의 유사합니다. 그래도 다시 한번
        복습해보겠습니다. 현재 이미지를 0으로 설정하고, 전체 이미지, 각각의
        의미지를 변수로 설정했습니다. 첫번째 이미지를 복사해서 마지막에
        넣어주고, setInterval()를 이용해서 3초에 한번씩 실행하도록
        설정하였습니다. 현재 이미지는 1씩 증가하도록 ++를 설정하고, 전체
        이미지한테 위쪽으로 움직이도록 animate를 설정했습니다. 마지막 이미지가
        왔을 때에는 애니메이션을 순간 정지시키고, 현재 이미지도 초기화 했습니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function() {
        let currentIndex = 0;   //현재 이미지 설정
        $(".sliderWrap").append($(".slider").first().clone(true));  //첫 번째 이미지를 복사해서 마지막에 추가

        setInterval(() => {
            currentIndex++;     //현재 이미지를 1씩 증가
            $(".sliderWrap").animate({marginTop: -100 * currentIndex + "vh"}, 600);

            if(currentIndex == 3){
                setTimeout(() => {
                    $(".sliderWrap").animate({marginTop: 0}, 0);    //애니메이션 정지
                    currentIndex = 0;       //현재 이미지 초기화
                }, 700)
            }
        }, 3000);
    });
</script>`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        자바스크립트 역쉬 기존과 동일합니다. 그래도 한번 살펴보겠습니다. 전체
        이미지, 현재 이미지를 설정하고, 첫 번째 이미지를 복사하고 마지막에
        추가하였습니다. setInterval을 설정하고, 애니메이션 설정을 위해
        transition을 추가했습니다. 그리고 이미지가 마지막일 때 모든 값을 0으로
        초기화 했습니다.
      </p>

      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let currentIndex = 0;   // 현재 이미지 인덱스 초기값
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);  // 복제한 이미지 맨 뒤에 추가 (무한 슬라이드용)

    setInterval(() => { // 3초마다 반복 실행
        currentIndex++;
        sliderWrap.style.transition = "all 0.6s";
        //    sliderWrap.style.transform = "translateY(-100%)"; 
        sliderWrap.style.transform = "translateY(-" + (currentIndex * 100) + "vh)";

        if(currentIndex == slider.length){  // 마지막 이미지에 도달하면
            setTimeout(() => {
                sliderWrap.style.transition = "0s"; // 애니메이션 제거 (순간 이동)
                sliderWrap.style.transform = "translateY(0)"; // 맨 처음 위치로 이동
                currentIndex = 0; // 인덱스 초기화
            }, 700)
        }
    }, 3000)
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
        <li>&lt;img&gt; : 실제 이미지 콘텐츠 (S-5에서는 사용하지 않음)</li>
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
        <li>translateY(vh 단위) : 세로 방향 반응형 슬라이드 이동의 핵심</li>
      </ul>

      <h5>✅ CSS 단위 개념</h5>
      <ul>
        <li>
          px (픽셀): 화면에서의 고정된 단위로, 정확한 크기를 지정할 때
          사용합니다.
        </li>
        <li>
          % (퍼센트): 부모 요소에 대한 상대적인 크기를 지정할 때 사용합니다.
        </li>
        <li>
          vh (viewport height): 브라우저 화면 높이를 기준으로 100등분한 단위.
          100vh는 전체 화면 높이와 같음.
        </li>
        <li>
          vw (viewport width): 브라우저 화면 너비를 기준으로 100등분한 단위.
          100vw는 전체 화면 너비와 같음.
        </li>
      </ul>

      <h5>✅ 제이쿼리 핵심 메서드</h5>
      <ul>
        <li>.append() / .clone() : 요소 복사 및 추가로 무한 슬라이드 구성</li>
        <li>.animate() : 부드러운 이동 효과 설정</li>
        <li>setInterval() : 일정 시간 간격으로 자동 실행 설정</li>
      </ul>

      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>
          querySelectorAll() / cloneNode(true) / appendChild() : DOM 요소 선택
          및 복사
        </li>
        <li>style.transform / transition : 반응형 이동 및 애니메이션 처리</li>
        <li>setTimeout / setInterval : 주기적인 실행과 타이밍 제어</li>
      </ul>

      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>background 속성을 사용해 이미지 비율 유지와 반응형 대응</li>
        <li>슬라이드 요소를 수직으로 정렬하고, translateY로 이동</li>
        <li>첫 슬라이드를 복제해 무한 반복 구성</li>
        <li>스크립트는 단순하지만, CSS의 높이 계산과 vh 단위가 핵심</li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        반응형 이미지 슬라이드의 마지막 유형, S-6까지 성공적으로 마무리했습니다!
        🎉 이번 유형은 기존의 구조를 잘 응용하면서도, 세로 방향 슬라이드와 vh
        단위를 결합해 반응형 웹에서 자주 쓰이는 효과를 익히는 데 큰 도움이
        됩니다.
      </p>
      <p>
        특히 픽셀(px), 퍼센트(%), 뷰포트 단위(vh, vw)의 차이를 정확히 이해하고,
        상황에 맞게 사용하는 능력은 실무에서도 매우 중요합니다. 이번 기회에 꼭
        정리해두세요.
      </p>
      <p>
        다음 강의에서도 실전에서 바로 써먹을 수 있는 실습으로 다시 찾아올게요.
        언제나 여러분의 성장을 응원합니다! 💙
      </p>
    </>
  )
}
