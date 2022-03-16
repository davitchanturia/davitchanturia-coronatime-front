import ResetPassword from 'components/authentication/ResetPassword';
import VerificationMessage from 'components/authentication/VerificationMessage';
import Logo from 'components/UI/Logo';

const Verification = (props) => {
  return (
    <div className='px-2 sm:w-1/2 xl:w-1/5 m-auto'>
      <div className='py-10'>
        <Logo classes='mx-auto' />
      </div>
      <div className='mt-36 w-full'>
        <ResetPassword />
        {/* <VerificationMessage /> */}
      </div>
    </div>
  );
};

export default Verification;
