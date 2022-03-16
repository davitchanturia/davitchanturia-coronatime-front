import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

const Input = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className='mt-5'>
      <label className='font-medium capitalize'>{t(props.label)}</label>
      <div className='w-full sm:min-w-96 block relative border rounded-md border-gray-200  py-2 px-3 mt-2'>
        <input
          className='w-full focus:outline-none'
          placeholder={t(props.placeholder)}
        />
      </div>
    </div>
  );
};

export default Input;
