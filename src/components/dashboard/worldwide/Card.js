const Card = (props) => {
  const cardClasses = `${props.bgColor} py-10 rounded-lg`;
  const textClasses = `${props.color} text-2xl sm:text-4xl font-black mt-5`;

  const updatedClasses =
    props.bgColor === 'bg-newCases'
      ? `${cardClasses} sm:col-span-3 md:col-span-1 card`
      : `${cardClasses}`;

  return (
    <div className={updatedClasses}>
      <img
        className='w-24 h-11 mx-auto object-contain'
        src={props.imagePath}
        alt='stats'
      />
      <h4 className='mt-6'>{props.text}</h4>
      <h1 className={textClasses}>{props.amount}</h1>
    </div>
  );
};

export default Card;
