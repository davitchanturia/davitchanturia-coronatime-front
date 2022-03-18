import { Trans } from 'react-i18next';

import AuthFoto from 'components/UI/authFoto';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import Remember from 'components/UI/form/Remember';
import Logo from 'components/UI/Logo';
import HelperNavigator from '../components/authentication/HelperNavigator';
import Header from 'components/authentication/Header';

const Login = () => {
  return (
    <div className='max-w-6xl m-auto'>
      <div className='relative w-full'>
        <div className='w-full  xl:w-336 px-4 mx-auto'>
          <div className='w-full sm:w-2/3 lg:w-96 sm:mx-auto lg:mx-0'>
            <div className='m-auto py-10'>
              <Logo />

              <Header welcome='welcomeLogin' text='textLogin' />

              <form>
                <Input label='username' placeholder='usernamePlaceholder' />

                <Input label='password' placeholder='passwordPlaceholder' />

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
      <AuthFoto />
    </div>
  );
};

export default Login;
