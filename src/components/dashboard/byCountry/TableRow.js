const TableRow = () => {
  return (
    <tr className='flex w-full'>
      <td className='px-6 py-4 w-1/4 whitespace-nowrap text-sm font-medium text-darkBlack'>
        country
      </td>
      <td className='px-7 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        confirmed
      </td>
      <td className='px-8 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        deaths
      </td>
      <td className='px-9 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        recovered
      </td>
    </tr>
  );
};

export default TableRow;
