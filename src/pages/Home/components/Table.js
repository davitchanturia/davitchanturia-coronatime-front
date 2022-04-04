import { useSelector } from 'react-redux';
import TableHead from 'pages/Home/components/TableHead';
import TableRow from 'pages/Home/components/TableRow';
import i18n from 'i18n/i18n';

const Table = (props) => {
  const countryStats = useSelector((state) => state.data.countryStats);

  const body = countryStats.map((country) => (
    <TableRow
      key={country.id}
      country={country.name[i18n.language]}
      newCase={country.confirmed}
      death={country.deaths}
      recovered={country.recovered}
    />
  ));

  const tbodyClasses = props.searchValue
    ? 'bg-white divide-y divide-gray-200 h-auto flex flex-col items-center justify-between overflow-y-scroll w-full'
    : 'bg-white divide-y divide-gray-200 max-h-128 flex flex-col items-center justify-between overflow-y-scroll w-full';

  const table = (
    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
      <table className='text-left w-full'>
        <thead className='bg-gray-50 w-full'>
          <tr className='flex w-full'>
            <TableHead text='location' column='name' />
            <TableHead text='newCase' column='confirmed' />
            <TableHead text='death' column='deaths' />
            <TableHead text='recovered' column='recovered' />
          </tr>
        </thead>
        <tbody className={tbodyClasses}>{body}</tbody>
      </table>
    </div>
  );

  const content =
    countryStats.length === 0 ? (
      <p className='text-center text-lg'>Data not found!</p>
    ) : (
      table
    );

  return (
    <div className='flex flex-col mt-10'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Table;
