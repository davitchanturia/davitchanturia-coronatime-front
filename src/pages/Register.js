import { Trans } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useAuthCheck from 'hooks/use-authCheck';
import useSendData from 'hooks/use-sendData';

import AuthFoto from 'components/UI/authFoto';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import Remember from 'components/UI/form/Remember';
import Logo from 'components/UI/Logo';
import HelperNavigator from 'components/authentication/HelperNavigator';
import Header from 'components/authentication/Header';
import Spinner from 'components/UI/Spinner';
import EmailSent from 'components/authentication/messages/EmailSent';
import Error from 'components/UI/Error';
import LanguageDropdown from 'components/navbar/LanguageDropdown';

const Register = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [repeatPasswordInput, setRepeatPasswordInput] = useState('');

  const { isLoading, sendAuthRequest } = useAuthCheck();
  const { messagePage, error, sendFormData } = useSendData('register');

  useEffect(() => {
    sendAuthRequest('/api/authenticated/register');
  }, [sendAuthRequest]);

  const schema = yup.object({
    username: yup.string().required().min(3),
    email: yup.string().required().min(3).email(),
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

  const onSubmitHandler = (data, e) => {
    e.preventDefault();

    const username = getValues('username');
    const email = getValues('email');
    const password = getValues('password');
    const repeatPassword = getValues('repeatPassword');
    const remember = getValues('remember');

    const values = new FormData();

    values.append('username', username);
    values.append('email', email);
    values.append('password', password);
    values.append('repeatPassword', repeatPassword);
    values.append('remember', remember);

    if (
      username &&
      username.length > 2 &&
      password &&
      password.length > 2 &&
      email &&
      email.length > 2 &&
      password === repeatPassword
    ) {
      sendFormData('/api/register', values);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (messagePage === 'sent') {
    return <EmailSent />;
  }

  return (
    <div className='max-w-6xl m-auto'>
      <div className='relative w-full'>
        <div className='w-full xl:w-336 px-4 mx-auto'>
          <div className='w-full sm:w-2/3 lg:w-96 sm:mx-auto lg:mx-0'>
            <div className='m-auto py-10'>
              <div className='flex items-center justify-between'>
                <Logo />
                <LanguageDropdown />
              </div>

              <Header welcome='welcomeRegister' text='textRegister' />

              <form onSubmit={handleSubmit(onSubmitHandler)} method='POST'>
                <Input
                  register={register('username', {
                    onChange: (e) => setUsernameInput(e.target.value),
                  })}
                  type='text'
                  label='username'
                  placeholder='Enter unique username or email'
                  errorStatus={errors.username}
                  val={usernameInput}
                />
                <p className='text-red-600 h-2'>{errors.username?.message}</p>

                <Input
                  register={register('email', {
                    onChange: (e) => setEmailInput(e.target.value),
                  })}
                  type='email'
                  label='email'
                  placeholder='emailPlaceholder'
                  errorStatus={errors.email}
                  val={emailInput}
                />
                <p className='text-red-600 h-2'>{errors.email?.message}</p>

                <Input
                  register={register('password', {
                    onChange: (e) => setPasswordInput(e.target.value),
                  })}
                  type='password'
                  label='password'
                  placeholder='passwordPlaceholder'
                  errorStatus={errors.password}
                  val={passwordInput}
                />
                <p className='text-red-600 h-2'>{errors.password?.message}</p>

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
                <p className='text-red-600 h-2'>
                  {errors.repeatPassword?.message}
                </p>

                <div className='flex flex-col sm:flex-row sm:justify-between mt-7'>
                  <Remember register={register('remember')} />
                </div>

                <Button>
                  <Trans i18nKey='register' />
                </Button>

                <HelperNavigator
                  text={<Trans i18nKey='alreadyHaveAcount' />}
                  action={<Trans i18nKey='login' />}
                  path='/login'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Error>{error}</Error>

      <AuthFoto />
    </div>
  );
};

export default Register;
