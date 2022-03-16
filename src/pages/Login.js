import { Trans } from 'react-i18next';

import AuthFoto from 'components/UI/authFoto';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import Remember from 'components/UI/form/Remember';
import Logo from 'components/UI/Logo';
import HelperNavigator from '../components/authentication/HelperNavigator';

const Login = () => {
  return (
    <div className='max-w-6xl m-auto'>
      <div className='relative w-full'>
        <div className='w-full xl:w-336 px-4 mx-auto'>
          <div className='w-full lg:w-96'>
            <div className='  m-auto   py-10'>
              <Logo />
              <div class='mt-14'>
                <h1 class='font-bold text-2xl text-left'>
                  <Trans i18nKey='welcomeLogin' />
                </h1>
                <p class='text-sm sm:text-xl text-grey mt-4'>
                  <Trans i18nKey='textLogin' />
                </p>
              </div>

              <form>
                <Input label='username' placeholder='usernamePlaceholder' />

                <Input label='password' placeholder='passwordPlaceholder' />
                <div class='flex flex-col sm:flex-row sm:justify-between mt-7'>
                  <Remember />
                  <a href='/' class='text-forgotPas mt-2 sm:mt-0'>
                    <Trans i18nKey='forgotPassword' />
                  </a>
                </div>
                <Button>
                  <Trans i18nKey='login' />
                </Button>
                <HelperNavigator
                  text={<Trans i18nKey='doNotHaveAccount' />}
                  action={<Trans i18nKey='signUpFree' />}
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
