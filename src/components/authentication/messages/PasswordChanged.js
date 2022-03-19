import { useNavigate } from 'react-router';
import Button from 'components/UI/form/Button';
import Success from 'components/UI/svg/Success';
import VerificationLayout from '../VerificationLayout';

const PasswordChanged = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/login');
  };
  return (
    <VerificationLayout>
      <div className='w-14 h-14 mt-36 mx-auto rounded-full bg-greenIconBack border flex justify-center items-center'>
        <Success />
      </div>
      <p className='text-center mt-4'>
        Your password has been updeted successfully
      </p>
      <Button onClick={onClickHandler}>Sign In</Button>
    </VerificationLayout>
  );
};

export default PasswordChanged;
