import { useEffect } from 'react';
import useAuthCheck from 'hooks/use-authCheck';

import Dashboard from 'components/dashboard/Dashboard';
import Navbar from 'components/navbar/Navbar';
import Spinner from 'components/UI/Spinner';

const Home = () => {
  const { isLoading, sendAuthRequest } = useAuthCheck();

  useEffect(() => {
    sendAuthRequest('/api/authenticated/home');
  }, [sendAuthRequest]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='border-b border-gray-100'>
        <Navbar />
      </div>
      <Dashboard />
    </>
  );
};

export default Home;
