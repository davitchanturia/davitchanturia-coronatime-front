import './Error.css';

const styles = 'animation';

const Error = (props) => {
  return <div className={styles}>{props.children}</div>;
};

export default Error;
