import TableHead from 'components/dashboard/byCountry/TableHead';
import TableRow from 'components/dashboard/byCountry/TableRow';

const Table = () => {
  return (
    <div className='flex flex-col mt-10'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='text-left w-full'>
              <thead className='bg-gray-50 w-full'>
                <tr className='flex w-full'>
                  <TableHead text='Location' />
                  <TableHead text='New Cases' />
                  <TableHead text='Deaths' />
                  <TableHead text='Recovered' />
                </tr>
              </thead>
              {/**აქ ფიქსირებული heigth მაქვს გაწერილი და შესაცვლელია როცა სერჩში რამე იქნება h-auto უნდა მიენიჭოს */}
              <tbody className='bg-white divide-y divide-gray-200  h-128 flex flex-col items-center justify-between overflow-y-scroll w-full'>
                <TableRow />
                <TableRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
