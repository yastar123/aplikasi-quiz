import propsTypes from 'prop-types'

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className}`}
    />
  );
}

Input.propTypes = {
  type: propsTypes.string,
  placeholder: propsTypes.string,
  value: propsTypes.string,
  onChange: propsTypes.func,
  className: propsTypes.string
}

export default Input