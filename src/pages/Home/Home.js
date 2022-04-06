import { useEffect } from 'react';
import useAuthCheck from 'hooks/useAuthCheck';

import Dashboard from 'pages/Home/components/Dashboard';
import Navbar from 'pages/Home/components/Navbar';
import Spinner from 'components/Spinner';

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
