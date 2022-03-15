const DropdownItem = (props) => {
  return (
    <>
      <a
        href='/'
        className='capitalize text-center hover:bg-blue-600 hover:text-white cursor-pointer'
      >
        {props.children}
      </a>
    </>
  );
};

export default DropdownItem;
