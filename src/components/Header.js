import { useTranslation } from 'react-i18next';

const Header = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className='mt-14'>
      <h1 className='font-bold text-2xl text-left'>{t(props.welcome)}</h1>
      <p className='text-sm sm:text-xl text-grey mt-4'>{t(props.text)}</p>
    </div>
  );
};

export default Header;
