import BurgerIcon from 'components/UI/svg/BurgerIcon';
import NameAndLogout from 'pages/Home/components/NameAndLogout';
import { useState } from 'react';

const BurgerMenu = () => {
  const [show, setShow] = useState(false);

  const menuShowHandler = () => {
    setShow(!show);
  };

  return (
    <div className='relative'>
      <button onClick={menuShowHandler}>
        <BurgerIcon />
      </button>

      {show && (
        <div className='w-24 absolute -bottom-12 -left-14 border border-gray-200 bg-gray-300 px-2  mt-1'>
          <NameAndLogout />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
