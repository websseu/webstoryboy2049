import Link from 'next/link'
import UserConditions from '../user/user-conditions'
import UserPrivacy from '../user/user-privacy'
import FindEmailDialog from './find-email-dialog'
import FindPasswordDialog from './find-pw-dialog'

export default function SignInFooter() {
  return (
    <div className='text-sm text-zinc-500 leading-5 text-center mt-6'>
      로그인하시면 저희의 <UserConditions /> 및 <UserPrivacy />에 동의하신
      것으로 간주됩니다. 소중한 정보를 안전하게 지킬 것을 약속드려요. 💌
      <p className='mt-2'>
        아직 회원 가입 전이라면?{' '}
        <Link href='/sign-up' className='uline'>
          회원가입
        </Link>
      </p>
      <p className='mt-2'>
        가입했는데 기억이 안난다면 <FindEmailDialog /> <FindPasswordDialog />
      </p>
    </div>
  )
}
