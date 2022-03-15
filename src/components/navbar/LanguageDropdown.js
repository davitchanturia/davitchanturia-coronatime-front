import Down from 'components/UI/svg/Down';
import { useState } from 'react';
import DropdownItem from './DropdownItem';

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);

  const dropdownChangeHandler = () => {
    setOpen(!open);
  };

  return (
    <div className='relative'>
      <button
        onClick={dropdownChangeHandler}
        className='flex justify-center items-center capitalize'
      >
        english
        <Down />
      </button>

      {open && (
        <div className='w-24 flex flex-col absolute -bottom-10 right-0 border border-gray-200 bg-gray-300 mt-1'>
          <DropdownItem>english</DropdownItem>
          <DropdownItem>georgian</DropdownItem>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
