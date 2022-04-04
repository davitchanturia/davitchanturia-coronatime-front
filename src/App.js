import { Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import EmailConfirmed from 'pages/EmailConfirmed/EmailConfirmed';
import ResetPassword from 'pages/ResetPassword/ResetPassword';
import UpdatePassword from 'pages/UpdatePassword/UpdatePassword';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/confirmed/:token' element={<EmailConfirmed />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/update-password/:token' element={<UpdatePassword />} />
      </Routes>
    </div>
  );
};

export default App;
