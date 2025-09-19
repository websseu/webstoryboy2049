import Link from 'next/link'
import UserConditions from '../user/user-conditions'
import UserPrivacy from '../user/user-privacy'
import FindEmailDialog from './find-email-dialog'
import FindPasswordDialog from './find-pw-dialog'

export default function SignUpFooter() {
  return (
    <div className='text-sm text-zinc-500 leading-5 text-center mt-6'>
      계정을 만들면 <UserConditions /> 및 <UserPrivacy />
      에 동의하신 걸로 간주합니다! 😊 함께 멋진 여정을 시작해볼까요? 🚀 <br />
      <p className='mt-1'>
        이미 계정이 있다고요?!🥳 그럼{' '}
        <Link className='uline' href='/sign-in'>
          로그인
        </Link>
        해주세요!
      </p>
      <p className='mt-2'>
        가입했는데 기억이 안난다면 <FindEmailDialog /> <FindPasswordDialog />
      </p>
    </div>
  )
}
