const TableRow = () => {
  return (
    <tr className='flex w-full'>
      <td class='px-6 py-4 w-1/4 whitespace-nowrap text-sm font-medium text-darkBlack'>
        country
      </td>
      <td class='px-7 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        confirmed
      </td>
      <td class='px-8 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        deaths
      </td>
      <td class='px-9 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        recovered
      </td>
    </tr>
  );
};

export default TableRow;
