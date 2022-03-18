import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Trans } from 'react-i18next';
import { useForm } from 'react-hook-form';
import apiClient from 'api/api';
import { useEffect } from 'react';
import useAuthCheck from 'hooks/use-authCheck';

import AuthFoto from 'components/UI/authFoto';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import Remember from 'components/UI/form/Remember';
import Logo from 'components/UI/Logo';
import HelperNavigator from '../components/authentication/HelperNavigator';
import Header from 'components/authentication/Header';
import Spinner from 'components/UI/Spinner';
import Error from 'components/UI/Error';

const Login = () => {
  const { isLoading, sendAuthRequest } = useAuthCheck();
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    sendAuthRequest('/api/authenticated');
  }, [sendAuthRequest]);

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data, e) => {
    e.preventDefault();

    const username = getValues('username');
    const password = getValues('password');

    const values = new FormData();

    values.append('username', username);
    values.append('password', password);

    (async () => {
      try {
        await apiClient.get('sanctum/csrf-cookie');
        const response = await apiClient.post('/api/login', values);

        if (response.status === 204) {
          navigate('/');
        }
        if (response.status === 401) {
          // setError();
        }
      } catch (error) {
        if (error.response.status === 401) {
          setError(error.response.data.message);
        }
        // console.log(error.response.data.message);
      }
    })();
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
              <Logo />

              <Header welcome='welcomeLogin' text='textLogin' />

              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Input
                  register={register('username', {
                    required: 'This filed is required',
                  })}
                  label='username'
                  placeholder='usernamePlaceholder'
                  type='text'
                />

                <Input
                  register={register('password', {
                    required: 'This filed is required',
                  })}
                  label='password'
                  placeholder='passwordPlaceholder'
                  type='password'
                />

                <div className='flex flex-col sm:flex-row sm:justify-between mt-7'>
                  <Remember />
                  <a href='/' className='text-forgotPas mt-2 sm:mt-0'>
                    <Trans i18nKey='forgotPassword' />
                  </a>
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
