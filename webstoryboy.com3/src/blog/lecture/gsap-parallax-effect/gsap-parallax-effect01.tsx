import CodeBlock from '@/components/post/post-code'
import React from 'react'

export default function GsapParallaxEffect01() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요, 웹스토리보이입니다 😊</p>
      <p>
        오늘은 여러분의 포트폴리오 실력을 한 단계 업그레이드할 수 있는 방법, 바로 패럴랙스 효과에
        대해 이야기해보려 합니다. 요즘 웹사이트들을 보면, 스크롤을 내릴 때 단순히 화면이 이동하는 게
        아니라 텍스트나 이미지가 부드럽게 움직이고, 배경이 따로 흘러가거나 요소가 자연스럽게
        나타나는 경우가 많죠. 이런 걸 우리는 바로 패럴랙스 효과(Parallax Effect)라고 부릅니다.
        이제는 단순한 정보 나열을 넘어서 시각적인 몰입감과 인터랙티브한 사용자 경험이 중요한
        시대이기 때문에, 이런 패럴랙스 효과는 포트폴리오를 차별화하는 데 정말 큰 역할을 합니다.
      </p>
      <p>
        패럴랙스, 어떻게 배워야 할까요? 패럴랙스를 구현하는 방법은 크게 두 가지로 나눌 수 있어요.
      </p>
      <ul>
        <li>
          <span className='uline'>자바스크립트 기본 기능을 활용하는 방법</span> 먼저 자바스크립트를
          통해 스크롤 값을 감지하고, 요소의 위치나 속성을 직접 제어하는 방식으로 패럴랙스의 기본
          개념과 흐름을 익힐 수 있습니다.
        </li>
        <li>
          <span className='uline'>GSAP(GreenSock Animation Platform)를 활용한 고급 구현</span> 좀 더
          정교하고 부드러운 애니메이션을 원한다면 GSAP의 ScrollTrigger 플러그인을 사용하는 게
          좋아요. 특정 요소가 화면에 나타날 때 원하는 애니메이션을 정밀하게 제어할 수 있어, 퀄리티
          높은 연출이 가능합니다.
        </li>
      </ul>
      <p>
        이번 시리즈에서는 기초적인 자바스크립트로 패럴랙스를 이해하는 법부터, GSAP로 실전
        웹사이트에서 활용할 수 있는 고급 효과까지 단계적으로 배워볼 거예요. 스크롤만으로도
        사용자에게 강렬한 인상을 줄 수 있는 이 기술, 함께 하나씩 연습해보면서 여러분만의 멋진
        포트폴리오에 적용해보세요! 그럼 지금부터 시작해볼까요? 🚀
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p>
        GSAP를 배우는 시간이기 때문에 HTML/CSS 코딩은 생략하겠습니다. 기본 코딩은 복사해서
        사용하겠습니다. 우선 웹폰트를 설정하고 GSAP에서 필요한 파일을 미리 셋팅해 놓겠습니다. GSAP는
        자주 업데이트가 되기 때문에 제일 최선 버전을 사용하는게 좋습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP Scroll Effect</title>

    <!-- 웹폰트 설정 -->
    <link href="https://webfontworld.github.io/NexonLv1Gothic/NexonLv1Gothic.css" rel="stylesheet">
</head>
<body>

    <!-- GSAP 라이브러리 설정 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollToPlugin.min.js"></script>
</body>
</html>`}
      />
      <p>그대로 복사해서 사용해도 무방합니다.</p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP Scroll Effect</title>

    <link href="https://webfontworld.github.io/NexonLv1Gothic/NexonLv1Gothic.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        body {
            color: #fff;
            font-family: "NexonLv1Gothic";
            font-weight: 300;
            background-color: #111;
        }
        #parallax__title {
            position: fixed;
            left: 20px;
            top: 20px;
            z-index: 1000;
        }
        #parallax__title h1 {
            font-size: 30px;
            border-bottom: 1px dashed #fff;
            margin-bottom: 10px;
            padding-bottom: 5px;
            font-weight: 400;
            display: inline-block;
        }
        #parallax__title p {
            font-size: 16px;
        }
        #parallax__title ul {
            margin-top: 10px;
        }
        #parallax__title li {
            display: inline;
        }
        #parallax__title li a {
            width: 20px; 
            height: 20px;
            border-radius: 50%;
            border: 1px dashed #fff;
            display: inline-block;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
        }
        #parallax__title li.active a {
            background: #fff;
            color: #000;
        }

        /* parallax__cont */
        #parallax__cont {
            overflow: hidden;
        }
        .parallax__item {
            width: 100%;
            height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .parallax__item:nth-child(2n){
            background-color: #222;
        }
        .parallax__item__num {
            position: absolute;
            right: 20px;
            bottom: 20px;
            font-size: 5vw;
            line-height: 1;
        }
        .parallax__item__img {
            width: 10vw;
            height: 10vw;
            background-color: #fff;
            background-size: cover;
            background-position: center;
        }
        .parallax__item:nth-child(1) .parallax__item__img {
            background-image: url(assets/img/images14.jpg);
        }
        .parallax__item:nth-child(2) .parallax__item__img {
            background-image: url(assets/img/images15.jpg);
        }
        .parallax__item:nth-child(3) .parallax__item__img {
            background-image: url(assets/img/images03.jpg);
        }
        .parallax__item:nth-child(4) .parallax__item__img {
            background-image: url(assets/img/images04.jpg);
        }
        .parallax__item:nth-child(5) .parallax__item__img {
            background-image: url(assets/img/images05.jpg);
        }
        .parallax__item:nth-child(6) .parallax__item__img {
            background-image: url(assets/img/images06.jpg);
        }
        .parallax__item:nth-child(7) .parallax__item__img {
            background-image: url(assets/img/images07.jpg);
        }
        .parallax__item:nth-child(8) .parallax__item__img {
            background-image: url(assets/img/images08.jpg);
        }
        .parallax__item:nth-child(9) .parallax__item__img {
            background-image: url(assets/img/images09.jpg);
        }
        .parallax__item__img.active {
            filter: hue-rotate(100deg);
        }
    </style>
</head>
<body>
    <header id="parallax__title">
        <h1>GSAP Parallax Effect01</h1>
        <p>GSAP scrollTrigger - 애니메이션 기본 효과</p>
        <ul>
            <li class="active"><a href="gsap01.html">1</a></li>
            <li><a href="gsap02.html">2</a></li>
            <li><a href="gsap03.html">3</a></li>
            <li><a href="gsap04.html">4</a></li>
            <li><a href="gsap05.html">5</a></li>
            <li><a href="gsap06.html">6</a></li>
            <li><a href="gsap07.html">7</a></li>
            <li><a href="gsap08.html">8</a></li>
            <li><a href="gsap09.html">9</a></li>
            <li><a href="gsap10.html">10</a></li>
            <li><a href="gsap11.html">11</a></li>
            <li><a href="gsap12.html">12</a></li>
            <li><a href="gsap13.html">13</a></li>
            <li><a href="gsap14.html">14</a></li>
            <li><a href="gsap15.html">15</a></li>
        </ul>
    </header>
    <!-- //parallax__title  -->

    <main id="parallax__cont">
        <section id="section1" class="parallax__item">
            <span class="parallax__item__num">01</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section1 -->

        <section id="section2" class="parallax__item">
            <span class="parallax__item__num">02</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section2 -->

        <section id="section3" class="parallax__item">
            <span class="parallax__item__num">03</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section3 -->

        <section id="section4" class="parallax__item">
            <span class="parallax__item__num">04</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section4 -->

        <section id="section5" class="parallax__item">
            <span class="parallax__item__num">05</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section5 -->

        <section id="section6" class="parallax__item">
            <span class="parallax__item__num">06</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section6 -->

        <section id="section7" class="parallax__item">
            <span class="parallax__item__num">07</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section7 -->

        <section id="section8" class="parallax__item">
            <span class="parallax__item__num">08</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section8 -->

        <section id="section9" class="parallax__item">
            <span class="parallax__item__num">09</span>
            <div class="parallax__item__img"></div>
        </section>
        <!-- //section9 -->
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollToPlugin.min.js"></script>
</body>
</html>`}
      />

      <h4>2. 스크립트 작업하기</h4>
      <p>스크립트 태그를 설정하고 다음과 같이 작성합니다. 우선 선택자를 미리 만들어 놓겠습니다.</p>

      <CodeBlock
        language='js'
        code={`const box1 = document.querySelector("#section1 .parallax__item__img");
const box2 = document.querySelector("#section2 .parallax__item__img");
const box3 = document.querySelector("#section3 .parallax__item__img");
const box4 = document.querySelector("#section4 .parallax__item__img");
const box5 = document.querySelector("#section5 .parallax__item__img");
const box6 = document.querySelector("#section6 .parallax__item__img");
const box7 = document.querySelector("#section7 .parallax__item__img");
const box8 = document.querySelector("#section8 .parallax__item__img");
const box9 = document.querySelector("#section9 .parallax__item__img");`}
      />

      <p>
        box1 요소를 2초동안 오른쪽으로 500px로 움직이겠습니다. 이렇게만 하면 심심하기 때문에
        border-radius를 주고 회전시키겠습니다. gsap의.to 메서드를 사용하면 선택한 요소는 움직입니다.
        gsap의 가장 기본 애니메이션입니다.
      </p>
      <CodeBlock
        language='js'
        code={`// 01
gsap.to(box1, {
    duration: 2,
    x: 500,
    borderRadius: 100,
    rotation: 360, 
});`}
      />

      <p>
        이번에는 스크롤을 내리고 요소가 보이는 영역에 오면 움직이도록 설정하겠습니다. 애니메이션
        속성은 똑같이 작업을 하고 scrollTrigger를 설정합니다. trigger를 설정하면 스크롤을 내릴때
        움직이기 시작합니다. 스크롤 이벤트를 작동시키기고 싶다면 scrollTrigger 속성을 설정하고,
        움직이는 시점을 적용하기 위해서 trigger를 설정하는 것입니다. 간단하죠? 내가 움직이는 시점
        타겟을 설정하면 움직입니다.
      </p>
      <CodeBlock
        language='js'
        code={`// 02 : trigger
gsap.to(box2, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    scrollTrigger: {
        trigger: box2,  //시작점 설정
    }
});`}
      />

      <p>
        이번에는 toggleActions을 설정하겠습니다. 애니메이션의 행동을 설정하는 것입니다. 애니메이션이
        시작했을 때, 애니메이션이 끝났을 때, 애니메이션이 시작하고 화면에 보이지 않을 때,
        애니메이션이 끝나고 화면에 보이지 않을 때 4가지로 설정할 수 있습니다. onEnter, onLeave,
        onEnterBack, onLeaveBack를 의미하며, 여기에는 play, pause, resume, reset, restart, complete,
        reverse, none 요소 값을 설정할 수 있습니다. 하나씩 대입하면서 눈으로 직접확인하는 것이 가장
        정확합니다.
      </p>
      <CodeBlock
        language='js'
        code={`// 03 : toggleActions
gsap.to(box3, {
    duration: 1,
    x: 500,
    rotation: 360,
    borderRadius: 100,

    scrollTrigger: {
        trigger: box3,
        toggleActions: "play pause reverse none" 
    }
});`}
      />

      <p>
        이번에는 애니메이션이 언제 시작하는지, 끝나는지를 설정하겠습니다. trigger는 애니메이션의
        기준점 역할을 하고, start는 시작점을 의미합니다. start와 end는 두가지 요소 값을 설정합니다.
        첫 번째 요소는 요소의 시작점을 의미하고, 두 번째 요소는 브라우저의 시작점을 의미합니다.
        요소의 시작점과 브라우저의 시작점이 만나면 애니메이션이 작동되는 원리입니다. 여기에는 top,
        bottom, left, right, center를 사용할 수 있으면, px이나 % 사용도 가능합니다. 여기에서
        markers: true로 설정하면 마커의 위치를 확인할 수 있습니다.
      </p>
      <CodeBlock
        language='js'
        code={`// 04 : start, end
gsap.to(box4, {
    duration: 1,
    x: 500,
    rotation: 360,
    borderRadius: 100,

    scrollTrigger: {
        trigger: box4,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play pause reverse pause",
        markers: true,
    }
});`}
      />

      <p>
        이번에는 scrub 속성을 알아보겠습니다. 이 속성은 스크롤을 내리면 같이 움직이게 설정할 수
        있습니다. 눈으로 직접 확인하는 것이 가장 정확합니다. 기본 scrollTrigger를 설정하면, 시작점이
        되었을 때 한번만 움직이지만, 이 효과는 마우스 스크롤 값에 따라 움직이도록 설정됩니다. 이
        속성에는 true 및 정수 값을 넣을 수 있습니다. 미세한 차이가 있으니 직접 확인해보시면 좋을 거
        같습니다.
      </p>
      <CodeBlock
        language='js'
        code={`// 05 : scrub
gsap.to(box5, {
    duration: 1,
    x: 500,
    rotation: 360,
    borderRadius: 100,

    scrollTrigger: {
        trigger: box5,
        start: "top 50%",
        end: "bottom 20%",
        scrub: 0.5,    //true, 1, 2,....
        markers: false,
    }
});`}
      />

      <p>
        pin 속성은 고정시키는 역할을 합니다. 패럴랙스 이펙트에서 많이 쓰이는 효과입니다. 알아두면
        멋있는 사이트를 만들 수 있습니다. 고정시키는 역할은 다른 예제에서 더 자세히 다룹니다. 내가
        위치한 영역에 고정시키기 위해서는 pin: true를 설정합니다. 핀의 위치는 end의 두번째 속성값을
        변경해보면 확인할 수 있습니다.
      </p>
      <CodeBlock
        language='js'
        code={`// 06 : pin
gsap.to(box6, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,

    scrollTrigger: {
        trigger: box6,
        start: "top 50%",
        end: "top 100px",
        pin: true,
        scrub: true,    
        markers: true,
    }
});`}
      />

      <p>
        이번에는 toggleClass 속성을 설정해 보겠습니다. 시작점에 됐을 때 애니메이션도 줄 수 있지만
        class도 추가할 수 있습니다. 미리 CSS를 만들어 놓고 확인해보겠습니다. class 이름은 active로
        설정하였습니다. 여기에 id 값을 추가하면 마커의 이름을 변경할 수 있습니다.
      </p>
      <CodeBlock
        language='js'
        code={`// 07 : toggleClass
gsap.to(box7, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,

    scrollTrigger: {
        trigger: box7,
        start: "top center",
        end: "bottom top",
        scrub: true,    
        markers: true,
        toggleClass: "active",
        id: "box7"
    }
});`}
      />

      <p>
        이번에는 콜백함수에 대해서 알아보겠습니다. 콜백함수는 하나의 함수를 실행하고 그 다음 함수를
        실행하는 함수라고 생각하면 됩니다. 보통은 두개의 함수를 실행시키면 동시에 실행되지만,
        콜백함수는 하나의 함수가 실행되고, 끝나면 그 다음 함수가 실행되는 함수라고 생각하시면
        이해하기가 편합니다. scrollTrigger 역시 여러가지 콜백함수를 제공하고 있습니다. toggleActions
        처럼 onEnter, onLeave, onEnterBack, onLeaveBack 메서드를 제공하며, onUpdate이나 onToggle
        같은 메서드도 제공합니다.
      </p>
      <CodeBlock
        language='js'
        code={`// 08 : callback
gsap.to(box8, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    
    scrollTrigger: {
        trigger: box8,
        start: "top center",
        end: "bottom 30%",
        scrub: true,    
        markers: false,
        // onEnter : () => {console.log("onEnter")},
        // onLeave : () => {console.log("onLeave")},
        // onEnterBack : () => {console.log("onEnterBack")},
        // onLeaveBack : () => {console.log("onLeaveBack")},
        // onUpdate : (self) => {console.log("onUpdate", self.progress.toFixed(3))},
        onToggle : (self) => {console.log("onToggle", self.isActive)},
    }
});`}
      />

      <h4>정리</h4>
      <p>
        이번 강의에서는 GSAP의 ScrollTrigger를 활용해 다양한 스크롤 인터랙션을 구현해보았습니다.
        단순히 요소를 움직이는 애니메이션부터 시작해서, 스크롤 위치에 따라 트리거되는 애니메이션,
        클래스 추가, 고정 효과, 콜백 함수까지… 꽤 많은 내용을 다뤘죠? 한 번 더 정리하자면 아래와
        같습니다:
      </p>
      <ul>
        <li>gsap.to()를 사용하면 기본적인 애니메이션을 구현할 수 있습니다.</li>
        <li>scrollTrigger 속성을 통해 스크롤 이벤트 기반 애니메이션을 제어할 수 있습니다.</li>
        <li>toggleActions는 애니메이션의 동작을 정교하게 설정할 수 있는 옵션입니다.</li>
        <li>
          start와 end는 애니메이션의 시작/종료 지점을 설정하며, markers를 통해 시각적으로 확인
          가능합니다.
        </li>
        <li>scrub 속성으로 마우스 스크롤 값에 따라 실시간으로 반응하는 애니메이션이 가능합니다.</li>
        <li>pin 속성은 특정 영역을 스크롤에 따라 고정시킬 수 있습니다.</li>
        <li>
          toggleClass를 통해 요소에 클래스를 동적으로 추가할 수 있어 CSS 효과와의 연동이
          가능해집니다.
        </li>
        <li>onEnter, onLeave 등 다양한 콜백 함수로 세밀한 컨트롤도 가능합니다.</li>
      </ul>

      <h4>마무리</h4>
      <p>
        처음엔 낯설고 복잡하게 느껴질 수 있지만, 한 줄 한 줄 따라가다 보면 자연스럽게 감이 잡히기
        시작합니다. GSAP는 단순히 “움직이는 효과”를 넘어서 사용자 경험을 풍부하게 만드는 강력한
        도구예요. 오늘 배운 내용을 바탕으로 여러분의 웹페이지에 생동감을 더해보세요. 작은 변화
        하나가 포트폴리오의 인상을 확 바꿔줄 수 있습니다.
      </p>
      <p>
        혼자서 하다 보면 막히는 부분도 생기겠지만, 포기하지 말고 천천히, 꾸준히! 저 웹스토리보이도
        항상 여기서 응원하겠습니다 🙌 다음 강의에서 또 만나요! 🔥
      </p>
    </>
  )
}
