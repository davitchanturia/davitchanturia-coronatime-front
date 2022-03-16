import AuthFoto from 'components/UI/authFoto';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';
import Remember from 'components/UI/form/Remember';
import Logo from 'components/UI/Logo';
import HelperNavigator from '../components/authentication/HelperNavigator';

const Register = () => {
  return (
    <div className='max-w-6xl m-auto'>
      <div className='relative w-full'>
        <div className='w-full xl:w-336 px-4 mx-auto'>
          <div className='w-full lg:w-96'>
            <div className='  m-auto   py-10'>
              <Logo />
              <div class='mt-14'>
                <h1 class='font-bold text-2xl text-left'>
                  Welcome to Coronatime
                </h1>
                <p class='text-sm sm:text-xl text-grey mt-4'>
                  Please enter required info to sign up
                </p>
              </div>

              <form>
                <Input
                  label='username'
                  placeholder='Enter unique username or email'
                />

                <Input label='Email' placeholder='Enter your email' />

                <Input label='Password' placeholder='Fill in password' />

                <Input label='Repeat password' placeholder='Repeat password' />

                <div class='flex flex-col sm:flex-row sm:justify-between mt-7'>
                  <Remember />
                  <a href='/' class='text-forgotPas mt-2 sm:mt-0'>
                    forgot password?
                  </a>
                </div>

                <Button>Register</Button>

                <HelperNavigator
                  text='Already have an account?'
                  action='log in'
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
