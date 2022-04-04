import Logo from 'components/UI/Logo';
import LanguageDropdown from 'components/LanguageDropdown';
import NameAndLogout from 'pages/Home/components/NameAndLogout';
import BurgerMenu from 'pages/Home/components/BurgerMenu';

const Navbar = () => {
  return (
    <nav className='max-w-6xl m-auto'>
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
