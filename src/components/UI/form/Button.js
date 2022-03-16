const Button = (props) => {
  return (
    <button
      type='submit'
      className='w-full mt-6 text-white py-3 bg-greenButton font-bold rounded-md capitalize'
    >
      {props.children}
    </button>
  );
};

export default Button;
