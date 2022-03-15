import Down from 'components/UI/svg/Down';

const TableHead = (props) => {
  return (
    <th className='px-6 py-3 text-left text-xs font-bold text-darkBlack uppercase tracking-wider w-1/4'>
      <div className='flex items-center'>
        <h1>{props.text}</h1>
        <div className='icons ml-2'>
          <button className='block'>
            <Down extraClasses='rotate-180' />
          </button>

          <button className='block'>
            <Down />
          </button>
        </div>
      </div>
    </th>
  );
};

export default TableHead;
