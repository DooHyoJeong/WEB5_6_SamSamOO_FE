'use client';

import { useState } from 'react';
import AuthHeader from '@/components/features/account/AuthHeader';
import VerifyPasswordForm from '@/components/forms/VerifyPasswordForm';
import PasswordResetForm from '@/components/forms/PasswordResetForm';
import { showSuccessToast } from '@/utils/showToast';

function Page() {
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);

  return (
    <div className="center-col">
      <AuthHeader
        title="👋 걱정마세요!"
        subtitle="지금부터 비밀번호를 다시 설정할 수 있도록 도와드릴게요."
      />

      {verifiedEmail ? (
        <PasswordResetForm
          email={verifiedEmail}
          onSuccess={() => {
            showSuccessToast('비밀번호 재설정 성공!');
            // router.replace('/') 같은 후속 처리 가능
          }}
        />
      ) : (
        <VerifyPasswordForm onVerified={(email) => setVerifiedEmail(email)} />
      )}
    </div>
  );
}

export default Page;
