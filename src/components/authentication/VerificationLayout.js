import Logo from 'components/UI/Logo';

const VerificationLayout = (props) => {
  return (
    <div className='px-2 sm:w-1/2 xl:w-1/5 m-auto'>
      <div className='py-10'>
        <Logo classes='mx-auto' />
      </div>
      <div className='mt-36 w-full'>{props.children}</div>
    </div>
  );
};

export default VerificationLayout;
