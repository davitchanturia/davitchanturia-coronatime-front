import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { dataActions } from 'store/data';
import SearchIcon from 'components/UI/svg/SearchIcon';
import apiClient from 'api/api';

const Search = (props) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    (async () => {
      try {
        const response = await apiClient.get(
          `api/search?search=${e.target.value}&locale=${i18n.language}`
        );
        dispatch(dataActions.setCountryStats(response.data.data));
      } catch (error) {}
    })();
  };

  return (
    <div className='w-full md:w-64 flex text-gray-200 border border-gray-200 rounded-lg px-3 py-1 relative overflow-hidden'>
      <input
        onChange={searchHandler}
        type='search'
        placeholder={t('search')}
        className='w-full rounded-xl bg-white text-gray-400 px-4 py-2 pl-10 outline-none border-none placeholder-gray-200'
      />

      <div className='absolute top-0 flex items-center h-full ml-1'>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
