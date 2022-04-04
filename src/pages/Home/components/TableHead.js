import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { dataActions } from 'store/data';
import Down from 'components/UI/svg/Down';

const TableHead = (props) => {
  const stats = useSelector((state) => state.data.countryStats);

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const sortByAscHandler = () => {
    const sortedData = [...stats].sort((a, b) => {
      if (props.column === 'name') {
        return b.name[i18n.language] < a.name[i18n.language] ? 1 : -1;
      }
      if (props.column === 'confirmed') {
        return parseInt(b.confirmed) > parseInt(a.confirmed) ? 1 : -1;
      }
      if (props.column === 'recovered') {
        return parseInt(b.recovered) > parseInt(a.recovered) ? 1 : -1;
      }
      if (props.column === 'deaths') {
        return parseInt(b.deaths) > parseInt(a.deaths) ? 1 : -1;
      }
    });

    dispatch(dataActions.setCountryStats(sortedData));
  };

  const sortByDescHandler = () => {
    const sortedData = [...stats].sort((a, b) => {
      if (props.column === 'name') {
        return a.name[i18n.language] < b.name[i18n.language] ? 1 : -1;
      }
      if (props.column === 'confirmed') {
        return parseInt(a.confirmed) > parseInt(b.confirmed) ? 1 : -1;
      }
      if (props.column === 'recovered') {
        return parseInt(a.recovered) > parseInt(b.recovered) ? 1 : -1;
      }
      if (props.column === 'deaths') {
        return parseInt(a.deaths) > parseInt(b.deaths) ? 1 : -1;
      }
    });

    dispatch(dataActions.setCountryStats(sortedData));
  };

  return (
    <th className='px-6 py-3 text-left text-xs font-bold text-darkBlack uppercase tracking-wider w-1/4'>
      <div className='flex items-center'>
        <h1>{t(props.text)}</h1>
        <div className='icons ml-2'>
          <button className='block' onClick={sortByAscHandler}>
            <Down extraClasses='rotate-180' />
          </button>

          <button className='block -mt-1' onClick={sortByDescHandler}>
            <Down />
          </button>
        </div>
      </div>
    </th>
  );
};

export default TableHead;
