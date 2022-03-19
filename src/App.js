import { Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

import Login from 'pages/Login';
import Home from 'pages/Home';
import Register from 'pages/Register';
import EmailConfirmed from 'pages/EmailConfirmed';
import ResetPassword from 'pages/ResetPassword';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/confirmed/:token' element={<EmailConfirmed />} />
      </Routes>
    </div>
  );
};

export default App;
