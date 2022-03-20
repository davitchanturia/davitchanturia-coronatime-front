import apiClient from 'api/api';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

const useSendData = (action) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [messagePage, setMessagePage] = useState('');

  const navigate = useNavigate();

  const sendFormData = useCallback(
    async (path, data) => {
      try {
        if (action === 'login' || action === 'reset-password') {
          await apiClient.get('sanctum/csrf-cookie');
        }
        const response = await apiClient.post(path, data);

        if (action === 'register' || action === 'reset-password') {
          if (response.status === 200) {
            setMessagePage('sent');
          }
        }
        if (action === 'update-password') {
          setMessagePage('confirmed');
        }
        if (action === 'login') {
          if (response.data === 204) {
            navigate('/');
          }
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      } catch (error) {
        if (action === 'register') {
          if (error.response.status === 422) {
            setError(error.response.data.message);
          }
        }
        if (action === 'login') {
          if (error.response.status === 401) {
            setError(error.response.data.message);
          }
        }
        if (action === 'reset-password') {
          if (error.response.status === 404) {
            setError(error.response.data.message);
          }
        }
        if (action === 'update-password') {
          if (error.response.status === 422) {
            setError(error.response.data.message);
          }
        }
      }
    },
    [action, navigate]
  );

  return { isLoading, error, messagePage, sendFormData };
};

export default useSendData;
