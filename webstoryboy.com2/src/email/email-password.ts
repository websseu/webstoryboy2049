import nodemailer from 'nodemailer'

// 인증코드 전용 이메일 발송 함수
export async function sendPasswordResetCodeEmail(email: string, code: string) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"webstoryboy.com" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '웹스토리보이 비밀번호 재설정 인증번호',
    html: `
      <p>안녕하세요. 웹스토리보이입니다.</p>
      <p>비밀번호 재설정을 위한 인증번호는 아래와 같습니다:</p>
      <h2 style="font-size: 24px;">${code}</h2>
      <p>해당 인증번호는 <strong>5분간 유효</strong>합니다.</p>
      <p>요청하지 않으셨다면 이 메일은 무시해주세요.</p>
      <p>감사합니다!</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`비밀번호 인증번호가 ${email}로 전송되었습니다.`)
  } catch (error) {
    console.error('비밀번호 인증번호 전송 실패:', error)
    throw new Error('이메일 전송 실패')
  }
}
