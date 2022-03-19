import { useEffect, useState } from 'react';
import useAuthCheck from 'hooks/use-authCheck';
import { useForm } from 'react-hook-form';
import apiClient from 'api/api';

import VerificationLayout from 'components/authentication/VerificationLayout';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import Spinner from 'components/UI/Spinner';
import EmailSent from 'components/authentication/messages/EmailSent';

const ResetPassword = () => {
  const { isLoading, sendAuthRequest } = useAuthCheck();
  const [messagePage, setMessagePage] = useState('');

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    sendAuthRequest('/api/authenticated/reset-password');
  }, [sendAuthRequest]);

  const resetPasswordHandler = (data, e) => {
    e.preventDefault();

    const email = getValues('email');

    const values = new FormData();
    values.append('email', email);

    (async () => {
      try {
        await apiClient.get('sanctum/csrf-cookie');
        const response = await apiClient.post('/api/reset-password', values);

        console.log(response);
        if (response.status === 200) {
          setMessagePage('sent');
        }
      } catch (error) {
        if (error.response.status === 401) {
          // setError(error.response.data.message);
        }
      }
    })();
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
            required: 'This filed is required',
          })}
          label='Email'
          placeholder='Enter your email'
        />

        <Button>Reset your password </Button>
      </form>
    </VerificationLayout>
  );
};

export default ResetPassword;
