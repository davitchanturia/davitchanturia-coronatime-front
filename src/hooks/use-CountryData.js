import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataActions } from 'store/data';
import apiClient from 'api/api';

const UseCountryData = () => {
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const getCountriesData = useCallback(async (path) => {
    try {
      const response = await apiClient.get(path);
      dispatch(dataActions.setCountryStats(response.data.countries));
      dispatch(dataActions.setWorldStats(response.data.worldStats));
    } catch (error) {}
  }, []);

  return { getCountriesData, error };
};

export default UseCountryData;
