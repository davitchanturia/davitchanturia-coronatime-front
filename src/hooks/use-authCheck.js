import { useState } from 'react';
import { useNavigate } from 'react-router';
import apiClient from 'api/api';

const useAuthCheck = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const sendAuthRequest = (path) => {
    (async () => {
      try {
        // setIsLoading(true);
        await apiClient.get('sanctum/csrf-cookie');
        const response = await apiClient.get(path);

        setTimeout(() => {
          if (response.data.isLoggedIn === 'false') {
            navigate('/login');
          }
          if (response.data.isLoggedIn === 'true') {
            navigate('/home');
          }
          setIsLoading(false);
        }, 300);
      } catch (error) {}
    })();
  };

  return {
    sendAuthRequest,
    isLoading,
  };
};

export default useAuthCheck;
