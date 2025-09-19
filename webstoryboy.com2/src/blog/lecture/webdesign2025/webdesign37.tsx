import CodeBlock from '@/components/post/post-code'

export default function Webdesign37() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번 시간에는 <strong>탭 메뉴 스크립트</strong>를 함께 구현해보겠습니다.
        다양한 콘텐츠를 하나의 영역에서 전환해서 보여주는 탭 메뉴는 실무에서도
        매우 자주 쓰이는 UI 중 하나예요. 걱정 마세요! 구조와 원리를 한 번만
        제대로 익히면 정말 간단하게 구현할 수 있습니다. 어렵지 않으니, 저와 함께
        천천히 하나씩 따라오시면 됩니다. 💡
      </p>
      <p>그럼 지금부터 탭 메뉴 스크립트, 같이 시작해볼까요? ✨ 렛츠고!</p>

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
        컨텐츠 첫 번째 영역에 탭메뉴 코딩을 작업하였습니다. 버튼과 컨텐츠 부분을
        따로 표현했습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<section class="content1">
    <div class="tab-menu">
        <div class="tab-btn">
            <ul>
                <li class="active"><a href="#">탭메뉴1</a></li>
                <li><a href="#">탭메뉴2</a></li>
            </ul>
        </div>
        <div class="tab-cont">
            <div>
                탭메뉴1 내용<br>탭메뉴1 내용<br>탭메뉴1 내용<br>탭메뉴1 내용
            </div>
            <div>
                탭메뉴2 내용<br>탭메뉴2 내용<br>탭메뉴2 내용<br>탭메뉴2 내용
            </div>
        </div>
    </div>
    <!-- //tab-menu -->
</section>`}
      />
      <CodeBlock
        language='css'
        code={`/* tab-menu */
.tab-menu {
    padding: 20px;
}
.tab-menu .tab-btn ul {
    display: flex;
}
.tab-menu .tab-btn li {
    list-style: none;
}
.tab-menu .tab-btn li.active a {
    text-decoration: underline;
}
.tab-menu .tab-btn li a {
    display: block;
    padding: 10px;
    background-color: #6b6b6b;
}
.tab-menu .tab-cont > div {
    padding: 10px;
    background-color: #b0b0b0;
    line-height: 1.6;
}
/* .tab-menu .tab-cont > div:nth-child(2){
    display: none;
} */`}
      />

      <h4>2. 스크립트 작업 : 제이쿼리</h4>
      <p>
        먼저 jQuery 라이브러리를 불러오고, 탭 버튼과 콘텐츠 영역을 각각 변수에
        저장합니다. 이번 예제에서는 <code>var</code> 키워드를 사용했지만,
        최근에는 <code>let</code>이나 <code>const</code>를 많이 사용해요. ES6
        이전에는 <code>var</code>만 사용했기 때문에 구버전 예제에서는 자주
        등장합니다. 시험에서는 어떤 키워드를 써도 상관없지만, 실무에서는{' '}
        <code>let</code>과 <code>const</code>의 사용을 추천드려요.
      </p>
      <p>
        초기에는 모든 탭 콘텐츠를 숨기고 <code>eq(0)</code>을 통해 첫 번째
        콘텐츠만 보이게 설정합니다. 탭 버튼을 클릭하면 <code>$(this)</code>를
        통해 현재 클릭한 버튼의 인덱스를 가져오고, 해당 버튼에는{' '}
        <code>active</code> 클래스를 추가한 뒤 형제 요소에서 클래스를
        제거합니다. 이어서 해당 인덱스의 콘텐츠만 <code>show()</code>로 표시하고
        나머지는 <code>hide()</code>로 숨겨주는 방식으로 작동됩니다.
      </p>
      <CodeBlock
        language='js'
        code={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(function() {
        let tabBtn = $(".tab-btn > ul > li");   //버튼 설정
        let tabCont = $(".tab-cont > div");     //콘텐츠 설정
        tabCont.hide().eq(0).show();    //첫번째 콘텐츠만 보이게 설정

        tabBtn.click(function(){
            const index = $(this).index();  //클릭한 번호를 저장
            // alert(index);

            $(this).addClass("active").siblings().removeClass("active");    //내가 클릭한 버튼에 클래스를 추가하고 나머지 버튼은 삭제
            tabCont.eq(index).show().siblings().hide(); //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
        });
    });
</script>`}
      />

      <h4>3. 스크립트 작업 : 자바스크립트</h4>
      <p>
        자바스크립트도 한번 해보겠습니다. 버튼들을 선택해서 변수에 저장하고,
        콘텐츠도 선택해서 저장하겠습니다. 모든 콘텐츠를 설정하기 위해 forEach를
        사용하여 안보이도록 설정하고 첫 번째 콘텐츠만 보이도록 하겠습니다.
        여러개 버튼중에 하나를 클릭하면, 클래스를 지우고 해당 버튼만 클랙스를
        추가했습니다. 콘텐츠도 모두 안보이도록 설정하고, 클릭한 버튼에 해당하는
        콘텐츠만 보이도록 설정했습니다.
      </p>
      <CodeBlock
        language='js'
        code={`window.onload = function(){
    const tabBtn = document.querySelectorAll(".tab-btn > ul > li"); //버튼 설정
    const tabCont = document.querySelectorAll(".tab-cont > div");   //콘텐츠 설정

    tabCont.forEach(el => el.style.display = "none");   //모든 콘텐츠를 숨김
    tabCont[0].style.display = "block";     //첫 번째 콘텐츠를 보이게 설정

    tabBtn.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabBtn.forEach(tab => tab.classList.remove("active"));  //모든 버튼 클래스 삭제
            tab.classList.add("active");        //클릭한 버튼만 클래스 추가

            tabCont.forEach(cont => cont.style.display = "none");   //모든 콘텐츠를 숨기
            tabCont[index].style.display = "block";     //클릭한 버튼의 콘텐츠 내용을 보여줌
        });
    });
};`}
      />

      <h4>3. 정리</h4>
      <h5>✅ 주요 HTML 태그</h5>
      <ul>
        <li>
          <code>&lt;ul&gt;</code> 내부의 <code>&lt;li&gt;</code>: 탭 버튼 구성
        </li>
        <li>
          <code>&lt;a&gt;</code>: 클릭 가능한 탭 메뉴 항목
        </li>
        <li>
          <code>.tab-cont &gt; div</code>: 탭별 콘텐츠를 감싸는 블록
        </li>
      </ul>

      <h5>✅ 주요 CSS 속성</h5>
      <ul>
        <li>
          <code>display: flex</code>: 버튼을 가로로 정렬
        </li>
        <li>
          <code>.active</code> 클래스: 현재 선택된 탭에 강조 스타일 적용
        </li>
        <li>
          <code>display: none</code> / <code>display: block</code>: 콘텐츠
          표시/숨김 처리
        </li>
      </ul>

      <h5>✅ 제이쿼리 핵심 메서드</h5>
      <ul>
        <li>
          <code>.click()</code>: 클릭 이벤트 설정
        </li>
        <li>
          <code>.eq()</code>: 인덱스에 해당하는 요소 선택
        </li>
        <li>
          <code>.hide()</code> / <code>.show()</code>: 콘텐츠 전환 처리
        </li>
        <li>
          <code>.addClass()</code> / <code>.removeClass()</code>: 클래스 제어
        </li>
        <li>
          <code>.siblings()</code>: 형제 요소 접근
        </li>
      </ul>

      <h5>✅ 자바스크립트 핵심 메서드</h5>
      <ul>
        <li>
          <code>querySelectorAll()</code>: 다중 요소 선택
        </li>
        <li>
          <code>forEach()</code>: 반복문 처리
        </li>
        <li>
          <code>addEventListener()</code>: 이벤트 등록
        </li>
        <li>
          <code>classList.add()</code> / <code>classList.remove()</code>: 클래스
          조작
        </li>
        <li>
          <code>style.display</code>: 콘텐츠의 표시 상태 제어
        </li>
      </ul>

      <h5>✅ 실습 포인트 요약</h5>
      <ul>
        <li>탭 버튼과 콘텐츠를 HTML 구조로 구분하여 설정</li>
        <li>버튼 클릭 시 인덱스를 기준으로 관련 콘텐츠만 표시</li>
        <li>jQuery는 간단하고 빠르게 구현 가능</li>
        <li>JavaScript는 실무에서의 확장성과 유지보수에 유리</li>
        <li>구현보다 중요한 건 로직의 이해와 반복 연습!</li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        탭 메뉴 구현, 생각보다 간단하죠? 😊 이번에도 jQuery와 JavaScript 두 가지
        방법을 모두 다뤄봤습니다. 시험에서는 jQuery를 주로 사용하지만,
        자바스크립트는 실무에 꼭 필요한 핵심 스킬이에요.
      </p>
      <p>
        처음엔 조금 헷갈릴 수 있지만 반복해서 연습하면 어느 순간 자연스럽게
        이해되고 손에 익게 됩니다. 여러분 모두 끝까지 따라와 주셔서 정말 고생
        많으셨어요! 다음 강의에서도 실무와 시험 모두에 도움이 되는 주제로
        찾아올게요.
      </p>
      <p>계속해서 즐겁게, 꾸준하게! 여러분의 코딩 여정을 응원합니다. 💪🔥</p>
    </>
  )
}
