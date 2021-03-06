import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import apiClient from 'api/api';
import { authActions } from 'store/auth';
import { useDispatch } from 'react-redux';

const useAuthCheck = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const sendAuthRequest = useCallback(async (path) => {
    (async () => {
      try {
        await apiClient.get('sanctum/csrf-cookie');
        const response = await apiClient.get(path);

        console.log(response);
        if (response.data.isLoggedIn === 'false') {
          if (response.data.page === 'register') {
            navigate('/register');
          }
          if (response.data.page === 'login') {
            navigate('/login');
          }
          if (response.data.page === 'home') {
            navigate('/login');
          }
          if (response.data.page === 'reset-password') {
            navigate('/reset-password');
          }
        }
        if (response.data.isLoggedIn === 'true') {
          dispatch(authActions.setAuthName(response.data.user.username));
          navigate('/');
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      } catch (error) {}
    })();
  }, []);

  return {
    sendAuthRequest,
    isLoading,
  };
};

export default useAuthCheck;
