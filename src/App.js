import { Route, Routes } from 'react-router';

import Login from 'pages/Login';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Verification from 'pages/Verification';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verfication' element={<Verification />} />
      </Routes>
    </div>
  );
};

export default App;
