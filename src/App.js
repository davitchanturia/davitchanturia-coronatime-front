import { Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

import Login from 'pages/Login';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Verification from 'pages/Verification';
import Message from 'pages/Message';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verfication' element={<Verification />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </div>
  );
};

export default App;
