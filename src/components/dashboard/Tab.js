import { Trans } from 'react-i18next';

const Tab = (props) => {
  const activeTabHandler = () => {
    props.onChangeTab(props.title);
  };

  const translatedTitle =
    props.title === 'By Country' ? (
      <Trans i18nKey='byCountry' />
    ) : (
      <Trans i18nKey='worldwide' />
    );

  const classes = props.title === 'By Country' ? 'ml-12' : '';

  return (
    <button className={classes} onClick={activeTabHandler}>
      {translatedTitle}
    </button>
  );
};

export default Tab;
