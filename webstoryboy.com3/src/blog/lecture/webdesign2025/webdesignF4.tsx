import CodeBlock from '@/components/post/post-code'

export default function WebdesignF4() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        웹 문서 만들기 : VSCODE를 실행하고 F-4.html파일을 만들겠습니다.
      </p>

      <h4>2. 각 섹션 작업하기</h4>
      <p>
        메인 박스 안에 헤더 영역을 작업하겠습니다. 헤더 영역은 로고와 메뉴
        영역으로 나누어져 있습니다.
      </p>
      <CodeBlock language='html' code={``} />
      <CodeBlock language='css' code={``} />

      <h4>3. 정리</h4>

      <h4>4. 마무리</h4>
    </>
  )
}
