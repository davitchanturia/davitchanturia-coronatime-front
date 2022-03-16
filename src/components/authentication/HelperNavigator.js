const HelperNavigator = (props) => {
  return (
    <p className='text-grey text-sm sm:text-lg text-center mt-6 '>
      {props.text}
      <a href='/' className='font-bold capitalize ml-1'>
        {props.action}
      </a>
    </p>
  );
};

export default HelperNavigator;
