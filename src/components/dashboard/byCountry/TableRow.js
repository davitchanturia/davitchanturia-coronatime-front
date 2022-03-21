import { useTranslation } from 'react-i18next';

const TableRow = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <tr className='flex w-full'>
      <td className='px-6 py-4 w-1/4 whitespace-nowrap text-sm font-medium text-darkBlack'>
        {props.country}
      </td>
      <td className='px-7 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        {props.newCase}
      </td>
      <td className='px-8 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        {props.death}
      </td>
      <td className='px-9 py-4 w-1/4 whitespace-nowrap text-sm text-darkBlack'>
        {props.recovered}
      </td>
    </tr>
  );
};

export default TableRow;
