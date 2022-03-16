import Dashboard from 'components/dashboard/Dashboard';
import Navbar from 'components/navbar/Navbar';

const Home = () => {
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
