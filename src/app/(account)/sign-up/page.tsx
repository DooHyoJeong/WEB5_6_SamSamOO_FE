'use client';

import AccountButton from '@/components/features/account/AccountButton';
import AccountInput from '@/components/features/account/AccountInput';
import BirthdayInput from '@/components/features/account/BirthdayInput';
import DividerWithText from '@/components/features/account/DividerWithText';
import SelectGender from '@/components/features/account/SelectGender';

function Page() {
  return (
    <div className="center-col">
      <div className="center-col">
        <h2 className="mb-2 text-4xl font-bold">👋 환영합니다!</h2>
        <h3 className="mb-9 text-2xl break-keep text-center">
          지금부터 바로가 든든한 동반자가 되어드릴게요!
        </h3>
      </div>

      <form className="center-col mb-10 w-[420px] gap-7">
        <AccountInput type="text" placeholder="이메일을 입력해주세요" />
        <AccountInput type="password" placeholder="비밀번호를 입력해주세요" />
        <AccountInput type="password" placeholder="비밀번호를 다시 입력해주세요" />

        <div className="center-row w-full gap-7">
          <SelectGender className="flex-1" />
          <BirthdayInput />
        </div>

        <AccountButton type="submit">회원가입</AccountButton>
      </form>

      <DividerWithText text="간편 회원가입" />

      <div className="mb-6 flex w-full gap-6">
        <button className="h-13 flex-1 rounded-sm bg-[#03C75A] px-9 dark:text-primary-black">
          네이버 로그인
        </button>
        <button className="h-13 flex-1 rounded-sm bg-[#FEE500] px-9 dark:text-primary-black">
          카카오 로그인
        </button>
      </div>
    </div>
  );
}
export default Page;
