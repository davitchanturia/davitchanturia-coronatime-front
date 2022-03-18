import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import apiClient from 'api/api';

const useAuthCheck = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const sendAuthRequest = useCallback(async (path) => {
    (async () => {
      try {
        await apiClient.get('sanctum/csrf-cookie');
        const response = await apiClient.get(path);

        console.log(response);
        if (response.data.isLoggedIn === 'false') {
          navigate('/login');
        }
        if (response.data.isLoggedIn === 'true') {
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
