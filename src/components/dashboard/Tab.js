const Tab = (props) => {
  const activeTabHandler = () => {
    props.onChangeTab(props.title);
  };

  const classes = props.title === 'By Country' ? 'ml-12' : '';

  return (
    <button className={classes} onClick={activeTabHandler}>
      {props.title}
    </button>
  );
};

export default Tab;
