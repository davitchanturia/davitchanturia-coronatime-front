import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useSendData from 'hooks/useSendData';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import VerificationLayout from 'components/authentication/VerificationLayout';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import PasswordChanged from 'pages/UpdatePassword/components/PasswordChanged';
import Error from 'components/UI/Error';

const UpdatePassword = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [repeatPasswordInput, setRepeatPasswordInput] = useState('');

  const { error, messagePage, sendFormData } = useSendData('update-password');

  const schema = yup.object({
    password: yup.string().required().min(3),
    repeatPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const params = useParams();

  const resetPasswordHandler = (data, e) => {
    e.preventDefault();

    const password = getValues('password');
    const repeatPassword = getValues('repeatPassword');

    const values = new FormData();
    values.append('password', password);
    values.append('repeatPassword', repeatPassword);
    values.append('token', params.token);

    if (password && repeatPassword && password.length > 2) {
      sendFormData('/api/update-password', values);
    }
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
            onChange: (e) => setPasswordInput(e.target.value),
          })}
          label='password'
          placeholder='passwordPlaceholder'
          type='password'
          errorStatus={errors.password}
          val={passwordInput}
        />
        <p className='text-red-600 h-2 mt-1'>{errors.password?.message}</p>

        <Input
          type='password'
          register={register('repeatPassword', {
            onChange: (e) => setRepeatPasswordInput(e.target.value),
          })}
          label='repeatPassword'
          placeholder='repeatPasswordPlaceholder'
          errorStatus={errors.repeatPassword}
          val={repeatPasswordInput}
        />
        <p className='text-red-600 h-2 mt-1'>
          {errors.repeatPassword?.message}
        </p>

        <Button>Save changes</Button>
        <Error>{error}</Error>
      </form>
    </VerificationLayout>
  );
};

export default UpdatePassword;
