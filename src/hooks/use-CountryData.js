import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataActions } from 'store/data';
import apiClient from 'api/api';

const UseCountryData = () => {
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const getCountriesData = useCallback(async (path) => {
    try {
      await apiClient.get('sanctum/csrf-cookie');
      const response = await apiClient.get(path);
      dispatch(dataActions.setCountryStats(response.data.countries));
      dispatch(dataActions.setWorldStats(response.data.worldStats));
    } catch (error) {
      setError(error.response.message);
    }
  }, []);

  return { getCountriesData, error };
};

export default UseCountryData;
