import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import Card from 'pages/Home/components/Card';

const Worldwide = () => {
  const worldStats = useSelector((state) => state.data.worldStats);

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 text-center'>
      <Card
        imagePath='assets/newCases.png'
        text={<Trans i18nKey='newCase' />}
        amount={worldStats.confirmed}
        bgColor='bg-newCases'
        color='text-newCasesNum'
      />
      <Card
        imagePath='assets/recovered.png'
        text={<Trans i18nKey='recovered' />}
        amount={worldStats.recovered}
        bgColor='bg-recovered'
        color='text-recoveredNum'
      />
      <Card
        imagePath='assets/death.png'
        text={<Trans i18nKey='death' />}
        amount={worldStats.deaths}
        bgColor='bg-death'
        color='text-deathNum'
      />
    </div>
  );
};

export default Worldwide;
