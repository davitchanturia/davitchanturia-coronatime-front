import Down from 'components/UI/svg/Down';
import { useState } from 'react';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import DropdownItem from './DropdownItem';

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);

  const dropdownChangeHandler = () => {
    setOpen(!open);
  };

  const languageChangeHandler = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className='relative'>
      <button
        onClick={dropdownChangeHandler}
        className='flex justify-center items-center capitalize'
      >
        <Trans i18nKey='english'>english</Trans>
        <Down />
      </button>

      {open && (
        <div className='w-24 flex flex-col absolute -bottom-10 right-0 border border-gray-200 bg-gray-300 mt-1'>
          <DropdownItem onChnageLanguage={languageChangeHandler} lang='en'>
            <Trans i18nKey='english'>english</Trans>
          </DropdownItem>
          <DropdownItem onChnageLanguage={languageChangeHandler} lang='ka'>
            <Trans i18nKey='georgian'>georgian</Trans>
          </DropdownItem>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
