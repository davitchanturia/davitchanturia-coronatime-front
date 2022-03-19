import VerificationLayout from 'components/authentication/VerificationLayout';
import Button from 'components/UI/form/Button';
import Input from 'components/UI/form/Input';

const ResetPassword = () => {
  return (
    <VerificationLayout>
      <h1 className='font-bold text-darkBlack text-2xl text-center'>
        Reset Password
      </h1>
      <form method='POST' action='' className='w-99 mx-auto'>
        <Input label='Email' placeholder='Enter your email' />

        <Button>Reset your password </Button>
      </form>
    </VerificationLayout>
  );
};

export default ResetPassword;
