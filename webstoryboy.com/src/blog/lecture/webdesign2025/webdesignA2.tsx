import CodeBlock from '@/components/post/post-code'
import { BookCheck } from 'lucide-react'

export default function WebdesignA2() {
    return (
        <>
            <h3>소개</h3>
            <p>안녕하세요! 웹스토리보이입니다 😊</p>
            <p>
                이번에는 실전 감각을 익힐 수 있도록 실제 사이트를 직접 만들어보겠습니다. 마치 시험장에 있는 것처럼
                집중해서 실습을 진행해볼게요. A유형 중 두 번째 유형을 선택하여 하나씩 단계적으로 작업해보겠습니다. 자,
                그럼 천천히 시작해볼까요?
            </p>
            <p>
                우선 오른쪽 메뉴에서 PDF 항목 중 A-2 유형을 선택해 열어보겠습니다. 실제 시험 상황이라고 생각하고,
                여러분은 지금 A-2 유형의 시험지를 받았다고 가정해볼게요. 사이트의 주제는 바로{' '}
                <strong>Green 복지재단</strong>
                입니다!
            </p>

            <h4>1. 기본 셋팅하기</h4>
            <>
                <p>
                    VSCODE를 실행하고 webdesign폴더 안에 siteA-2 폴더를 만들겠습니다. images, script, css 폴더를 만들고
                    index.html 파일을 만듭니다. 시험지에 나왔있어요. 참고하세요!
                </p>
                <span className='check'>
                    <BookCheck className='w-4 h-4' /> 시험지 체크
                </span>
                <p className='uline'>
                    폴더 안에는 images, script, css 등의 자료를 분류하여 저장한 폴더도 포함되어 있어야 하며,
                    메인페이지는 반드시 최상위 폴더에 index.html로 저장하여 제출해야 한다.
                </p>
                <p>
                    index.html 페이지에서 !를 누르고 탭을 누르면 다음과 같이 나옵니다. 만약 자동 완성이 되지 않으면 html
                    파일로 만들었는지 확인해보세요!
                </p>
                <CodeBlock
                    language='html'
                    code={`<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Green 복지재단</title>
    </head>
    <body></body>
</html>`}
                />
            </>

            <h4>2. 레이아웃 작업하기</h4>
            <>
                <p>
                    기본적인 세팅이 끝났다면, 이제 본격적으로 레이아웃 작업을 시작해볼게요. PDF에 있는 레이아웃을
                    참고하면서 하나씩 만들어보겠습니다. 이 구조는 우리가 연습했던 레이아웃과 거의 같기 때문에 익숙하실
                    거예요. 만약 아직 레이아웃 코딩이 헷갈린다면, 이전에 봤던 영상을 한 번 더 복습하고 오시는 걸
                    추천드려요!
                </p>

                <CodeBlock
                    language='html'
                    code={`<div id="wrap">
    <header id="header">
        <h1 class="logo"></h1>
        <div class="nav"></div>
    </header>
    <!-- //header -->

    <article id="slider"></article>
    <!-- //slider -->

    <main id="contents">
        <div class="content1"></div>
        <div class="content2"></div>
        <div class="content3"></div>
    </main>
    <!-- //contents -->

    <footer id="footer">
        <div class="footer1"></div>
        <div class="footer2"></div>
        <div class="footer3"></div>
    </footer>
    <!-- //footer -->
</div>`}
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
    width: 1200px;
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
    width: 1200px;
    height: 300px;
    background-color: #d9d9d9;
}
#contents {
    width: 1200px;
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
    width: 1200px;
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
            </>

            <h4>3. 헤더 작업하기</h4>
            <>
                <p>
                    헤더는 로고와 메뉴로 구성되어 있습니다. 이번에는 먼저 헤더 영역을 작업해보겠습니다. 원칙적으로는
                    포토샵을 활용해 이미지를 제작하는 것이 맞지만, 코딩으로 대체할 경우 감점될 수 있으니 주의하세요.
                    포토샵을 사용하는 방법이 궁금하다면 <span className='uline'>여기를</span> 참고해주세요. 그럼 우선
                    코딩으로 먼저 구현해보겠습니다!
                </p>
                <span className='check'>
                    <BookCheck className='w-4 h-4' /> 시험지 체크
                </span>
                <p className='uline'>
                    가로세로 200픽셀x40픽셀 크기로 웹사이트의 이미지에 적합한 로고를 직접 디자인하여 삽입한다.
                </p>
                <CodeBlock
                    language='html'
                    code={`<header id="header">
    <h1 class="logo">
        <em>Green</em>
        복지재단
    </h1>
    <div class="nav"></div>
</header>
<!-- //header -->`}
                />
                <CodeBlock
                    language='css'
                    code={`#header .logo {
    width: 20%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
}
#header .logo em {
    color: green;
    font-style: normal;
    margin-right: 4px;
}`}
                />

                <p>
                    이번에는 메뉴를 작업하겠습니다. 메뉴는 마우스 오버했을 때 전체 메뉴가 나오는 유형입니다. 메뉴
                    리스트는 시험지를 참고 하겠습니다.
                </p>

                <CodeBlock
                    language='html'
                    code={`<header id="header">
    <h1 class="logo">
          <em>Green</em>
          복지재단
    </h1>
    <nav class="nav">
      <ul>
        <li>
          <a href="#">재단소개</a>
          <ul class="submenu">
            <li><a href="#">설립취지</a></li>
            <li><a href="#">연혁</a></li>
            <li><a href="#">찾아오시는길</a></li>
          </ul>
        </li>
        <li>
          <a href="#">후원하기</a>
          <ul class="submenu">
            <li><a href="#">국내후원</a></li>
            <li><a href="#">국외후원</a></li>
            <li><a href="#">맞춤후원</a></li>
          </ul>
        </li>
        <li>
          <a href="#">자료실</a>
          <ul class="submenu">
            <li><a href="#">서식자료실</a></li>
            <li><a href="#">사진자료실</a></li>
            <li><a href="#">후원양식</a></li>
          </ul>
        </li>
        <li>
          <a href="#">스토리</a>
          <ul class="submenu">
            <li><a href="#">웹진</a></li>
            <li><a href="#">보고서</a></li>
            <li><a href="#">나의 후원</a></li>
          </ul>
        </li>
      </ul>
    </nav>
</header>
<!-- //header -->`}
                />
                <CodeBlock
                    language='css'
                    code={`#header {
  position: relative;
}
#header::after {
  content: '';
  width: 100%;
  height: 0px;
  background-color: #e2ffe8;
  position: absolute;
  left: 0;
  top: 100px;
  z-index: 1;
  transition: all 400ms;
}
#header.on::after {
  height: 155px;
}
.nav {
  z-index: 1000;
}
.nav > ul {
  display: flex;
  justify-content: right;
  margin-top: 61px;
}
.nav > ul > li {
  position: relative;
}
.nav > ul > li > a {
  display: inline-block;
  padding: 10px 50px;
  font-weight: bold;
}
.nav > ul > li > a:hover {
  background-color: #0fa144;
  border-radius: 50px;
  color: #fff;
}
.nav > ul > li > ul {
  position: absolute;
  left: 0;
  top: 39px;
  width: 100%;
  text-align: center;
  display: none;
}
.nav > ul > li > ul > li > a {
    display: inline-block;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}
.nav > ul > li > ul > li > a:hover {
    background-color: #0fa144;
    color: #fff;
}`}
                />
            </>

            <h4>4. 이미지 슬라이더 작업하기</h4>
            <>
                <p>이미지 작업을 하겠습니다.</p>
                <CodeBlock
                    language='html'
                    code={`<article id="slider">
                <div class="sliderWrap">
                    <div class="slider s1">
                        <img src="images/slider01.jpg" alt="이미지 설명" />
                        <span>이미지1</span>
                    </div>
                    <div class="slider s2">
                        <img src="images/slider02.jpg" alt="이미지 설명" />
                        <span>이미지2</span>
                    </div>
                    <div class="slider s3">
                        <img src="images/slider03.jpg" alt="이미지 설명" />
                        <span>이미지3</span>
                    </div>
                </div>
            </article>
            <!-- //slider -->`}
                />
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
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px 20px;
}`}
                />
                <CodeBlock
                    language='js'
                    code={` let currentIndex = 0 //현재 이미지
    $('.sliderWrap').append($('.slider').first().clone(true)) //첫번째 이미지를 복사, 마지막에 추가

    setInterval(function () {
        //3초에 한번씩 실행
        currentIndex++ //현재 이미지를 1씩 증가
        $('.sliderWrap').animate({ marginLeft: -currentIndex * 100 + '%' }, 600) //이미지 애니메이션

        if (currentIndex == 3) {
            //마지막 이미지일때
            setTimeout(function () {
                $('.sliderWrap').animate({ marginLeft: 0 }, 0) //애니메이션을 정지
                currentIndex = 0 //현재이미지 초기화
            }, 700)
        }
    }, 3000)`}
                />
            </>

            <h4>5. 콘텐츠 작업</h4>
            <>
                <p>공지사항</p>
                <CodeBlock language='html' code={``} />
                <CodeBlock language='css' code={``} />
                <p>갤러리</p>
                <CodeBlock language='html' code={``} />
                <CodeBlock language='css' code={``} />
                <p>배너</p>
                <CodeBlock language='html' code={``} />
                <CodeBlock language='css' code={``} />
            </>

            <h4>6. 푸터 작업</h4>

            <ul>
                <li>1. 이미지 최적화(5MB 용량이 초과되지 않게)</li>
                <li>2. 웹 표준 준수(시멘틱 태그, 유효성검사)</li>
                <li>3. 오류 제거(html,css,javascript)</li>
                <li>4. 탭키로 이동</li>
                <li>5. 대체 텍스트(이미지)</li>
                <li>6. 호환성(엣지, 크롬)</li>
                <li>7. 이미지 슬라이드 작동 여부</li>
            </ul>

            <CodeBlock language='html' code={``} />
            <CodeBlock language='css' code={``} />
        </>
    )
}
