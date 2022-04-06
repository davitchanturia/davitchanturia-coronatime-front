import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import apiClient from 'api/api';

import VerificationLayout from 'components/VerificationLayout';
import Button from 'components/Button';
import Success from 'components/Success';
import Spinner from 'components/Spinner';

const EmailConfirmed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await apiClient.post(`api/verify/${params.token}`);
        if (response.data.success === 'email verified successfuly') {
          setIsLoading(false);
        }
      } catch (error) {}
    })();
  }, [params.token]);

  const onClickHandler = () => {
    navigate('/login');
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <VerificationLayout>
      <div className='w-14 h-14 mt-36 mx-auto rounded-full bg-greenIconBack border flex justify-center items-center'>
        <Success />
      </div>
      <p className='text-center mt-4'>
        Your account is confirmed, you can sign in
      </p>
      <Button onClick={onClickHandler}>Sign In</Button>
    </VerificationLayout>
  );
};

export default EmailConfirmed;
