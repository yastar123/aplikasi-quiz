import propsTypes from 'prop-types'
const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: propsTypes.string,
  className: propsTypes.string,
  onClick: propsTypes.func
}

export default Button