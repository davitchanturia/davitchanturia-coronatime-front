import Dashboard from 'components/dashboard/Dashboard';
import Navbar from 'components/navbar/Navbar';

const App = () => {
  return (
    <div className=''>
      <div className='border-b border-gray-100'>
        <Navbar />
      </div>
      <Dashboard />
    </div>
  );
};

export default App;
