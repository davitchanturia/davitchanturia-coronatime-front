const DropdownItem = (props) => {
  const changeLanguage = () => {
    props.onChnageLanguage(props.lang);
  };

  return (
    <>
      <button
        onClick={changeLanguage}
        className='capitalize text-center hover:text-white cursor-pointer'
      >
        {props.children}
      </button>
    </>
  );
};

export default DropdownItem;
