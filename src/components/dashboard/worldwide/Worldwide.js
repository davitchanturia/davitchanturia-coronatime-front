import { Trans } from 'react-i18next';
import Card from 'components/dashboard/worldwide/Card';

const Worldwide = () => {
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 text-center'>
      <Card
        imagePath='assets/newCases.png'
        text={<Trans i18nKey='newCase' />}
        amount='715,523'
        bgColor='bg-newCases'
        color='text-newCasesNum'
      />
      <Card
        imagePath='assets/recovered.png'
        text={<Trans i18nKey='recovered' />}
        amount='715,523'
        bgColor='bg-recovered'
        color='text-recoveredNum'
      />
      <Card
        imagePath='assets/death.png'
        text={<Trans i18nKey='death' />}
        amount='715,523'
        bgColor='bg-death'
        color='text-deathNum'
      />
    </div>
  );
};

export default Worldwide;
