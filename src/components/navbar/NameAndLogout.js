import { Trans } from 'react-i18next';

const NameAndLogout = () => {
  return (
    <div className='flex flex-col text-center sm:flex-row'>
      <div className='sm:border-r-2 sm:border-gray-100 px-3 font-bold capitalize'>
        username
      </div>
      <div className='sm:px-3'>
        <button className='cursor-pointer'>
          <Trans i18nKey='logout' />
        </button>
      </div>
    </div>
  );
};

export default NameAndLogout;
