import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthCheck from 'hooks/useAuthCheck';
import useSendData from 'hooks/useSendData';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import VerificationLayout from 'components/authentication/VerificationLayout';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import Spinner from 'components/UI/Spinner';
import EmailSent from 'components/authentication/messages/EmailSent';
import Error from 'components/UI/Error';

const ResetPassword = () => {
  const [emailInput, setEmailInput] = useState('');

  const { isLoading, sendAuthRequest } = useAuthCheck();
  const { error, messagePage, sendFormData } = useSendData('reset-password');

  const schema = yup.object({
    email: yup.string().required().email(),
  });

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    sendAuthRequest('/api/authenticated/reset-password');
  }, [sendAuthRequest]);

  const resetPasswordHandler = (data, e) => {
    e.preventDefault();

    const email = getValues('email');

    const values = new FormData();
    values.append('email', email);

    if (email) {
      sendFormData('/api/reset-password', values);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (messagePage === 'sent') {
    return <EmailSent />;
  }

  return (
    <VerificationLayout>
      <h1 className='font-bold text-darkBlack text-2xl text-center'>
        Reset Password
      </h1>
      <form
        onSubmit={handleSubmit(resetPasswordHandler)}
        className='w-99 mx-auto'
      >
        <Input
          register={register('email', {
            onChange: (e) => setEmailInput(e.target.value),
          })}
          label='Email'
          placeholder='Enter your email'
          errorStatus={errors.email}
          val={emailInput}
        />

        <p className='text-red-600 h-2 mt-1'>{errors.email?.message}</p>
        <Button>Reset your password </Button>
      </form>
      <Error>{error}</Error>
    </VerificationLayout>
  );
};

export default ResetPassword;
