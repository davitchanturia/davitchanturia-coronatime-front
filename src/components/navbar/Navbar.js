import Logo from 'components/UI/Logo';
import LanguageDropdown from 'components/navbar/LanguageDropdown';
import NameAndLogout from 'components/navbar/NameAndLogout';
import BurgerMenu from 'components/navbar/BurgerMenu';

const Navbar = () => {
  return (
    <nav>
      <div className='w-full md:w-336 px-4 mx-auto'>
        <div className='w-full flex-col md:flex-row py-4'>
          <div className='flex items-center justify-between flex-col md:flex-row'>
            <Logo />

            <div className='flex items-center mt-2 md:mt-0'>
              <div className='flex text-sm text-headText'>
                <LanguageDropdown />

                <div className='ml-4 hidden sm:inline-block'>
                  <NameAndLogout />
                </div>

                <div className='ml-4 inline-block sm:hidden'>
                  <BurgerMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
