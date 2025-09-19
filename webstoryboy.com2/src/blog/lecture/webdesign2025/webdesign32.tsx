import CodeBlock from '@/components/post/post-code'

export default function Webdesign32() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이제는 좌우로 움직이는 무한 이미지 슬라이드에 도전하겠습니다! 🎉 이번
        방식은 한 번만 재생되고 멈추는 슬라이드가 아니라, 끊김 없이 자연스럽게
        이어지는 슬라이드를 만들어볼 거예요.{' '}
      </p>
      <p>
        실무 웹사이트에서도 많이 쓰이는 구조라서, 익혀두면 정말 든든합니다!
        단순히 1-2-3 → 다시 1로 돌아가는 방식이 아니라, 1-2-3-1-2-3... 식으로
        계속 흐르듯 반복되는 슬라이드죠! ✨ 처음엔 조금 복잡해 보일 수 있지만,
        흐름을 이해하면 생각보다 간단해요. 그럼 지금부터 가볍고 활기차게!
        신나게! 슬라이드 제작, 바로 시작해보겠습니다 💪😄 렛츠 고!
      </p>
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
        <span className='uline'>
          슬라이드를 구현할 때 가장 먼저 체크해야 할 건 이미지의 정렬
          상태입니다.
        </span>
      </p>
      <p>
        이미지는 반드시 가로 방향으로 나란히 정렬되어 있어야 합니다. 이 부분이
        제대로 되어 있지 않으면, 이후 스크립트에서 슬라이드가 비정상적으로
        작동하거나 꼬이기 쉬워요. 시험 시간은 촉박한데, HTML/CSS에서 문제가
        생기면 자바스크립트 디버깅에 시간만 빼앗기고 결국 마무리를 못할 수
        있습니다. 그래서 꼭 기억하세요!
      </p>
      <p>
        스크립트를 작성하기 전에 HTML과 CSS가 정확하게 구성되었는지 한 번 더
        확인하고 넘어가야 합니다. 특히 슬라이드 구조나 폭, 위치가 어긋나면
        스크립트는 제대로 작동하지 않아요. 두 번째 슬라이더 작업은 특별히 복잡한
        건 없습니다. 이미지들을 감싸는 래퍼 요소를 display: flex로 설정하거나,
        float 혹은 inline-block 방식으로 가로 정렬을 만들어주면 됩니다. 또 하나!
        이미지 하단에 생기는 미세한 공백 문제를 없애기 위해 vertical-align:
        top;을 꼭 넣어주세요. 이건 이미지 정렬 문제를 깔끔하게 해결해주는 작은
        팁입니다. 작은 것부터 확실하게! 그게 슬라이드 구현의 첫걸음입니다 😊
      </p>
      <CodeBlock
        language='css'
        code={`/* slider */
#slider {
    overflow: hidden;
}
.sliderWrap {
    display: flex;
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
        스크립트는 약 20줄 정도예요. 이 정도는 충분히 외울 수 있겠죠? 물론 더
        짧게 5줄 안팎으로도 만들 수는 있어요. 하지만 그렇게 하면 전체 흐름을
        이해하기 어려워지고, 결국 응용도 힘들어집니다. 중요한 건 ‘외우는 것’이
        아니라 ‘이해하는 것’이에요. 코드를 한 줄씩 따라 써보면서 구조를 익히면
        자연스럽게 외워지기도 하거든요. 😊
      </p>
      <p>
        그럼 이제 원리를 하나씩 살펴볼까요? 기본적으로 슬라이드 이미지는 3장이
        있고, 첫 번째 이미지를 하나 복사해서 맨 뒤에 추가해줄 거예요. 이렇게
        하면 총 4장의 이미지가 되죠. 이게 바로 무한 슬라이드를 자연스럽게 만드는
        핵심 포인트입니다!
      </p>
      <p>
        그리고 이 4장의 이미지를 감싸고 있는 요소, 즉 <code>$sliderWrap</code>을
        왼쪽으로 이동시키면 슬라이드가 동작하게 됩니다. 이때 이미지 한 장의 가로
        너비도 필요하기 때문에, 이 값을 변수에 저장해두고 계산에 활용할 거예요.
      </p>
      <p>
        이미지 복사 작업은 <code>append()</code>와 <code>clone()</code> 메서드를
        이용하면 아주 간단하게 할 수 있어요. 실제로 코드를 보면 금방 감이 오실
        겁니다.
      </p>
      <p>
        자, 이제 자동으로 슬라이드가 넘어가도록 <code>setInterval()</code>을
        설정해볼 차례입니다. <code>currentIndex</code>라는 변수를 하나 만들고,
        이 값을 1씩 증가시키면서 슬라이드가 이동하도록 만드는 거예요.
      </p>
      <p>
        슬라이드를 움직일 땐 <code>animate()</code> 메서드를 사용합니다.
        <code>marginLeft</code>를 이용해서 이미지 한 장의 너비만큼 왼쪽으로
        이동시키면, 마치 슬라이드가 밀려가는 것처럼 보이게 되죠.
      </p>
      <p>
        그런데 이미지가 마지막까지 갔을 때는 어떻게 해야 할까요? 바로,
        순간적으로 처음 위치로 되돌려줘야 해요. 이때{' '}
        <strong>애니메이션 없이</strong> 위치를 초기화해야 자연스럽게 보입니다.
        그래서 마지막 이미지일 경우엔 <code>animate()</code> 대신 즉시
        <code>marginLeft</code>를 0으로 되돌리고, <code>currentIndex</code>도
        0으로 초기화하는 방식으로 처리해줍니다.
      </p>
      <p>
        이렇게 하면 마치 끝없이 이어지는 듯한 무한 슬라이드가 완성되는 거예요.
        흐름만 이해하면 정말 신기하죠? 처음엔 조금 복잡하게 느껴질 수 있지만,
        막상 손으로 구현해보면 “오! 이거 되네?” 하고 금방 익숙해질 거예요. 😄
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function(){
        let currentIndex = 0;   //현재 이미지
        $(".sliderWrap").append($(".slider").first().clone(true));  //첫번째 이미지를 복사, 마지막에 추가

        setInterval(function(){     //3초에 한번씩 실행
            currentIndex++;     //현재 이미지를 1씩 증가
            $(".sliderWrap").animate({marginLeft: -currentIndex * 100 + "%"}, 600); //이미지 애니메이션

            if(currentIndex == 3){  //마지막 이미지일때
                setTimeout(function(){  
                    $(".sliderWrap").animate({marginLeft: 0}, 0);   //애니메이션을 정지
                    currentIndex = 0;   //현재이미지 초기화
                }, 700);
            }
        }, 3000);
    });
</script>`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        이번에는 자바스크립트로 무한 슬라이드를 구현해보겠습니다!
        DOMContentLoaded를 써도 되지만, 좀 길고 복잡하게 느껴진다면 간단하게
        window.onload로 시작해도 전혀 문제 없습니다. 이제 원리를 먼저
        정리해볼게요.
      </p>
      <p>
        우선, 기본 슬라이드 이미지는 총 3장이 있다고 가정합니다. 여기서 중요한
        핵심 포인트! 첫 번째 이미지를 복사해서 마지막에 추가해줘야 자연스럽게
        이어지는 무한 슬라이드를 만들 수 있다는 거예요. 그렇게 되면 총 4장이
        되겠죠? 이 작업은 자바스크립트의 cloneNode(true)와 appendChild()
        메서드를 이용해서 아주 간단히 처리할 수 있습니다.
      </p>
      <p>
        그 다음은 실제 이미지를 감싸고 있는 부모 요소, 즉 .sliderWrap을 좌우로
        움직여줘야 합니다. 이때 이미지 하나의 너비를 알아야 하니까 offsetWidth로
        가져오면 됩니다. 그리고 움직임은 margin-left를 이용해도 되지만, 이번에는
        transform: translateX 방식을 사용해서 좀 더 깔끔하게 구현할 거예요.
        슬라이드는 일정한 시간 간격으로 자동 실행되니까 setInterval()을
        사용하고, 매번 슬라이드를 왼쪽으로 하나씩 이동시키게 됩니다. 이때 매번
        currentIndex를 하나씩 증가시키면서, 현재 슬라이드가 어디인지 관리해주는
        거죠.
      </p>
      <p>
        그리고 중요한 부분! 마지막 이미지까지 슬라이드가 이동한 후에는
        자연스럽게 처음으로 돌아가야 합니다. 이때는 transition 속성을 0으로
        설정해 애니메이션 없이 순간적으로 슬라이드 위치를 초기화하고,
        currentIndex도 다시 0으로 리셋하면 됩니다. 그럼 사용자는 전혀 끊기는
        느낌 없이 슬라이드가 반복된다고 느끼게 돼요! 😄
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function(){
    let currentIndex = 0;       //현재 이미지
    const sliderWrap = document.querySelector(".sliderWrap"); //전체 이미지
    const slider = document.querySelectorAll(".slider");    //각각의 이미지 
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);   //첫번째 이미지 저장 
    sliderWrap.appendChild(sliderClone);    //복사한 이미지를 마지막에 추가

    setInterval(() => { 
        currentIndex++;     //현재 이미지를 1씩 증가
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";    //이미지 이동
        sliderWrap.style.transition = "all 0.6s";   //이미지 애니메이션 설정

        if(currentIndex == 3){  //마지막 이미지
            setTimeout(() => {
                sliderWrap.style.transition = "0s"; //애니메이션 정지
                sliderWrap.style.marginLeft = "0";  //이미지 위치 초기화
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
        <li>display: flex : 이미지들을 가로 정렬로 배치</li>
        <li>overflow: hidden : 슬라이드 영역을 벗어나는 요소를 가림</li>
        <li>
          margin-left / transform: translateX : 슬라이드를 이동시키는 핵심 속성
        </li>
        <li>transition : 부드러운 애니메이션 효과를 위한 설정</li>
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
        <li>style.marginLeft / transform : 요소 이동</li>
        <li>setTimeout / setInterval : 타이밍 제어 함수</li>
        <li>
          콜백 함수 : 특정 시점에 실행되는 함수 (타이머, 이벤트 등에서 사용)
        </li>
      </ul>
      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>복제된 첫 번째 슬라이드를 마지막에 붙여 자연스러운 반복 구성</li>
        <li>슬라이드 전체를 왼쪽으로 이동시키며 애니메이션 처리</li>
        <li>
          마지막 슬라이드 이후에는 순간적으로 원위치로 이동해 무한 반복 구현
        </li>
        <li>슬라이드 이동 간 타이밍과 인덱스를 정확히 관리하는 것이 핵심</li>
      </ul>
      <h4>5. 마무리</h4>
      <p>
        무한으로 이어지는 좌우 슬라이드를 멋지게 완성해보셨습니다! 👏 이번
        유형은 실무에서도 자주 활용되는 방식이라 연습해둘수록 큰 도움이 될
        거예요.
      </p>
      <p>
        제이쿼리든 자바스크립트든, 핵심은 구조를 파악하고 흐름을 이해하는
        것입니다. 처음에는 길고 복잡해 보일 수 있지만, 실제로 손으로 따라 치고
        눈으로 움직임을 확인하다 보면 어느새 원리를 자연스럽게 익히게 됩니다.
      </p>
      <p>
        처음부터 술술 잘 되는 건 아니에요. 시행착오를 겪으며 조금씩 쌓아가는 게
        실력이랍니다. 너무 조급해하지 마시고, 오늘 만든 슬라이드에 다양한 효과를
        응용해보는 것도 좋은 연습이 될 거예요!
      </p>
      <p>
        다음 시간에는 또 다른 방식의 슬라이드, 위아래로 움직이는 구조를 함께
        만들어보며 한층 더 업그레이드된 실력을 다져보겠습니다. 오늘도 정말 수고
        많으셨습니다! 끝까지 도전하는 여러분을 언제나 응원합니다 😊🔥
      </p>
    </>
  )
}
