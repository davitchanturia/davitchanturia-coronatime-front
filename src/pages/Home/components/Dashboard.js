import { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import UseCountryData from 'pages/Home/hooks/useCountryData';

import Tab from 'pages/Home/components/Tab';
import Worldwide from 'pages/Home/components/Worldwide';
import ByCountry from 'pages/Home/components/ByCountry';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Worldwide');

  const { getCountriesData, error } = UseCountryData();

  useEffect(() => {
    getCountriesData('api/data');
  }, []);

  const activeTabHandler = (active) => {
    setActiveSection(active);
  };

  const spanStyles =
    'h-1 w-20 bg-black rounded-xl absolute bottom-0 transition-all duration-300';

  const activeSpanStyle =
    activeSection === 'Worldwide'
      ? `${spanStyles} left-0`
      : `${spanStyles} left-32`;

  const content = activeSection === 'Worldwide' ? <Worldwide /> : <ByCountry />;

  const translatedActiveSection =
    activeSection === 'Worldwide' ? (
      <Trans i18nKey='Worldwidestatistics' />
    ) : (
      <Trans i18nKey='Countrystatistics' />
    );
  return (
    <div className='max-w-6xl m-auto'>
      <div className='w-full md:w-336 px-2 mx-auto'>
        <div className='mt-10'>
          <h1 className='text-2xl font-bold'>{translatedActiveSection}</h1>
        </div>

        <div className='flex relative justify-start  w-full mt-10 pb-4 border-b border-gray-100'>
          <Tab title='Worldwide' onChangeTab={activeTabHandler} />
          <Tab title='By Country' onChangeTab={activeTabHandler} />
          <span className={activeSpanStyle} />
        </div>

        <div className='mt-10'>{content}</div>
      </div>
    </div>
  );
};

export default Dashboard;
