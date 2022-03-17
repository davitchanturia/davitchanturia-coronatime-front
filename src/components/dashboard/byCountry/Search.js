import { useTranslation } from 'react-i18next';
import SearchIcon from 'components/UI/svg/SearchIcon';

const Search = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='w-full md:w-64 flex text-gray-200 border border-gray-200 rounded-lg px-3 py-1 relative overflow-hidden'>
      <input
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
