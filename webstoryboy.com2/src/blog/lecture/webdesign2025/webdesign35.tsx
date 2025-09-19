import CodeBlock from '@/components/post/post-code'

export default function Webdesign35() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>오늘은 반응형 이미지 슬라이드 S-5 유형을 함께 만들어보겠습니다!</p>
      <p>
        이번 유형은 이전에 다뤘던 S-2 유형과 구조적으로 매우 비슷합니다. 하지만
        가장 큰 차이점은 바로 반응형이라는 점이에요. 반응형으로 작업하려면
        슬라이드의 가로 너비를 픽셀(px)이 아닌 퍼센트(%) 단위로 설정해야 하고,
        이미지는 background-image로 처리하는 것이 핵심 포인트입니다. 만약 S-2
        유형의 원리를 어느 정도 이해하고 계신다면, 이번 유형도 무리 없이
        따라오실 수 있을 거예요.{' '}
      </p>
      <p>그럼 지금부터 함께 도전해볼까요? 🎯 시작해봅시다! 🚀</p>

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
        우선 이미지를 좌로 이동하기 때문에 이미지는 가로로 정렬이 되어 있어야
        합니다. 이미지 슬라이드 제일 상위 영역에 overflow: hidden; 설정하여
        넘치는 부분은 보이지 않도록 했습니다. 첫 번째 이미지를 복사하여 마지막에
        넣을 것이기 때문에 가로 값을 width: 400%;로 설정해야 구조가 깨지지
        않습니다. 이 부분을 조심해야 합니다. 각각의 이미지에는 width: 100%;,
        height: 100%;을 설정하고, 백그라운드 이미지는 전체 영역에 맞게 cover로
        설정하고, 이미지를 가운데로 정렬하기 위해서 background-position:
        center;를 설정합니다. 이미지는 한번만 나올 수 있도록 no-repeat를
        설정하면 됩니다.
      </p>
      <CodeBlock
        language='css'
        code={`/* slider */
#slider {
    overflow: hidden;
}
.sliderWrap {
    width: 400%;
    height: 100%;
    display: flex;
}
.sliderWrap .slider {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
        반응형으로 만들기 위해 가장 중요한 부분은 슬라이드 이동 값을 픽셀이 아닌
        퍼센트(%)로 설정하는 것입니다. 기존 S-2 유형과 비교했을 때 이 점만
        다르고, 나머지 구조나 동작은 거의 동일해요.
      </p>
      <p>
        간단히 설명드리면, 첫 번째 슬라이드를 복제해서 맨 뒤에 추가하고,
        currentIndex 값을 1씩 증가시키며 슬라이드를 왼쪽으로 100%씩 이동시키도록
        설정합니다. 이때 marginLeft 속성에 -100%, -200%와 같이 퍼센트 단위로
        값을 적용하는 방식이에요.
      </p>
      <p>
        그리고 슬라이드가 마지막에 도달하면, 애니메이션을 잠시 멈춘 뒤 위치를
        원래대로 되돌리고 currentIndex를 0으로 초기화해, 다시 처음부터
        자연스럽게 반복되도록 구성합니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function(){
        let currentIndex = 0; //현재 이미지
        $(".sliderWrap").append($(".slider").first().clone(true)); //첫번째 이미지를 복사해서 마지막에 추가

        setInterval(() => {
            currentIndex++;     //혅재 이미지를 1씩 추가
            $(".sliderWrap").animate({marginLeft: -100 * currentIndex + "%"}, 600);   //이미지 애니메이션

            if(currentIndex == 3){  //마지막 이미지
                setTimeout(() => {
                    $(".sliderWrap").animate({marginLeft: 0}, 0);   //애니메이션 정지
                    currentIndex = 0;   //현재 이미지 초기화
                }, 700);
            }
        }, 3000);
    });
</script>`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        자바스크립트로 구현하는 방식도 S-2 유형과 거의 동일합니다. 다만,
        반응형으로 만들기 위해 이동 값을 퍼센트(%)로 설정해주는 것이 가장 큰
        차이점이에요.
      </p>
      <p>
        우선 전체 슬라이드 영역인 sliderWrap과 각각의 슬라이드인 slider들을
        변수에 담아줍니다. 여러 개의 슬라이드를 선택해야 하므로
        querySelectorAll을 사용했고, 첫 번째 슬라이드를 복제해서 마지막에 추가해
        자연스럽게 반복되도록 구성했습니다.
      </p>
      <p>
        슬라이드를 부드럽게 이동시키기 위해 transition 속성을 사용하고,
        marginLeft 값을 퍼센트 단위로 조정해 슬라이드가 왼쪽으로 이동하게
        설정했습니다. 그리고 마지막 슬라이드에 도달했을 때는 애니메이션을 잠시
        멈춘 뒤 위치를 처음으로 초기화해, 끊김 없는 무한 슬라이드가 되도록
        처리했습니다.
      </p>

      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let currentIndex = 0;   //현재 이미지
    const sliderWrap = document.querySelector(".sliderWrap");   //전체 이미지 설정
    const slider = document.querySelectorAll(".slider");    //각각의 이미지
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);   //첫번째 이미지를 저장
    sliderWrap.appendChild(sliderClone);    //이미지 마지막 영역에 추가

    setInterval(() => {     //3초에 한번씩 실행
        currentIndex++;     //현재 이미지를 1씩 추가
        sliderWrap.style.transition = "all 0.6s";   //애니메이션 효과 추가
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%"; //왼쪽으로 100%씩 이동

        if(currentIndex == slider.length){
            setTimeout(() => {
                sliderWrap.style.transition = "0s";     //애니메이션 효과 정지
                sliderWrap.style.marginLeft = "0";    //이미지 위치를 초기화
                currentIndex = 0;   //현재 이미지를 초기화
            }, 700);
        }
    }, 3000);
};`}
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
        <li>margin-left(% 단위) : 반응형 슬라이드 이동의 핵심 계산 방식</li>
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
        <li>style.marginLeft / transition : 반응형 이동 및 애니메이션 처리</li>
        <li>setTimeout / setInterval : 주기적인 실행과 타이밍 제어</li>
      </ul>

      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>background 속성을 사용해 이미지 비율 유지와 반응형 대응</li>
        <li>슬라이드 요소를 수평으로 정렬하고, margin-left로 이동</li>
        <li>첫 슬라이드를 복제해 무한 반복 구성</li>
        <li>스크립트는 단순하지만, CSS 비율과 구조가 핵심</li>
      </ul>

      <h4>5. 마무리</h4>
      <p>
        여기까지 반응형 이미지 슬라이드 S-5 유형을 완성해봤습니다! 이번 유형은
        기존 S-2 유형의 구조를 바탕으로, 반응형 대응을 위해 백그라운드 이미지와
        퍼센트 단위의 가로 설정이 추가된 형태입니다.
      </p>
      <p>
        오늘도 끝까지 따라와 주셔서 감사합니다. 반응형 슬라이드까지 마스터하신
        여러분, 정말 멋지십니다! 😄 다음 강의에서도 실무와 시험에 모두 도움이 될
        수 있는 주제로 찾아올게요. 수고 많으셨습니다! 💪
      </p>
    </>
  )
}
