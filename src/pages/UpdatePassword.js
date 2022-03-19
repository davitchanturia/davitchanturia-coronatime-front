import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

import VerificationLayout from 'components/authentication/VerificationLayout';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import apiClient from 'api/api';
import EmailConfirmed from './EmailConfirmed';
import PasswordChanged from 'components/authentication/messages/PasswordChanged';

const UpdatePassword = () => {
  const [messagePage, setMessagePage] = useState('');

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  const resetPasswordHandler = (data, e) => {
    e.preventDefault();

    const password = getValues('password');
    const repeatPassword = getValues('repeatPassword');

    const values = new FormData();
    values.append('password', password);
    values.append('repeatPassword', repeatPassword);
    values.append('token', params.token);

    (async () => {
      try {
        await apiClient.get('sanctum/csrf-cookie');
        const response = await apiClient.post('/api/update-password', values);

        if (response.status === 200) {
          setMessagePage('confirmed');
        }
      } catch (error) {
        if (error.response.status === 401) {
          // setError(error.response.data.message);
        }
      }
    })();
  };

  if (messagePage === 'confirmed') {
    return <PasswordChanged />;
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
          register={register('password', {
            required: 'This filed is required',
          })}
          label='password'
          placeholder='passwordPlaceholder'
          type='password'
        />

        <Input
          type='password'
          register={register('repeatPassword', {
            required: 'This filed is required',
          })}
          label='repeatPassword'
          placeholder='repeatPasswordPlaceholder'
        />

        <Button>Save changes</Button>
      </form>
    </VerificationLayout>
  );
};

export default UpdatePassword;
