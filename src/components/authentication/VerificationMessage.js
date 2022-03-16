import Success from 'components/UI/svg/Success';

const VerificationMessage = () => {
  return (
    <>
      <div class='w-14 h-14 mt-36 mx-auto rounded-full bg-greenIconBack border flex justify-center items-center'>
        <Success />
      </div>
      <p class='text-center mt-4'>We have sent you a confirmation email</p>
    </>
  );
};

export default VerificationMessage;
