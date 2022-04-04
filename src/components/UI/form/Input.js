import { useTranslation } from 'react-i18next';

const Input = (props) => {
  const { t, i18n } = useTranslation();

  const inputDivClasses =
    'w-full sm:min-w-96 block relative border rounded-md border-gray-200 py-2 px-3 mt-2';

  const classes = props.errorStatus
    ? `border-red-600 ${inputDivClasses}`
    : props.val.length > 0 && !props.errorStatus
    ? `border-green-600 ${inputDivClasses}`
    : `${inputDivClasses}`;

  return (
    <div className='mt-5'>
      <label className='font-medium capitalize'>{t(props.label)}</label>
      <div className={classes}>
        <input
          type={props.type}
          className='w-full focus:outline-none'
          placeholder={t(props.placeholder)}
          {...props.register}
        />
      </div>
    </div>
  );
};

export default Input;
