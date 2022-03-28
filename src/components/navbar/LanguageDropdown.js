import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Down from 'components/UI/svg/Down';
import DropdownItem from './DropdownItem';
import languages from 'languages';

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const dropdownChangeHandler = () => {
    setOpen(!open);
  };

  const languageChangeHandler = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const filterActiveLang = (lang) => {
    if (lang.id === i18n.language) {
      return true;
    } else {
      return false;
    }
  };

  const filterInactiveLang = (lang) => {
    if (lang.id !== i18n.language) {
      return true;
    } else {
      return false;
    }
  };

  const activeLanguage = languages.filter(filterActiveLang);
  const inactiveLanguage = languages.filter(filterInactiveLang);

  return (
    <div className='relative'>
      <button
        onClick={dropdownChangeHandler}
        className='flex justify-center items-center capitalize'
      >
        {t(activeLanguage[0].text)}
        <Down />
      </button>

      {open && (
        <div className='w-auto px-4 flex flex-col absolute -bottom-7 right-1 border border-gray-200 bg-gray-300 hover:bg-blue-600 mt-1'>
          <DropdownItem
            onChnageLanguage={languageChangeHandler}
            lang={inactiveLanguage[0].id}
          >
            {t(inactiveLanguage[0].text)}
          </DropdownItem>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
