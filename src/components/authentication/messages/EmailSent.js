import VerificationLayout from 'components/authentication/VerificationLayout';
import Success from 'components/UI/svg/Success';

const EmailSent = () => {
  return (
    <VerificationLayout>
      <div className='w-14 h-14 mt-36 mx-auto rounded-full bg-greenIconBack border flex justify-center items-center'>
        <Success />
      </div>
      <p className='text-center mt-4'>We have sent you a confirmation email</p>
    </VerificationLayout>
  );
};

export default EmailSent;
