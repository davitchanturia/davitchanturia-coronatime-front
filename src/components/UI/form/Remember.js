import { Trans } from 'react-i18next';

const Remember = () => {
  return (
    <div>
      <input type='checkbox' name='remember' value='1' />
      <label className='ml-2' htmlFor='remember'>
        <Trans i18nKey='rememberDevice' />
      </label>
    </div>
  );
};

export default Remember;
