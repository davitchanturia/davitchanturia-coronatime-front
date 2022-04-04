import Search from 'pages/Home/components/Search';
import Table from 'pages/Home/components/Table';

const ByCountry = () => {
  let table = <Table searchValue={false} />;

  const checkSearchValueHandler = (val) => {
    if (val.length > 0) {
      table = <Table searchValue={true} />;
    } else {
      table = <Table searchValue={false} />;
    }
  };

  return (
    <>
      <Search onSearch={checkSearchValueHandler} />
      {table}
    </>
  );
};

export default ByCountry;
