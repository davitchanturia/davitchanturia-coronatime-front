import { Trans } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import apiClient from 'api/api';

import AuthFoto from 'components/UI/authFoto';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import Remember from 'components/UI/form/Remember';
import Logo from 'components/UI/Logo';
import HelperNavigator from '../components/authentication/HelperNavigator';
import Header from 'components/authentication/Header';
import Spinner from 'components/UI/Spinner';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmitHandler = (data, e) => {
    e.preventDefault();

    const username = getValues('username');
    const email = getValues('email');
    const password = getValues('password');
    const repeatPassword = getValues('repeatPassword');

    const values = new FormData();

    values.append('username', username);
    values.append('email', email);
    values.append('password', password);
    values.append('repeatPassword', repeatPassword);

    (async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.post('/api/register', values);

        navigate('/message');

        setIsLoading(false);
      } catch (error) {}
    })();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='max-w-6xl m-auto'>
      <div className='relative w-full'>
        <div className='w-full xl:w-336 px-4 mx-auto'>
          <div className='w-full sm:w-2/3 lg:w-96 sm:mx-auto lg:mx-0'>
            <div className='  m-auto   py-10'>
              <Logo />

              <Header welcome='welcomeRegister' text='textRegister' />

              <form onSubmit={handleSubmit(onSubmitHandler)} method='POST'>
                <Input
                  register={register('username', {
                    required: 'This filed is required',
                  })}
                  type='text'
                  label='username'
                  placeholder='Enter unique username or email'
                />

                <Input
                  register={register('email', {
                    required: 'This filed is required',
                  })}
                  type='email'
                  label='email'
                  placeholder='emailPlaceholder'
                />

                <Input
                  register={register('password', {
                    required: 'This filed is required',
                  })}
                  type='password'
                  label='password'
                  placeholder='passwordPlaceholder'
                />

                <Input
                  type='password'
                  register={register('repeatPassword', {
                    required: 'This filed is required',
                  })}
                  label='repeatPassword'
                  placeholder='repeatPasswordPlaceholder'
                />

                <div className='flex flex-col sm:flex-row sm:justify-between mt-7'>
                  <Remember />
                  <a href='/' className='text-forgotPas mt-2 sm:mt-0'>
                    <Trans i18nKey='forgotPassword' />
                  </a>
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
      <AuthFoto />
    </div>
  );
};

export default Register;
