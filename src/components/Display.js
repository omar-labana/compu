import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <div className="bg-gray-400 h-24">
      <h1 className="text-white font-bold p-5 text-right text-3xl">{`${result}`}</h1>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
