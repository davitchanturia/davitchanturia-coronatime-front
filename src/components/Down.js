const Down = (props) => {
  const classes = `${props.extraClasses} h-4 w-4 ml-1`;
  return (
    <svg
      className={classes}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 9l-7 7-7-7'
      />
    </svg>
  );
};

export default Down;
