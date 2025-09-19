import CodeBlock from '@/components/post/post-code'

export default function Webdesign38() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        오늘은 스크립트 중에서도 가장 쉬운 유형인 <strong>팝업 스크립트</strong>
        를 함께 만들어볼 거예요. 버튼을 클릭하면 숨겨진 내용을 보여주고, 다시
        클릭하면 감추는 아주 간단한 구조입니다. 기본적인 동작 원리만 이해하면
        누구나 쉽게 따라할 수 있으니 걱정 마세요! 처음 코딩을 접하는 분들도
        충분히 구현할 수 있습니다.
      </p>
      <p>그럼 부담 없이, 편한 마음으로 하나씩 같이 해볼까요? 😄 시작합니다!</p>

      <h4>1. 기본 구조 만들기</h4>
      <p>
        이번에는 A-2 유형의 레이아웃을 사용하였습니다. 소스는 그대로 복사하셔서
        사용하셔도 상관없습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
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
        팝업 버튼을 추가하고, 팝업 콘텐츠는 wrap 제일 마지막에 추가하였습니다.
        필요한 CSS도 추가하였습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<main id="contents">
    <section class="content1"></section>
    <section class="content2"></section>
    <section class="content3">
        <a href="#" class="popup-btn">팝업</a>
    </section>
</main>
<!-- //contents -->`}
      />
      <CodeBlock
        language='html'
        code={`<!-- 팝업 -->
<div class="popup-view">
    <a href="#" class="popup-close">닫기</a>
</div>`}
      />
      <CodeBlock
        language='css'
        code={`/* popup */
#wrap {
    position: relative;
}
.content3 {
    display: flex;
    align-items: center;  
    justify-content: center;
}
.popup-btn {
    background-color: rgba(255,255,255,0.6);
    padding: 10px;
    display: inline-block;
}
.popup-view {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background-color: #a2a2a2;
    border: 3px solid #000;
    z-index: 1000;
    display: none;
} 
.popup-close {
    background-color: #fff;
    padding: 10px;
    display: inline-block;
}`}
      />

      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        스크립트는 비교적 간단합니다. 버튼을 클릭하면 팝업을 보여주고, 닫기
        버튼을 클릭하면 팝업을 숨기는 형태입니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function(){
        $(".popup-btn").click(function(){
            $(".popup-view").show();
        });
        $(".popup-close").click(function(){
            $(".popup-view").hide();
        });
    });
</script>`}
      />
      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        자바스크립트도 간단합니다. 선택자나 문법이 길어서 그렇지 제이쿼리를
        그대로 자바스크립트로 변경하면 이렇습니다. preventDefault() 메서드는
        링크 클릭으로 인한 상단으로 위치 이동을 막기 위함입니다.
      </p>
      <CodeBlock
        language='css'
        code={`window.onload = function(){
    document.querySelector(".popup-btn").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click", function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}`}
      />
      <h4>2. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;a class=&quot;popup-btn&quot;&gt;</code>: 팝업을 여는 버튼
        </li>
        <li>
          <code>&lt;div class=&quot;popup-view&quot;&gt;</code>: 팝업 콘텐츠
          영역
        </li>
        <li>
          <code>&lt;a class=&quot;popup-close&quot;&gt;</code>: 팝업을 닫는 버튼
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>position: absolute</code>: 팝업을 화면 중앙에 고정
        </li>
        <li>
          <code>transform: translate(-50%, -50%)</code>: 중앙 정렬
        </li>
        <li>
          <code>display: none</code> / <code>display: block</code>: 팝업
          표시/숨김 처리
        </li>
        <li>
          <code>z-index</code>: 팝업이 다른 요소 위에 표시되도록 설정
        </li>
      </ul>

      <h5>✅ 제이쿼리 핵심 메서드</h5>
      <ul>
        <li>
          <code>.click()</code>: 클릭 이벤트 설정
        </li>
        <li>
          <code>.show()</code> / <code>.hide()</code>: 요소 표시/숨김
        </li>
      </ul>

      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>
          <code>querySelector()</code>: 단일 요소 선택
        </li>
        <li>
          <code>addEventListener()</code>: 이벤트 등록
        </li>
        <li>
          <code>style.display</code>: 요소의 표시 상태 직접 제어
        </li>
        <li>
          <code>event.preventDefault()</code>: 링크의 기본 동작 방지 (선택 사항)
        </li>
      </ul>

      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>버튼 클릭으로 팝업을 띄우고 닫는 단순한 로직</li>
        <li>jQuery와 JavaScript 각각으로 구현 가능</li>
        <li>
          팝업은 보통 <code>absolute</code> 위치와 <code>z-index</code> 조정이
          중요
        </li>
        <li>실무에서도 알림창, 레이어 팝업 등 다양하게 응용 가능</li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        지금까지 메뉴 유형, 이미지 슬라이드, 탭 메뉴, 그리고 팝업까지 다양한
        스크립트를 함께 구현해봤습니다. 특히 팝업은 구조도 단순하고 구현도
        쉬워서 가장 기본적인 스크립트라고 할 수 있어요.
      </p>
      <p>
        이제 여러분은 레이아웃과 스크립트를 조합하여 실전 사이트를 구성할 수
        있는 충분한 실력을 갖추셨습니다. 남은 건 반복 연습과 자신감뿐! 💪
        앞으로는 실전 예제로 더욱 다듬어보세요.
      </p>
      <p>
        끝까지 따라와 주셔서 감사합니다. 사소한 피드백이나 응원의 댓글도 큰 힘이
        됩니다. 함께 성장해봐요! 😊
      </p>
    </>
  )
}
