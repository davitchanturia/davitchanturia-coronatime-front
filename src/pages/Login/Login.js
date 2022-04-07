import { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuthCheck from 'hooks/useAuthCheck';
import useSendData from 'hooks/useSendData';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthFoto from 'components/AuthPhoto';
import Button from 'components/Button';
import Input from 'components/Input';
import Remember from 'components/Remember';
import Logo from 'components/Logo';
import HelperNavigator from 'components/HelperNavigator';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import LanguageDropdown from 'components/LanguageDropdown';

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const { isLoading, sendAuthRequest } = useAuthCheck();
  const { error, sendFormData } = useSendData('login');

  useEffect(() => {
    sendAuthRequest('/api/authenticated/login');
  }, [sendAuthRequest]);

  const schema = yup.object({
    username: yup.string().required().min(3),
    password: yup.string().required(),
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
    const password = getValues('password');
    const remember = getValues('remember');

    const values = new FormData();

    values.append('username', username);
    values.append('password', password);
    values.append('remember', remember);

    if (username && password && username.length > 2) {
      sendFormData('/api/login', values);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='max-w-6xl m-auto'>
      <div className='relative w-full'>
        <div className='w-full  xl:w-336 px-4 mx-auto'>
          <div className='w-full sm:w-2/3 lg:w-96 sm:mx-auto lg:mx-0'>
            <div className='m-auto py-10'>
              <div className='flex items-center justify-between'>
                <Logo />
                <LanguageDropdown />
              </div>

              <Header welcome='welcomeLogin' text='textLogin' />

              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Input
                  register={register('username', {
                    onChange: (e) => setUsernameInput(e.target.value),
                  })}
                  label='username'
                  placeholder='usernamePlaceholder'
                  type='text'
                  errorStatus={errors.username}
                  val={usernameInput}
                />
                <p className='text-red-600 h-2'>{errors.username?.message}</p>

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
                <p className='text-red-600 h-2'>{errors.password?.message}</p>

                <div className='flex flex-col sm:flex-row sm:justify-between mt-7'>
                  <Remember register={register('remember')} />
                  <Link
                    to='/reset-password'
                    className='text-forgotPas mt-2 sm:mt-0'
                  >
                    <Trans i18nKey='forgotPassword' />
                  </Link>
                </div>

                <Button>
                  <Trans i18nKey='login' />
                </Button>

                <HelperNavigator
                  text={<Trans i18nKey='doNotHaveAccount' />}
                  action={<Trans i18nKey='signUpFree' />}
                  path='/register'
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

export default Login;
